# Cours Grok Bot — V2 (Astro, sans Starlight)

Site : https://wn5zw4s89s-svg.github.io/cours-grok-bot/ — Node ≥ 22.12.

    npm install && npm run dev      # local
    npm run build                   # site statique dans dist/

## Contenu
Déposer dans `contenu/` : `LECON-*.md` (ordre alphabétique = ordre du parcours) et `PARTIE-N.quiz.json`
(`{"id":"PARTIE-1","titre":"…","questions":[{"id":"q1","question":"…","choix":[…],"bonne_reponse":0,"explication":"…"}]}`).
Sans vrai quiz, `exemples/PARTIE-1.quiz.json` (EXEMPLE) est utilisé. Chaque push sur main redéploie.

Blocs reconnus (`<div class="box …" markdown="1">`, une balise par ligne) : info, question, attention, erreur,
atoi (À toi de jouer), plus, corrige (derrière « Voir la solution »), preuve (texte + ✅/❌).
Une leçon qui contient « ✅ ou ❌ » sans bloc preuve reçoit une case de preuve en fin de leçon.

## Jeu
Aucun compte. Progression anonyme dans le navigateur (`localStorage`, clé `gb2:progression`) :
leçons terminées (débloquent la suivante), preuves, dernier et meilleur score des quiz, niveaux, badges.
