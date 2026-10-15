# Leçon 24 : Répartis le travail entre deux bots

<p class="chapeau">Un bot pour tout finit confus. Deux bots, un propriétaire par étape.</p>

## Quand créer un 2e bot

La doc : un bot séparé quand le travail a un but, des outils, un style ou une limite de validation distincts.

Pour Marc :

| Bot | Métier |
|---|---|
| **Le siphon** | Trie les messages -> fiche d'intervention |
| **Le devis** | À partir d'une fiche -> brouillon de devis. Aucun prix ferme, aucun envoi |

<div class="box info" markdown="1">
Un seul propriétaire à chaque étape. Trop de relais en parallèle = doublons.
</div>

## Le message de lancement

Dans un groupe, `@` désigne qui fait quoi.

Exemple (doc) : `@Researcher … @Writer … @Reviewer … Do not publish anything.`

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans le bot.

1. Écris le métier de Le siphon en une ligne (déjà connu).
2. Écris le métier de Le devis : 3 rubriques — Entrées · Sortie · Je reprends avant.
3. Écris le message de lancement. Forme : `@Le siphon … . @Le devis … . N'envoie rien.`

Exemple (autre sujet) : `@Recherche réunis les sources. @Rédaction écris le brouillon.`

**C'est réussi si :** 2 métiers distincts (1-2) ; message avec `@` × 2 et « N'envoie rien » (3).
</div>

<div class="box corrige" markdown="1">
**Le siphon :** message collé -> fiche (URGENT, client, problème, manquants, brouillon).  
**Le devis — Entrées :** la fiche du siphon. **Sortie :** brouillon de devis (lignes, quantités, cases prix vides pour Marc). **Je reprends avant :** aucun prix ferme, aucun envoi.  
**Lancement :** `@Le siphon transforme ce message en fiche. @Le devis, dès que la fiche est prête, prépare un brouillon de devis sans prix. N'envoie rien.`
</div>

<div class="fin" markdown="1">
## En résumé

- 2 bots = 2 métiers, 1 propriétaire par étape.
- Message de lancement avec `@`.
- Aucun envoi externe.

**Bravo !** Leçon 25 : le relais dans un groupe.
</div>

<small>Sources : docs.x.ai/grok-bot/bots · docs.x.ai/grok-bot/chat-and-collaboration (lues le 15/10/2026).</small>
