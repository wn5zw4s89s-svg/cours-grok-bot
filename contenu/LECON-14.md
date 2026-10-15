# Leçon 14 : Écris des garde-fous « demande avant »

<p class="chapeau">Le bot peut agir seul. Certains gestes doivent attendre ton oui.</p>

## Lis une demande de validation

La carte montre l'action proposée et ses valeurs. Trois boutons :

- Autoriser une fois : cette fois seulement.
- Autoriser toujours : enregistre une règle, les prochaines passent seules.
- Refuser : bloque.


Une validation venue d'une routine expire après environ 10 minutes. L'action ne se fait pas.

<div class="box erreur" markdown="1">
Autoriser toujours sur un envoi. Un clic, et les prochains partent sans toi.
</div>

## Écris des règles « demander d'abord »

Ouvre le [réglage des règles de validation](grokbot://app/v1/settings?id=auto-review-rules) (`Cmd+,`). Deux sortes de règles :

- Demander d'abord : s'arrête toujours pour te demander.
- Autoriser automatiquement : laisse passer, sauf si la revue voit un problème.

Si les deux s'appliquent : demander d'abord gagne.

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

- Autoriser une fois · autoriser toujours · refuser.
- Demander d'abord gagne sur autoriser automatiquement.
- Règle étroite : une action, un périmètre.

**Bravo !** Leçon 15 : un brouillon avant tout envoi.
</div>

<small>Source : docs.x.ai/grok-bot/approvals-security-and-privacy (lue le 15/10/2026).</small>
