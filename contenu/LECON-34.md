# Leçon 34 : Écris les règles de l'agent

<p class="chapeau">Pour un bot : la description. Pour un agent de code : un fichier de règles à la racine.</p>

## AGENTS.md

Un simple fichier Markdown, à la racine du projet. Pas de réglages, pas d'en-tête.

L'agent le lit à chaque demande. Le modèle ne garde aucune mémoire entre deux réponses : la règle, si.

Sur iPhone : tu fais créer le fichier **par ton bot** sur son ordinateur.

## Une bonne règle

- Courte, précise, actionnable.
- Ajoute une règle quand l'agent refait **la même erreur**.
- Pas de guide de style entier.

Exemple (doc Cursor) : « Use TypeScript for all new files. »

<div class="box atoi" markdown="1">
**À toi de jouer.** 1 message. Bot principal.

1. Écris 5 lignes de règles dans Notes. Une doit être visible dans la page. Ex. : « Chaque page finit par un pied de page "Site fictif — exercice". »
2. Envoie : « Crée /workspace/page-marc/AGENTS.md avec exactement ce texte : » + tes 5 lignes.
3. Demande : « Affiche AGENTS.md. » Vérifie les 5 lignes.

Exemple (autre sujet) : « Toutes les dates au format JJ.MM.AAAA. »

**C'est réussi si :** 5 lignes écrites (1) ; fichier créé et relu (2-3) ; une règle visible dans la page (1).
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
- Le bot crée le fichier sur son ordinateur.

**Bravo !** Leçon 35 : prouve que l'agent la suit.
</div>

<small>Source : cursor.com/docs/rules.md (lue le 15/10/2026).</small>
