# Leçon 21 : Crée un skill par démonstration

<p class="chapeau">Montre la tâche. Relis le brouillon. Ajoute une règle d'échec et une limite.</p>

## Le déroulé de la doc

1. Conversation seul à seul + ordinateur ouvert.
2. **Teach a task**.
3. Décris le résultat que tu vas montrer.
4. Fais la tâche une fois.
5. Arrête l'enregistrement. Relis le skill créé.
6. Teste sur un exemple sans risque.

<div class="box attention" markdown="1">
3 messages au plus. Aucun secret à l'écran pendant l'enregistrement.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.**

1. Avec **Teach a task** : étapes 1 à 5 ci-dessus. Plan B : fais remplir le formulaire au bot, puis « Crée un skill nommé formulaire-test à partir de la tâche qu'on vient de réussir. »
2. Relis le brouillon. Ajoute : « Si le formulaire ne charge pas -> préviens-moi, n'essaie pas un autre site. »
3. Ajoute : « Ne clique jamais sur Submit order. »
4. Teste le skill avec d'autres valeurs (autre nom, Large, Onion). Note ✅/❌ + la phrase du bot.

**C'est réussi si :** skill créé (1) ; règle d'échec (2) ; limite (3) ; test avec ✅/❌ et la phrase du bot (4).
</div>

<div class="box corrige" markdown="1">
Skill `formulaire-test` : remplit les champs, choisit taille et garniture.  
**+ Échec :** formulaire indisponible -> me prévenir.  
**+ Limite :** jamais Submit order.  
Test : Paul Test, Large, Onion -> rempli, pas envoyé ✅.
</div>

<div class="box preuve" markdown="1">
Pas d'envoi ✅ « Je m'arrête avant Submit order. »
</div>

<div class="fin" markdown="1">
## En résumé

- Montrer ou plan B -> skill brouillon.
- Toujours ajouter un cas d'échec et une limite.
- Teste avec d'autres valeurs.

**Bravo !** Leçon 22 : les routines.
</div>

<small>Source : docs.x.ai/grok-bot/skills-routines-and-automations (lue le 15/10/2026).</small>
