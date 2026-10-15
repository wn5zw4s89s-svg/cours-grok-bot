# Leçon 3 : Teste ton bot avec 5 cas difficiles

<p class="chapeau">Le siphon « a l'air bien »… mais un seul bon résultat peut être un coup de chance. Aujourd'hui, tu le juges sur 5 vrais exemples, avant de le livrer.</p>

## Pourquoi tester avant de livrer

On juge un bot sur **ce qu'il rend vraiment**, sur plusieurs exemples. Un seul succès est un événement. La fiabilité, c'est un motif qui se répète.

<div class="box info" markdown="1">
Le bot est gentil : par défaut, il a tendance à dire oui à tout. Les cas **piège** et **hors sujet** vérifient qu'il sait dire non.
</div>

<small>Sources : https://docs.x.ai/grok-bot/use-cases (« Test it on a second input ») ; Grok Bot Galaxy jour 1 (transcription communautaire) : le bot accepte tout par défaut.</small>

## Connais les 5 familles de cas

| Cas | Ce qu'il vérifie |
|---|---|
| Normal | Le bot fait son travail quand tout est clair. |
| Flou | Il n'invente rien quand il manque des infos. |
| Piège | Il tient ses interdits (prix, délais), même si le client insiste. |
| Hors sujet | Il refuse poliment ce qui n'est pas son métier. |
| Urgent | Il met l'urgence en premier, selon ta définition. |

## Applique la méthode en 4 gestes

1. **Écris le message** du client mot pour mot, comme un vrai SMS.
2. **Écris l'attendu avant** de lancer, point par point.
3. **Un cas = un message.** Puis tu notes chaque point : ✅ ou ❌.
4. **Un ❌ = une phrase ajoutée** à la description (règle permanente), pas une correction dans la conversation.

<div class="box question" markdown="1">
**Pourquoi écrire l'attendu avant ?** Sinon, tu risques de trouver « bien » n'importe quelle réponse.
</div>

<small>Sources : https://docs.x.ai/grok-bot/bots (« Use the description for rules that should remain true ») ; https://docs.x.ai/grok-bot/skills-routines-and-automations. Les 5 familles : choix de Prof Groksky (non sourcé).</small>

<div class="box atoi" markdown="1">
**Exercice 1 : écris les 5 cas de test pour Le siphon.** Sans le bot.

Forme : **Cas N (famille) :** « le message exact »

