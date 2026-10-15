# Leçon 16 : Choisis un connecteur et prépare une lecture

<p class="chapeau">Ton bot peut lire tes apps. Commence en lecture seule. Rien ne bouge.</p>

## Connecteur = plugin

Un **connecteur** relie le bot à un service (Drive, Gmail, Notion…). Il s'installe comme **plugin**.

Où : barre de gauche -> **Connect apps** -> **Add** -> connexion dans le navigateur (**Authorize**). *Noms de la doc en anglais : les mots français sont à vérifier sur ton écran.*

Un plugin installé sert à **tous tes bots**.

<div class="box info" markdown="1">
X public se lit **sans** plugin : le bot cherche et lit les posts publics. Le plugin X sert seulement à tes messages privés, signets, fil.
</div>

## Lecture seule

Le bot lit. Il ne crée, ne modifie, ne supprime rien. Il cite chaque source.

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans le bot.

1. Mets `fournitures-test.csv` dans ton Google Drive (dossier « Test »).
2. Écris ta demande Drive. Forme : « Avec @Google Drive, lis … . Ne modifie rien. Cite le nom du fichier. Rends … . »
3. Écris ta demande X (sans plugin) sur un sujet public. Forme : « Cherche 3 posts publics sur X à propos de … . Cite l'auteur et le lien. »

Exemple (autre sujet) : « Avec @Google Drive, lis Météo-Test. Ne modifie rien. Cite le nom du fichier. Rends 3 lignes. »

**C'est réussi si :** fichier dans Drive (1) ; demande Drive avec « Ne modifie rien » et « cite » (2) ; demande X avec auteur et lien (3).
</div>

<div class="box corrige" markdown="1">
**Drive :** « Avec @Google Drive, lis fournitures-test.csv dans le dossier Test. Ne modifie rien. Cite le nom du fichier. Rends les articles sous leur seuil. »  
**X :** « Cherche 3 posts publics sur X à propos de "fuite chauffe-eau". Cite l'auteur et le lien. »
</div>

<div class="fin" markdown="1">
## En résumé

- Connecteur = plugin, via Connect apps.
- X public : pas besoin de plugin.
- Lecture seule et sources citées.

**Bravo !** Leçon 17 : lis pour de vrai.
</div>

<small>Sources : docs.x.ai/grok-bot/computer-and-apps · cursor.com/help/grok-bot/connect-plugins.md (lues le 15/10/2026).</small>
