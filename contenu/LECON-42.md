# Leçon 42 : Fais maintenir ton app par un bot

<p class="chapeau">Le site vit. Un lien casse. Un bot vérifie chaque semaine et te prévient. Il ne corrige pas seul.</p>

## Le principe (doc des routines)

- Préparer avant d'exécuter.
- Le bot propose d'abord.
- Validation pour envoyer, publier, supprimer, changer la production.
- Que faire si la source manque.
- Re-tester après un changement.

<div class="box info" markdown="1">
Une routine se crée en le demandant au bot. Elle ne tourne pas à la création. Un seul **Test**, puis pause, si tu le décides.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans bot (routine écrite, pas créée).

Cas : site vitrine de Marc (local ou fictif en ligne).

1. Écris la routine avec les 6 points (bot · horaire et fuseau · source · résultat · limite · source manquante).
2. Le bot vérifie : liens, pied de page fictif, absence de prix.
3. Ajoute : « Si tout va bien -> une ligne "RAS". »
4. Ajoute : « Si un problème -> propose la correction en brouillon. Ne modifie rien sans mon OK. »
5. Écris : « Je la créerai si … . »

**C'est réussi si :** 6 points (1) ; 3 vérifications (2) ; règle RAS (3) ; correction en brouillon (4) ; création conditionnelle (5).
</div>

<div class="box corrige" markdown="1">
« Chaque lundi à 8 h (Zurich), vérifie le dossier page-marc : liens qui marchent, pied de page "Site fictif — exercice", aucun prix. Rends le résultat dans ce chat. Si tout va bien -> "RAS". Si un problème -> propose la correction en brouillon, ne modifie rien sans mon OK. Si le dossier manque -> "Pas de données". »  
Bot : le bot « Site ». Création : si je le décide.
</div>

<div class="fin" markdown="1">
## En résumé

- Routine de contrôle, pas de correction seule.
- RAS quand tout va bien.
- Brouillon + OK pour toute modification.

**Bravo !** Leçon 43 : le projet final.
</div>

<small>Sources : docs.x.ai/grok-bot/skills-routines-and-automations · cursor.com/help/grok-bot/routines.md (lues le 15/10/2026).</small>
