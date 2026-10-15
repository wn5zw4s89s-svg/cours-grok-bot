# Leçon 36 : Le bot répond aux acheteurs

<p class="chapeau">Une vente arrive. Une question arrive. Ton bot prépare tout. Tu valides.</p>

## Étape 1 · La routine (2 min)

Une **routine** (un réflexe) : une tâche que le bot refait seul, sans que tu demandes.

### Le circuit

Les acheteurs écrivent à l'adresse email de ton bot (projet 2). Une routine prépare la réponse. Tu touches **Send Email**.

Avec Stripe, c'est aussi ta réponse validée qui envoie le PDF : le bot le joint au brouillon.

### Ce qu'il ne fait jamais seul

- envoyer un email ;
- rembourser ;
- promettre un geste commercial.

<div class="box atoi" markdown="1">
**À toi.** Envoie à ton bot : « Crée une routine : quand un email d'acheteur arrive, prépare une réponse. S'il a acheté, joins mon PDF. Ne promets aucun remboursement. »

**C'est réussi si :** la routine est confirmée.
</div>

<div class="box corrige" markdown="1">
Bot : « Routine créée. Chaque email d'acheteur -> un brouillon pour toi. »
</div>

## Étape 2 · Joue l'acheteur (2 min)

<div class="box atoi" markdown="1">
**À toi.** Depuis ton app mail, joue l'acheteur : « J'ai acheté le guide, je ne l'ai pas reçu. »

**C'est réussi si :** ton faux email est parti.
</div>

<div class="box corrige" markdown="1">
Email envoyé depuis ton app mail vers l'adresse du bot.
</div>

## Étape 3 · La carte (2 min)

<div class="box atoi" markdown="1">
**À toi.** Ouvre le chat du bot. Vérifie la carte : bon destinataire, PDF joint, aucune promesse. Puis Send Email ou Discard.

**C'est réussi si :** un brouillon avec le PDF, validé ou jeté par toi.
</div>

<div class="box corrige" markdown="1">
Brouillon : « Bonjour, voici votre guide en pièce jointe. Bonne lecture, Léa » + PDF.  
Remarque : le bot ne peut pas savoir seul qui a payé. Vérifie la vente dans ton outil avant d'envoyer.
</div>

<div class="pieuvre" data-reaction="reussite" markdown="1">
« On approche du premier euro. »
</div>

<div class="fin" markdown="1">
## En résumé

- Routine email -> brouillon avec le PDF.
- Toi : tu vérifies la vente, tu envoies.

**Bravo !** Leçon 37 : le premier euro.
</div>
