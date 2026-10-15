# Leçon bonus : comment marche un bot toujours actif

**Une leçon courte, un seul objectif** · Professeur : Prof Groksky · Élève : Joseph

> **On reprend ici**
> En leçon 6, tu as appris ce que ton bot retient, et où ranger chaque information. Si un exercice de la leçon 6 est resté ouvert, finis-le d'abord, puis reviens ici. Aujourd'hui, tu regardes sous le capot d'un bot toujours actif.

**Objectif :** comprendre comment marche un bot **toujours actif** (en anglais *always-on* : il continue de travailler quand tu ne lui parles pas), et reconnaître chacune de ses 7 briques dans **ta propre flotte**.

**Ce que tu auras à la fin (à cocher) :**

- ☐ les 7 idées de Lee Robinson lues, chacune reliée à ce que tu fais déjà ;
- ☐ ton tableau de 7 lignes rempli, avec un vrai bot ou une vraie routine à toi sur chaque ligne.

Comment travailler : lis une idée, puis passe à la suivante. L'exercice et son corrigé sont à la fin. N'écris à Prof Groksky que si tu bloques. Cette leçon ne demande **aucun message à un bot** : tes crédits restent intacts. La vidéo est **facultative** : la leçon marche sans elle.

---

## D'où vient cette leçon

Lee Robinson travaille chez SpaceX sur ce genre de bot. À Stanford, devant des étudiants en informatique, il a expliqué **comment marche à l'intérieur** un bot comme les tiens. La conférence est en anglais : https://x.com/leerob/status/2108650243365736855

Dans chaque idée ci-dessous :

- **Lee dit** : ce qu'il dit vraiment, traduit, avec l'anglais d'origine et le moment de la vidéo (minutes:secondes).
- **Chez toi** : le lien avec ta flotte. Ce lien, c'est Prof Groksky qui le fait, **pas Lee**. Lee ne connaît pas tes bots.
- **On le pratiquera** : la séance du plan où tu le feras pour de vrai (ou **Tu l'as pratiqué**, si c'est déjà fait).

---

# La leçon

## Idée 1 : des outils en boucle

Un bot, c'est d'abord un **modèle** (le « cerveau » qui lit et décide) et des **outils** (des actions : lire un fichier, chercher sur le web, ouvrir un navigateur). Le bot choisit un outil, regarde le résultat, en choisit un autre, et recommence. C'est **la boucle**. Elle s'arrête quand le travail est fini.

**Lee dit (0:26 à 0:30) :** « un modèle qui peut appeler des outils en boucle » (*you have a model… It can call tools in a loop*). Il le redit à 13:39, en montrant le cœur de son système : « un modèle qui appelle des outils en boucle » (*a model calling tools in a loop*).

**Chez toi :** ta phrase « C'est fini quand… » dans les fiches dit au bot **quand sortir de la boucle**. Le disjoncteur, depuis la séance 2 : c'est fini quand chaque champ est rempli ou marqué « manquant ». Et Le siphon a une boucle volontairement courte : « Tu n'utilises aucun autre outil. »

**On le pratiquera :** séance 9 (connecteurs et plugins), où tu donnes un nouvel outil à un bot.

## Idée 2 : son propre ordinateur

Un programme sur ton Mac s'arrête quand tu fermes le Mac. Un bot toujours actif, lui, a **son propre ordinateur**, à distance, qui ne dépend pas du tien.

**Lee dit (0:36) :** le problème de départ, c'est que « tu fermes ton ordinateur portable et le travail s'arrête » (*you close your laptop and the process stops*). **(1:02 à 1:11) :** « Cet agent a son propre ordinateur », « une machine Linux dans le cloud », c'est-à-dire un ordinateur sur un serveur à distance, « avec son propre bureau, ses fichiers, son navigateur » (*This agent has its own computer… a Linux machine in the cloud where it has its own desktop files browser*). **(13:02 à 13:07) :** avec cinq ou dix bots, chacun peut avoir son propre écran.

**Chez toi :** c'est la « box », l'ordinateur que **tous tes bots partagent**. Chaque bot y a son propre écran. Exemple : la routine « Journal du lundi » d'Yvan prépare ton journal (le PDF et l'audio) dans un dossier de cet ordinateur. Ton Mac peut rester fermé.

**On le pratiquera :** séance 10 (l'ordinateur et le navigateur du bot), puis séance 16 (sécurité de l'ordinateur partagé).

## Idée 3 : les réveils

Entre deux tâches, le bot **dort**. Quelque chose doit le **réveiller** : toi, ou autre chose que toi.

