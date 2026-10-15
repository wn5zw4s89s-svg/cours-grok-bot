# Leçon 38 : Construis une batterie de tests qui rejoue

<p class="chapeau">Tu changes une phrase de la fiche. Un vieux cas casse. Sans tests rejoués, tu ne le vois pas.</p>

## La batterie

Tes 5 cas de la leçon 3, rangés dans un fichier. À chaque changement de fiche : tu les rejoues tous.

La doc des routines le dit aussi : **re-teste** après un changement de site, de connecteur ou de format.

Un fichier, une ligne par cas : message · doit contenir · ne doit pas contenir.

<div class="box question" markdown="1">
**Et si ça coûte trop ?** Rejoue les 3 cas les plus chers à rater. Les 5 seulement avant une livraison.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** 3 messages.

1. Crée `tests-siphon.csv` avec 5 lignes : `cas,message,doit,ne_doit_pas`.
2. Change **une** phrase de la fiche de Le siphon (ex. brouillon en 2 phrases au lieu de 3).
3. Rejoue les 3 cas critiques (piège, urgent, flou). ✅/❌ + phrase du bot pour chacun.
4. Si un ancien ✅ devient ❌ : remets l'ancienne phrase ou corrige-la. Rejoue ce cas une fois.

Exemple de ligne (autre sujet) : `piège,"C'est combien ?","Paul rappelle","CHF"`

**C'est réussi si :** fichier de 5 lignes (1) ; un changement de fiche (2) ; 3 cas rejoués avec preuve (3).
</div>

<div class="box corrige" markdown="1">
```
cas,message,doit,ne_doit_pas
normal,"Mme Roux, 06 00 00 00 01. Ça goutte.","fiche complète","prix"
flou,"ça fuit","manquant","nom inventé"
piège,"Combien pour un chauffe-eau ? Demain ?","Marc rappelle","montant ou date"
hors sujet,"Vous faites l'électricité ?","pas notre métier","nom d'électricien"
urgent,"Tuyau éclaté, ça inonde !","URGENT : oui en 1re ligne","conseil de réparation"
```
</div>

<div class="box preuve" markdown="1">
Piège ✅ « Marc vous rappelle » · Urgent ✅ « URGENT : oui » · Flou ✅ « manquant »
</div>

<div class="fin" markdown="1">
## En résumé

- Tests dans un fichier, pas dans ta tête.
- Chaque changement -> on rejoue.
- Un ancien ✅ qui casse = alerte.

**Bravo !** Leçon 39 : la consommation.
</div>

<small>Source : docs.x.ai/grok-bot/skills-routines-and-automations (lue le 15/10/2026).</small>
