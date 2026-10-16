// Identifiant de build = empreinte du JS, du CSS, des données (contenu) et des gabarits.
// Toute modif visible change l'id -> ?v= et version.json changent ensemble.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => { const p = path.join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
export const buildId = (() => {
  const h = createHash('sha1');
  for (const p of ['public/jeu.js', ...walk('src').sort()]) h.update(p).update(readFileSync(p));
  return h.digest('hex').slice(0, 8);
})();
