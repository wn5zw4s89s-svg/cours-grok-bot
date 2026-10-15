# Leçon 12 : Écris une recette réutilisable

<p class="chapeau">Tu réexpliques la même méthode à chaque fois. Écris-la une fois. Le bot la rejoue.</p>

## Un skill, c'est une recette

Un **skill** = des instructions réutilisables pour faire une tâche.

Il sert à **tous tes bots** : une seule bibliothèque privée.

D'abord une tâche réussie une fois. Ensuite le skill. Après seulement, l'automatisation.

## Les 6 rubriques de la doc

| Rubrique | Question |
|---|---|
| Quand | Dans quel cas l'utiliser ? |
| Entrées et accès | De quoi a-t-il besoin ? |
| Déroulé | Quelles étapes, dans quel ordre ? |
| Vérification | Comment valider le résultat ? |
| Sortie | Que rend-il ? |
| Validation | Qu'est-ce qui demande ton OK ? |

**Exemple** (boulangerie) : skill `liste-prod`. Quand : chaque commande reçue avant 16 h. Vérification : chaque commande est dans le tableau ou dans « à confirmer ». Validation : toute confirmation au client.

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans le bot.

Cas : Marc veut savoir quoi recommander. Fichier : `fournitures-test.csv` (à télécharger sur cette page).

1. Nom du skill : 2 ou 3 mots reliés par des tirets (ex. `liste-prod`).
2. Remplis les 6 rubriques. Une ou deux phrases chacune.
3. Écris la sortie attendue pour `fournitures-test.csv` : les articles sous leur seuil.

**C'est réussi si :** nom + 6 rubriques (étapes 1-2) ; la sortie attendue liste les bons articles (étape 3).
</div>

<div class="box corrige" markdown="1">
**Nom :** `stock-a-commander`  
**Quand :** Marc demande quoi recommander.  
**Entrées et accès :** un fichier CSV de stock (colonnes quantité et seuil).  
**Déroulé :** 1) lire chaque ligne 2) comparer stock et seuil 3) garder ce qui est sous le seuil.  
**Vérification :** chaque article gardé a un stock plus petit que son seuil.  
**Sortie :** une ligne par article : nom – stock / seuil – fournisseur.  
**Validation :** aucune commande passée, aucun e-mail au fournisseur sans l'OK de Marc.  
**Sortie attendue :** Joint fibre 1/2" (3/5) · Siphon évier PVC 40 mm (2/4) · Mitigeur lavabo (1/2).
</div>

<div class="fin" markdown="1">
## En résumé

- Skill = recette réutilisable, partagée par tous tes bots.
- 6 rubriques : Quand, Entrées, Déroulé, Vérification, Sortie, Validation.
- Tâche réussie d'abord, skill ensuite.

**Bravo !** Leçon 13 : enregistre et lance ton skill.
</div>

<small>Source : docs.x.ai/grok-bot/skills-routines-and-automations (lue le 15/10/2026).</small>
