// Titres en langage clair + « ce que tu sauras faire » (l'univers OctoBoss reste en accent).
const P1 = {
  1: ['Crée ton premier bot', 'Tu donnes une mission à ton bot et tu le vois répondre.'],
  2: ['Écris les instructions de ton bot', 'Ton bot saura toujours quoi faire, sans que tu répètes.'],
  3: ['Teste ton bot avec 5 questions', 'Tu sauras si ton bot répond bien, ou si c’était de la chance.'],
  4: ['Corrige ton bot pour de bon', 'Une correction qu’il garde, au lieu de la répéter dans le chat.'],
  5: ['Prépare ton bot à l’imprévu', 'Ton bot réagit bien face à une question jamais vue.'],
  6: ['Rends ton bot excellent', 'Chiffres et exemples : des réponses du top 1 %.'],
};
const dec = (s) => s.replace(/<[^>]+>/g, '').replace(/&#39;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s*\(\d+ min\)/, '').replace(/^Étape \d+ · /, '');
export function clair(l) {
  if (l.niveau === 1 && P1[l.num]) return { titre: l.court, but: P1[l.num][1] };
  const h = [...(l.html || '').matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map((m) => dec(m[1])).filter((x) => !/^(Récap|Défi|Quiz)/i.test(x)).slice(0, 3);
  return { titre: l.court, but: '' };
}
