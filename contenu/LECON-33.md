# Leçon 33 : Relis et annule ce que fait l'agent

<p class="chapeau">L'agent crée la page. Tu la vérifies. Puis tu annules un changement.</p>

<div class="box attention" markdown="1">
2 requêtes à l'agent. Rien n'est mis en ligne.
</div>

<div class="box atoi" markdown="1">
**À toi de jouer.** 2 requêtes.

1. Dans `page-marc`, `Cmd+I`. Envoie ta demande (leçon 32).
2. Relis ce que l'agent a changé. Un seul fichier créé ? ✅/❌
3. Ouvre `index.html` dans ton navigateur (double-clic dans le Finder). Note : titre ✅/❌ · téléphone fictif ✅/❌ · bouton ✅/❌.
4. Requête 2 : « Mets le fond de la page en rouge vif. »
5. Clique le checkpoint d'avant la requête 2 -> le bouton Restore Checkpoint de Cursor (retour à l'état d'avant).
6. Recharge la page. Le fond rouge a disparu ? ✅/❌

**C'est réussi si :** page ouverte dans le navigateur (3) ; 3 points notés (3) ; changement annulé par checkpoint (5-6).
</div>

<div class="box corrige" markdown="1">
Fichier : `index.html` seul.  
Navigateur : « Marc Garnier, plombier », 06 00 00 00 01, bouton Appeler ✅.  
Fond rouge -> Restore Checkpoint -> fond d'origine ✅.
</div>

<div class="box erreur" markdown="1">
Prendre le checkpoint pour une sauvegarde définitive. Il est local et sert à annuler l'agent. Pour garder l'historique : Git.
</div>

<div class="box preuve" markdown="1">
Page ouverte ✅ · Fond rouge annulé ✅ (capture avant / après si tu veux)
</div>

<div class="fin" markdown="1">
## En résumé

- Tu relis chaque changement.
- Le navigateur prouve que la page marche.
- Checkpoint = annuler l'agent, pas remplacer Git.

**Bravo !** Leçon 34 : les règles de l'agent.
</div>

<small>Source : cursor.com/docs/agent/overview.md (lue le 15/10/2026).</small>
