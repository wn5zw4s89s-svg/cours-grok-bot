# Leçon 5 : Prouve ta règle sur le vrai bot

<p class="chapeau">Ta règle est écrite… mais est-ce qu'elle tient vraiment ? Aujourd'hui, tu la ranges dans la fiche de Le siphon et tu la testes avec un message qu'il n'a jamais vu.</p>

## Rappelle la fiche avant ta règle

C'est la fiche de **Le siphon** telle qu'elle était quand l'erreur du prix est revenue (version volontairement faible, pour l'exercice) :

> **Nom :** Le siphon  
> **Titre :** Aide pour les demandes clients  
> **Description :** Tu aides Marc, plombier, avec les messages de ses clients. Tu réponds de façon utile et rassurante. Tu peux donner une idée de prix pour aider. C'est fini quand tu as répondu. Ne fais rien de risqué.

Les deux messages qui ont raté : « Combien pour changer mon robinet ? » et « C'est quoi le tarif d'un débouchage de WC ? ». Les deux fois, le bot a écrit un montant.

Ta règle de la leçon 4 (ou la tienne) : « Prix et devis -> c'est Marc qui les donne. Toi, tu n'écris aucun montant. »

## Prouve avec un message nouveau

Une règle se prouve avec un **nouveau** message du même genre. Relire le message déjà corrigé ne prouve rien : le bot peut juste répéter ta dernière remarque.

Puis la règle va **dans la fiche**, et la vieille phrase qui l'autorisait disparaît. Tant que « tu peux donner une idée de prix » reste écrit, ta règle se bat contre elle.

<div class="box erreur" markdown="1">
Garder les deux phrases (« tu peux donner une idée de prix » + « tu n'écris aucun montant »). Le bot lit deux ordres contraires et peut choisir le mauvais.
</div>

<small>Sources : https://docs.x.ai/grok-bot/use-cases (« Test it on a second input ») ; https://docs.x.ai/grok-bot/bots (« Update the description… »).</small>

<div class="box atoi" markdown="1">
**Exercice 1 : prépare un nouveau message de preuve.** Sans le bot.

1. Écris un nouveau SMS fictif qui demande un prix. Pas de robinet, pas de débouchage. Question-guide : « Quel autre travail un plombier fait-il ? » (chauffe-eau, fuite de radiateur, joint de douche…). Faux nom, faux numéro (06 00 00 00 0X).  
   Exemple de forme, autre sujet (boulangerie) : « Bonjour, M. Exemple, 06 00 00 00 01. C'est combien, un gâteau pour 10 personnes ? »
2. Écris l'attendu **avant** d'imaginer la réponse : ce que la réponse **doit** contenir, et ce qu'elle **ne doit pas**. Chaque point se coche par oui ou non.
3. Dans ta règle de la leçon 4, retrouve la phrase qui interdit au bot de donner un prix (souvent celle qui commence par « Toi, … »). Recopie-la mot pour mot. Forme : « Ce qui bloque le prix : « … » »

**C'est réussi si :**

- le SMS n'est pas un des deux messages déjà vus (étape 1) ;
- chaque point de l'attendu se vérifie par oui ou non, et interdit tout montant (étape 2) ;
- aucun vrai nom, vrai numéro ni vraie adresse ;
- la phrase recopiée est celle de ta règle qui interdit le prix (étape 3).
</div>

<div class="box corrige" markdown="1">
**Cas nouveau :** « Bonjour, ici Mme Test, 06 00 00 00 10. Quel est le prix pour remplacer un chauffe-eau ? »  
**Attendu :** doit contenir : un brouillon signé Marc qui dit qu'il rappelle. Ne doit pas contenir : un montant.  
**Ce qui bloque le prix :** « Toi, tu n'écris aucun montant. »
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : range la règle dans la fiche, puis teste sur Le siphon.** Max 2 messages au bot.

Étapes 1 à 4 sans le bot. Étapes 5 et 6 : vrai bot.

1. Recopie la fiche d'origine dans Notes (Cmd+C / Cmd+V). Barre (ou supprime) la phrase : « Tu peux donner une idée de prix pour aider. »
2. À la fin de la description, ajoute une ligne « Je reprends avant : » avec quatre gestes et une flèche `->` : prix, conseil de réparation, rendez-vous, envoi du message. Pour chacun : qui le fait à la place du bot ?  
   Exemple de forme, autre sujet : « Remboursement -> c'est Paul qui le décide. »
3. Ajoute une ligne « Sortie, toujours dans cet ordre : » avec 5 rubriques : 1) URGENT 2) Client (nom, téléphone) 3) Problème 4) Infos manquantes 5) Brouillon.
4. Prédis la sortie de ton cas nouveau : 5 lignes, une par rubrique, dans le même ordre.
5. Ouvre le chat de **Le siphon**. Envoie (1er message) : « Mets ceci comme ta description, mot pour mot : » + ta description corrigée, **sans** la phrase barrée.
6. Envoie (2e message) ton SMS du cas nouveau. Compare à ta prédiction. Note deux points ✅ ou ❌, avec la phrase du bot pour chacun.  
   Forme : « Aucun montant : ✅ ou ❌ « phrase » — Signé Marc : ✅ ou ❌ « phrase » »

