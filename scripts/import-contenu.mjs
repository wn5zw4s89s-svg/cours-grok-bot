// Importe contenu/LECON-*.md et contenu/PARTIE-N.quiz.json -> src/data/*.json
// (quiz EXEMPLE dans exemples/ si aucun vrai quiz). Les fichiers sources ne sont pas modifiés.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(APP, 'contenu');
const OUT = path.join(APP, 'src/data');
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC);
const lecFiles = files.filter((f) => /^LECON-.+\.md$/i.test(f)).sort();
let quizFiles = files.filter((f) => /^PARTIE-\d+\.quiz\.json$/i.test(f)).map((f) => path.join(SRC, f));
if (!quizFiles.length) quizFiles = fs.readdirSync(path.join(APP, 'exemples')).filter((f) => f.endsWith('.quiz.json')).map((f) => path.join(APP, 'exemples', f));

function transformer(src, id) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  let title = id;
  const h1 = lines.findIndex((l) => /^# /.test(l));
  if (h1 !== -1) { title = lines[h1].slice(2).trim(); lines.splice(h1, 1); }
  const out = [], stack = [];
  let nPreuve = 0;
  for (const l of lines) {
    const open = l.match(/^\s*<div([^>]*)>\s*$/);
    if (open) {
      const attrs = open[1].replace(/\s*markdown="1"/, '');
      const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1].split(/\s+/);
      if (cls.includes('corrige')) { stack.push('</div></details>'); out.push('', '<details class="solution"><summary>Voir la solution</summary><div class="box corrige">', ''); }
      else if (cls.includes('preuve')) { nPreuve++; stack.push('PREUVE'); out.push('', `<div class="box preuve" data-preuve="${id}-p${nPreuve}">`, ''); }
      else { stack.push('</div>'); out.push('', `<div${attrs}>`, ''); }
      continue;
    }
    if (/^\s*<\/div>\s*$/.test(l) && stack.length) { const c = stack.pop(); out.push('', c === 'PREUVE' ? '<div class="preuve-widget"></div></div>' : c, ''); continue; }
    out.push(l);
  }
  if (nPreuve === 0 && /✅ ou ❌/.test(src)) {
    out.push('', `<div class="box preuve" data-preuve="${id}-p1">`, '', '**Preuve de test** : colle la phrase exacte de ton bot, puis note ✅ ou ❌.', '', '<div class="preuve-widget"></div></div>', '');
  }
  return { title, html: marked.parse(out.join('\n')) };
}

const lecons = lecFiles.map((f, i) => {
  const id = f.replace(/\.md$/i, '').toLowerCase();
  const { title, html } = transformer(fs.readFileSync(path.join(SRC, f), 'utf8'), id);
  let court = title.replace(/^Leçon\s+[^:]+:\s*/i, ''); court = court.charAt(0).toUpperCase() + court.slice(1);
  const num = (title.match(/^(Leçon\s+[^:]+?)\s*:/i) || [, `Leçon ${i + 1}`])[1];
  return { id, ordre: i, title, court, num, html };
});

const quiz = quizFiles.sort().map((p) => {
  const q = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!q.id || !Array.isArray(q.questions)) throw new Error(`Quiz invalide : ${p}`);
  q.questions.forEach((x, i) => { if (!Array.isArray(x.choix) || x.choix.length < 2 || !(x.bonne_reponse >= 0 && x.bonne_reponse < x.choix.length)) throw new Error(`Quiz ${q.id}, question ${i + 1} invalide`); });
  return { ...q, slug: q.id.toLowerCase() };
});

fs.writeFileSync(path.join(OUT, 'lecons.json'), JSON.stringify(lecons));
fs.writeFileSync(path.join(OUT, 'quiz.json'), JSON.stringify(quiz));
console.log(`Import : ${lecons.length} leçon(s), ${quiz.length} quiz.`);
