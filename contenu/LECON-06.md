# Leçon 6 : Prépare une demande avec des fichiers

<p class="chapeau">Une facture. Une photo. Le bot invente un chiffre. Écris la demande qui l'en empêche.</p>

## Le cas de Marc

Marc reçoit des factures fournisseurs et des tickets photo. Il veut un tableau en CHF. **Aucun chiffre inventé.**

Lire des factures n'est pas le métier de Le siphon. Tu travailles avec ton **bot principal**.

Fichiers d'exercice (fictifs) : `facture-fictive-imprimerie-exemple.pdf` et `ticket-fictif-cafe-exemple.png`. Sur le Bureau.

## Le fichier ne parle pas

Chaque pièce jointe : **ce que c'est** + **à quoi ça sert**. Puis : « Ne modifie pas les originaux. »

Résultat vérifiable : un tableau (colonnes nommées) + une liste à part pour le **déduit** et le **pas pu vérifier**. Mot fixe pour l'illisible.

<div class="box erreur" markdown="1">
Laisser le bot « deviner » un chiffre. Non : mot fixe, toujours le même.
</div>

<div class="box atoi" markdown="1">
**Exercice 1 : nomme chaque fichier.** Sans le bot.

1. Ouvre les deux fichiers.
2. « Le PDF est … . Sers-t'en pour … . »
3. « La photo est … . Sers-t'en pour … . »
4. Une phrase qui commence par « Ne … ».

Exemple : « Le PDF est le menu du restaurant Exemple. Sers-t'en pour relever chaque plat. »

**C'est réussi si :** ce que c'est + à quoi ça sert × 2 ; « Ne modifie pas les originaux. »
</div>

<div class="box corrige" markdown="1">
Le PDF est une facture de l'Imprimerie Exemple SA. Sers-t'en pour relever chaque ligne.  
La photo est un ticket du Café Exemple. Sers-t'en pour relever chaque achat.  
Ne modifie pas les originaux.
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : assemble.** Sans le bot.

1. 7 colonnes : Fichier | Fournisseur | Date | Désignation | Quantité | Prix unitaire CHF | Montant CHF. (`|` = Option+Maj+L)
2. « Une ligne par … . Recopie les chiffres … . »
3. « Si tu ne peux pas lire un chiffre, tu écris … , tu n'inventes rien. »
4. Liste à part : « Déduit » et « Pas pu vérifier » + vérifie les calculs.
5. « Rends le tableau … et en fichier CSV. »
6. Tout dans Notes. **N'envoie rien.**

**C'est réussi si :** 7 colonnes ; mot fixe ; liste déduit / pas vérifié ; CSV demandé ; note non envoyée.
</div>

<div class="box corrige" markdown="1">
Rends un tableau : Fichier | Fournisseur | Date | Désignation | Quantité | Prix unitaire CHF | Montant CHF.  
Une ligne par article. Recopie les chiffres tels quels.  
Si tu ne peux pas lire un chiffre, tu écris « illisible », tu n'inventes rien.  
Sous le tableau : « Déduit » et « Pas pu vérifier ». Vérifie les calculs. Signale chaque écart.  
Rends le tableau et un fichier CSV.
</div>

<div class="box attention" markdown="1">
Garde cette note. Leçon 7 : nouvelle conversation, bot principal.
</div>

<div class="fin" markdown="1">
## En résumé

- Chaque fichier = ce que c'est + à quoi ça sert.
- Tableau vérifiable + « illisible » + liste des doutes.
- Prépare sans envoyer.

**Bravo !** Leçon 7 : envoie et vérifie.
</div>