**Plan B, si un point est ❌.** Recopie la phrase du bot qui pose problème. N'envoie pas d'autre message : on la regarde ensemble au début de la leçon suivante. Ce n'est pas un échec : c'est ce que le test sert à trouver.

**C'est réussi si :**

- la vieille phrase sur les prix est barrée ou supprimée (étape 1) ;
- chaque geste interdit dit qui le fait à la place (étape 2) ;
- ta prédiction a les 5 lignes dans l'ordre (étape 4) ;
- Le siphon a reçu la description corrigée (étape 5) ;
- « aucun montant » et « signé Marc » ont chacun un ✅ ou ❌ avec la phrase du bot (étape 6) ;
- 2 messages envoyés au bot, pas plus.
</div>

<div class="box corrige" markdown="1">
**Description :** Tu aides Marc, plombier, avec les messages de ses clients. Tu réponds de façon utile et rassurante. ~~Tu peux donner une idée de prix pour aider.~~ C'est fini quand tu as répondu. Ne fais rien de risqué.  
**+ Je reprends avant :** prix et devis -> c'est Marc qui les donne. Conseil de réparation -> c'est Marc qui le donne. Rendez-vous -> c'est Marc qui le fixe. Envoi du message -> c'est Marc qui l'envoie.  
**+ Sortie, toujours dans cet ordre :** 1) URGENT : oui ou non ; 2) Client : nom, téléphone ; 3) Problème ; 4) Infos manquantes ; 5) Brouillon de réponse.

**Sortie prédite (exemple) :**  
1) URGENT : non.  
2) Client : Mme Test, 06 00 00 00 10.  
3) Problème : demande le prix d'un remplacement de chauffe-eau.  
4) Infos manquantes : marque et âge du chauffe-eau.  
5) Brouillon : « Bonjour, j'ai bien reçu votre message. Je vous rappelle pour en parler. Pouvez-vous me dire la marque et l'âge du chauffe-eau ? Marc »
</div>

<div class="box preuve" markdown="1">
**Preuve sur le vrai bot (exemple — recopie la tienne) :**  
Description envoyée (1er message). Cas nouveau envoyé (2e message).  
Aucun montant : ✅ « Marc vous rappelle pour vous donner le prix. »  
Signé Marc : ✅ « Bonne journée, Marc »  
Si un point est ❌ : plan B, phrase du bot recopiée, on reprend au début de la leçon suivante.
</div>

<div class="box plus" markdown="1">
Petits plus facultatifs : « au téléphone » après « c'est Marc qui les donne », « 3 phrases au plus, vouvoiement, signé Marc » pour le brouillon. Tu peux aussi préciser « fini quand » champ par champ, comme en leçon 3 : ce n'est pas demandé aujourd'hui.
</div>

<div class="fin" markdown="1">
## En résumé

- On prouve une règle avec un message **nouveau**, pas l'ancien SMS.
- La vieille phrase contraire doit disparaître de la fiche.
- Tu ranges la règle (Je reprends avant + Sortie), tu colles, tu testes.
- Seule la phrase du vrai bot compte comme preuve (✅/❌).

**Bravo !** Tu as terminé le niveau 1 : Le siphon a un métier, des tests, et une règle prouvée.  
**Ensuite : le quiz du niveau 1, puis le niveau 2 (fichiers, dictée, mémoire).**
</div>

<small>Sources : https://docs.x.ai/grok-bot/bots · https://docs.x.ai/grok-bot/use-cases. Choix non sourcés : le scénario chauffe-eau, le plan B.</small>
