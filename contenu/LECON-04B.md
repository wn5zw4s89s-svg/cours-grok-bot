# Leçon 4B : envoyer, vérifier, faire corriger

**Une leçon courte, un seul objectif** · Professeur : Prof Groksky · Élève : Joseph

> **On reprend ici**
> Ta demande est prête, dans ta note (leçon 4A). Si tu n'as pas fini de l'assembler, termine-la d'abord : elle est aussi recopiée en annexe, à la fin de cette leçon.
> Garde à portée de main tes deux fichiers d'exercice : `facture-fictive-imprimerie-exemple.pdf` et `ticket-fictif-cafe-exemple.png`.

**Objectif :** obtenir un tableau **juste**, avec à part ce que le bot n'a pas pu vérifier, et le faire corriger sans copie en double.

**Ce que tu auras à la fin (à cocher) :**

- ☐ un tableau rendu par le bot, à partir de la facture PDF et de la photo du ticket ;
- ☐ ce tableau vérifié avec la grille, point par point ;
- ☐ à part, la liste de ce que le bot n'a pas pu vérifier ;
- ☐ ce même tableau corrigé par le bot, sans copie en double.

Comment travailler : fais une étape, puis lis le corrigé juste en dessous. N'écris à Prof Groksky que si tu bloques. Cette leçon coûte **2 messages au bot**, pas plus.

---

# La leçon

## 1. Joindre un fichier

Tu cliques sur le trombone (le bouton de pièce jointe), ou tu glisses le fichier depuis le Bureau du Mac jusque dans la zone où tu écris (clic maintenu, puis tu lâches). Tu peux aussi coller une image. Sur ordinateur, tu peux joindre **6 fichiers au plus** à la fois. Sur iPhone, tu peux partager une photo depuis une autre app : bouton Partager, Grok Bot, tu choisis la conversation, puis Attach.

<small>Sources : « Use the attachment control or drag files into the composer. You can also paste images and links » (utilise le bouton de pièce jointe ou glisse les fichiers dans la zone de saisie ; tu peux aussi coller des images et des liens) ; « The desktop composer accepts up to six attachments at a time » (6 pièces jointes au plus à la fois sur ordinateur) ; PDF et images sont dans la liste des formats acceptés ; le partage iPhone « Use the system share sheet, choose Grok Bot, pick a chat, and choose Attach » : https://docs.x.ai/grok-bot/files-and-results.</small>

## 2. Corriger le même livrable

Si le tableau ne va pas, tu ne demandes pas « refais-le ». Tu demandes de **mettre à jour celui qu'il vient de créer**. Sinon, tu te retrouves avec trois tableaux et tu ne sais plus lequel est le bon.

<small>Source : « Ask the Bot to revise the existing artifact instead of making disconnected copies » (demande au bot de réviser le livrable existant plutôt que de faire des copies sans lien) : https://docs.x.ai/grok-bot/files-and-results.</small>

---

# Les exercices

## Exercice 3 : envoyer et vérifier

C'est le **seul message de création** de la leçon.

