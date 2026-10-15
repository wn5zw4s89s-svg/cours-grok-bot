# Leçon 2 : Donne un métier clair à ton bot

<p class="chapeau">Marc dit « il me faudrait un truc qui m'aide »… et tu ne sais pas encore quoi écrire dans la fiche. Aujourd'hui, tu transformes ce flou en un bot précis : Le siphon.</p>

## Écoute la demande de Marc

> « Bonjour, Marc Garnier, plombier. Je suis seul avec un apprenti. Le soir, je passe une heure à répondre aux messages : "ça fuit sous l'évier", "plus d'eau chaude", des photos floues, pas d'adresse… Je rappelle tout le monde pour savoir quoi, où, quand, et si c'est urgent. Parfois j'oublie quelqu'un. Il me faudrait un truc qui m'aide avec ça. Par contre, je ne veux pas qu'on donne des prix à ma place. »

Marc est **fictif**. Son bot ne parle **pas** aux clients : Marc lui colle les messages, et le bot prépare le travail.

## Remplis les trois cases du bot

Dans l'app, un bot a **trois cases** :

- **Nom** : court, un nom de métier (« Le siphon », pas « Assistant »).
- **Titre** (Title ou Label) : son métier en quelques mots.
- **Description** : son mode d'emploi permanent. C'est là que se joue la qualité.

Dans la description, tu écris **7 rubriques**, une ou deux phrases chacune :

| Rubrique | La question à se poser |
|---|---|
| 1. Métier | De quel résultat est-il responsable ? |
| 2. Entrées | À partir de quoi travaille-t-il ? |
| 3. Sortie | Que rend-il, sous quelle forme exacte ? |
| 4. Fini quand | À quoi voit-on que c'est terminé ? |
| 5. Je reprends avant | Quels gestes ne fait-il jamais sans Marc ? |
| 6. Hors périmètre | Qu'est-ce qu'il ne fait pas ? |
| 7. Si c'est flou | Que fait-il quand une info manque ? |

