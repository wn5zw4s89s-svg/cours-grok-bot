# Leçon 34 : Écris les règles de l'agent

<p class="chapeau">Pour un bot : la description. Pour l'agent de code : AGENTS.md.</p>

## AGENTS.md

Un simple fichier Markdown, à la racine du projet. Pas de réglages, pas d'en-tête.

L'agent le lit à chaque demande. Le modèle ne garde aucune mémoire entre deux réponses : la règle, si.

Autres types (pour plus tard) : règles de projet dans `.cursor/rules` (fichiers `.mdc`), règles utilisateur, règles d'équipe.

## Une bonne règle

- Courte, précise, actionnable.
- Ajoute une règle quand l'agent refait **la même erreur**.
- Pas de guide de style entier.

Exemple (doc) : « Use TypeScript for all new files. »

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans l'agent.

1. Dans `page-marc`, crée `AGENTS.md` (Cursor : **New File**).
2. Écris un titre et **5 lignes** de règles.
3. Une règle doit être nouvelle pour l'agent et vérifiable à l'œil. Ex. : « Chaque page finit par un pied de page "Site fictif — exercice". »

Exemple (autre sujet) : « Toutes les dates au format JJ.MM.AAAA. »

**C'est réussi si :** fichier à la racine (1) ; 5 lignes (2) ; une règle visible dans la page (3).
</div>

<div class="box corrige" markdown="1">
```markdown
# Règles du projet page-marc

- Une seule page : index.html. Pas de bibliothèque externe.
- Coordonnées toujours fictives (06 00 00 00 0X, Ville-Test).
- Texte en français, phrases courtes.
- Chaque page finit par un pied de page "Site fictif — exercice".
- Ne supprime aucun fichier sans me demander.
```
</div>

<div class="fin" markdown="1">
## En résumé

- AGENTS.md = la description de l'agent.
- 5 lignes, une règle visible.
- Une règle naît d'une erreur qui revient.

**Bravo !** Leçon 35 : prouve que l'agent la suit.
</div>

<small>Source : cursor.com/docs/rules.md (lue le 15/10/2026).</small>
