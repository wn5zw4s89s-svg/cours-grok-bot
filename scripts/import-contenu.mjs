// Importe contenu/ -> src/data/site.json
// Masque à l'import (sans toucher aux fichiers sources) les sections listées dans MASKED_SECTIONS.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(APP, 'contenu');
const OUT = path.join(APP, 'src/data');
const FICH = path.join(SRC, 'fichiers');
const PUB_FICH = path.join(APP, 'public/fichiers');
const BASE = (process.env.BASE_PATH || '/cours-grok-bot').replace(/\/?$/, '/');
fs.mkdirSync(OUT, { recursive: true });
// Copie les fournitures vers public/ pour téléchargement
if (fs.existsSync(FICH)) {
  fs.rmSync(PUB_FICH, { recursive: true, force: true });
  fs.cpSync(FICH, PUB_FICH, { recursive: true });
}
const FICHIERS = fs.existsSync(FICH) ? new Set(fs.readdirSync(FICH)) : new Set();

// Sections / motifs masqués à l'import — pour que Prof Groksky allège à la source.
export const MASKED_SECTIONS = [
  'chapeau (<p class="chapeau">) — intro longue',
  '## Comment marche une leçon… — méta-aide du site (le texte est masqué ; les boxes À toi / corrigé / preuve sont gardées)',
  '## Comment travailler…',
  '## Ce que tu auras… / Objectif / À cocher — listes d’objectifs',
  '## En résumé (+ Bravo / La prochaine fois)',
  '<div class="fin"> — bloc de fin / résumé',
  '**C’est réussi si :** — critères de réussite dans les exercices',
  '☐ — cases à cocher d’objectifs',
  '<small>…</small> — sources et notes de bas de page',
  'Fiche résumé du niveau — encadré méta',
  '*Libellés / mots … à vérifier sur ton écran* — mentions italiques (leçons 1, 2, 8, 13, 14, 15, 17, 18, 20, 23)',
];

const NOMS = {
  1: 'Débutant', 2: 'Apprenti', 3: 'Explorateur',
  4: 'Bâtisseur', 5: 'Expert', 6: 'Maître',
};

const HEADING_DROP = /^(Comment marche une leçon|Comment travailler|Ce que tu auras|Objectif|À cocher|À la fin|On reprend|En résumé)\b/i;
const KEEP_BOX = /\b(atoi|corrige|preuve)\b/;

function skipDiv(lines, start) {
  let depth = 1;
  let i = start + 1;
  while (i < lines.length && depth > 0) {
    if (/^\s*<div[\s>]/.test(lines[i])) depth++;
    if (/^\s*<\/div>\s*$/.test(lines[i])) depth--;
    i++;
  }
  return i;
}

function stripReussi(lines) {
  const out = [];
  let drop = false;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/\*\*C'est réussi si\s*:?\*\*/i.test(l) || /^C'est réussi si\s*:/i.test(l.trim())) {
      drop = true;
      continue;
    }
    if (drop) {
      if (/^\s*<\/div>\s*$/.test(l) || /^##\s+/.test(l) || /^\s*<div[\s>]/.test(l)) {
        drop = false;
        out.push(l);
        continue;
      }
      if (l.trim() === '') {
        const next = lines[i + 1] || '';
        if (!/^\s*[-*]/.test(next) && next.trim() !== '') drop = false;
        continue;
      }
      if (/^\s*[-*]/.test(l)) continue;
      drop = false;
    }
    if (/^\*\*Bravo !\*\*/i.test(l.trim()) || /^\*\*La prochaine fois/i.test(l.trim())) continue;
    out.push(l);
  }
  return out;
}