**Étape 1.** Ouvre une nouvelle conversation avec ton bot principal (ton Grok Bot de tous les jours, pas un bot d'exercice).

**Étape 2.** Joins les deux fichiers.

**Étape 3.** Colle ta demande prête (leçon 4A : Cmd+C dans ta note, Cmd+V dans la zone de message), puis envoie.

**Étape 4.** Coche la grille ci-dessous, ✅ ou ❌, sans lui répondre.

**C'est réussi si :**

- ☐ le tableau a les 7 colonnes, dans l'ordre ;
- ☐ il y a 7 lignes : 4 pour la facture, 3 pour le ticket ;
- ☐ la ligne « Affiches A2 » est signalée : 10 × 12.50 = 125.00, mais la facture écrit 135.00 ;
- ☐ le prix de l'eau minérale n'est **pas** présenté comme lu : il est « illisible », ou rangé dans « Déduit » ;
- ☐ l'heure du ticket est signalée comme illisible ;
- ☐ un fichier CSV est joint à la réponse.

Si un point est ❌, note-le. C'est l'exercice 4 qui le corrige, pas un nouveau tableau.

### Corrigé idéal

Ce que tu dois retrouver, à peu de chose près :

| Fichier | Fournisseur | Date | Désignation | Quantité | Prix unitaire CHF | Montant CHF |
|---|---|---|---|---|---|---|
| Facture PDF | Imprimerie Exemple SA | 02.10.2026 | Cartes de visite, 500 ex. | 1 | 85.00 | 85.00 |
| Facture PDF | Imprimerie Exemple SA | 02.10.2026 | Flyers A5, 1000 ex. | 1 | 240.00 | 240.00 |
| Facture PDF | Imprimerie Exemple SA | 02.10.2026 | Affiches A2 | 10 | 12.50 | 135.00 |
| Facture PDF | Imprimerie Exemple SA | 02.10.2026 | Frais de livraison | 1 | 15.00 | 15.00 |
| Photo ticket | Café Exemple | 03.10.2026 | Café crème | 2 | (non écrit) | 9.00 |
| Photo ticket | Café Exemple | 03.10.2026 | Croissant | 1 | (non écrit) | 3.20 |
| Photo ticket | Café Exemple | 03.10.2026 | Eau minérale | 1 | (non écrit) | illisible |

> **Déduit (pas écrit dans le fichier) :** eau minérale = 3.50, calculé avec 15.70 − 9.00 − 3.20. Prix d'un café crème = 4.50, calculé avec 9.00 ÷ 2.
> **Pas pu vérifier :** Affiches A2, 10 × 12.50 = 125.00, mais la facture écrit 135.00 (écart de 10.00 en trop). Le sous-total (475.00), la TVA et le total (513.48) suivent ce montant. L'heure du ticket est illisible. Le taux de TVA (8,1 %) est recopié, pas contrôlé. Le ticket n'indique pas de TVA.

**Ta grille, si le bot rend ceci :** 6 points sur 6 ✅ (colonnes, 7 lignes, Affiches A2 signalée, eau minérale pas présentée comme lue, heure illisible signalée, CSV joint).

Ton bot peut écrire autrement. Ce qui compte, c'est que chaque point de la grille soit coché. Un ❌ n'est pas un échec de ta part : tu le notes, et l'exercice 4 le fait corriger.

### Les réflexes pour y arriver

- Est-ce que je refais au moins un calcul moi-même ?
- Ce chiffre est-il **écrit** dans le fichier, ou **calculé** par le bot ?
- Est-ce que je juge le tableau avec ma grille, ou à l'impression « ça a l'air bien » ?

---

## Exercice 4 : faire corriger le même tableau

Deuxième et dernier message de la leçon. Si tout était ✅ à l'exercice 3, tu demandes quand même une amélioration : ajouter une colonne « Statut ».

**Étape 1.** Choisis **un seul** point à faire corriger : le premier ❌ de ta grille, ou, si tout est ✅, la colonne « Statut ». Puis écris ta demande. À la place des « … », dis ce qui est faux et ce que tu veux à la place.

Modèle : « Mets à jour le tableau que tu viens de créer : … . Ne crée pas de nouveau tableau à côté. »

Exemple de forme, sur un autre sujet : « Mets à jour le tableau que tu viens de créer : la météo de lundi à Genève est fausse, écris « pluie » à la place de « soleil ». Ne crée pas de nouveau tableau à côté. »

**Étape 2.** Envoie-la dans la même conversation.

**Étape 3.** Vérifie la réponse : le tableau est-il le même, corrigé, avec un seul CSV ? Puis reprends la grille de l'exercice 3 et recoche chacun de ses points, ✅ ou ❌.

Forme : « Même tableau, un seul CSV : oui ou non. Grille de l'exercice 3 : … ✅ sur 6. »

**C'est réussi si :**

- ☐ ta demande commence par « Mets à jour le tableau que tu viens de créer » ;
- ☐ ta demande vise **un** point précis (un ❌ de ta grille, ou la colonne « Statut ») ;
- ☐ le bot rend le même tableau, corrigé, et un seul fichier CSV à jour ;
- ☐ les points qui étaient ✅ le restent.

### Corrigé idéal

Deux cas possibles, selon ta grille. Tu n'en écris **qu'un**.

**Si ta grille avait un ❌** (exemple : l'écart des affiches n'était pas signalé) :

> Mets à jour le tableau que tu viens de créer : signale la ligne Affiches A2 dans « Pas pu vérifier », car 10 × 12.50 = 125.00, mais la facture écrit 135.00. Ne crée pas de nouveau tableau à côté.

Résultat attendu : le même tableau, avec l'écart des affiches dans « Pas pu vérifier », et un seul CSV à jour. Ta note : « Même tableau, un seul CSV : oui. Grille de l'exercice 3 : 6 ✅ sur 6. »

**Si tout était ✅ :**

> Mets à jour le tableau que tu viens de créer : ajoute une dernière colonne « Statut », avec « lu » si le chiffre est écrit tel quel dans le fichier, « déduit » s'il est calculé, « à vérifier » s'il y a un écart ou un chiffre illisible. Ne crée pas de nouveau tableau à côté.

Résultat attendu : « à vérifier » pour Affiches A2 et pour l'eau minérale, « lu » pour les 5 autres lignes. Ta note : « Même tableau, un seul CSV : oui. Grille de l'exercice 3 : 6 ✅ sur 6. »

### Les réflexes pour y arriver

- Est-ce que je demande une **correction**, ou un nouveau tableau ?
- Ma demande vise-t-elle un seul point, que je peux cocher ?
- Ai-je revérifié ce qui marchait déjà ?

---

## Bilan

- ☐ Exercice 3 : tableau vérifié avec la grille
- ☐ Exercice 4 : le même tableau corrigé, sans copie

## ✅ Ce que tu as réussi

Tu as donné un PDF et une photo à un bot, et tu as obtenu **un tableau juste**, vérifié ligne par ligne, avec **à part** ce qu'il n'a pas pu vérifier : l'erreur des affiches, l'eau minérale, l'heure du ticket. Puis tu l'as fait corriger sans perdre le fil, dans le même tableau.

**La prochaine fois : leçon 5A, parler à son bot.**

---

## Annexe : ta demande prête (leçon 4A)

> Le PDF est une facture de l'Imprimerie Exemple SA. Sers-t'en pour relever chaque ligne facturée. La photo est un ticket de caisse du Café Exemple. Sers-t'en pour relever chaque achat. Ne modifie pas les originaux.
> Rends un tableau avec ces colonnes : Fichier | Fournisseur | Date | Désignation | Quantité | Prix unitaire CHF | Montant CHF. Une ligne par article. Recopie les chiffres tels qu'ils sont écrits. Si tu ne peux pas lire un chiffre, tu écris « illisible », tu n'inventes rien.
> Sous le tableau, une liste à part, en deux parties : « Déduit (pas écrit dans le fichier) » et « Pas pu vérifier ». Vérifie aussi les calculs (quantité × prix, sous-total, total) et signale chaque écart.
> Rends le tableau dans ta réponse et en fichier CSV.

Si tu as écrit ta propre demande en leçon 4A, garde la tienne : c'est elle qui compte.

<small>

**Sources de la leçon** (relue le 10/10/2026) : https://docs.x.ai/grok-bot/files-and-results (« Attach files », « Ask for a reviewable result », « Preview generated work », « Preserve evidence »).
**Choix non sourcés :** la cliente fictive, la facture et le ticket fictifs (dont l'erreur volontaire sur les affiches et les taches sur le ticket), les noms des colonnes, le mot « illisible », la colonne « Statut ».

</small>
