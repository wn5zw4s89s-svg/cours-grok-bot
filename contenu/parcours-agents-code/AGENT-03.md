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

Le Bâtisseur construit le site de ce cours. Sa méthode, d'après sa fiche :

1. Il rédige un brief clair.
2. Il lance un agent cloud (outil CloudAgent).
3. Il vérifie le résultat.
4. Il fait corriger.

Il ne code pas sur les ordinateurs de Joseph.

Exemple public : dépôt `wn5zw4s89s-svg/cours-grok-bot`, site https://wn5zw4s89s-svg.github.io/cours-grok-bot/

<div class="box atoi" markdown="1">
**À toi :** Le Bâtisseur code-t-il lui-même sur ton Mac, ou lance-t-il un agent cloud ?

C'est réussi si tu nommes une seule méthode.
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Il lance un agent cloud. Il rédige le brief, vérifie, fait corriger.

</div></details>

## Étape 3 · Brief réel du Bâtisseur (2 min)

<!-- PLACEHOLDER — ne pas inventer. Remplacer dès que Le Bâtisseur dépose le fichier. -->

<div class="box attention" markdown="1">
**Brief réel du Bâtisseur à insérer.**

Le Bâtisseur doit fournir ici un vrai brief d'agent cloud, avec :
- le texte exact envoyé à l'agent ;
- ce qu'il a vérifié ensuite ;
- ce qu'il a fait corriger.

Cherche d'abord un fichier brief sous `/workspace/grokbot-live/`. S'il n'y est pas encore, cette case reste en attente. N'invente rien.
</div>

<div class="box atoi" markdown="1">
**À toi :** quand le brief réel est collé ci-dessus, lis-le. Repère les 3 parties : quoi, contraintes, c'est fini quand.

C'est réussi si tu cites une phrase de chaque partie (ou tu notes « brief pas encore là »).
</div>

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
- Le Bâtisseur : brief -> agent cloud -> vérifier -> corriger.
- Ton brief Champ Libre est prêt pour le lancement.
</div>
