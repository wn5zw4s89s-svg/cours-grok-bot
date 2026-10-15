# Leçon 3A : une fois, ou une règle

**Une leçon courte, un seul objectif** · Professeur : Prof Groksky · Élève : Joseph

> **On reprend ici**
> À la fin de la séance 2, tu as testé Le disjoncteur avec tes cas et corrigé sa fiche par des règles. Si une étape de la séance 2 est restée ouverte (le lancement des cas, la fiche corrigée ou le coin facturation), finis-la d'abord : elle compte autant aujourd'hui. Puis tu passes à cette leçon.

**Objectif :** transformer une correction qui revient en **une règle durable**, écrite pour tout le métier.

**Ce que tu auras à la fin (à cocher) :**

- ☐ 3 corrections classées : « une fois » ou « une règle » ;
- ☐ une règle trop étroite, réécrite pour tout le métier, avec qui fait le geste à la place du bot.

Comment travailler : fais une étape, puis lis le corrigé juste en dessous. N'écris à Prof Groksky que si tu bloques. Cette leçon ne demande aucun message au bot : tes crédits restent intacts.

---

## Le client du jour

> « Bonjour, Nadia Morel, garagiste à mon compte. Mes clients m'écrivent : "ma voiture fait un bruit", "le voyant moteur est allumé", "vous prenez combien pour les plaquettes". Je veux un bot qui me prépare chaque demande pour que je rappelle. Pas de prix. Pas de conseil mécanique : rouler ou non, quoi changer, c'est moi qui le dis, sur place. Et pas de rendez-vous pris à ma place. »

Nadia est **fictive**. Le même geste te servira plus tard pour n'importe quel client : la règle durable va dans la description, pas dans le message du jour.

Un collègue a déjà « corrigé » le bot dans la conversation. L'erreur est revenue le lendemain.

> **Hier.** Message collé : « Combien pour les plaquettes de ma Clio ? »
> Le bot a répondu avec un montant.
> Le collègue a écrit dans la conversation : « Pour la Clio, ne donne pas le prix des plaquettes. »
> **Aujourd'hui.** Nouveau message : « C'est quoi le tarif d'un parallélisme sur une 208 ? »
> Le bot a encore écrit un montant.

La description, elle, n'a pas changé :

> **Nom :** Le pont
> **Titre :** Aide pour le garage
> **Description :** Tu aides Nadia, garagiste, avec les messages de ses clients. Tu réponds de façon utile et rassurante. Tu peux donner une idée de prix pour aider. C'est fini quand tu as répondu. Ne fais rien de risqué.

---

# La leçon

## 1. Où vit une règle

Une phrase dite dans la conversation règle surtout le message en cours. Elle peut être trop étroite, oubliée, ou absente de la fiche. La **description** est l'endroit des règles qui doivent rester vraies : un interdit, une limite, une habitude de travail.

Le contrôle, après chaque correction : tu relis la description. Si ta phrase n'y est pas, la règle n'est pas enregistrée. Ce contrôle ne coûte aucun crédit.

<small>Sources : « Use the description for rules that should remain true » (la description sert aux règles qui doivent rester vraies) et « Update the description when you discover a durable preference, boundary, or responsibility » (mets à jour la description quand tu découvres une préférence durable, une limite, ou une responsabilité) : https://docs.x.ai/grok-bot/bots. Ces champs se règlent « in chat or in Settings » (dans la conversation ou dans les réglages) : https://x.ai/bot/guides/grok-bot-101. La phrase « si elle n'est pas dans la description, elle n'est pas enregistrée » est le contrôle de Prof Groksky (non sourcé tel quel).</small>

## 2. Une fois, ou à chaque fois

Quand le client te reprend, pose une seule question : est-ce que ça reviendra avec un autre client ?

- **Une fois.** Ça concerne cette personne, aujourd'hui. Exemple : « Rappelle M. Test en premier cet après-midi. » Tu le fais, tu ne l'écris pas dans la fiche.
- **Une règle.** Ça reviendra. Exemple : le bot donne encore un prix, sur une autre voiture. Tu l'écris dans la description.

Le piège du collègue : « Pour la Clio, ne donne pas le prix des plaquettes. » Il a corrigé **un** cas. La voiture d'après, le travail d'après, l'erreur revient. Corriger sans élargir laisse le motif entier.

