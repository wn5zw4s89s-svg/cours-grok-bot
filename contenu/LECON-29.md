# Leçon 29 : Sécurise ton ordinateur partagé

<p class="chapeau">Tous tes bots partagent le même ordinateur cloud. Séparer les bots ne protège pas.</p>

## La frontière

Fichiers, sessions navigateur, identifiants en ligne de commande : visibles par **tous** tes bots.

- Ne traite pas « un bot par sujet » comme un mur de sécurité.
- Déconnecte un service quand il ne doit plus être là.
- Retire les fichiers sensibles de `/workspace` après usage.
- Désinstalle un connecteur / révoque l'accès dans le service source.

## Ordinateur local (lecture)

Si tu as un ordinateur (Mac ou PC) enregistré dans Grok Bot, un réglage contrôle l'exécution **sur cette machine** :

- demander à chaque fois (défaut)
- toujours autoriser
- ne jamais autoriser

Sur iPhone seul, ce réglage ne s'applique pas. L'ordinateur cloud du bot reste actif. **Aujourd'hui : lecture seulement. Aucun réglage changé.**

<div class="box atoi" markdown="1">
**À toi de jouer.** Audit en lecture. 0 message. **Aucun réglage changé aujourd'hui.**

1. Liste les **plugins** installés (tes apps connectées). Pour chacun : « je garderais » ou « je retirerais, si je le décide ».
2. Liste les **routines**. Pour chacune : « je garderais » ou « je mettrais en pause, si je le décide ».
3. Si tu as un ordinateur enregistré : note le choix actuel pour l'exécution locale. Sinon écris « pas d'ordinateur — iPhone seulement ».
4. Demande au bot de lister `/workspace`. Note les fichiers sensibles éventuels : « je garderais » ou « je supprimerais, si je le décide ».
5. Écris 3 actions possibles, chacune avec « si je le décide ».

**C'est réussi si :** 4 listes notées (1-4) ; 3 actions écrites avec « si je le décide » (5) ; aucun réglage modifié.
</div>

<div class="box corrige" markdown="1">
Plugins : Drive — je garderais · X — je retirerais, si je le décide.  
Routines : stock-marc — je mettrais en pause, si je le décide.  
Local : pas d'ordinateur — iPhone seulement.  
`/workspace` : fournitures-test.csv — je garderais (fictif).  
Actions possibles : 1) pause de stock-marc 2) retrait du plugin X 3) supprimer un fichier sensible — chacune si je le décide.
</div>
<div class="fin" markdown="1">
## En résumé

- Un ordinateur cloud pour tous tes bots.
- Exécution locale : lecture, si tu as un ordinateur.
- Audit en lecture : tu notes, tu ne changes rien.

**Bravo !** Leçon 30 : essai blanc.
</div>

<small>Source : docs.x.ai/grok-bot/approvals-security-and-privacy (lue le 15/10/2026).</small>
