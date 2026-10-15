# Contenu du site — consignes pour Le Bâtisseur

Lot prêt : **Niveau 1** (leçons 1–5 + quiz).

## Fichiers

| Fichier | Rôle |
|---|---|
| `LECON-01.md` … `LECON-05.md` | Pages de leçon (Markdown + encadrés HTML `div.box.*`) |
| `PARTIE-1.quiz.json` | Quiz du niveau 1 (`id`: `PARTIE-1`) |
| `niveaux.json` | Mapping niveau -> numéros de leçons (1–43) |
| `README.md` | Ce fichier |

## Mapping ancien -> nouveau (niveau 1)

| Nouveau | Titre | Ancien |
|---|---|---|
| Leçon 1 | Découvrir Grok Bot : créer un bot et lui parler | **Nouvelle** (remplace leçon 0) |
| Leçon 2 | Donner un métier clair à ton bot | `SEANCE-01.md` |
| Leçon 3 | Tester ton bot avec 5 cas difficiles | `SEANCE-02.md` (électricien -> adapté Marc / Le siphon) |
| Leçon 4 | Transformer une erreur qui revient en règle | `LECON-03A.md` (Nadia / Le pont -> Marc / Le siphon) |
| Leçon 5 | Prouver ta règle sur le vrai bot | `LECON-03B.md` (idem) |

Fil rouge : **Marc Garnier** (plombier fictif) et **Le siphon**.

## Format leçon (à respecter côté rendu)

- Encadrés : `<div class="box info|question|attention|erreur|atoi|plus|corrige|preuve" markdown="1">`
- Aussi : `chapeau`, `schema`, `apercu`, `fin`
- « À toi de jouer » = class `atoi` ; corrigé juste après = class `corrige`
- Preuve ✅/❌ = class `preuve` (à afficher distinctement)
- Flèches dans le texte : `->` (jamais ->)
- Pas de GIF ni vidéo

## Format quiz

```json
{"id":"PARTIE-1","titre":"Niveau 1 — Débutant","questions":[{"id":"q1","question":"...","choix":["A","B","C"],"bonne_reponse":0,"explication":"..."}]}
```

- Une seule bonne réponse (`bonne_reponse` = index 0-based)
- Correction affichée juste après chaque réponse + explication
- Score affiché, **sans seuil de blocage** ; le dernier score reste dans la progression

## Où publier

Lire les fichiers de ce dossier `contenu/`. Les anciennes leçons dans `/workspace/grokbot-live/cours/*.md` ne sont que des sources / archives.

## Lots suivants

Niveaux 2–6 : pas encore écrits. Attendre les prochains dépôts de Prof Groksky dans ce même dossier.
