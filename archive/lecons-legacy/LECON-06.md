# Leçon 6 : ce que ton bot retient, et où ranger chaque information

**Une leçon courte, un seul objectif** · Professeur : Prof Groksky · Élève : Joseph

> **On reprend ici**
> En leçon 5B, tu as appelé ton bot et vérifié ce qu'il avait compris. Si un exercice de la 5B est resté ouvert, finis-le d'abord, puis reviens ici. Aujourd'hui : la **mémoire** du bot.

**Objectif :** savoir ce que le bot retient tout seul, ce qui doit aller dans sa **description**, et ce qui doit rester dans un **fichier source**.

**Ce que tu auras à la fin (à cocher) :**

- ☐ 6 informations classées : description, mémoire ou fichier source ;
- ☐ un souvenir faux corrigé, puis vérifié par une nouvelle question.

Comment travailler : fais une étape, puis lis le corrigé juste en dessous. N'écris à Prof Groksky que si tu bloques. L'exercice 1 se fait **sans le bot**. L'exercice 2 demande **3 messages courts** à ton bot principal, avec des données fictives : très peu de crédits.

---

## L'idée du jour

Ton bot n'a pas besoin que tu lui répètes tout. Mais sa mémoire n'est pas un carnet fiable à 100 % : il peut retenir une information qui n'est plus vraie. Il faut donc savoir **où ranger chaque chose**.

---

# La leçon

## 1. Ce que le bot retient tout seul (la mémoire)

La doc officielle dit qu'un bot peut garder :

- tes **préférences de travail** qui ne changent pas (par exemple : « réponds en tableaux ») ;
- les **faits importants** ;
- des **résumés** de son travail passé.

Ça lui évite de relire tous vos anciens messages.

