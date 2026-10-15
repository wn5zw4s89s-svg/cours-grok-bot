# Leçon 52 : Réservations et paiement

<p class="chapeau">Le campeur paie. L'hôte reçoit. La plateforme garde sa commission.</p>

## Étape 1 · Ton mode (2 min)

### Trois modes

| Mode | Quand | Argent |
|---|---|---|
| Réservation par email | pas encore de statut | réglé entre hôte et campeur |
| Test Stripe | pour tout essayer | aucun : cartes de test |
| En vrai, Stripe Connect | statut déclaré | réel |

### Stripe Connect

Le service de Stripe pour les places de marché : l'argent va à l'hôte, la plateforme prend sa part.

Frais relevés le 15 octobre 2026 : paiement 1,5 % + 0,25 € (cartes standard de l'EEE). Si la plateforme gère elle-même les tarifs : 2 € par compte actif par mois, et 0,25 % + 0,10 € par virement. Autre option : Stripe applique ses tarifs et ne facture rien de plus à la plateforme. [Tarifs Stripe Connect](https://stripe.com/fr/connect/pricing)

### Le mode test

Stripe a un environnement de test où aucun argent ne bouge. On paie avec une carte de test, par exemple 4242 4242 4242 4242. [Doc Stripe](https://docs.stripe.com/testing)

<div class="box atoi" markdown="1">
**À toi.** Relis ton mode choisi en leçon 48.

**C'est réussi si :** ton mode correspond à ton statut.
</div>

<div class="box corrige" markdown="1">
Mode de Léa : réservation par email.
</div>

## Étape 2 · La mise en place (2 min)

<div class="box atoi" markdown="1">
**À toi.** Envoie à Chef : « Mets en place le mode ___ : email, test Stripe ou Connect. Commission : ___ %. Affiche le prix total au campeur avant qu'il réserve. Rien de réel sans mon accord. »

**C'est réussi si :** commission et prix total définis par toi.
</div>

<div class="box corrige" markdown="1">
Léa, mode email : le formulaire envoie la demande, Support prépare la confirmation, Léa l'envoie.
</div>

## Étape 3 · Réserve (2 min)

<div class="box atoi" markdown="1">
**À toi.** Fais une réservation sur ton iPhone dans ce mode. Vérifie que le prix total s'affiche avant de valider.

**C'est réussi si :** une réservation faite, prix total visible avant.
</div>

<div class="box corrige" markdown="1">
En test : paiement avec 4242 4242 4242 4242, aucun argent réel. Le prix total s'affiche avant de valider.
</div>

<div class="box attention" markdown="1">
Compte Stripe : créé par toi, à ton nom. Passage en réel : seulement avec un statut. Le bot ne touche jamais à l'argent.
</div>

<div class="pieuvre" data-reaction="reussite" markdown="1">
« La plateforme prend forme. »
</div>

<div class="fin" markdown="1">
## En résumé

- Email, test ou réel : ça dépend de ton statut.
- Prix total affiché avant réservation.

**Bravo !** Leçon 53 : le support aux campeurs.
</div>
