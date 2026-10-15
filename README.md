# Cours Grok Bot — site V1 (Astro + Starlight), local uniquement

Node ≥ 22.12 requis (sur la box : `export PATH=~/.local/node22/bin:$PATH`).

    npm install
    npm run dev       # import du contenu + serveur local
    npm run build     # import + site statique dans dist/
    npm run preview   # sert dist/ sur http://localhost:4321/cours-grok-bot/

## Contenu
`npm run import` (lancé par dev/build) lit, dans cet ordre (le dernier gagne) :
1. `/workspace/grokbot-live/cours/LECON-*.md` et `PARTIE-N.quiz.json`
2. `/workspace/grokbot-live/cours/site/` (dépôt de Prof Groksky)
3. `app/contenu/` (pour le futur dépôt GitHub)
S'il n'y a aucun quiz, `exemples/PARTIE-1.quiz.json` (marqué EXEMPLE) est utilisé.
Les sources ne sont jamais modifiées ; les copies générées vont dans `src/content/docs/lecons|quiz`.

Blocs reconnus dans les leçons (HTML `<div ... markdown="1">`, une balise par ligne) :
`box info`, `box question`, `box attention`, `box erreur`, `box atoi` (À toi de jouer), `box plus`,
`box corrige` (caché derrière « Voir la solution »), `box preuve` (case de preuve : texte + ✅/❌).
Une leçon ancien style qui contient « ✅ ou ❌ » sans bloc `preuve` reçoit une case de preuve en fin de leçon.

## « Connexion » V1
Pas de compte ni de serveur : un pseudo dans `localStorage` (`gb:profil`), progression dans
`gb:progression:<pseudo>` (leçons terminées, preuves, dernier score de chaque quiz). Propre à un navigateur ;
export/import JSON sur la page « Mon profil ».

## Publier (plus tard)
`site`/`base` : variables `SITE_URL` / `BASE_PATH` (défaut `https://COMPTE-GITHUB.github.io` + `/cours-grok-bot`).
Workflow prêt : `.github/workflows/deploy.yml` (à placer à la racine du dépôt).
