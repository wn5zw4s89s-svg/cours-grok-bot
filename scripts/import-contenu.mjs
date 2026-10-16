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

// Noms de niveau : lus depuis niveaux.json (champ "nom"). Fallback : Niveau N.
const HEADING_DROP = /^(Comment marche une leçon|Comment travailler|Ce que tu auras|Objectif|À cocher|À la fin|On reprend|En résumé)\b/i;
const KEEP_BOX = /\b(atoi|corrige)\b/;

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

// Parenthèses OctoBoss (« (ta première tentacule) », « (tentacule 2) », « (son ADN) »…) retirées des titres.
const PAREN_OCTO = /\s*\((?:[^()]*\b(?:tentacules?|pieuvre|OctoBoss|ADN|kraken|vagues?|ventouses?|r\u00e9flexes?|r\u00e9flexe nocturne|poche d.encre|proies?)\b[^()]*)\)/gi;
export const nettoyerTitre = (t) => String(t).replace(PAREN_OCTO, '').replace(/\s*\(\d+\s*min\)/gi, '').trim();

// Retouches d'affichage demandées par Joseph (16/10) — sources intactes.
function retouches(src, num) {
  let t = src.replace(/\r\n/g, '\n').replace(/\s*\(\d+\s*min\)/gi, '');
  // Ligne « Objectif : … » -> paragraphe stylé (n'est pas masquée)
  t = t.replace(/^Objectif\s*:\s*(.+)$/m, (m, x) => `<p class="objectif">${x.charAt(0).toUpperCase() + x.slice(1)}</p>`);
  // Libellé solution (affichage) — sources inchangées
  t = t.replace(/\*\*Bonne réponse \(exemple\)\s*:\*\*/gi, '**Exemple de réponse :**');
  t = t.replace(/Bonne réponse \(exemple\)\s*:/gi, 'Exemple de réponse :');
  t = t.replace(/\*\*Réponse attendue \(exemple\)\s*:\*\*/gi, '**Exemple de réponse :**');
  t = t.replace(/Réponse attendue \(exemple\)\s*:/gi, 'Exemple de réponse :');
  // Bulle finale pieuvre → récap d'écran de fin (toutes réactions).
  // On ne remplace que la DERNIÈRE pieuvre, et uniquement son propre </div>
  // (un ancrage $ avalait fin + badge quand ils suivaient la pieuvre, ex. L18).
  // croissance / reussite : retirée de l'étape. accueil : gardée visible (ex. fin L7 / projet 2).
  {
    const rePieuvre = /<div class="pieuvre" data-reaction="([^"]*)"([^>]*)>([\s\S]*?)<\/div>/gi;
    let last = null;
    let m;
    while ((m = rePieuvre.exec(t)) !== null) last = m;
    if (last) {
      const reaction = last[1];
      const a = last[2];
      const body = last[3];
      const n = (body.match(/Bot\s+(\d+)\s+sur/i) || [, '0'])[1];
      let recap = body
        .replace(/\s*Bot\s+\d+\s+sur\s+\d+(?:\s*terminé)?\.?(\s*\([^)]*\))?\.?/i, '')
        .replace(/[*`]/g, '')
        .trim();
      recap = nettoyerTitre(recap);
      const mark = `<!-- RECAP:${n}:${recap} -->\n`;
      const repl = /^accueil$/i.test(reaction)
        ? `${mark}<div class="pieuvre" data-reaction="accueil"${a}>\n${body.trim()}\n</div>\n`
        : mark;
      t = t.slice(0, last.index) + repl + t.slice(last.index + last[0].length);
    }
  }
  if (num === 1) {
    t = t.replace(/\s*\(?ta première tentacule\)?/gi, '');
  }
  return t;
}

function masquer(src) {
  let t = src.replace(/\r\n/g, '\n');
  // Titres : sans « (2 min) » ni parenthèse OctoBoss
  t = t.replace(/^(#{1,3}\s+.*)$/gm, (m) => nettoyerTitre(m));
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

function peekDefiX(lines, start) {
  // Regarde le corps du prochain <div> : Défi X -> callout defi.
  let i = start + 1;
  const buf = [];
  while (i < lines.length && !/^\s*<\/div>\s*$/.test(lines[i]) && buf.length < 8) {
    if (lines[i].trim()) buf.push(lines[i]);
    i++;
  }
  return /\*\*D[ée]fi\s*X\.?\*\*/i.test(buf.join('\n')) || /^D[ée]fi\s*X\b/i.test(buf.join('\n').trim());
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
  let skip = 0;
  for (let li = 0; li < lines.length; li++) {
    const l = lines[li];
    const open = l.match(/^\s*<div([^>]*)>\s*$/);
    if (open) {
      let attrs = open[1].replace(/\s*markdown="1"/, '');
      const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1].split(/\s+/).filter(Boolean);
      if (cls.includes('corrige')) {
        stack.push('</div></details>');
        out.push('', '<details class="solution"><summary>Voir la solution</summary><div class="box corrige">', '');
      } else if (cls.includes('preuve')) {
        stack.push('SKIP'); skip++;
      } else {
        // attention + Défi X -> box defi (défi partageable sur X)
        if (cls.includes('attention') && peekDefiX(lines, li)) {
          attrs = attrs.replace(/\battention\b/, 'defi');
        }
        stack.push('</div>');
        out.push('', `<div${attrs}>`, '');
      }
      continue;
    }
    if (/^\s*<\/div>\s*$/.test(l) && stack.length) {
      const c = stack.pop();
      if (c === 'SKIP') { skip--; continue; }
      if (!skip) out.push('', c, '');
      continue;
    }
    if (!skip) out.push(l);
  }
  let html = marked.parse(out.join('\n'));
  const used = [...FICHIERS].filter((f) => html.includes(`fichiers/${f}`) || src.includes(f));
  if (used.length) {
    const lis = used.map((f) => `<a class="dl" href="${BASE}fichiers/${f}" download>${f}</a>`).join(' ');
    html = `<p class="telechargements">${lis}</p>` + html;
  }
  return { title, html };
}

const mapPathProjets = path.join(SRC, 'projets.json');
const mapPathNiveaux = path.join(SRC, 'niveaux.json');
const useProjets = fs.existsSync(mapPathProjets);
const mapRaw = JSON.parse(fs.readFileSync(useProjets ? mapPathProjets : mapPathNiveaux, 'utf8'));
const labelUnite = useProjets ? 'Projet' : 'Niveau';
const files = fs.readdirSync(SRC);

/** Nom de badge dans une leçon : « Badge : **X** », « badge **X** », « Badge : X ». */
function extraireBadge(raw) {
  const patterns = [
    /badge\s*:?\s*\*\*([^*]+)\*\*/i,
    /badge\s*:\s*([^\n*.]+)/i,
  ];
  for (const re of patterns) {
    const m = raw.match(re);
    if (m) {
      const nom = m[1].replace(/\s+/g, ' ').replace(/\.+\s*$/, '').trim();
      if (nom) return nom;
    }
  }
  return null;
}

/** Fallback README : « Badges : 1 Premier bot · 2 Bureau ouvert · … ». */
function badgesDepuisReadme() {
  const p = path.join(SRC, 'README.md');
  if (!fs.existsSync(p)) return {};
  const m = fs.readFileSync(p, 'utf8').match(/^Badges\s*:\s*(.+)$/m);
  if (!m) return {};
  const out = {};
  for (const part of m[1].split(/\s*·\s*/)) {
    const bm = part.trim().match(/^(\d+)\s+(.+)$/);
    if (bm) out[parseInt(bm[1], 10)] = bm[2].trim();
  }
  return out;
}
const badgesReadme = badgesDepuisReadme();

const dispo = new Map();
for (const f of files) {
  const m = f.match(/^LECON-(\d+)\.md$/i);
  if (!m) continue;
  const num = parseInt(m[1], 10);
  const id = `lecon-${String(num).padStart(2, '0')}`;
  const raw0 = retouches(fs.readFileSync(path.join(SRC, f), 'utf8'), num);
  const { title, html } = transformer(raw0, id);
  const objm = raw0.match(/<p class="objectif">([^<]+)<\/p>/);
  let court = title.replace(/^Leçon\s+\d+\s*[:·]\s*/i, '');
  court = court.charAt(0).toUpperCase() + court.slice(1);
  const raw = raw0;
  const fm = raw.match(/<div\s+class="fin"[^>]*>([\s\S]*?)<\/div>/i);
  const rb = fm && fm[1].match(/^\s*[-*]\s+(.+)$/m);
  let recap = rb ? nettoyerTitre(rb[1].replace(/\*\*/g, '').replace(/`/g, '')) : '';
  // Récap pluggable : bulle finale de Groksky > liste « fin » > Objectif
  const rc = raw.match(/<!-- RECAP:\d+:([\s\S]*?) -->/);
  if (rc && rc[1]) recap = rc[1].trim();
  if (!recap && objm) recap = objm[1];
  // Badge : lu sur le fichier brut (avant retouches), formats L6/L12/L18/L24…
  const bm = extraireBadge(fs.readFileSync(path.join(SRC, f), 'utf8'));
  dispo.set(num, { id, num, title, court, html: html.replace(/<!-- RECAP:[\s\S]*?-->\s*/g, ''), recap, objectif: objm ? objm[1] : '', disponible: true, _badge: bm });
}

