# Projet 2, leçon 5 · Crée une routine qui lit le courrier

Objectif : à la fin, Lumen s'occupe seul de chaque nouvel email, et te fait un point chaque soir.

## Étape 1 · Comprends la routine (1 min)

Un email qui arrive ne réveille pas Lumen.

Une **routine**, c'est une tâche que le bot fait seul : à chaque email reçu, ou à une heure fixe. Elle tourne dans le cloud, même app fermée.

Chaque exécution consomme de l'usage de ton forfait. Une routine sur chaque email tourne à chaque email. Il faut au moins 5 minutes entre deux exécutions.

<div class="box atoi" markdown="1">
**À toi :** sans routine, Lumen réagit-il seul à un nouvel email ?

C'est réussi si tu réponds par oui ou par non.
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Non. Sans routine, Lumen attend que tu lui parles.

</div></details>

## Étape 2 · Crée la routine email (2 min)

<div class="box atoi" markdown="1">
**À toi :** copie ce bloc et envoie-le à Lumen :

> Crée une routine : à chaque email reçu, range-le dans une pile : À moi (Léa doit décider), Prêt (tu peux préparer la réponse) ou Bruit (rien à faire). Résume-le en une ligne, et s'il est Prêt, prépare un brouillon de réponse. Tu n'envoies rien.

C'est réussi si Lumen confirme la routine.
</div>

<div class="box corrige" markdown="1">
**Exemple de réponse :** « Routine créée : à chaque email reçu, je trie, je résume et je prépare un brouillon si c'est Prêt. »
</div>

## Étape 3 · Déclenche-la (3 min)

<div class="box atoi" markdown="1">
**À toi :** tu joues Nora, une cliente de Léa. Depuis l'app Mail, envoie cet email à ton adresse de bot (dans tes Notes). Message :

> Bonjour, vous livrez en Belgique ? Nora

Attends quelques minutes, sans écrire à Lumen. Puis ouvre la conversation avec Lumen.

C'est réussi si tu y trouves le résumé de l'email de Nora et un brouillon, sans l'avoir demandé.
</div>

<details class="solution"><summary>Voir la solution</summary><div class="box corrige" markdown="1">

**Ce que tu dois voir :** « Nouvel email, Prêt : Nora demande si on livre en Belgique », et un brouillon. L'endroit exact où ça s'affiche : à vérifier sur ton écran.

**Si ça rate :** touche le nom de Lumen en haut -> son profil -> **Routines** -> la routine. **Run history** montre chaque exécution : réussie, ou ratée avec la raison.

</div></details>

## Étape 4 · Ajoute un point du soir (3 min)

L'heure suit ton réglage **Timezone** : Settings -> General -> Timezone (à vérifier sur ton écran). Vérifie-le avant.

Une routine neuve attend sa première heure. Pour la voir tout de suite, tu la testes. Un test consomme aussi de l'usage.

<div class="box atoi" markdown="1">
**À toi :** copie ce bloc et envoie-le à Lumen :

> Crée une routine : chaque jour à 18 h, fais-moi le point du courrier du jour, pile par pile. Puis lance un test de cette routine maintenant.

C'est réussi si Lumen confirme la routine de 18 h et que tu reçois un point de test.
</div>

<details class="solution"><summary>Voir la solution</summary><div class="box corrige" markdown="1">

**Ce que tu dois voir :** « Routine créée : chaque jour à 18 h. » puis un point : À moi, Prêt, Bruit.

**Si le test ne part pas :** redemande le test à ton bot ; le bouton **Test** est sur ordinateur.

</div></details>

<div class="box info" markdown="1">
Pour voir ou arrêter tes routines : touche le nom de Lumen -> son profil -> **Routines**. Couper **Active** (à vérifier sur ton écran) la met en pause. Supprimer une routine est définitif.
</div>

<div class="pieuvre" data-reaction="reussite" markdown="1">Lumen travaille même quand l'app est fermée.</div>
