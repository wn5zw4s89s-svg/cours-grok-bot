# Leçon 29 : Sécurise ton ordinateur partagé

<p class="chapeau">Tous tes bots partagent le même ordinateur cloud. Séparer les bots ne protège pas.</p>

## La frontière

Fichiers, sessions navigateur, identifiants en ligne de commande : visibles par **tous** tes bots.

- Ne traite pas « un bot par sujet » comme un mur de sécurité.
- Déconnecte un service quand il ne doit plus être là.
- Retire les fichiers sensibles de `/workspace` après usage.
- Désinstalle un connecteur / révoque l'accès dans le service source.

## Ordinateur local

Ouvre le [réglage d'exécution sur ton ordinateur](grokbot://app/v1/settings?id=local-execution) (`Cmd+,`). Trois choix :

- demander à chaque fois (défaut)
- toujours autoriser
- ne jamais autoriser


Si ton Mac est déjà enregistré : vois aussi [tes ordinateurs](grokbot://app/v1/settings?id=computers).

Choisis ne jamais autoriser, sauf besoin précis. Ce réglage ne bloque pas l'ordinateur cloud.

<div class="box atoi" markdown="1">
**À toi de jouer.** Audit en lecture. 0 message. **Aucun réglage changé aujourd'hui.**

1. Liste les **plugins** installés (barre de gauche : tes apps connectées). Pour chacun : « je garderais » ou « je retirerais, si je le décide ».
2. Liste les **routines**. Pour chacune : « je garderais » ou « je mettrais en pause, si je le décide ».
3. Note le choix actuel pour l'exécution sur ton ordinateur. Écris celle que tu choisirais, si tu le décides.
4. Regarde `/workspace` sur l'ordinateur du bot. Note les fichiers sensibles éventuels : « je garderais » ou « je supprimerais, si je le décide ».
5. Écris 3 actions possibles, chacune avec « si je le décide ».

**C'est réussi si :** 4 listes notées (1-4) ; 3 actions écrites avec « si je le décide » (5) ; aucun réglage modifié.
</div>

<div class="box corrige" markdown="1">
Plugins : Drive — je garderais · X — je retirerais, si je le décide.  
Routines : stock-marc — je mettrais en pause, si je le décide.  
Local : demander à chaque fois aujourd'hui · ne jamais autoriser, si je le décide.  
`/workspace` : fournitures-test.csv — je garderais (fictif).  
Actions possibles : 1) ne jamais autoriser 2) pause de stock-marc 3) retrait du plugin X — chacune si je le décide.
</div>

<div class="box preuve" markdown="1">
La preuve, c'est ta liste notée : 4 listes + 3 actions « si je le décide ». Aucun réglage changé ✅
</div>

<div class="fin" markdown="1">
## En résumé

- Un ordinateur cloud pour tous tes bots.
- Demander à chaque fois / toujours / jamais pour le Mac local.
- Audit en lecture : tu notes, tu ne changes rien.

**Bravo !** Leçon 30 : essai blanc.
</div>

<small>Source : docs.x.ai/grok-bot/approvals-security-and-privacy (lue le 15/10/2026).</small>
