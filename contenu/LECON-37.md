# Leçon 37 : Organise une flotte de bots avec un chef d'orchestre

<p class="chapeau">Dix bots qui te parlent tous, c'est du bruit. Un chef d'orchestre, une seule porte d'entrée.</p>

## Le plus petit effectif utile

La doc, dans l'ordre :

1. Un bot responsable du résultat de bout en bout.
2. Un autre bot seulement pour un rôle spécialisé stable.
3. Un groupe quand le relais doit être visible.
4. Les actions externes derrière une limite de validation claire.

## Le chef d'orchestre

Exemple : **Yvan**. Tu lui parles. Il donne la consigne au bon spécialiste, vérifie, te livre.

Un seul responsable à chaque étape. Trop de relais en parallèle = doublons et bruit.

<div class="box info" markdown="1">
Exercice sur papier. Ta vraie flotte ne change pas.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans bot.

Flotte fictive de Marc : Le siphon, Le devis, un bot « Stock », un bot « Site ».

1. Nomme le chef d'orchestre et son métier en une ligne.
2. Pour chaque spécialiste : une ligne « reçoit … -> rend … ».
3. Écris 2 règles du chef. Forme : « Je … seulement si … . »
4. Écris la limite de validation commune. Forme : « Aucun … sans l'OK de Marc. »

Exemple (autre sujet) : « Le chef de salle reçoit la commande -> la donne à la cuisine. »

**C'est réussi si :** 1 chef (1) ; 4 lignes reçoit/rend (2) ; 2 règles (3) ; 1 limite (4).
</div>

<div class="box corrige" markdown="1">
**Chef :** L'atelier — reçoit tout de Marc, confie, vérifie, livre.  
Le siphon : SMS -> fiche. Le devis : fiche -> brouillon sans prix. Stock : CSV -> liste à commander. Site : demande -> changement de page en brouillon.  
**Règles :** Je préviens Marc seulement s'il a une action à faire. Je confie une étape à un seul bot.  
**Limite :** aucun envoi, achat ou mise en ligne sans l'OK de Marc.
</div>

<div class="fin" markdown="1">
## En résumé

- Un responsable de bout en bout, des spécialistes stables.
- Le chef parle, les autres travaillent.
- Une limite commune.

**Bravo !** Leçon 38 : les tests qui rejouent.
</div>

<small>Sources : docs.x.ai/grok-bot/bots · docs.x.ai/grok-bot/chat-and-collaboration (lues le 15/10/2026).</small>
