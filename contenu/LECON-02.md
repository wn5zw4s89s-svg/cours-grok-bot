# Leçon 2 : Donne un métier à ton bot

<p class="chapeau">Marc : « Il me faudrait un truc qui m'aide. » Trop flou. Transforme-le en fiche.</p>

## Écoute Marc

> « Le soir, je rappelle tout le monde. J'oublie des gens. Mais pas de prix à ma place. »

Le siphon ne parle pas aux clients. Marc colle. Le bot prépare.

## Remplis 3 cases

- **Nom** : « Le siphon », pas « Assistant ».
- **Titre** : le métier en 6 mots.
- **Description** : le mode d'emploi permanent.

Dans la description : Métier · Entrées · Sortie · Fini quand · Je reprends avant · Hors périmètre · Si c'est flou.

<div class="box erreur" markdown="1">
« Traite Mme Lefèvre » dans la description. Non : travail du jour -> message.
</div>

## Modèle à coller

Copie tout le bloc. Change ensuite 1 ou 2 rubriques (titre, urgent, hors périmètre…).

```
Nom : Le siphon
Titre : Trie les demandes de dépannage

Métier : pour Marc Garnier, plombier fictif (Ville-Test, 06 00 00 00 99). Message collé -> fiche + brouillon.
Entrées : messages que Marc colle.
Sortie : URGENT ; Client ; Problème ; Infos manquantes ; Brouillon signé Marc.
Urgent : eau qu'on n'arrête pas, ou plus d'eau.
Fini quand : chaque champ rempli ou « manquant ».
Je reprends avant : aucun prix, délai, rendez-vous, envoi.
Hors périmètre : devis, conseils de réparation.
Si c'est flou : « manquant » + question dans le brouillon.
```

<div class="box atoi" markdown="1">
**À toi de jouer.** 4 étapes. 2 messages.

1. Copie le modèle. Change 1 ou 2 rubriques.
2. Crée un nouveau bot. Ouvre sa description. Colle nom, titre, description. Enregistre.
3. Envoie : « Message reçu : "Mme Lefèvre, ça goutte sous l'évier. Vous passez quand ? C'est combien ?" »
4. Envoie : « Message reçu : "Le tuyau a éclaté, ça inonde !" »

**C'est réussi si :**

- fiche collée, 1 ou 2 rubriques modifiées (étapes 1-2) ;
- réponse 1 : aucun prix, aucun rendez-vous, adresse « manquant » (étape 3) ;
- réponse 2 : URGENT en première ligne (étape 4).
</div>

<div class="box corrige" markdown="1">
Exemple de changement : titre « Classe les SMS de dépannage » ; urgent inchangé.  
Réponse 1 : « Marc vous rappelle » ; pas de montant.  
Réponse 2 : URGENT en 1re ligne.
</div>

<div class="box preuve" markdown="1">
✅/❌ + phrase du bot. Ex. : Aucun prix ✅ « Marc vous rappelle. »
</div>

<div class="fin" markdown="1">
## En résumé

- Fiche = Nom, Titre, description (7 rubriques).
- Colle le modèle. Change 1 ou 2 lignes.
- Preuve = phrase du vrai bot.

**Bravo !** Leçon 3 : teste Le siphon.
</div>
