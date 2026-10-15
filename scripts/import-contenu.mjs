// Importe les leçons (LECON-XX.md) et les quiz (PARTIE-N.quiz.json) dans le site.
// Sources (la dernière gagne en cas de doublon) :
//   1. /workspace/grokbot-live/cours/        (dossier du cours, ../../ depuis app/)
//   2. /workspace/grokbot-live/cours/site/   (../ depuis app/, dépôt de Prof Groksky)
//   3. app/exemples/                         (quiz EXEMPLE, utilisé seulement si aucun vrai quiz)
// Les fichiers sources ne sont jamais modifiés.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCES = [path.join(APP, 'contenu')];
const OUT_L = path.join(APP, 'src/content/docs/lecons');
const OUT_Q = path.join(APP, 'src/content/docs/quiz');
const OUT_QD = path.join(APP, 'src/data/quiz');
for (const d of [OUT_L, OUT_Q, OUT_QD]) { fs.rmSync(d, { recursive: true, force: true }); fs.mkdirSync(d, { recursive: true }); }

const lecons = new Map(), quiz = new Map();
for (const dir of SOURCES) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (/^LECON-.+\.md$/i.test(f)) lecons.set(f.toUpperCase(), path.join(dir, f));
    if (/^PARTIE-\d+\.quiz\.json$/i.test(f)) quiz.set(f.toUpperCase(), path.join(dir, f));
  }
}
if (quiz.size === 0) {
  const ex = path.join(APP, 'exemples');
  for (const f of fs.readdirSync(ex)) if (f.endsWith('.quiz.json')) quiz.set(f.toUpperCase(), path.join(ex, f));
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function transformer(src, id) {
  let lines = src.replace(/\r\n/g, '\n').split('\n');
  let title = id;
  const h1 = lines.findIndex((l) => /^# /.test(l));
  if (h1 !== -1) { title = lines[h1].slice(2).trim(); lines.splice(h1, 1); }
  const out = [], stack = [];
  let nPreuve = 0, nSol = 0;
  for (const l of lines) {
    const open = l.match(/^\s*<div([^>]*)>\s*$/);
    if (open) {
      const attrs = open[1].replace(/\s*markdown="1"/, '');
      const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1].split(/\s+/);
      if (cls.includes('corrige')) {
        nSol++; stack.push('</div></details>');
        out.push('', `<details class="solution"><summary>Voir la solution</summary><div class="box corrige">`, '');
      } else if (cls.includes('preuve')) {
        nPreuve++; stack.push('PREUVE');
        out.push('', `<div class="box preuve" data-preuve="${id}-p${nPreuve}">`, '');
      } else { stack.push('</div>'); out.push('', `<div${attrs}>`, ''); }
      continue;
    }
    if (/^\s*<\/div>\s*$/.test(l) && stack.length) {
      const c = stack.pop();
      out.push('', c === 'PREUVE' ? '<div class="preuve-widget"></div></div>' : c, '');
      continue;
    }
    out.push(l);
  }
  // Ancien style : la leçon demande une preuve « ✅ ou ❌ » sans bloc dédié -> on ajoute une case en fin de leçon.
  if (nPreuve === 0 && /✅ ou ❌/.test(src)) {
    out.push('', '---', '', `<div class="box preuve" data-preuve="${id}-p1">`, '',
      '**Preuve de test** : colle la phrase exacte de ton bot, puis note ✅ ou ❌.', '',
      '<div class="preuve-widget"></div></div>', '');
  }
  out.push('', `<div class="lecon-fin" data-lecon="${id}"></div>`, '');
  return { title, body: out.join('\n') };
}

const ordre = [...lecons.keys()].sort();
ordre.forEach((k, i) => {
  const id = k.replace(/\.MD$/, '').toLowerCase();
  const { title, body } = transformer(fs.readFileSync(lecons.get(k), 'utf8'), id);
  const fm = `---\ntitle: "${title.replace(/"/g, '\\"')}"\nsidebar:\n  order: ${i + 1}\n---\n`;
  fs.writeFileSync(path.join(OUT_L, `${id}.md`), fm + body);
});

const quizIndex = [];
for (const [k, p] of [...quiz].sort()) {
  const q = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!q.id || !Array.isArray(q.questions)) throw new Error(`Quiz invalide : ${p}`);
  q.questions.forEach((x, i) => {
    if (!Array.isArray(x.choix) || x.choix.length < 2 || !(x.bonne_reponse >= 0 && x.bonne_reponse < x.choix.length))
      throw new Error(`Quiz ${q.id}, question ${i + 1} invalide`);
  });
  const slug = q.id.toLowerCase();
  const n = parseInt(q.id.split('-')[1], 10) || 0;
  fs.writeFileSync(path.join(OUT_QD, `${slug}.json`), JSON.stringify(q));
  const data = esc(JSON.stringify(q));
  fs.writeFileSync(path.join(OUT_Q, `${slug}.md`),
    `---\ntitle: "Quiz ${q.id.replace('PARTIE-', 'partie ')} : ${q.titre.replace(/"/g, '\\"')}"\nsidebar:\n  order: ${n}\n---\n\n` +
    `<div class="quiz" data-quiz="${data}"><noscript>Ce quiz a besoin de JavaScript.</noscript></div>\n`);
  quizIndex.push({ id: q.id, slug, titre: q.titre, nb: q.questions.length });
}
const lIndex = ordre.map((k) => ({ id: k.replace(/\.MD$/, '').toLowerCase() }));
fs.writeFileSync(path.join(APP, 'public/index-contenu.json'), JSON.stringify({ lecons: lIndex, quiz: quizIndex }));
console.log(`Import : ${ordre.length} leçon(s), ${quizIndex.length} quiz.`);
