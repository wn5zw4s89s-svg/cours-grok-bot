# Projet 3, leçon 4 · La routine de nuit

Objectif : à la fin, ton bot cherche des prospects chaque matin à 6 h, et tu l'as vu tourner une fois.

## Étape 1 · Prépare la demande (2 min)

Une **routine** tourne seule, à heure fixe, même app fermée. Une bonne demande dit : quand, quoi chercher, quoi rendre, ne rien poster, quoi faire si ça échoue.

Chaque exécution consomme de l'usage. Une fois par jour, c'est raisonnable. L'heure suit ton réglage **Timezone** : Settings -> General -> Timezone (à vérifier sur ton écran).

<div class="box atoi" markdown="1">
**À toi :** copie ce modèle dans tes Notes. Change l'heure si tu veux.

> Crée une routine : chaque jour à 6 h, cherche sur X les posts publics des dernières 24 h qui collent à ta rubrique Prospects. Garde les 5 meilleurs : lien, résumé, pourquoi, brouillon de réponse. Ne poste rien. Si la recherche échoue, dis-le au lieu d'inventer.

C'est réussi si ton modèle a ton heure et le Timezone est le tien.
</div>

## Étape 2 · Crée-la (2 min)

<div class="box atoi" markdown="1">
**À toi :** envoie ton modèle à ton bot. Lis sa réponse.

C'est réussi si le bot confirme l'heure, la tâche et la prochaine exécution.
</div>

<div class="box corrige" markdown="1">
**Exemple de réponse :** « Routine créée. Chaque jour à 6 h. Prochaine : demain 6 h. Résultat dans ce chat. »
</div>

## Étape 3 · Teste-la (2 min)

Une routine neuve ne tourne pas à sa création. Elle attend sa prochaine heure. Un test la lance tout de suite, et consomme de l'usage.

<div class="box atoi" markdown="1">
**À toi :** copie ce bloc et envoie-le à ton bot :

> Lance un test de cette routine maintenant.

C'est réussi si le test rend une liste avec liens et brouillons, et rien de posté.
</div>

<details class="solution"><summary>Voir la solution</summary><div class="box corrige" markdown="1">

**Ce que tu dois voir :** 5 posts, 5 liens, 5 brouillons.

**Si le test ne part pas :** redemande le test à ton bot ; le bouton **Test** est sur ordinateur.

</div></details>

<div class="pieuvre" data-reaction="reussite" markdown="1">Je chasserai cette nuit. Projet 3, leçon 5 : le rapport du matin.</div>