<div class="box info" markdown="1">
Deux rubriques font la différence : **« Fini quand »** (vérifiable par quelqu'un d'autre) et **« Je reprends avant »** (la frontière entre ce qu'il fait seul et ce qui revient à Marc).
</div>

**Exemple de forme** (autre métier, pour voir la structure, pas pour copier) :

> **Nom :** Commandes Boulangerie · **Titre :** Prépare les commandes du lendemain  
> **Description :** Tu transformes les commandes reçues en une liste de production. Tu travailles uniquement à partir des messages collés. Tu rends un tableau : produit, quantité, heure, nom. C'est fini quand chaque commande est dans le tableau ou dans « à confirmer ». Tu ne confirmes jamais au client : tu prépares, je confirme. Tu ne t'occupes ni des prix ni des fournisseurs. S'il manque une quantité, tu n'inventes rien.

<small>Sources : https://docs.x.ai/grok-bot/bots ; https://docs.x.ai/grok-bot/get-started ; https://x.ai/bot/guides/grok-bot-101. Les 7 rubriques sont une synthèse de Prof Groksky.</small>

## Sépare description et message

- **La description** : ce qui reste vrai **tout le temps** (« Tu ne donnes jamais de prix. »).
- **Le message** : le travail **d'aujourd'hui** (« Voici le message de Mme Lefèvre. »).

Si tu mets la tâche du jour dans la description, le bot la traînera pour toujours.

<div class="box erreur" markdown="1">
Mettre « Traite le message de Mme Lefèvre » dans la description. Cette cliente n'existe que pour aujourd'hui : ça va dans le message, pas dans la fiche.
</div>

<small>Source : https://docs.x.ai/grok-bot/bots (« Use the description for rules that should remain true »).</small>

<div class="box atoi" markdown="1">
**Exercice 1 : reformule la demande de Marc.** Tu n'écris rien au bot.

1. Écris une ligne « Problème : … » (ce qui coûte à Marc aujourd'hui).
2. Écris une ligne « But : … » (ce que le bot doit rendre, de façon vérifiable).
3. Écris une ligne « Interdit : … » (ce que Marc refuse).

Exemple de forme, autre sujet : « Problème : Léa perd 20 minutes à classer ses factures. »

**C'est réussi si :**

- le problème cite le temps perdu et les oublis (étape 1) ;
- le but décrit un résultat vérifiable, pas « l'aider » (étape 2) ;
- l'interdit mentionne les prix (étape 3).
</div>

<div class="box corrige" markdown="1">
Problème : Marc perd une heure chaque soir et oublie parfois un client.  
But : pour chaque message collé, une fiche d'intervention prête à rappeler, avec un brouillon.  
Interdit : aucun prix donné à la place de Marc.
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : écris la fiche de Le siphon, puis crée-le.** Peu de crédits : 2 messages maximum.

1. Choisis le **Nom** : Le siphon (3 mots max si tu inventes autrement).
2. Écris le **Titre** en 6 mots maximum.
3. Écris les 7 rubriques dans la description (Métier, Entrées, Sortie, Fini quand, Je reprends avant, Hors périmètre, Si c'est flou).
4. Ajoute une phrase qui définit **« urgent »** pour Marc : de l'eau qui coule et qu'on n'arrive pas à arrêter (ou plus d'eau du tout).
5. Crée le bot (New -> Create new Bot). Ouvre **Bot settings** (clic sur le nom en haut) et colle Nom, Titre, Description. Ou envoie : « Mets ceci comme ta description, mot pour mot : » suivi du texte.
6. Envoie ce message : « Voici un message reçu ce soir : "Bonjour, c'est Mme Lefèvre, ça goutte sous mon évier depuis hier soir, j'ai mis une bassine. Vous pouvez passer quand ? C'est combien ?" »
7. Envoie le piège urgent : « Autre message : "Au secours, le tuyau a éclaté dans la salle de bain, ça inonde !" »

**C'est réussi si :**

- Nom, Titre et 7 rubriques sont présents (étapes 1 à 3) ;
- « urgent » est défini en une phrase (étape 4) ;
- réponse 1 : aucun prix, aucun rendez-vous promis, adresse/téléphone marqués « manquant » (étape 6) ;
- réponse 2 : l'urgence apparaît en premier (étape 7).
</div>

<div class="box corrige" markdown="1">
**Nom :** Le siphon  
**Titre :** Trie les demandes de dépannage  
**Description :**  
**Métier :** tu transformes chaque message de client que Marc te colle en fiche d'intervention prête à rappeler, avec un brouillon de réponse.  
**Entrées :** uniquement les messages que Marc te colle et ce qu'il te dit.  
**Sortie :** toujours dans cet ordre : URGENT (oui ou non, et pourquoi) ; Client (nom, téléphone, adresse) ; Problème (une phrase) ; Infos manquantes ; Brouillon de réponse (3 phrases au plus, vouvoiement, signé Marc).  
**Urgent veut dire :** de l'eau qui coule et qu'on n'arrive pas à arrêter, ou plus d'eau du tout.  
**Fini quand :** chaque champ est rempli ou marqué « manquant », et le brouillon pose toutes les questions manquantes en un seul message.  
**Je reprends avant :** tu n'envoies rien à personne. Tu ne donnes jamais de prix ni de délai ferme, et tu ne promets aucun rendez-vous : Marc décide et envoie lui-même.  
**Hors périmètre :** devis, factures, commandes de pièces, conseils de réparation. Si on te le demande, tu réponds que Marc s'en occupe.  
**Si c'est flou :** tu n'inventes rien, tu écris « manquant » et tu poses la question dans le brouillon.
</div>

<div class="box preuve" markdown="1">
**Preuve sur le vrai bot.** Pour chaque test, note ✅ ou ❌ et recopie la phrase du bot.  
Ex. : Aucun prix : ✅ « Marc vous rappelle pour le tarif. » — Urgence en premier : ✅ « URGENT : oui — tuyau éclaté. »
</div>

<div class="box plus" markdown="1">
Si un test rate, ajoute **une seule phrase** à la description (pas au message), puis renvoie le même cas une fois. Après le cours, tu peux masquer ce bot avec **Hide from sidebar** : il ne sera pas supprimé.
</div>

<div class="fin" markdown="1">
## En résumé

- Un bot a un seul métier, écrit dans Nom, Titre et Description.
- La description suit 7 rubriques ; « Fini quand » et « Je reprends avant » font la différence.
- La description = règles permanentes ; le message = travail du jour.
- Tu prouves sur le vrai bot, avec la phrase exacte comme preuve.

**Bravo !** Le siphon a un métier clair.  
**La prochaine fois : leçon 3, tu le testes avec 5 cas difficiles.**
</div>

<small>Sources : https://docs.x.ai/grok-bot/bots · https://docs.x.ai/grok-bot/get-started · https://docs.x.ai/grok-bot/approvals-security-and-privacy · https://x.ai/bot/guides/grok-bot-101. Choix non sourcés : définition de « urgent », limite de 6 mots pour le titre.</small>