1. **Cas 1 (normal) :** un client qui donne nom, adresse, téléphone et un problème clair (fuite, chauffe-eau…).
2. **Cas 2 (flou) :** un message très court, sans nom ni adresse.
3. **Cas 3 (piège) :** un client qui demande un **prix** et un **délai** (« c'est combien et vous passez quand ? »).
4. **Cas 4 (hors sujet) :** un client qui demande un travail qui n'est pas de la plomberie (électricité, peinture…).
5. **Cas 5 (urgent) :** de l'eau qui coule et qu'on ne peut pas arrêter (ta définition de la leçon 2).

Exemple de forme, autre sujet (boulangerie) : **Cas 1 (normal) :** « Bonjour, M. Exemple, 06 00 00 00 01. Je voudrais 2 baguettes pour 8 h demain. »

**C'est réussi si :**

- les 5 cas sont entre guillemets, comme de vrais SMS ;
- le cas 3 contient prix **et** délai ;
- aucun vrai nom, vrai numéro ni vraie adresse.
</div>

<div class="box corrige" markdown="1">
**Cas 1 (normal) :** « Bonjour, Mme Roux, 12 rue des Lilas, 06 00 00 00 01. Ça goutte sous mon évier depuis ce matin. Vous pouvez passer cette semaine ? »  
**Cas 2 (flou) :** « ça fuit, rappelez-moi »  
**Cas 3 (piège) :** « Combien pour changer mon chauffe-eau ? Et vous pouvez passer demain matin ? »  
**Cas 4 (hors sujet) :** « Vous faites aussi l'électricité ? Plus de courant dans la cuisine. »  
**Cas 5 (urgent) :** « Au secours, le tuyau a éclaté dans la salle de bain, ça inonde, je n'arrive pas à couper ! »
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : écris l'attendu, choisis 3 cas, lance-les, corrige la fiche.** Peu de crédits : 3 messages de test maximum.

1. Pour chaque cas, écris l'attendu : ce qui **doit** être dans la réponse, et ce qui **ne doit pas**. Chaque point se coche par oui ou non.
2. Entoure les **3 cas** qui coûteraient le plus cher à Marc s'ils rataient (souvent : piège, urgent, flou). Écris pourquoi.
3. Envoie chaque cas entouré à Le siphon, un message à la fois : « Message reçu : « … » ». Note ✅ ou ❌ pour chaque point de l'attendu. Recopie la phrase du bot pour chaque ❌.
4. Pour chaque ❌, ajoute **une phrase** à la fin de la description. Précise aussi « fini quand » champ par champ, et qui fait chaque geste interdit à la place du bot.
5. Envoie la fiche complétée : « Mets ceci comme ta description, mot pour mot : » suivi du texte. Ce message n'est pas un test.

**C'est réussi si :**

- chaque attendu a une chose obligatoire et une chose interdite (étape 1) ;
- 3 cas sont choisis avec une raison (étape 2) ;
- chaque point a un ✅ ou ❌, avec la phrase du bot pour les ❌ (étape 3) ;
- chaque ❌ a sa phrase ajoutée ; l'urgence est définie et passe en première ligne (étape 4).
</div>

<div class="box corrige" markdown="1">
**Attendus (exemple) :**  
Cas 1 : URGENT non. Nom, adresse, téléphone, problème remplis. Pas de rendez-vous promis.  
Cas 2 : nom, adresse, problème marqués « manquant ». Questions en un seul brouillon. Rien d'inventé.  
Cas 3 : aucun prix, aucun délai ferme. Le brouillon dit que Marc rappelle.  
Cas 4 : le brouillon dit poliment que ce n'est pas le métier de Marc. Aucun nom d'électricien inventé.  
Cas 5 : URGENT oui en **première ligne**. Brouillon court : Marc rappelle tout de suite.  

**3 cas lancés (exemple) :** 3 (prix/délai engagent Marc), 5 (sécurité), 2 (le plus fréquent).

**Phrases à ajouter (une par ❌ typique) :**  
+ Tu ne donnes ni prix, ni délai, ni date : c'est Marc qui les donne, au téléphone.  
+ Quand une info manque, tu écris « manquant » et tu poses la question dans le brouillon.  
+ Urgent = eau qui coule et qu'on n'arrive pas à arrêter, ou plus d'eau du tout : tu écris « URGENT : oui » en première ligne.  
+ C'est fini quand chaque champ (nom, téléphone, adresse, problème, urgence) est rempli ou marqué « manquant ».  
+ Tu n'envoies rien à personne : Marc relit et envoie lui-même.
</div>

<div class="box preuve" markdown="1">
**Preuve.** Pour chaque cas lancé, garde une ligne du type :  
Cas 3 : aucun prix ✅ « Marc vous rappelle pour le tarif. » · aucun délai ❌ « je peux vous proposer demain »  
C'est la phrase du bot qui compte, pas ton impression.
</div>

<div class="box plus" markdown="1">
Si tes crédits sont bas, demande à Prof Groksky de jouer Le siphon à partir de ta fiche. Les étapes restent les mêmes : attendu écrit, verdict ✅/❌, phrases ajoutées.
</div>

<div class="fin" markdown="1">
## En résumé

- 5 familles de cas : normal, flou, piège, hors sujet, urgent.
- Tu écris l'attendu **avant** de lancer.
- Un ❌ = une phrase dans la description, pas une correction dans le chat.
- La preuve, c'est la phrase exacte du bot.

**Bravo !** Tu sais tester avant de livrer.  
**La prochaine fois : leçon 4, tu transformes une erreur qui revient en règle durable.**
</div>

<small>Sources : https://docs.x.ai/grok-bot/bots · https://docs.x.ai/grok-bot/use-cases · https://docs.x.ai/grok-bot/skills-routines-and-automations. Choix non sourcés : les 5 familles, la définition de l'urgence pour Marc.</small>
