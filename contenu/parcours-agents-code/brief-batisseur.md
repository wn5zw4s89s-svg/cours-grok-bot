# Vrai brief du Bâtisseur — lot 8 (16/10/2026, 3h34)

Note honnête : cette nuit, ce brief a été confié à un agent de code qui tourne sur l'ordinateur du Bâtisseur, pas à un agent cloud Cursor. La méthode est la même (brief complet, lancement, vérification, correction) ; seul l'endroit où l'agent travaille change.

## Le texte exact envoyé à l'agent

Repo /workspace/cours-grok-bot-repo (Astro, live main 36ca47b). Never rewrite course text.
Display-only changes (minimal, iPhone 390px):
1) "Rejouer" button: same style exactly as "Une remarque ?" button (it's currently grey, low contrast).
2) Menu quiz score shows the best score (e.g. 7/8 after a later 6/8). Label it "meilleur score" (e.g. "7/8 · meilleur score").
3) Shuffle quiz answer order at display time per question per attempt; check correctness by answer identity, not index; missed-questions list at end must stay correct.
Content: Prof Groksky delivered LECON-03 and PROJET-1..8 .quiz.json in contenu-v2. Copy them and run the importer; validate JSON imports.
Build, test with Playwright WebKit iPhone 13 (quiz playable, shuffle works, score label, buttons match, L3 renders), captures to /workspace/captures/nuit10-*.png.
Commit, publish to main, wait for the deploy, check the live pages and version.json. Report commit, build id, changes, capture paths.

## Ce que j'ai vérifié
- Le déploiement GitHub est réussi et la page en ligne affiche le nouveau numéro de build (0e55ef77).
- Les tests sur iPhone passent : l'ordre des réponses change (4 ordres différents sur 6 essais), Rejouer a le même style que Remarque, le meilleur score est bien affiché, la liste des questions ratées est juste et la L3 s'affiche.
- Les captures d'écran montrent le résultat réel.

## Ce que j'ai fait corriger (lot précédent, 7)
L'agent devait faire partir les confettis seulement en fin de projet ou de quiz. En relisant son code, j'ai vu qu'il les avait seulement passés derrière le texte : ils partaient encore à chaque bonne réponse. J'ai corrigé les deux lignes concernées, refait le build, publié, puis vérifié en ligne.

Leçon : « l'agent dit que c'est fait » ne suffit pas. On vérifie le résultat soi-même, point par point, avant d'annoncer.
