# Leçon 22 : Écris une routine sans danger

<p class="chapeau">Le bot travaille seul, à heure fixe. Il doit savoir quoi faire quand une donnée manque.</p>

## Une routine

Une **routine** dit à **un** bot quand lancer un travail. Elle tourne même Mac fermé.

Tu la crées en le demandant dans le chat. Pas de formulaire.

## Les 6 points à confirmer (doc)

1. Le bot qui en est responsable.
2. L'horaire et le fuseau.
3. La source à lire.
4. Le résultat attendu.
5. La limite de validation.
6. Que faire si la source manque.

Une nouvelle routine attend sa prochaine heure. Elle ne tourne pas à la création.

<div class="box info" markdown="1">
Chaque passage consomme. Toutes les heures = cher. Une fois par jour suffit ici.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans le bot.

Cas : chaque matin, Marc veut la liste des fournitures sous leur seuil. Le skill `stock-a-commander` existe (leçon 13).

1. Écris la demande de routine avec les 6 points.
2. Ajoute : « Si le fichier manque -> dis "Pas de données", n'utilise pas d'anciennes données. »
3. Ajoute : « Si rien n'est sous le seuil -> une seule ligne : "Rien à commander". »

Exemple (boulangerie) : « Chaque jour à 6 h, lis stock-farine-test.csv. S'il manque, signale-le. »

**C'est réussi si :** 6 points (1) ; règle fichier manquant (2) ; règle rien à dire (3) ; aucune commande ni aucun envoi.
</div>

<div class="box corrige" markdown="1">
« Du lundi au vendredi à 7 h (heure de Zurich), lance le skill stock-a-commander sur /workspace/fournitures-test.csv. Poste la liste dans cette conversation. Ne contacte aucun fournisseur, ne passe aucune commande. Si le fichier manque -> dis "Pas de données", n'utilise pas d'anciennes données. Si rien n'est sous le seuil -> "Rien à commander". »  
Bot responsable : ton bot principal (celui à qui tu écris).
</div>

<div class="fin" markdown="1">
## En résumé

- Routine = un bot + un horaire + une consigne.
- 6 points, dont « source manquante ».
- Préparer, jamais commander seul.

**Bravo !** Leçon 23 : crée et teste.
</div>

<small>Sources : docs.x.ai/grok-bot/skills-routines-and-automations · cursor.com/help/grok-bot/routines.md (lues le 15/10/2026).</small>