function masquer(src) {
  let t = src.replace(/\r\n/g, '\n');
  // Mentions « à vérifier sur ton écran » (libellés) masquées
  t = t.replace(/,?\s*\*[^*\n]*vérifier sur ton écran[^*\n]*\*\.?/gi, '');
  // Flèches
  t = t.replace(/(?<![-<!])->/g, '→');
  t = t.replace(/<p\s+class="chapeau"[^>]*>[\s\S]*?<\/p>\s*/gi, '\n');
  t = t.replace(/<small\b[^>]*>[\s\S]*?<\/small>\s*/gi, '\n');
  t = t.replace(/<div\s+class="fin"[^>]*>[\s\S]*?<\/div>\s*/gi, '\n');
  t = t.replace(/^[ \t]*[-*]\s*☐.*$/gm, '');
  t = t.replace(/☐[^\n]*\n?/g, '');

  const lines = t.split('\n');
  const out = [];
  let dropHeading = false;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const hm = l.match(/^##\s+(.+)$/);
    if (hm) {
      dropHeading = HEADING_DROP.test(hm[1].trim());
      if (dropHeading) continue;
    }

    if (dropHeading) {
      // Garder uniquement les boxes pédagogiques sous un titre masqué
      if (/^\s*<div[^>]*class="[^"]*"[^>]*>\s*$/.test(l) && KEEP_BOX.test(l)) {
        const end = skipDiv(lines, i);
        out.push(...lines.slice(i, end));
        i = end - 1;
        continue;
      }
      continue;
    }

    // Encadré « Fiche résumé »
    if (/^\s*<div[^>]*class="[^"]*\bbox\b[^"]*"[^>]*>\s*$/.test(l)) {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;
      if (j < lines.length && /Fiche résumé/i.test(lines[j])) {
        i = skipDiv(lines, i) - 1;
        continue;
      }
    }

    out.push(l);
  }
  return stripReussi(out).join('\n').replace(/\n{3,}/g, '\n\n');
}

function linkifyFichiers(text) {
  if (!FICHIERS.size) return text;
  // `nom.ext` -> lien de téléchargement
  return text.replace(/`([A-Za-z0-9._-]+\.(?:csv|pdf|png|jpg|jpeg|webp))`/g, (m, name) => {
    if (!FICHIERS.has(name)) return m;
    return `[${name}](${BASE}fichiers/${name})`;
  });
}

function transformer(src, id) {
  const lines = linkifyFichiers(masquer(src)).split('\n');
  let title = id;
  const h1 = lines.findIndex((l) => /^# /.test(l));
  if (h1 !== -1) {
    title = lines[h1].slice(2).trim();
    lines.splice(h1, 1);
  }
  const out = [];
  const stack = [];
  let nPreuve = 0;
  for (const l of lines) {
    const open = l.match(/^\s*<div([^>]*)>\s*$/);
    if (open) {
      const attrs = open[1].replace(/\s*markdown="1"/, '');
      const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1].split(/\s+/);
      if (cls.includes('corrige')) {
        stack.push('</div></details>');
        out.push('', '<details class="solution"><summary>Voir la solution</summary><div class="box corrige">', '');
      } else if (cls.includes('preuve')) {
        nPreuve++;
        stack.push('PREUVE');
        out.push('', `<div class="box preuve" data-preuve="${id}-p${nPreuve}">`, '');
      } else {
        stack.push('</div>');
        out.push('', `<div${attrs}>`, '');
      }
      continue;
    }
    if (/^\s*<\/div>\s*$/.test(l) && stack.length) {
      const c = stack.pop();
      out.push('', c === 'PREUVE' ? '<div class="preuve-widget"></div></div>' : c, '');
      continue;
    }
    out.push(l);
  }
  const body = out.join('\n');
  // Preuve auto seulement si le contenu gardé le demande explicitement
  if (nPreuve === 0 && /✅ ou ❌/.test(body)) {
    out.push(
      '',
      `<div class="box preuve" data-preuve="${id}-p1">`,
      '',
      '**Preuve** : colle la phrase du bot, puis ✅ ou ❌.',
      '',
      '<div class="preuve-widget"></div></div>',
      '',
    );
  }
  let html = marked.parse(out.join('\n'));
  const used = [...FICHIERS].filter((f) => html.includes(`fichiers/${f}`) || src.includes(f));
  if (used.length) {
    const lis = used.map((f) => `<a class="dl" href="${BASE}fichiers/${f}" download>${f}</a>`).join(' ');
    html = `<p class="telechargements">${lis}</p>` + html;
  }
  return { title, html };
}

