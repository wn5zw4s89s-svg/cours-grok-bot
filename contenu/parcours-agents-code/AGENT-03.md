# Agent 3 · Écris un brief qui marche

Objectif : à la fin, tu sais donner à l'agent un brief clair : problème, contraintes, critère de fin.

## Étape 1 · Ce qu'un bon brief contient (1 min)

Un brief dit :

1. **Quoi** : le résultat attendu (pas la liste des fichiers à toucher).
2. **Contraintes** : gratuit, mobile, français, pas de panier…
3. **C'est fini quand** : comment vérifier sans lire tout le code.

Un mauvais brief prescrit chaque ligne. Un bon brief donne le problème et laisse l'agent trouver.

<div class="box atoi" markdown="1">
**À toi :** dans un brief, que mets-tu en premier : le résultat voulu, ou le nom du fichier à modifier ?

C'est réussi si tu cites une seule chose.
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Le résultat voulu. L'agent trouve comment y arriver.

</div></details>

## Étape 2 · Comment Le Bâtisseur s'y prend (1 min)

Le Bâtisseur construit le site de ce cours. Sa méthode :

1. Il rédige un brief clair.
2. Il lance un **agent de code**.
3. Il vérifie le résultat.
4. Il fait corriger.

Il ne code pas sur les ordinateurs de Joseph.

Exemple public : dépôt `wn5zw4s89s-svg/cours-grok-bot`, site https://wn5zw4s89s-svg.github.io/cours-grok-bot/

Dans ce parcours, tu lances un **agent cloud** Cursor (machine isolée dans le cloud). Le brief s'écrit pareil.

<div class="box atoi" markdown="1">
**À toi :** dans la méthode du Bâtisseur, qui écrit le code : lui sur le Mac de Joseph, ou un agent de code ?

C'est réussi si tu nommes une seule option.
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Un agent de code. Le Bâtisseur rédige le brief, vérifie, fait corriger.

</div></details>

## Étape 3 · Brief réel du Bâtisseur (2 min)

Vrai brief utilisé pour ce site (lot 8, 16/10/2026). Ici, l'agent tournait sur un ordinateur, pas en agent cloud Cursor. Le brief s'écrit exactement pareil pour un agent cloud : Cursor dit que les agents cloud utilisent les mêmes bases qu'un agent classique ; seul l'endroit change (VM dans le cloud).

Extrait du texte exact envoyé (fidèle) :

> Display-only changes (minimal, iPhone 390px):
> 1) "Rejouer" button: same style exactly as "Une remarque ?" button…
> 2) Menu quiz score shows the best score… Label it "meilleur score"…
> 3) Shuffle quiz answer order at display time… check correctness by answer identity, not index…
> …Build, test with Playwright WebKit iPhone 13… Commit, publish to main… Report commit, build id…

Ce qu'il a vérifié ensuite : déploiement OK (build `0e55ef77`), ordre des réponses qui change, Rejouer = style Remarque, meilleur score affiché, L3 OK.

<div class="box info" markdown="1">
Texte complet : fichier `brief-batisseur.md` à côté de cette leçon.
</div>

<div class="box atoi" markdown="1">
**À toi :** dans l'extrait, trouve une contrainte et un « c'est fini quand » (même s'il est dit autrement).

C'est réussi si tu cites deux bouts du brief (ex. iPhone 390px, et le test / publish / report).
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Contrainte : « minimal, iPhone 390px ». Fini quand : build, test Playwright, commit, publish, report (commit, build id…).

</div></details>

## Étape 4 · Ton brief pour la page d'accueil (3 min)

Fil rouge : première page d'un concurrent d'Hipcamp. Nom fictif du projet : **Champ Libre**.

<div class="box atoi" markdown="1">
**À toi :** copie ce brief. Tu ne l'envoies pas encore. Tu le gardes pour la leçon suivante. Lis-le une fois à voix haute.

> Dépôt : celui créé en Agent 2 (lien github.com/…/champ-libre-accueil).
>
> Construis une page d'accueil mobile-first, en français, pour Champ Libre : une plateforme de camping entre particuliers, concurrente d'Hipcamp.
>
> Sur la page : 1) nom Champ Libre, 2) une phrase d'angle en une ligne, 3) un bouton « Voir les campings » (lien # pour l'instant), 4) un pied de page avec « Mentions légales » (lien #).
>
> Contraintes : site statique simple (HTML/CSS ou Astro), lisible sur iPhone, aucun paiement, aucun compte, aucune dépendance payante. Tu pousses sur une branche, tu ouvres une pull request si possible.
>
> C'est fini quand : j'ouvre le lien de préview (ou la PR) sur mon iPhone et je vois les 4 éléments ci-dessus, sans panier ni prix inventé.

C'est réussi si tu as recopié le brief sans l'envoyer.
</div>

<div class="box info" markdown="1">
Ce brief suit la règle du skill code-changes : problème + contraintes + critère de fin. Pas de « change la ligne 12 ».
</div>

<div class="pieuvre" data-reaction="reussite" markdown="1">Brief clair. L'agent peut travailler sans te rappeler.</div>

<div class="fin" markdown="1">
## En résumé

- Quoi, contraintes, c'est fini quand.
- Le Bâtisseur : brief -> agent de code -> vérifier -> corriger (cloud ou ordinateur : même brief).
- Ton brief Champ Libre est prêt pour le lancement.
</div>
