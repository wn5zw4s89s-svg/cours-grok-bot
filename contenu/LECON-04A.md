# Leçon 4A : Transforme deux fichiers en demande claire pour ton bot

> **On reprend ici**
> En 3B, ta règle est entrée dans la fiche de Le pont et tu l'as testée. Un exercice de la 3B est resté ouvert ? Finis-le, puis reviens ici.

<p class="chapeau">Tu envoies une facture à ton bot avec « fais-moi un tableau »… et il invente un chiffre qu'il n'arrivait pas à lire. 😬 Aujourd'hui, tu apprends à écrire la demande qui empêche ça.</p>

<div class="objectifs" markdown="1">
**À la fin de cette leçon, tu sauras :**

- dire au bot ce qu'est chaque fichier ;
- décrire le tableau exact que tu veux ;
- lui faire avouer ce qu'il n'a pas pu lire.

<span class="niveau">Niveau : facile · Aucun message au bot, tes crédits restent intacts.</span>
</div>

## La cliente du jour : Léa

Léa Favre (fictive) est graphiste indépendante en Suisse romande. Chaque mois, elle reçoit des factures en PDF et prend ses tickets en photo. Elle veut un tableau pour sa fiduciaire (son comptable), en francs suisses (CHF), **sans aucun chiffre inventé**.

Tes deux fichiers d'exercice arrivent avec cette leçon. Enregistre-les sur le Bureau du Mac, tu t'en resserviras en 4B :

- `facture-fictive-imprimerie-exemple.pdf` : une facture ;
- `ticket-fictif-cafe-exemple.png` : la photo d'un ticket de caisse.

## Comme un dossier confié à un comptable

Imagine que tu poses une enveloppe sur le bureau d'un comptable, sans un mot. Il ne sait pas ce qu'il y a dedans, ni ce que tu attends. Avec un bot, c'est pareil : **le fichier ne parle pas tout seul**, c'est ta phrase qui l'explique.

<div class="schema">
  <div class="etape"><b>📄 Fichiers</b>facture, photo</div>
  <div class="fleche">-></div>
  <div class="etape"><b>✍️ Demande</b>quoi + résultat</div>
  <div class="fleche">-></div>
  <div class="etape"><b>🤖 Bot</b>lit et vérifie</div>
  <div class="fleche">-></div>
  <div class="etape"><b>📊 Tableau</b>+ doutes</div>
</div>

## 1. Dire ce qu'est chaque fichier

Pour chaque pièce jointe, une phrase : **ce que c'est** et **à quoi elle sert**. Puis tu ajoutes « Ne modifie pas les originaux ».

<div class="box info" markdown="1">
C'est la méthode de la doc officielle : « Tell the Bot what each attachment is and how it should use it » (dis au bot ce qu'est chaque pièce jointe et comment s'en servir).
</div>

## 2. Exiger un résultat vérifiable

« Fais-moi un résumé » ne se vérifie pas. Tu nommes le **livrable** (un tableau, avec ses colonnes) et tu demandes une **liste à part** pour ce qui est **déduit** (calculé par le bot, pas écrit) et ce qu'il n'a **pas pu vérifier**.

<div class="box question" markdown="1">
**Pourquoi séparer ce qui est déduit ?** Une déduction peut être juste. Mais Léa doit savoir que ce chiffre n'était pas écrit sur la facture.
</div>

**Exemple.** Tu envoies au bot : « Une ligne par article. Si tu ne peux pas lire un chiffre, écris « illisible ». Refais les calculs et signale chaque écart. » Voici ce qu'il pourrait rendre pour un autre client, un fleuriste de Ville-Test (exemple inventé) :

<div class="apercu" markdown="1">

| Fichier | Désignation | Qté | Prix unit. CHF | Montant CHF |
|---|---|---|---|---|
| facture | Vases en verre | 4 | 15.00 | 70.00 |
| facture | Ruban, 10 m | 2 | 6.00 | 12.00 |
| ticket | Café | 1 | <span class="flag">illisible</span> | <span class="flag">illisible</span> |

<p class="legende"><b>Pas pu vérifier :</b> Vases en verre, 4 × 15.00 = 60.00, mais la facture indique 70.00.</p>
</div>

Un chiffre illisible et un calcul faux sautent aux yeux : le bot ne les cache pas. À toi de trouver ceux de Léa en 4B.

<div class="box erreur" markdown="1">
Laisser le bot « deviner » un chiffre illisible. Exige toujours un **mot fixe**, le même partout, que Léa repère d'un coup d'œil.
</div>

<small>Source : https://docs.x.ai/grok-bot/files-and-results (« Attach files », « Ask for a reviewable result »), relue le 10/10/2026.</small>

---

<div class="box atoi" markdown="1">
**Exercice 1 : dire ce qu'est chaque fichier.** Tu n'écris rien au bot.