const mapNiv = JSON.parse(fs.readFileSync(path.join(SRC, 'niveaux.json'), 'utf8'));
const files = fs.readdirSync(SRC);

const dispo = new Map();
for (const f of files) {
  const m = f.match(/^LECON-(\d+)\.md$/i);
  if (!m) continue;
  const num = parseInt(m[1], 10);
  const id = `lecon-${String(num).padStart(2, '0')}`;
  const { title, html } = transformer(fs.readFileSync(path.join(SRC, f), 'utf8'), id);
  let court = title.replace(/^Leçon\s+\d+\s*:\s*/i, '');
  court = court.charAt(0).toUpperCase() + court.slice(1);
  dispo.set(num, { id, num, title, court, html, disponible: true });
}

let quizFiles = files.filter((f) => /^PARTIE-\d+\.quiz\.json$/i.test(f)).map((f) => path.join(SRC, f));
if (!quizFiles.length) {
  const ex = path.join(APP, 'exemples');
  if (fs.existsSync(ex)) {
    quizFiles = fs.readdirSync(ex).filter((f) => f.endsWith('.quiz.json')).map((f) => path.join(ex, f));
  }
}
const quiz = quizFiles.sort().map((p) => {
  const q = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!q.id || !Array.isArray(q.questions)) throw new Error(`Quiz invalide : ${p}`);
  q.questions.forEach((x, i) => {
    if (!Array.isArray(x.choix) || x.choix.length < 2 || !(x.bonne_reponse >= 0 && x.bonne_reponse < x.choix.length)) {
      throw new Error(`Quiz ${q.id}, question ${i + 1} invalide`);
    }
  });
  const n = parseInt(String(q.id).replace(/\D/g, ''), 10) || 0;
  return { ...q, slug: String(q.id).toLowerCase(), niveau: n };
});
const quizParNiv = Object.fromEntries(quiz.map((q) => [q.niveau, q.id]));

const niveaux = Object.keys(mapNiv).map(Number).sort((a, b) => a - b).map((id) => ({
  id,
  nom: NOMS[id] || `Niveau ${id}`,
  lecons: mapNiv[String(id)],
  quizId: quizParNiv[id] || null,
  total: mapNiv[String(id)].length,
}));

const lecons = [];
for (const niv of niveaux) {
  for (const num of niv.lecons) {
    if (dispo.has(num)) {
      const L = dispo.get(num);
      lecons.push({ ...L, niveau: niv.id, numLabel: `Leçon ${num}` });
    } else {
      lecons.push({
        id: `lecon-${String(num).padStart(2, '0')}`,
        num,
        niveau: niv.id,
        title: `Leçon ${num}`,
        court: 'Bientôt',
        numLabel: `Leçon ${num}`,
        html: '',
        disponible: false,
      });
    }
  }
}
lecons.sort((a, b) => a.num - b.num);

const site = {
  niveaux,
  lecons,
  quiz,
  totalDispo: lecons.filter((l) => l.disponible).length,
  totalPlan: lecons.length,
  masked: MASKED_SECTIONS,
};
fs.writeFileSync(path.join(OUT, 'site.json'), JSON.stringify(site));
fs.writeFileSync(path.join(OUT, 'lecons.json'), JSON.stringify(lecons));
fs.writeFileSync(path.join(OUT, 'quiz.json'), JSON.stringify(quiz));
fs.writeFileSync(path.join(OUT, 'masked-sections.json'), JSON.stringify(MASKED_SECTIONS, null, 2));
console.log(`Import : ${site.totalDispo}/${site.totalPlan} leçons, ${quiz.length} quiz, ${niveaux.length} niveaux. Masqué : ${MASKED_SECTIONS.length} motifs.`);