<small>Source : « A Bot can retain stable working preferences, important facts, and summaries from its work. This helps it keep a role over time without replaying every prior message. » (un bot peut garder des préférences de travail stables, des faits importants et des résumés de son travail ; ça l'aide à garder son rôle dans la durée sans rejouer chaque message passé) : https://docs.x.ai/grok-bot/bots, « What a Bot remembers ».</small>

## 2. Les 4 règles de la doc

La doc dit : **la mémoire ne remplace pas une source qui fait foi** (une source « qui fait foi », c'est le document de référence, celui qu'on croit en cas de doute). Elle donne 4 règles :

1. **Ce qui change** (prix, horaires, stock) reste dans sa source : un fichier, un tableau, un site. Pas dans la mémoire.
2. **Pour une décision importante**, demande au bot de citer ou de rouvrir la donnée actuelle.
3. **Un souvenir faux** (périmé), tu le corriges directement, en lui disant.
4. **Les limites de sécurité** (ce qu'il ne doit jamais faire) vont **dans la description** du bot, sa fiche, qu'il relit à chaque fois.

<small>Source : « Memory is not a substitute for an authoritative source: Keep changing facts in the source system; Ask the Bot to cite or reopen current data for consequential decisions; Correct stale assumptions directly; Put explicit safety boundaries in the Bot description » : https://docs.x.ai/grok-bot/bots. Voir aussi la FAQ : « For important decisions, ask the Bot to check the current source rather than relying on memory. » : https://docs.x.ai/grok-bot/faq.</small>

## 3. La règle de tri, en une ligne

- Une **règle** que le bot doit toujours suivre -> **description**.
- Une **préférence** ou un fait **stable**, qu'il peut apprendre en travaillant -> **mémoire**.
- Une donnée **qui change** -> **fichier source**.

Bon à savoir : la mémoire d'un bot ne passe pas aux autres bots, et une copie d'un bot (« Duplicate ») ne copie pas sa mémoire apprise.

<small>Sources : « It does not copy conversation history, learned memory, or chat attachments » : https://docs.x.ai/grok-bot/bots, « Duplicate a Bot » ; « Its conversation and learned role are separate from other Bots » : https://docs.x.ai/grok-bot/faq.</small>

---

# Les exercices

## Exercice 1 : classer 6 informations

Sans le bot. Le client fictif du jour : **Lukas**, qui tient **Velo Lukas**, un atelier de réparation de vélos à Ville-Test, en Suisse. Son bot s'appelle **La chaîne** (comme la chaîne d'un vélo). Le bot répond aux messages des clients et prépare des brouillons, que Lukas relit.

Voici 6 informations que Lukas veut donner à son bot :

- **A.** « Ne promets jamais une date de réparation : c'est Lukas qui la donne. »
- **B.** « Les tarifs des réparations » (Lukas les change chaque printemps).
- **C.** « Lukas préfère des réponses courtes, de 3 phrases au plus. »
- **D.** « Le planning de l'atelier de la semaine » (il change tous les jours).
- **E.** « N'envoie jamais un message à un client sans l'accord de Lukas. »
- **F.** « Lukas tutoie ses clients habitués. »

**Étape 1.** Pour chaque lettre, pose-toi ces 3 questions, dans l'ordre :

1. Est-ce une **règle de sécurité**, une chose que le bot ne doit **jamais** faire ? -> **description**.
2. Sinon, est-ce une donnée qui **change** souvent ? -> **fichier source**.
3. Sinon (préférence ou habitude stable) -> **mémoire**.

**Étape 2.** Écris une ligne par lettre.

Forme : « A -> … , car … »

Exemple de forme, sur un autre sujet (un fleuriste) : « Le prix des roses -> fichier source, car il change chaque semaine. »

**C'est réussi si :**

- ☐ il y a **6 lignes**, une par lettre, chacune avec un « car » ;
- ☐ A et E sont dans la **description** ;
- ☐ B et D sont dans un **fichier source** ;
- ☐ C et F sont dans la **mémoire**.

### Corrigé idéal

> A -> description, car c'est une chose que le bot ne doit jamais faire.
> B -> fichier source, car les tarifs changent chaque printemps.
> C -> mémoire, car c'est une préférence stable.
> D -> fichier source, car le planning change tous les jours.
> E -> description, car c'est une limite de sécurité.
> F -> mémoire, car c'est une habitude stable.

Tes « car » peuvent être formulés autrement : ce qui compte, c'est la bonne case.

> **Pour aller plus loin (facultatif)**
> C et F peuvent aussi aller dans la description si Lukas veut être sûr qu'elles s'appliquent dès le premier jour. Ce n'est pas faux : la mémoire, c'est pour ce que le bot peut apprendre en travaillant, sans que tu aies à l'écrire.

### Les réflexes pour y arriver

- Est-ce que le bot ne doit **jamais** faire ça ? Si oui -> description, sans hésiter.
- Est-ce que cette information sera encore vraie dans 3 mois ? Si non -> fichier source.

---

## Exercice 2 : corriger un souvenir faux, puis vérifier

Avec ton **bot principal** (ton Grok Bot de tous les jours). Trois messages, tous fictifs. Pour copier un message du PDF : sélectionne-le, Cmd+C, clique dans la zone de message, Cmd+V, puis Entrée.

**Étape 1.** Donne-lui un fait. Envoie exactement :

« Pour un test de mémoire : retiens que le client fictif Tom Miller, de Ville-Test, a le numéro 06 00 00 00 01. Réponds seulement « Noté ». »

**Étape 2.** Corrige-le, comme la doc le demande (« corrige directement »). Envoie exactement :

« Correction : le numéro de Tom Miller est 06 00 00 00 02. L'ancien numéro est faux, oublie-le. Réponds seulement « Corrigé ». »

**Étape 3.** Vérifie avec une **nouvelle question**, qui ne redonne pas la réponse. Le mieux est d'attendre un peu (fais une pause, ou reviens plus tard dans la journée). Écris ta question.

Forme : « Quel est … de … ? »

Exemple de forme, sur un autre sujet : « Quelle est l'adresse du client fictif Anna Weber ? »

**Étape 4.** Note dans ta note la réponse du bot, puis ton verdict.

Forme : « Réponse du bot : … Verdict : souvenir corrigé / pas corrigé. »

**C'est réussi si :**

- ☐ les 2 premiers messages sont envoyés tels quels ;
- ☐ ta question de l'étape 3 **ne contient pas** le numéro ;
- ☐ le bot répond **06 00 00 00 02** ;
- ☐ la réponse et ton verdict sont notés.

Si le bot donne encore 06 00 00 00 01 : refais l'étape 2, puis l'étape 3. Si ça rate encore, écris-le dans ta note et passe au bilan : c'est justement la preuve que la doc a raison de dire que la mémoire ne fait pas foi.

### Corrigé idéal

> Ma question : « Quel est le numéro du client fictif Tom Miller ? »
> Réponse du bot : « 06 00 00 00 02. » Verdict : souvenir corrigé.

### Les réflexes pour y arriver

- Ma question de vérification redonne-t-elle la réponse ? Si oui, elle ne prouve rien : je la réécris.
- Pour une vraie décision importante, je demande au bot de **rouvrir la source** au lieu de faire confiance à sa mémoire.

---

## Bilan

- ☐ Exercice 1 : 6 informations classées, chacune avec un « car »
- ☐ Exercice 2 : un souvenir faux corrigé et vérifié par une nouvelle question

## ✅ Ce que tu as réussi

Tu sais maintenant où ranger chaque information : les **règles** dans la description, les **préférences stables** dans la mémoire, et **ce qui change** dans un fichier source. Et tu as corrigé un souvenir faux, puis prouvé que la correction tenait, avec une question qui ne trichait pas.

**La prochaine fois : leçon bonus, comment marche un bot toujours actif**

<small>

**Sources de la leçon** (relues le 14/10/2026) : https://docs.x.ai/grok-bot/bots (« What a Bot remembers », « Duplicate a Bot ») ; https://docs.x.ai/grok-bot/faq (« What does a Bot remember? »).
**Choix non sourcés :** le client Velo Lukas et ses 6 informations, la règle de tri en 3 questions, les messages du test de mémoire, le conseil d'attendre avant l'étape 3. La doc ne dit pas comment voir ni effacer la mémoire d'un bot : à vérifier sur ton écran si tu cherches.

</small>