<small>Sources : l'anti-modèle « Fixing without generalizing (fixing one instance while leaving the recurring pattern intact) » (corriger un cas sans toucher au motif qui revient) et « Acknowledging without recording ("I'll keep that in mind" does not persist) » (dire « je note » ne garde rien), skill *principle-encode-lessons-in-structure*, plugin pstack de Lauren Tan, copie installée v0.15.15. Ce skill parle d'abord de code (un contrôle automatique, un script), pas d'un bot. Pour Grok Bot, l'endroit durable le plus proche est la description : ce rapprochement est un choix de Prof Groksky.</small>

## 3. La phrase qui tient

Une règle tient en une phrase, avec trois morceaux :

1. **Dans quel cas** : tous les prix, pas une Clio.
2. **Ce que le bot ne fait pas.**
3. **Qui le fait à la place.**

Forme : « Prix et devis → c'est Nadia qui les donne, au téléphone. Toi, tu n'écris aucun montant. »

---

# Les exercices

## Exercice 1 : une fois, ou une règle

Nadia a écrit trois corrections. Pour chacune, **une seule ligne**.

Forme à suivre :

> **Correction A :** une règle, parce que…

**Étape 1.** Classe la correction A : « Signe les brouillons Nadia, pas Le pont. »

**Étape 2.** Classe la correction B : « Le client de 14 h, M. Test, rappelle-le en premier aujourd'hui. »

**Étape 3.** Classe la correction C : « Tu as encore donné un prix, cette fois pour la 208. Arrête avec les prix. »

**C'est réussi si :**

- ☐ les 3 lignes suivent la forme ;
- ☐ B est « une fois », A et C sont « une règle » ;
- ☐ aucune ligne ne contient un montant.

### Corrigé idéal

> **Correction A :** une règle, parce que tous les brouillons doivent être signés Nadia, pas seulement celui d'aujourd'hui.
> **Correction B :** une fois, parce que ça concerne un client précis, aujourd'hui seulement.
> **Correction C :** une règle, parce que le prix est revenu sur une autre voiture et un autre travail.

### Les réflexes pour y arriver

- Est-ce que ça reviendra avec un autre client ?
- Ma phrase dit-elle « aujourd'hui » ou « toujours » ?
- Si je l'oublie demain, est-ce grave pour Nadia ?

---

## Exercice 2 : élargir la règle trop étroite

La phrase du collègue : « Pour la Clio, ne donne pas le prix des plaquettes. »

**Étape 1.** Écris ce que cette phrase oublie, sur ce modèle : « Elle oublie : … »

**Étape 2.** Écris la règle large, une seule phrase, sur ce modèle : « Prix et devis → c'est … qui …. Toi, tu …. »

**Étape 3.** Écris où tu la ranges, sur ce modèle : « Je la mets dans : … »

**C'est réussi si :**

- ☐ la règle ne cite aucune voiture et aucune pièce ;
- ☐ elle dit qui donne le prix à la place du bot ;
- ☐ elle va dans la description du bot, pas dans un message de conversation.

### Corrigé idéal

> **Elle oublie :** les autres voitures, les autres travaux, et qui donne le prix à la place du bot.
> **Règle :** Prix et devis → c'est Nadia qui les donne, au téléphone. Toi, tu n'écris aucun montant.
> **Je la mets dans :** la description du bot, pas la conversation.

### Les réflexes pour y arriver

- Si je change la voiture, la règle tient-elle encore ?
- Qui fait le geste interdit, nommément ?
- Est-ce que je l'écris dans la fiche, ou seulement dans le chat ?

**Garde ta règle sous la main :** c'est elle que tu mets à l'épreuve en leçon 3B.

---

## Bilan

- ☐ Exercice 1 : 3 corrections classées
- ☐ Exercice 2 : règle élargie, avec qui donne le prix

## ✅ Ce que tu as réussi

Tu sais faire la différence entre une consigne du jour et une règle qui doit tenir. Et tu as transformé une correction trop étroite (« la Clio, les plaquettes ») en **une règle durable**, valable pour toutes les voitures et tous les travaux, qui dit qui fait le geste à la place du bot.

**La prochaine fois : leçon 3B, tu prouves que ta règle tient sur un message nouveau.**

<small>

**Sources de la leçon** (déjà lues pour les séances 1 et 2, réutilisées) :
https://docs.x.ai/grok-bot/bots ·
https://x.ai/bot/guides/grok-bot-101 ·
plugin pstack de Lauren Tan (copie installée v0.15.15), skill *principle-encode-lessons-in-structure*.
**Choix non sourcés :** le client fictif, le rapprochement « la structure du skill pstack = la description du bot », le contrôle « pas dans la description = pas enregistré ».

</small>