let quizFiles = files
  .filter((f) => /^(PROJET|PARTIE)-\d+\.quiz\.json$/i.test(f))
  .map((f) => path.join(SRC, f));
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
  if (q.titre) q.titre = nettoyerTitre(q.titre);
  return { ...q, slug: String(q.id).toLowerCase(), niveau: n, projet: n };
});
const quizParId = Object.fromEntries(quiz.map((q) => [q.niveau, q.id]));


function parseEntry(raw) {
  if (Array.isArray(raw)) return { nom: null, badge: null, lecons: raw };
  if (raw && typeof raw === 'object' && Array.isArray(raw.lecons)) {
    return { nom: raw.nom || null, badge: raw.badge || null, lecons: raw.lecons };
  }
  throw new Error('projets/niveaux.json : entrée invalide (attendu tableau ou {nom, badge?, lecons})');
}

const projets = Object.keys(mapRaw).map(Number).sort((a, b) => a - b).map((id) => {
  let { nom, badge, lecons } = parseEntry(mapRaw[String(id)]);
  const qz = quiz.find((q) => q.niveau === id);
  if (!nom && qz?.titre) nom = String(qz.titre).replace(/^(Projet|Niveau)\s*\d+\s*[:—-]\s*/i, '');
  if (!badge) badge = lecons.map((n) => dispo.get(n)?._badge).filter(Boolean).pop() || null;
  if (!badge) badge = badgesReadme[id] || null;
  return {
    id,
    nom: nom || `${labelUnite} ${id}`,
    badge: badge || `Fin du ${labelUnite.toLowerCase()} ${id}`,
    lecons,
    quizId: quizParId[id] || null,
    total: lecons.length,
  };
});
// Alias historique : niveaux === projets (même tableau) pour pages / jeu.js existants.
const niveaux = projets;

const lecons = [];
for (const proj of projets) {
  for (const num of proj.lecons) {
    if (dispo.has(num)) {
      const { _badge, ...L } = dispo.get(num);
      lecons.push({ ...L, niveau: proj.id, projet: proj.id, numLabel: `Leçon ${num}` });
    } else {
      lecons.push({
        id: `lecon-${String(num).padStart(2, '0')}`,
        num,
        niveau: proj.id,
        projet: proj.id,
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
  projets,
  niveaux, // alias
  labelUnite,
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
console.log(`Import : ${site.totalDispo}/${site.totalPlan} leçons, ${quiz.length} quiz, ${projets.length} ${labelUnite.toLowerCase()}s (${useProjets ? 'projets.json' : 'niveaux.json'}). Masqué : ${MASKED_SECTIONS.length} motifs.`);
