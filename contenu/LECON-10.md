# Leçon 10 : Maîtrise ce que ton bot retient

<p class="chapeau">Le bot se souvient. Pas toujours juste. Range chaque info. Corrige un souvenir faux.</p>

## Où ranger

| Type | Où |
|---|---|
| Règle / limite | description |
| Préférence stable | mémoire |
| Donnée qui change | fichier source |

<div class="box info" markdown="1">
La mémoire d'un bot ne passe pas aux autres.
</div>

Pour Marc : « jamais de prix » -> description · tarifs -> fichier · « 3 phrases » -> mémoire · planning -> fichier.

<div class="box atoi" markdown="1">
**Exercice 1 : classe.** Sans le bot.

- **A.** « Ne promets jamais une date. »
- **B.** Tarifs des pièces (changent).
- **C.** « Réponses de 3 phrases max. »
- **D.** Planning de la semaine.
- **E.** « N'envoie rien sans l'accord de Marc. »
- **F.** « Marc vouvoie ses clients. »

Forme : « A -> … , car … »

Exemple : « Prix des roses -> fichier, car ça change. »

**C'est réussi si :** A,E = description ; B,D = fichier ; C,F = mémoire.
</div>

<div class="box corrige" markdown="1">
A -> description. B -> fichier. C -> mémoire. D -> fichier. E -> description. F -> mémoire.
</div>

<div class="box atoi" markdown="1">
**Exercice 2 : corrige, vérifie en NOUVELLE conversation.** 3 messages. Bot principal.

1. « Retiens : Tom Miller, Ville-Test, 06 00 00 00 01. Réponds « Noté ». »
2. Même fil : « Correction : le numéro est 06 00 00 00 02. L'ancien est faux. Réponds « Corrigé ». »
3. **Nouvelle conversation.** « Quel est le numéro du client fictif Tom Miller ? » — sans redonner le numéro.
4. « Réponse : … Verdict : corrigé / pas corrigé. »

**C'est réussi si :** 1-2 envoyés ; 3 = **nouveau** fil ; question sans numéro ; verdict noté.
</div>

<div class="box attention" markdown="1">
Même fil = le bot relit « Corrigé » au-dessus. Nouvelle conversation = vraie preuve.
</div>

<div class="box corrige" markdown="1">
Réponse : « 06 00 00 00 02. » Verdict : souvenir corrigé.
</div>

<div class="box preuve" markdown="1">
Si 06 00 00 00 01 revient : refais 2, puis 3 en nouveau fil. Sinon : pour une vraie décision, rouvre la source.
</div>

<div class="fin" markdown="1">
## En résumé

- Règle -> description. Préférence -> mémoire. Change -> fichier.
- Vérifie en **nouvelle conversation**.

**Bravo !** Leçon 11 : bot toujours actif.
</div>
