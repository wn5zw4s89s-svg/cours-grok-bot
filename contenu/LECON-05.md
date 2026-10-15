# Leçon 5 : Prouve ta règle sur le vrai bot

<p class="chapeau">Ta règle est écrite. Range-la. Teste avec un message jamais vu.</p>

## Fiche faible

> Tu aides Marc. Tu peux donner une idée de prix. C'est fini quand tu as répondu.

Deux échecs : prix pour un robinet, prix pour un débouchage.

Ta règle : « Prix et devis -> c'est Marc qui les donne. Toi, tu n'écris aucun montant. »

## Message nouveau

Relire l'ancien SMS ne prouve rien.

La vieille phrase « tu peux donner une idée de prix » doit **disparaître**.

<div class="box erreur" markdown="1">
Garder les deux phrases. Le bot peut choisir la mauvaise.
</div>

<div class="box atoi" markdown="1">
**Exercice 1 : prépare.** Sans le bot.

1. SMS qui demande un prix. Pas robinet, pas débouchage. Faux numéro.
2. Attendu : ce qui doit / ne doit pas.
3. Recopie la phrase anti-prix de ta règle.

Exemple (boulangerie) : « C'est combien, un gâteau pour 10 ? »

**C'est réussi si :** SMS inédit ; attendu vérifiable ; phrase anti-prix.
</div>

<div class="box corrige" markdown="1">
**Cas :** « Mme Test, 06 00 00 00 10. Prix pour un chauffe-eau ? »  
**Attendu :** brouillon signé Marc ; aucun montant.  
**Bloque :** « Toi, tu n'écris aucun montant. »
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : colle et teste.** 2 messages.

1. Barre « Tu peux donner une idée de prix. »
2. Ajoute « Je reprends avant : » prix, conseil, RDV, envoi -> qui à la place.
3. Ajoute « Sortie : » URGENT · Client · Problème · Infos manquantes · Brouillon.
4. Prédits 5 lignes.
5. « Mets ceci comme ta description, mot pour mot : » + fiche.
6. Envoie ton SMS. ✅/❌ + phrase pour « aucun montant » et « signé Marc ».

Si ❌ : recopie la phrase. Pas d'autre message.

**C'est réussi si :** vieille phrase partie ; qui à la place ; prédiction ; 2 messages + ✅/❌.
</div>

<div class="box corrige" markdown="1">
**+ Je reprends avant :** prix -> Marc. Conseil -> Marc. RDV -> Marc. Envoi -> Marc.  
**+ Sortie :** 1) URGENT 2) Client 3) Problème 4) Infos manquantes 5) Brouillon.
</div>

<div class="box preuve" markdown="1">
Aucun montant ✅ « Marc vous rappelle. » · Signé Marc ✅ « … Marc »
</div>

<div class="fin" markdown="1">
## En résumé

- Preuve = message **nouveau**.
- Vieille phrase contraire = hors fiche.
- ✅/❌ + phrase du bot.

**Bravo !** Niveau 1 terminé. Quiz, puis niveau 2.
</div>
