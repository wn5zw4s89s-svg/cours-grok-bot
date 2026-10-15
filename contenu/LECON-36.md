# Leçon 36 : Le bot répond aux acheteurs

<p class="chapeau">Une vente arrive. Une question arrive. Ton bot prépare tout. Tu valides.</p>

## Le circuit

Les acheteurs écrivent à l'adresse email de ton bot (projet 2). Une routine prépare la réponse. Tu touches **Send Email**.

Avec Stripe, c'est aussi ta réponse validée qui envoie le PDF : le bot le joint au brouillon.

## Ce qu'il ne fait jamais seul

- envoyer un email ;
- rembourser ;
- promettre un geste commercial.

<div class="box atoi" markdown="1">
**À toi de jouer.** 3 étapes. 1 message, 1 email.

1. Envoie à ton bot : « Crée une routine : quand un email d'acheteur arrive, prépare une réponse. S'il a acheté, joins mon PDF. Ne promets aucun remboursement. »
2. Depuis ton app mail, joue l'acheteur : « J'ai acheté le guide, je ne l'ai pas reçu. »
3. Ouvre le chat du bot. Vérifie la carte : bon destinataire, PDF joint, aucune promesse. Puis Send Email ou Discard.

**C'est réussi si :**

- la routine est confirmée (étape 1) ;
- ton faux email est parti (étape 2) ;
- un brouillon avec le PDF, validé ou jeté par toi (étape 3).
</div>

<div class="box corrige" markdown="1">
Brouillon : « Bonjour, voici votre guide en pièce jointe. Bonne lecture, Léa » + PDF.  
Remarque : le bot ne peut pas savoir seul qui a payé. Vérifie la vente dans ton outil avant d'envoyer.
</div>

<div class="fin" markdown="1">
## En résumé

- Routine email -> brouillon avec le PDF.
- Toi : tu vérifies la vente, tu envoies.

**Bravo !** Leçon 37 : le premier euro.
</div>