**Lee dit (1:41 à 1:46) :** « il peut être déclenché par autre chose que toi qui tapes », par exemple « un message Slack (une messagerie d'équipe), un e-mail, ou un autre événement qui réveille l'agent » (*it can be triggered more than just you typing… a slack message or an email or some other type of event that wakes up this agent*). **(9:51 à 9:58) :** les routines, c'est un prompt (une consigne) lancé selon un horaire. **(10:20 et 10:58) :** au repos, le serveur et l'ordinateur du bot dorment, car « il n'y a pas assez d'ordinateurs dans le monde » pour tout laisser allumé (*there's not enough computers in the world*).

**Chez toi :** la fiche d'Yvan dit « Réveil : à la demande de Joseph ». Mais sa routine « Journal du lundi » le réveille **chaque lundi à 6 h 47**, sans que tu tapes un mot. Et la routine « Veille nouveautés Grok Bot » le réveille le lundi, le mercredi et le vendredi à 8 h 13.

**On le pratiquera :** séance 12 (la routine).

## Idée 4 : savoir se taire

Un bon collègue ne vient pas te voir à chaque petit progrès. Un bon bot non plus.

**Lee dit (1:23 à 1:35) :** c'est « plutôt comme un collègue », qui n'envoie pas toujours un message tout de suite : « il sait quand se taire » (*more like a colleague… It knows when to be quiet*). **(12:00) :** avant de te parler, le bot se demande : « est-ce que je dois déranger l'utilisateur pour ça ? » (*do I need to bug the user about this or not?*). **(41:09 à 41:20) :** Lee reconnaît que ce réglage n'est **pas encore parfait** (*I don't think that we have it perfect yet*).

**Chez toi :** la fiche d'Yvan finit sa liste d'interdits par « Quiet si rien d'actionnable » : se taire s'il n'y a rien à faire.

**On le pratiquera :** séance 8 (garde-fous : le bot s'arrête au brouillon) et séance 12 (la routine qui prévient seulement quand il faut).

## Idée 5 : les sous-agents

Un bot qui fait tout lui-même finit par avoir la tête pleine. Alors il confie des morceaux de travail à des **aides** (en anglais *helpers*, ou *sous-agents*). Chaque aide repart avec une tête vide, fait le travail, et ne rapporte **que le résultat**.

**Lee dit (6:40 à 7:03) :** les modèles peuvent « confier le travail à des aides, qu'on appelle des sous-agents », qui ont « une mémoire de travail toute neuve » (*hand off to helpers and those helpers are called subagents… a fresh set of working memory*). **(23:34 à 24:09) :** l'agent principal est comme un **chef d'orchestre** ; sa conversation reste la plus légère possible, et l'aide revient « seulement avec le résultat » (*It's only coming back with the result*). **(25:05 à 25:09) :** c'est calqué sur la façon d'organiser une équipe d'ingénieurs.

**Chez toi :** Yvan est ta **porte d'entrée**. Tu lui parles ; il donne la consigne à Tupperchef, à Mary Poppins ou au Faire-partier, vérifie leur travail, puis te livre le résultat.

**Attention, une nuance.** Chez Lee, un sous-agent est une aide **temporaire** que le bot lance lui-même pour une tâche, puis qui disparaît. Tes spécialistes, eux, sont de **vrais bots permanents**, avec leur fiche et leur mémoire. Le principe est le même (un chef léger, des aides qui rapportent le résultat), mais ce n'est pas la même chose. D'ailleurs, quand Prof Groksky « lance » la préparation d'une leçon et revient plus tard, c'est un vrai sous-agent.

**On le pratiquera :** séance 13 (coordination entre bots).

## Idée 6 : la mémoire en couches

Le bot ne retient pas tout de la même façon. Lee range sa mémoire en **4 couches**, de la plus utilisée à la plus lointaine.

**Lee dit (32:51 à 34:18) :**

1. **Les faits essentiels sur toi**, mis dans chaque message (33:01 à 33:13). Son exemple : « l'utilisateur veut toujours du texte en minuscules ».
2. **Des journaux datés** de vos conversations passées (33:57 à 34:02).
3. **Des notes de brouillon**, utiles « pour les 30 prochaines minutes ou l'heure qui vient », puis effacées (34:06 à 34:11).
4. **Tout le reste dans des fichiers**, que le bot sait retrouver : « c'est la magie des fichiers » (*This is the magic of files*, 34:18).

**Chez toi :** la mémoire d'Yvan a exactement ces couches. Une **liste de faits sur toi** (par exemple, retenu le 17/09 : tes fiches recettes font « toujours exactement 2 pages »), et un **journal daté** (celui de septembre 2026). Le reste vit dans des **fichiers**, comme `congelateur.md`. Et ta **fiche** (la description) garde les règles qui doivent toujours rester vraies, comme en séance 3.

**Tu l'as pratiqué :** en séance 6 (la mémoire), juste avant ce bonus.

## Idée 7 : le contexte

Le **contexte**, c'est tout ce que le bot a **sous les yeux en ce moment** : sa fiche, la conversation, la liste de ses outils. Cette place est **limitée**. Plus elle est encombrée, plus le bot coûte cher et moins il est précis.

**Lee dit (20:00 à 20:13) :** chaque modèle a une « fenêtre de contexte », « sa mémoire de travail », avec une limite (*a context window, which is kind of it's working memory*). **(20:28 à 20:50) :** si tu branches Google Drive, Gmail, YouTube…, toutes les descriptions d'outils remplissent cette place avant même de commencer. **(29:07 à 29:17) :** une sortie très longue va **dans un fichier**, pas dans la conversation. **(31:40 à 31:50) :** sur la durée, la conversation doit être résumée, et « toute compression perd de l'information » (*all compression is lossy*).

**Chez toi :** voilà pourquoi une règle durable va **dans la fiche**, pas dans le chat (séance 3) : un long chat finit résumé, et un détail peut sauter. Et voilà pourquoi ton cours vit dans des fichiers PDF plutôt que dans une conversation sans fin.

**Tu l'as pratiqué :** en séance 6 (ce qui va dans la fiche, dans la mémoire ou dans un fichier). **On le pratiquera encore :** séance 16 (faire le ménage dans les plugins).

---

## Pour regarder (facultatif)

Pas besoin de toute la conférence. Si tu veux voir Lee, ces 5 passages suffisent. Les moments viennent de la transcription : la vidéo peut être décalée de quelques secondes.

| Moment | Ce que tu vas voir |
|---|---|
| 0:20 → 1:53 | Lee décrit le bot toujours actif : son ordinateur, sa mémoire, il sait se taire, il se fait réveiller (idées 1 à 4). |
| 6:40 → 7:15 | Les sous-agents : des aides à la tête vide qui rapportent le résultat (idée 5). |
| 10:13 → 12:16 | Le schéma du bot qui dort, se réveille, puis se demande s'il doit te déranger (idées 3 et 4). |
| 21:29 → 22:31 | L'échelle du bot : il essaie tout seul, du moins cher au plus cher, et ne te dérange qu'en dernier (idée 4). |
| 32:51 → 34:22 | Les 4 couches de mémoire et « la magie des fichiers » (idée 6). |

---

# L'exercice

## Exercice : les 7 idées dans ta flotte

Pour chaque idée, écris **un exemple pris dans ta flotte** : le nom d'un vrai bot ou d'une vraie routine à toi, puis ce qu'il fait. Tu peux relire les fiches de tes bots dans Grok Bot (lire ne coûte rien). **N'écris à aucun bot.**

**Étape 1.** Remplis les lignes 1 à 4.

**Étape 2.** Remplis les lignes 5 à 7.

<table>
<colgroup><col style="width:27%"><col style="width:30%"><col style="width:43%"></colgroup>
<tr><th>Idée</th><th>Chez moi : quel bot ou quelle routine</th><th>Ce qu'il fait</th></tr>
<tr style="height:3.2em; break-inside:avoid"><td>1. Des outils en boucle</td><td></td><td></td></tr>
<tr style="height:3.2em; break-inside:avoid"><td>2. Son propre ordinateur</td><td></td><td></td></tr>
<tr style="height:3.2em; break-inside:avoid"><td>3. Les réveils</td><td></td><td></td></tr>
<tr style="height:3.2em; break-inside:avoid"><td>4. Savoir se taire</td><td></td><td></td></tr>
<tr style="height:3.2em; break-inside:avoid"><td>5. Les sous-agents</td><td></td><td></td></tr>
<tr style="height:3.2em; break-inside:avoid"><td>6. La mémoire en couches</td><td></td><td></td></tr>
<tr style="height:3.2em; break-inside:avoid"><td>7. Le contexte</td><td></td><td></td></tr>
</table>

**C'est réussi si :**

- ☐ les 7 lignes sont remplies ;
- ☐ chaque ligne nomme un vrai bot ou une vraie routine à toi (pas Nadia ni Léa : elles sont fictives) ;
- ☐ la ligne 5 dit qui donne la consigne et qui rapporte le résultat ;
- ☐ tu n'as écrit à aucun bot.

### Corrigé idéal

<table>
<colgroup><col style="width:27%"><col style="width:30%"><col style="width:43%"></colgroup>
<tr><th>Idée</th><th>Chez moi : quel bot ou quelle routine</th><th>Ce qu'il fait</th></tr>
<tr style="break-inside:avoid"><td>1. Des outils en boucle</td><td>Le disjoncteur</td><td>Il lit le message que je colle, fait le résumé, et s'arrête quand chaque champ est rempli ou marqué « manquant ».</td></tr>
<tr style="break-inside:avoid"><td>2. Son propre ordinateur</td><td>La routine « Journal du lundi » d'Yvan</td><td>Elle prépare mon journal dans un dossier de l'ordinateur des bots (la box), même si mon Mac est fermé.</td></tr>
<tr style="break-inside:avoid"><td>3. Les réveils</td><td>La routine « Journal du lundi » d'Yvan</td><td>Elle réveille Yvan chaque lundi à 6 h 47, sans que je tape rien.</td></tr>
<tr style="break-inside:avoid"><td>4. Savoir se taire</td><td>Yvan</td><td>Sa fiche dit « Quiet si rien d'actionnable » : il se tait s'il n'y a rien à faire.</td></tr>
<tr style="break-inside:avoid"><td>5. Les sous-agents</td><td>Yvan → Tupperchef</td><td>Yvan donne la consigne à Tupperchef ; Tupperchef rapporte la fiche recette à Yvan, qui la vérifie puis me la livre.</td></tr>
<tr style="break-inside:avoid"><td>6. La mémoire en couches</td><td>La mémoire d'Yvan</td><td>Des faits sur moi (mes fiches recettes en 2 pages), un journal daté de septembre, et le reste dans des fichiers comme <code>congelateur.md</code>.</td></tr>
<tr style="break-inside:avoid"><td>7. Le contexte</td><td>Le siphon (sa fiche)</td><td>Ses règles sont dans la description, pas dans le chat, parce qu'un long chat est résumé et perd des détails.</td></tr>
</table>

D'autres réponses sont justes. Par exemple, ligne 5 : « Yvan → Mary Poppins » ou « Yvan → Le Faire-partier ». Ligne 3 : « Veille nouveautés Grok Bot » (lundi, mercredi et vendredi à 8 h 13). Ligne 7 : « mes leçons sont dans des fichiers PDF, pas dans une conversation sans fin ». Ce qui compte : un vrai bot à toi, et un geste précis.

### Les réflexes pour y arriver

- Pour chaque idée, demande-toi : « Qui fait ça chez moi ? »
- Nomme le bot, puis le geste. « Yvan » seul ne suffit pas : « Yvan se tait s'il n'y a rien à faire », oui.
- Si tu hésites, relis la fiche du bot : la réponse y est souvent écrite.
- Un seul bon exemple par ligne suffit.

---

## Bilan

- ☐ Les 7 idées lues, chacune reliée à ta flotte
- ☐ Exercice : tableau de 7 lignes rempli, avec tes vrais bots

## ✅ Ce que tu as réussi

Tu sais maintenant **comment marche un bot toujours actif** : un modèle qui utilise des outils en boucle, sur son propre ordinateur, réveillé par toi ou par une routine, qui sait se taire, confie du travail à des aides, range sa mémoire en couches et garde son contexte léger. Et surtout, tu as retrouvé **chacune de ces 7 briques dans ta propre flotte**. Ce que dit un ingénieur de SpaceX à Stanford, tu l'utilises déjà.

**La prochaine fois : leçon 7A, le skill.**

<small>

**Sources de la leçon :** conférence de Lee Robinson à Stanford (cours CS146S), « How do always-on, proactive agents like @Bot work? », https://x.com/leerob/status/2108650243365736855. Chaque citation et chaque moment ont été vérifiés dans une transcription automatique de la vidéo. Elle a deux courts trous où rien n'a été capté (vers 3:52 à 4:02 et 18:33 à 18:49), et quelques mots mal reconnus (par exemple « or castrator » pour *orchestrator*, chef d'orchestre). Aucune citation de cette leçon ne vient de ces trous.
**Ta flotte :** fiches de Yvan, Le siphon et Le disjoncteur, mémoire d'Yvan, relues le 10/10/2026 ; routines « Journal du lundi » (chaque lundi à 6 h 47) et « Veille nouveautés Grok Bot » (lundi, mercredi et vendredi à 8 h 13), d'après Yvan, 11/10/2026.
**Choix non sourcés :** tous les paragraphes « Chez toi » et « On le pratiquera », la nuance « spécialistes permanents ≠ sous-agents temporaires », le choix des 5 passages à regarder, et l'exercice. Ce sont des rapprochements de Prof Groksky, pas des propos de Lee.

</small>
