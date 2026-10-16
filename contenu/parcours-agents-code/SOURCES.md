# Sources du parcours « Fais coder un bot »

Chaque affirmation pédagogique s'appuie sur une source listée ici. Rien d'inventé hors choix de formulation et d'ordre des leçons.

Place dans le cours : **juste avant la partie Hipcamp** (projet 8, leçons 46–58), qui applique la méthode de bout en bout.

## Doc officielle Cursor

| Affirmation | Source |
|---|---|
| Les Cloud Agents tournent dans des VM isolées dans le cloud, avec un environnement de dév complet | https://cursor.com/docs/cloud-agent |
| Ancien nom : Background Agents | https://cursor.com/docs/cloud-agent (Naming History) |
| Avant de lancer depuis un dépôt : un admin connecte le contrôle de source (GitHub, GitLab, Bitbucket, Azure DevOps) | https://cursor.com/docs/cloud-agent |
| Sans dépôt : « Start from scratch » crée un brouillon Origin | https://cursor.com/docs/cloud-agent/setup#start-from-scratch |
| L'agent clone le dépôt, travaille sur une branche séparée, pousse pour le handoff | https://cursor.com/docs/cloud-agent |
| Accès possible depuis iOS, Web (cursor.com/agents), Desktop, Slack, GitHub, API | https://cursor.com/docs/cloud-agent |
| Plan payant requis ; troubleshooting « Agent runs are not starting » | https://cursor.com/docs/cloud-agent |
| Facturation au prix API du modèle ; limite de dépense au premier usage | https://cursor.com/docs/cloud-agent (Billing) |
| Environment setup = étape la plus importante ; `.cursor/environment.json` | https://cursor.com/docs/cloud-agent/setup |
| Copie locale miroir des docs | `/workspace/docsread/c-cloud.md`, `/workspace/docsread/c-agent.md` |

## Skills Grok Bot / Cursor (machine)

| Affirmation | Source |
|---|---|
| Pour tout travail de code non trivial : lancer un CloudAgent (`launch`), pas coder soi-même | `/home/box/agent-data/managed-skills/skills/code-changes/SKILL.md` |
| Brief = problème + contraintes + critère de fin ; pas de prescription ligne à ligne | idem, § « Hand off the problem and the outcome » |
| Follow-up sur le **même** agent pour corriger ; `launch` seulement pour un travail vraiment nouveau | idem, § follow-up |
| Ne jamais cloner un dépôt sur l'ordinateur du bot / de l'utilisateur pour investiguer | idem |
| Connexion source-control unique Cursor ; `RequestScmConnect` si manquant | `/home/box/agent-data/managed-skills/skills/source-control/SKILL.md` |
| Cursor ne crée pas de dépôts GitHub ; l'utilisateur crée un dépôt vide et partage l'URL | idem, § Writes |
| Préférer Origin pour un `new_repo` ; GitHub = dépôt existant fourni par l'utilisateur | idem |

## Exemple réel : Le Bâtisseur + site du cours

| Affirmation | Source |
|---|---|
| Le Bâtisseur : brief → agent de code → vérifier → corriger ; ne code pas sur les ordis de Joseph | fiche `…/9f5347a2-…/profile.json` (prévoit CloudAgent) ; **lot 8 réel** : agent sur l'ordinateur du Bâtisseur (`brief-batisseur.md`) |
| Dépôt publié | https://github.com/wn5zw4s89s-svg/cours-grok-bot |
| Site en ligne | https://wn5zw4s89s-svg.github.io/cours-grok-bot/ |
| Cycle Cobaye 1 (confirmation reset, COPIER, cible 44 px) | commit `23e54de` — message : « Cobaye 1: confirmation reset, COPIER, récap fin depuis bulle finale, cible ☰ 44px » |
| Cycle Cobaye 2 (cache version.json, menu 48 px, solution visible) | commit `500d866` — ajoute `src/pages/version.json.js` avec `Cache-Control: no-store` |
| Erreur corrigée : solution en double retirée | commit `f8d00e8` — « Solution en double retirée » |
| Clone local du dépôt pour inspection | `/workspace/cours-grok-bot-repo` |
| App / README du site (Astro, import contenu, GitHub Pages) | `/workspace/grokbot-live/cours/site/app/README.md` |

## Brief réel du Bâtisseur

| Affirmation | Source |
|---|---|
| Texte exact lot 8 (Rejouer, meilleur score, shuffle quiz, import L3/quiz, Playwright, publish) | `contenu-v2/parcours-agents-code/brief-batisseur.md` |
| Cette nuit : agent sur l'ordinateur du Bâtisseur, **pas** agent cloud Cursor | idem, note d'ouverture |
| Même bases agent / cloud : « Cloud agents use the same agent fundamentals… » → le brief s'écrit pareil | https://cursor.com/docs/cloud-agent ; `/workspace/docsread/c-cloud.md` |
| Prompt cloud = problème + contraintes + critère de fin | `code-changes/SKILL.md` (« Put the whole task in prompt… ») |
| Vérifié : build `0e55ef77`, tests iPhone, captures | `brief-batisseur.md` § « Ce que j'ai vérifié » |
| Correction confettis lot 7 : encore à chaque bonne réponse → fix 2 lignes → `36ca47b` | `brief-batisseur.md` § correction ; commits `e25d819`, `36ca47b` |

## Grok Bot / comptes (décisions Joseph)

| Affirmation | Source |
|---|---|
| Grok Bot inclus dans les plans Cursor payants individuels et Teams | `/workspace/docs/faq.md`, `/workspace/docs/cursor.com_help_grok-bot_plans.txt`, https://cursor.com/pricing |
| Ordinateur cloud partagé des bots ≠ VM de l'agent de code | `/workspace/docsread/computer-and-apps.md` vs https://cursor.com/docs/cloud-agent |
| GitHub Pages : gratuit, pas de vente | leçons existantes `LECON-23.md`, `LECON-49.md` (contenu-v2) |

## Forme pédagogique

| Choix | Source |
|---|---|
| Format micro-étapes, box atoi / corrige, COPIER en blockquote, details solution, En résumé | `LECON-04.md`, `LECON-05.md`, `LECON-11.md`, `LECON-12.md` dans contenu-v2 |
| Quiz JSON | `PROJET-1.quiz.json` |
| Fil rouge Hipcamp / Champ Libre | `contenu-v2/README.md` projet 8 |

## Non vérifié (à ne pas présenter comme fait)

- Libellés exacts des boutons de l'app Grok Bot pour « lancer un agent cloud » sur iPhone (d'où « à vérifier sur ton écran »).
- Si l'élève lambda peut lancer un CloudAgent sans compte Cursor personnel au-delà de Grok Bot (dépend du plan / équipe).
- Aucun brief lot 8 exécuté **en** agent cloud Cursor cette nuit (seulement sur l'ordinateur du Bâtisseur) ; la forme du brief reste valable pour le cloud d'après la doc « same agent fundamentals ».