1. Ouvre les deux fichiers et regarde-les.
2. Écris une phrase pour le PDF : quel papier, de qui, et ce que le bot doit en tirer. Forme : « Le PDF est … . Sers-t'en pour … . » Exemple, autre sujet : « Le PDF est le menu du restaurant Exemple. Sers-t'en pour relever chaque plat et son prix. »
3. Même chose pour la photo : « La photo est … . Sers-t'en pour … . »
4. Écris la phrase qui interdit de toucher aux fichiers d'origine. Elle commence par « Ne … ».

**C'est réussi si :**

- chaque phrase dit ce que c'est et de qui il vient (étapes 2 et 3) ;
- chaque phrase dit à quoi il sert (étapes 2 et 3) ;
- la dernière phrase interdit de modifier les originaux (étape 4).
</div>

<div class="box corrige" markdown="1">
Le PDF est une facture de l'Imprimerie Exemple SA. Sers-t'en pour relever chaque ligne facturée.  
La photo est un ticket de caisse du Café Exemple. Sers-t'en pour relever chaque achat.  
Ne modifie pas les originaux.
</div>

<div class="box plus" markdown="1">
Ajoute le numéro et la date (« facture n° TEST-2026-014 du 02.10.2026 ») : le bot vérifie plus vite qu'il lit le bon fichier.
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : décrire le tableau, puis assembler ta demande.** Toujours sans le bot.

1. Écris les 7 colonnes, dans cet ordre : fichier d'origine, fournisseur, date, désignation (nom de l'article), quantité, prix unitaire CHF, montant CHF. Le trait `|` s'obtient avec Option+Maj+L. Exemple, autre sujet : « Rends un tableau avec ces colonnes : Jour | Ville | Météo »
2. Dis comment remplir : une ligne par fichier ou par article ? Chiffres recopiés ou arrondis ? Forme : « Une ligne par … . Recopie les chiffres … . »
3. Choisis un mot fixe pour un chiffre illisible. Forme : « Si tu ne peux pas lire un chiffre, tu écris … , tu n'inventes rien. »
4. Demande la liste à part et les calculs. Forme : « Sous le tableau, une liste à part, en deux parties : … et … . Vérifie aussi les calculs (…) et signale chaque écart. »
5. Demande aussi un fichier CSV (un tableau simple qui s'ouvre dans Excel ou Numbers). Forme : « Rends le tableau dans ta réponse et en fichier … . »
6. Colle bout à bout, dans l'app Notes (Cmd+C puis Cmd+V), tes phrases des exercices 1 et 2. Tu ne l'envoies pas.

**C'est réussi si :**

- les 7 colonnes sont là, dans l'ordre (étape 1) ;
- une ligne par article, chiffres recopiés tels quels (étape 2) ;
- un chiffre illisible donne un mot fixe, jamais un chiffre au hasard (étape 3) ;
- la liste sépare le déduit du non vérifié, et les calculs sont refaits (étape 4) ;
- le CSV est demandé (étape 5) ;
- ta demande complète est dans une seule note, non envoyée (étape 6).
</div>

<div class="box corrige" markdown="1">
Rends un tableau avec ces colonnes : Fichier | Fournisseur | Date | Désignation | Quantité | Prix unitaire CHF | Montant CHF.  
Une ligne par article. Recopie les chiffres tels qu'ils sont écrits.  
Si tu ne peux pas lire un chiffre, tu écris « illisible », tu n'inventes rien.  
Sous le tableau, une liste à part, en deux parties : « Déduit (pas écrit dans le fichier) » et « Pas pu vérifier ». Vérifie aussi les calculs (quantité × prix, sous-total, total) et signale chaque écart.  
Rends le tableau dans ta réponse et en fichier CSV.

**Ta note complète** = les 3 phrases du corrigé 1, puis ces 5 lignes.
</div>

<div class="box attention" markdown="1">
Garde bien cette note : c'est elle que tu colleras en leçon 4B, dans une **nouvelle conversation avec ton bot principal** (pas Le siphon, ton bot d'exercice : lire des factures n'est pas son métier).
</div>

<div class="fin" markdown="1">
## ✅ Ce que tu as réussi

- Tu sais dire au bot ce qu'est chaque fichier et à quoi il sert.
- Tu as décrit un tableau précis, avec un mot fixe pour l'illisible.
- Tu as obligé le bot à montrer ses doutes et ses calculs.
- Ta demande est prête, sans un seul crédit dépensé.

**La prochaine fois : leçon 4B, tu envoies ta demande et tu vérifies le tableau ligne par ligne.**
</div>

<small>Choix non sourcés : la cliente, la facture et le ticket fictifs, les noms des colonnes, le mot « illisible ».</small>
