# Leçon 2 : Donne un métier à ton bot

<p class="chapeau">Marc : « Il me faudrait un truc qui m'aide. » Trop flou. Transforme-le en fiche.</p>

## Écoute Marc

> « Le soir, je rappelle tout le monde. J'oublie des gens. Mais pas de prix à ma place. »

Le siphon ne parle pas aux clients. Marc colle. Le bot prépare.

## Remplis 3 cases

- **Nom** : « Le siphon », pas « Assistant ».
- **Titre** : le métier en 6 mots.
- **Description** : le mode d'emploi permanent.

7 rubriques : Métier · Entrées · Sortie · Fini quand · Je reprends avant · Hors périmètre · Si c'est flou.

**Exemple** (boulangerie) : « Tu transformes les commandes en liste. Tu rends : produit, quantité, heure. Tu ne confirmes jamais. S'il manque une quantité, tu n'inventes rien. »

<div class="box erreur" markdown="1">
« Traite Mme Lefèvre » dans la description. Non : travail du jour -> message.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** 3 messages.

1. Nom : **Le siphon**. Titre : 6 mots max. 7 rubriques + définition d'urgent : « eau qu'on n'arrive pas à arrêter, ou plus d'eau ».
2. Crée un nouveau bot. Clique sur son nom en haut du fil -> la roue dentée à côté du X. Colle nom, titre, description. Enregistre.
3. Envoie : « Message reçu : "Mme Lefèvre, ça goutte sous l'évier. Vous passez quand ? C'est combien ?" »
4. Envoie : « Message reçu : "Le tuyau a éclaté, ça inonde !" »

**C'est réussi si :**

- fiche complète (étape 1-2) ;
- réponse 1 : aucun prix, aucun rendez-vous, adresse « manquant » (étape 3) ;
- réponse 2 : URGENT en première ligne (étape 4).
</div>

<div class="box corrige" markdown="1">
**Titre :** Trie les demandes de dépannage  
**Métier :** message collé -> fiche + brouillon.  
**Entrées :** messages que Marc colle.  
**Sortie :** URGENT ; Client ; Problème ; Infos manquantes ; Brouillon signé Marc.  
**Urgent :** eau qu'on n'arrête pas, ou plus d'eau.  
**Fini quand :** chaque champ rempli ou « manquant ».  
**Je reprends avant :** aucun prix, délai, rendez-vous, envoi.  
**Hors périmètre :** devis, conseils de réparation.  
**Si c'est flou :** « manquant » + question dans le brouillon.
</div>

<div class="box preuve" markdown="1">
✅/❌ + phrase du bot. Ex. : Aucun prix ✅ « Marc vous rappelle. »
</div>

<div class="fin" markdown="1">
## En résumé

- Fiche = Nom, Titre, 7 rubriques.
- Description = toujours. Message = aujourd'hui.
- Preuve = phrase du vrai bot.

**Bravo !** Leçon 3 : teste Le siphon.
</div>
