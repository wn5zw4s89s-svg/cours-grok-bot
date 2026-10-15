# Contenu du site — consignes pour Le Bâtisseur

**Lot 1–11 réécrit, prêt à republier** (15/10).  
**Lot 12–23 (Niveau 3) écrit et vérifié sur la doc, prêt à publier** (15/10).  
**Lot 24–31 (Niveau 4) écrit et vérifié sur la doc, prêt à publier** (15/10). Leçon 29 retouchée : audit en lecture, aucun réglage changé.  
**Lot 32–36 (Niveau 5) écrit et vérifié sur la doc, prêt à publier** (15/10).

## Règle Gebbia (Joseph, 15/10)

Ultra minimaliste. Chaque mot se bat pour rester. Phrases courtes. Une idée par bloc.  
Pas de cases à cocher d'objectifs, pas de listes « ce que tu auras à la fin », pas d'intros longues.

## Fichiers

| Fichier | Rôle |
|---|---|
| `LECON-01.md` … `LECON-11.md` | Pages de leçon (Markdown + encadrés `div.box.*`) |
| `PARTIE-1.quiz.json` | Quiz niveau 1 |
| `PARTIE-2.quiz.json` | Quiz niveau 2 |
| `LECON-12.md` … `LECON-23.md` | Niveau 3 |
| `PARTIE-3.quiz.json` | Quiz niveau 3 |
| `LECON-24.md` … `LECON-31.md` | Niveau 4 |
| `PARTIE-4.quiz.json` | Quiz niveau 4 |
| `LECON-32.md` … `LECON-36.md` | Niveau 5 |
| `PARTIE-5.quiz.json` | Quiz niveau 5 |
| `niveaux.json` | Mapping niveau -> leçons (1–43) |
| `README.md` | Ce fichier |

## Mapping

### Niveau 1 — Débutant

| Leçon | Titre |
|---|---|
| 1 | Crée ton premier bot |
| 2 | Donne un métier à ton bot |
| 3 | Teste ton bot avec 5 cas |
| 4 | Transforme une erreur en règle |
| 5 | Prouve ta règle sur le vrai bot |

### Niveau 2 — Utilisateur régulier

| Leçon | Titre |
|---|---|
| 6 | Prépare une demande avec des fichiers |
| 7 | Envoie et vérifie le tableau |
| 8 | Dicte et prépare ton appel |
| 9 | Passe ton appel et vérifie |
| 10 | Maîtrise ce que ton bot retient |
| 11 | Comprends un bot toujours actif |

### Niveau 3 — Bot qui agit

| Leçon | Titre | Ancien |
|---|---|---|
| 12 | Écris une recette réutilisable | 7A |
| 13 | Enregistre et lance ton skill | 7B |
| 14 | Écris des garde-fous « demande avant » | 8A |
| 15 | Exige un brouillon avant tout envoi | 8B |
| 16 | Choisis un connecteur et prépare une lecture | 9A |
| 17 | Lis par un connecteur sans rien modifier | 9B |
| 18 | Comprends l'ordinateur et le navigateur du bot | 10A |
| 19 | Regarde ton bot travailler et reprends la main | 10B |
| 20 | Choisis une tâche à montrer à ton bot | 11A |
| 21 | Crée un skill par démonstration | 11B |
| 22 | Écris une routine sans danger | 12A |
| 23 | Crée et teste ta routine | 12B |

### Niveau 4 — Avancé, plusieurs bots

| Leçon | Titre | Ancien |
|---|---|---|
| 24 | Répartis le travail entre deux bots | 13A |
| 25 | Fais passer le relais entre bots | 13B |
| 26 | Prépare un bot à partager sans secret | 14A |
| 27 | Duplique et partage un bot | 14B |
| 28 | Distingue bot personnel, modèle et Team Bot | 15 |
| 29 | Sécurise ton ordinateur partagé | 16 |
| 30 | Passe l'essai blanc | 17A |
| 31 | Réussis l'examen Grok Bot | 17B |

### Niveau 5 — Expert, coder avec des agents

