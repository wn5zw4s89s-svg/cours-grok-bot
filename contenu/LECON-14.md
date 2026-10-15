# Leçon 14 : Écris des garde-fous « demande avant »

<p class="chapeau">Le bot peut agir seul. Certains gestes doivent attendre ton oui.</p>

## Lis une demande de validation

La carte montre l'action proposée et ses valeurs. Trois boutons :

- **Allow once** : cette fois seulement.
- **Always allow** : enregistre une règle, les prochaines passent seules.
- **Deny** : bloque.

*Noms de la doc en anglais : les mots français sont à vérifier sur ton écran.*

Une validation venue d'une routine expire après environ 10 minutes. L'action ne se fait pas.

<div class="box erreur" markdown="1">
**Always allow** sur un envoi. Un clic, et les prochains partent sans toi.
</div>

## Écris des règles « Ask first »

Réglages -> **General** -> **Auto-review**. Deux sortes de règles :

- **Ask first** : s'arrête toujours pour te demander.
- **Allow automatically** : laisse passer, sauf si la revue voit un problème.

Si les deux s'appliquent : **Ask first** gagne.

Une bonne règle est étroite : une action, un périmètre.

- Floue : « Sois prudent avec les e-mails. »
- Claire : « Ask first before sending any external email. »

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans le bot.

Forme : « Ask first before … » + la traduction en français.

1. Une règle sur un **envoi** (e-mail, message, publication).
2. Une règle sur une action **irréversible** (supprimer, payer, modifier un document partagé).

Exemple (autre sujet) : « Ask first before publishing any post. » (Demande avant toute publication.)

**C'est réussi si :** 2 règles ; chacune vise une seule action précise ; on répond par oui ou non à « cette action est-elle concernée ? ».
</div>

<div class="box corrige" markdown="1">
**1.** Ask first before sending any external email or message. (Demande avant tout e-mail ou message externe.)  
**2.** Ask first before deleting or overwriting any file. (Demande avant de supprimer ou d'écraser un fichier.)
</div>

<div class="fin" markdown="1">
## En résumé

- Allow once · Always allow · Deny.
- Ask first gagne sur Allow automatically.
- Règle étroite : une action, un périmètre.

**Bravo !** Leçon 15 : un brouillon avant tout envoi.
</div>

<small>Source : docs.x.ai/grok-bot/approvals-security-and-privacy (lue le 15/10/2026).</small>
