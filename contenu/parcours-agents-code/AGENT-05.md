# Agent 5 · Vérifie et fais corriger

Objectif : à la fin, tu as vérifié le résultat sur iPhone, et tu as fait corriger au moins un point.

## Étape 1 · Vérifie sur iPhone (2 min)

Ouvre le lien que le bot t'a donné (préview, Pages, ou fichiers de la PR). Sur **ton iPhone**.

<div class="box atoi" markdown="1">
**À toi :** coche mentalement :

1. Le nom Champ Libre apparaît.
2. Une phrase d'angle en une ligne.
3. Le bouton « Voir les campings ».
4. Le pied « Mentions légales ».

C'est réussi si tu as ouvert la page et noté ce qui manque (même si tout est là).
</div>

## Étape 2 · Vrai cycle : vérifier -> faire corriger (2 min)

Exemple réel du Bâtisseur (lot 7, confettis) :

1. Brief : confettis **seulement** en fin de projet ou de quiz.
2. L'agent a annoncé que c'était fait. En relisant, les confettis partaient encore à **chaque** bonne réponse (ils étaient seulement passés derrière le texte — commit `e25d819`).
3. Correction : les deux lignes concernées, rebuild, publish (commit `36ca47b` : « Confettis seulement en fin de projet ou de quiz »), puis vérif en ligne.

Leçon du Bâtisseur : « l'agent dit que c'est fait » ne suffit pas. Tu vérifies point par point.

Même logique pour toi : tu ne relances pas un nouvel agent. Tu **réponds** à celui qui a déjà le contexte.

<div class="box atoi" markdown="1">
**À toi :** si un bouton manque, lances-tu un second agent, ou écris-tu à ton bot pour qu'il fasse corriger le premier ?

C'est réussi si tu nommes une seule option.
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Tu fais corriger le premier. Un follow-up sur le même agent. Pas un second lancement.

</div></details>

## Étape 3 · Envoie la correction (2 min)

Prends **un** point manquant ou moche (texte trop petit, bouton absent, page qui dépasse l'écran).

<div class="box atoi" markdown="1">
**À toi :** copie ce bloc (adapte la 2e ligne) et envoie-le à ton bot :

> Sur le même agent cloud (ne pas en lancer un autre) : corrige ceci que j'ai vu sur mon iPhone : ___.
> Contrainte : mobile-first, français, rien de payant. Dis-moi quand c'est repoussé. Je revérifie sur iPhone.

C'est réussi si le bot confirme qu'il a envoyé le follow-up au même agent.
</div>

<div class="box corrige" markdown="1">
**Exemple de réponse :** « Correction envoyée au même agent. Je te préviens à la fin. »
</div>

## Étape 4 · Revérifie (1 min)

<div class="box atoi" markdown="1">
**À toi :** rouvre le lien sur iPhone (force le rechargement si l'ancienne page reste : à vérifier sur ton écran).

C'est réussi si le point demandé est corrigé, ou si tu notes encore un écart précis.
</div>

<div class="box info" markdown="1">
Le Cobaye avait vu une ancienne version à cause du cache. Le commit Cobaye 2 a ajouté un `version.json` sans cache. Si tu vois « l'ancien », recharge vraiment avant de croire à un bug.
</div>

<div class="pieuvre" data-reaction="reussite" markdown="1">Vu à l'écran. Corrigé. Revérifié.</div>

<div class="fin" markdown="1">
## En résumé

- Vérifie toujours sur iPhone, pas seulement le résumé du bot.
- Même agent pour corriger. Pas un second agent sur la même tâche.
- Un écart = une phrase précise dans le follow-up.
</div>
