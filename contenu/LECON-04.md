# Leçon 4 : Transforme une erreur qui revient en règle

<p class="chapeau">Tu corriges Le siphon dans le chat… et le lendemain, la même erreur revient sur un autre message. Aujourd'hui, tu apprends à écrire une règle qui tient pour tout le métier.</p>

## Vois l'erreur qui revient

Hier, Marc a collé : « Combien pour changer mon robinet ? »  
Le siphon a répondu avec un montant.  
Quelqu'un a écrit dans la conversation : « Pour le robinet, ne donne pas le prix. »

Aujourd'hui, nouveau message : « C'est quoi le tarif d'un débouchage de WC ? »  
Le siphon a encore écrit un montant.

La description, elle, n'a pas changé. La correction était **trop étroite** : elle parlait d'un seul travail.

<div class="box attention" markdown="1">
Cette leçon ne demande **aucun message** au bot. Tes crédits restent intacts. Tu gardes ta règle sous la main : c'est elle que tu mettras à l'épreuve en leçon 5.
</div>

## Range la règle au bon endroit

Une phrase dite dans la conversation règle surtout le message en cours. Elle peut être trop étroite, oubliée, ou absente de la fiche.

La **description** est l'endroit des règles qui doivent rester vraies : un interdit, une limite, une habitude de travail.

<div class="box info" markdown="1">
Contrôle après chaque correction : tu relis la description. Si ta phrase n'y est pas, la règle n'est pas enregistrée. Ce contrôle ne coûte aucun crédit.
</div>

<small>Source : https://docs.x.ai/grok-bot/bots (« Use the description for rules that should remain true » ; « Update the description when you discover a durable preference, boundary, or responsibility »).</small>

## Distingue « une fois » et « une règle »

Quand Marc te reprend, pose une seule question : **est-ce que ça reviendra avec un autre client ?**

- **Une fois.** Ça concerne cette personne, aujourd'hui. Exemple : « Rappelle M. Test en premier cet après-midi. » Tu le fais, tu ne l'écris pas dans la fiche.
- **Une règle.** Ça reviendra. Exemple : le bot donne encore un prix, sur un autre travail. Tu l'écris dans la description.

Le piège : « Pour le robinet, ne donne pas le prix. » On a corrigé **un** cas. Le travail d'après, l'erreur revient.

## Écris la phrase qui tient

Une règle tient en une phrase, avec trois morceaux :

1. **Dans quel cas** : tous les prix, pas un robinet.
2. **Ce que le bot ne fait pas.**
3. **Qui le fait à la place.**

Forme : « Prix et devis -> c'est Marc qui les donne, au téléphone. Toi, tu n'écris aucun montant. »

<div class="schema">
  <div class="etape"><b>Erreur</b>un prix donné</div>
  <div class="fleche">-></div>
  <div class="etape"><b>Élargir</b>tous les prix</div>
  <div class="fleche">-></div>
  <div class="etape"><b>Qui</b>Marc à la place</div>
  <div class="fleche">-></div>
  <div class="etape"><b>Fiche</b>description</div>
</div>

<div class="box atoi" markdown="1">
**Exercice 1 : classe « une fois » ou « une règle ».** Sans le bot.

Marc a écrit trois corrections. Pour chacune, **une seule ligne**.  
Forme : **Correction A :** une règle, parce que…

1. Classe A : « Signe les brouillons Marc, pas Le siphon. »
2. Classe B : « Le client de 14 h, M. Test, rappelle-le en premier aujourd'hui. »
3. Classe C : « Tu as encore donné un prix, cette fois pour le débouchage. Arrête avec les prix. »

Exemple de forme, autre sujet : **Correction X :** une fois, parce que ça concerne seulement la commande de ce matin.

**C'est réussi si :**

- les 3 lignes suivent la forme ;
- B est « une fois », A et C sont « une règle » ;
- aucune ligne ne contient un montant.
</div>

<div class="box corrige" markdown="1">
**Correction A :** une règle, parce que tous les brouillons doivent être signés Marc, pas seulement celui d'aujourd'hui.  
**Correction B :** une fois, parce que ça concerne un client précis, aujourd'hui seulement.  
**Correction C :** une règle, parce que le prix est revenu sur un autre travail.
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : élargis la règle trop étroite.** Sans le bot.

La phrase trop étroite : « Pour le robinet, ne donne pas le prix. »

1. Écris ce que cette phrase oublie. Forme : « Elle oublie : … »  
   Question-guide : si je change le travail (débouchage, chauffe-eau…), la phrase tient-elle encore ? Qui donne le prix à la place du bot ?
2. Écris la règle large, une seule phrase. Forme : « Prix et devis -> c'est … qui …. Toi, tu …. »
3. Écris où tu la ranges. Forme : « Je la mets dans : … »

Exemple de forme, autre sujet (garage) : « Prix et devis -> c'est Nadia qui les donne. Toi, tu n'écris aucun montant. »

**C'est réussi si :**

- la règle ne cite aucun appareil et aucun travail précis (étape 2) ;
- elle dit qui donne le prix à la place du bot (étape 2) ;
- elle va dans la description, pas dans un message de conversation (étape 3).
</div>

<div class="box corrige" markdown="1">
**Elle oublie :** les autres travaux (débouchage, chauffe-eau…), et qui donne le prix à la place du bot.  
**Règle :** Prix et devis -> c'est Marc qui les donne, au téléphone. Toi, tu n'écris aucun montant.  
**Je la mets dans :** la description de Le siphon, pas la conversation.
</div>

<div class="box plus" markdown="1">
Garde ta règle sous la main : c'est elle que tu ranges dans la fiche et que tu testes avec un message **nouveau** en leçon 5.
</div>

<div class="fin" markdown="1">
## En résumé

- Une correction dans le chat ne suffit pas : la règle durable va dans la description.
- « Une fois » = aujourd'hui, cette personne. « Une règle » = ça reviendra.
- Une règle trop étroite (un seul travail) laisse le motif entier.
- La phrase qui tient : cas large + interdit + qui le fait à la place.

**Bravo !** Tu as une règle durable pour Le siphon.  
**La prochaine fois : leçon 5, tu la prouves sur le vrai bot avec un message nouveau.**
</div>

<small>Sources : https://docs.x.ai/grok-bot/bots · https://x.ai/bot/guides/grok-bot-101. Choix non sourcés : le scénario robinet/débouchage, le contrôle « pas dans la description = pas enregistré ».</small>
