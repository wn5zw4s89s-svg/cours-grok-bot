# Leçon 18 : Comprends l'ordinateur et le navigateur du bot

<p class="chapeau">Ton bot a son propre ordinateur, dans le cloud. Il clique, remplit, lit. Tu peux prendre la main.</p>

## Un ordinateur partagé

Tous tes bots partagent **le même** ordinateur : fichiers, sessions du navigateur.

Chaque bot a son propre écran. Ton Mac peut rester fermé.

Depuis la conversation, ouvre l'ordinateur pour **regarder** : clics, frappe, navigation.

## Prends la main

Pour un mot de passe, un code, un CAPTCHA, un paiement :

1. **Take over** sur la demande, ou **Take control** dans l'ordinateur.
2. Fais seulement l'étape bloquée.
3. **I'm done**, puis dis au bot de continuer.

*Noms de la doc en anglais : les mots français sont à vérifier sur ton écran.*

<div class="box erreur" markdown="1">
Coller un mot de passe dans le chat. Jamais. Tu prends la main et tu tapes toi-même.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** Sans le bot.

Formulaire de test public : https://httpbin.org/forms/post (une fausse commande de pizza, fait pour les essais).

1. Écris la consigne. Forme : « Ouvre … . Remplis : … . N'envoie pas. Arrête-toi avant le bouton … . »
2. Note ton usage de la semaine (… %).
3. Écris quand tu prendras la main. Forme : « Je prends la main au champ … . »

**C'est réussi si :** consigne avec « N'envoie pas » (1) ; usage noté (2) ; champ choisi (3).
</div>

<div class="box corrige" markdown="1">
**Consigne :** « Ouvre https://httpbin.org/forms/post. Remplis : Customer name = Marc Test, Telephone = 06 00 00 00 01, E-mail = test@exemple.invalid, Small, Mushroom. N'envoie pas. Arrête-toi avant Submit order. »  
**Usage :** 22 %  
**Prise de main :** au champ Preferred delivery time.
</div>

<div class="fin" markdown="1">
## En résumé

- Un ordinateur cloud, partagé par tous tes bots.
- Take over -> étape sensible -> I'm done.
- Mot de passe : jamais dans le chat.

**Bravo !** Leçon 19 : regarde-le faire.
</div>

<small>Sources : docs.x.ai/grok-bot/computer-and-apps · docs.x.ai/grok-bot/approvals-security-and-privacy (lues le 15/10/2026).</small>