| Leçon | Titre | Ancien |
|---|---|---|
| 32 | Fais tes premiers pas avec l'agent Cursor | 18A |
| 33 | Relis et annule ce que fait l'agent | 18B |
| 34 | Écris les règles de l'agent | 19A |
| 35 | Prouve que l'agent suit tes règles | 19B |
| 36 | Confie du code à un agent cloud (lecture et démo) | 20 |

Fil rouge : **Marc Garnier** / **Le siphon**.  
App en **français** : libellés FR (Nouveau, Réglages du bot, Description, Enregistrer, Appel vocal…). Note « à vérifier sur ton écran » si le libellé exact varie.  
Leçon 10 : vérif mémoire en **nouvelle conversation**.

## Fichiers d'exercice (à proposer en téléchargement)

Dossier `fichiers/` :

| Fichier | Leçons |
|---|---|
| `facture-fictive-imprimerie-exemple.pdf` | 6, 7 |
| `ticket-fictif-cafe-exemple.png` | 6, 7 |
| `fournitures-test.csv` | 12, 13, 16, 17, 22, 23 |
| `fournitures-test-2.csv` | 13 |

Données inventées (Sanitaire Exemple SA, Robinetterie Test Sàrl, Quincaillerie Fictive SA). Mettre un lien de téléchargement sur chaque leçon concernée.

## Sources vérifiées (WebFetch, 15/10/2026)

- docs.x.ai/grok-bot/skills-routines-and-automations : 6 rubriques des skills, Teach a task, 6 points d'une routine, Test run.
- docs.x.ai/grok-bot/approvals-security-and-privacy : Allow once / Always allow / Deny, Auto-review (Ask first / Allow automatically), Take over / Take control / I'm done.
- docs.x.ai/grok-bot/computer-and-apps : ordinateur partagé, Connect apps -> Add, `@` / `/`, X public sans plugin.
- cursor.com/help/grok-bot/routines.md : Details -> Routines, Pause / Test / Edit / Delete routine, When to run.
- cursor.com/help/grok-bot/connect-plugins.md : Authorize / Authenticate, Installed, Needs auth.
- docs.x.ai/grok-bot/chat-and-collaboration : groupe (Nouveau -> New chat, 2 à 6 bots), @, relais entre bots, limites des groupes.
- docs.x.ai/grok-bot/bots : Duplicate (ce qui est copié ou non), Share -> Create template, Public link / Team-only, Add to Grok Bot.
- docs.x.ai/grok-bot/team-bots : tableau personnel / modèle / Team Bot, mémoire d'équipe, notes privées.
- cursor.com/docs/agent/overview.md : Cmd+I, checkpoints, Restore Checkpoint.
- cursor.com/docs/rules.md : AGENTS.md, .cursor/rules (.mdc), bonnes pratiques.
- cursor.com/docs/cloud-agent.md : agents cloud, facturation au tarif API, limite de dépense.
- cursor.com/pricing : Free 0 $ (agent limité, pas d'agents cloud) ; Premium 30 $/mois avec « Cloud agents & automations » et Grok Bot (prix hors taxes).
- https://httpbin.org/forms/post : formulaire de test de la leçon 19 (répond).

La doc est en anglais. Les leçons gardent les noms anglais des boutons, avec « à vérifier sur ton écran » pour le libellé français.

## Format leçon

- Encadrés : `<div class="box info|question|attention|erreur|atoi|plus|corrige|preuve" markdown="1">`
- Aussi : `chapeau`, `schema`, `apercu`, `fin`
- Flèches : ASCII `->` uniquement
- Pas de GIF

## Format quiz

```json
{"id":"PARTIE-1","titre":"...","questions":[{"id":"q1","question":"...","choix":["A","B","C"],"bonne_reponse":0,"explication":"..."}]}
```

Score affiché, **sans seuil de blocage**.

## Où publier

Lire ce dossier `contenu/`. Les anciennes leçons dans `/workspace/grokbot-live/cours/*.md` = archives.

## Lots suivants

Niveau 6 : pas encore écrit (style Gebbia).
