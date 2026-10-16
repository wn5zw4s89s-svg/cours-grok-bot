# Agent 2 · Prépare le dépôt

Objectif : à la fin, tu as un endroit où l'agent de code peut pousser son travail.

## Étape 1 · Deux chemins (1 min)

Pour démarrer un agent de code :

1. **Avec un dépôt** : GitHub (ou GitLab, Bitbucket, Azure DevOps) connecté à Cursor. L'agent clone, code sur une branche, pousse.
2. **Sans dépôt** : « Start from scratch » (partir de zéro). Cursor crée un brouillon Origin. Tu publies le dépôt plus tard.

Dans ce parcours, on prend le chemin **GitHub** : c'est celui du site de formation Grok Bot (dépôt `cours-grok-bot`, publié sur GitHub Pages).

<div class="box atoi" markdown="1">
**À toi :** pour ce parcours, quel chemin prends-tu : avec GitHub, ou partir de zéro ?

C'est réussi si tu nommes un seul chemin.
</div>

<details class="solution"><summary>Voir la réponse</summary><div class="box corrige" markdown="1">

Avec GitHub. On suit le même chemin que le site du cours.

</div></details>

## Étape 2 · Compte GitHub (2 min)

<div class="box atoi" markdown="1">
Pas de nouveau compte : tu gardes le compte GitHub du site du cours.

**À toi :** ouvre Safari et va sur github.com. Vérifie que tu es connecté à ce compte.

C'est réussi si tu vois ton profil GitHub, avec le dépôt `cours-grok-bot` dans la liste.
</div>

<div class="box corrige" markdown="1">
**Exemple :** ta photo de profil en haut à droite, et le dépôt `cours-grok-bot` dans la liste.
</div>

## Étape 3 · Connecte GitHub à Cursor (2 min)

Un admin du compte Cursor doit connecter le contrôle de source avant qu'un agent cloud puisse partir d'un dépôt.

Sur iPhone, c'est souvent une **carte de connexion** que ton bot te montre. Tu acceptes. Tu ne colles jamais un mot de passe dans le chat.

<div class="box atoi" markdown="1">
**À toi :** crée (ou ouvre) un bot Grok Bot dédié au code. Nom libre, ex. « Bâtisseur ». Copie ce bloc et envoie-le :

> Je veux faire coder un agent cloud Cursor sur un dépôt GitHub. Dis-moi si GitHub est déjà connecté à mon compte Cursor. Si une carte de connexion apparaît, je l'accepte. Tu ne codes rien encore.

C'est réussi si le bot confirme la connexion, ou te montre une carte à accepter.
</div>

<div class="box corrige" markdown="1">
**Exemple de réponse :** « GitHub est connecté. » ou une carte de connexion à accepter sur ton écran.
</div>

## Étape 4 · Un dépôt vide pour l'essai (2 min)

Pour le fil rouge : un dépôt public vide, nommé par toi (ex. `champ-libre-accueil`).

<div class="box atoi" markdown="1">
**À toi :** copie ce bloc et envoie-le à ton bot :

> Crée un dépôt GitHub public vide nommé champ-libre-accueil (ou propose un autre nom si celui-ci est pris). Rien de payant. Donne-moi le lien https://github.com/… avant d'annoncer que c'est fini. Tu ne lances pas encore d'agent de code.

C'est réussi si tu reçois un lien github.com vers un dépôt vide.
</div>

<div class="box corrige" markdown="1">
**Exemple de réponse :** « Dépôt créé : https://github.com/ton-pseudo/champ-libre-accueil »
</div>

<div class="box info" markdown="1">
Le bot ne peut pas toujours créer un dépôt GitHub tout seul. Si Cursor refuse, crée le dépôt vide toi-même sur github.com (bouton New), puis donne le lien au bot.
</div>

<div class="pieuvre" data-reaction="reussite" markdown="1">Dépôt prêt. L'agent peut y travailler.</div>

<div class="fin" markdown="1">
## En résumé

- GitHub connecté à Cursor, ou « partir de zéro ».
- Tu acceptes la carte de connexion. Jamais de mot de passe dans le chat.
- Un dépôt vide suffit pour le premier essai.
</div>
