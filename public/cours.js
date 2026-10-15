// Cours Grok Bot — V1 statique : profil, progression, preuves et quiz en localStorage.
(function () {
  const BASE = new URL('.', document.currentScript.src).pathname; // ex. /cours-grok-bot/
  const K_PROFIL = 'gb:profil';
  const kProg = (p) => 'gb:progression:' + p;
  const $ = (t, a = {}, ...kids) => { const e = document.createElement(t); for (const [k, v] of Object.entries(a)) { if (k === 'on') for (const [ev, f] of Object.entries(v)) e.addEventListener(ev, f); else if (k === 'class') e.className = v; else e.setAttribute(k, v); } kids.flat().forEach((c) => e.append(c)); return e; };
  const profil = () => localStorage.getItem(K_PROFIL);
  const charger = () => { const p = profil() || 'invité'; try { return JSON.parse(localStorage.getItem(kProg(p))) || {}; } catch { return {}; } };
  const sauver = (d) => localStorage.setItem(kProg(profil() || 'invité'), JSON.stringify(d));
  const maj = (f) => { const d = charger(); d.lecons ??= {}; d.preuves ??= {}; d.quiz ??= {}; f(d); d.maj = new Date().toISOString(); sauver(d); };
  const date = (s) => new Date(s).toLocaleString('fr-FR');
  const indexContenu = () => fetch(BASE + 'index-contenu.json').then((r) => r.json());
  const lienProfil = () => $('p', {}, profil() ? `Connecté en local : ${profil()} · ` : 'Pas encore de profil (progression enregistrée en « invité ») · ', $('a', { href: BASE + 'connexion/' }, profil() ? 'changer' : 'créer mon profil'));

  // Preuves de test
  document.querySelectorAll('.box.preuve').forEach((box) => {
    const id = box.dataset.preuve, w = box.querySelector('.preuve-widget'); if (!w) return;
    const cur = (charger().preuves || {})[id] || {};
    const ta = $('textarea', { rows: 3, placeholder: 'Colle ici la phrase exacte de ton bot…' }); ta.value = cur.phrase || '';
    const etat = $('span', {}, '');
    const afficher = (r) => { etat.textContent = r ? (r === 'ok' ? ' ✅ Test réussi — enregistré' : ' ❌ Test raté — enregistré') : ''; etat.className = r === 'ok' ? 'gb-ok' : 'gb-ko'; };
    const save = (r) => maj((d) => { d.preuves[id] = { phrase: ta.value, resultat: r, date: new Date().toISOString(), page: location.pathname }; afficher(r); });
    w.append(ta, $('div', {}, $('button', { class: 'gb-btn', on: { click: () => save('ok') } }, '✅ Ça passe'), $('button', { class: 'gb-btn', on: { click: () => save('ko') } }, '❌ Ça rate'), etat));
    afficher(cur.resultat);
  });

  // Fin de leçon
  document.querySelectorAll('.lecon-fin').forEach((el) => {
    const id = el.dataset.lecon;
    const r = () => { el.replaceChildren(); const fait = (charger().lecons || {})[id]; el.append($('hr'), fait ? $('p', { class: 'gb-ok' }, `✅ Leçon terminée le ${date(fait.date)}`) : '', $('button', { class: 'gb-btn primaire', on: { click: () => { maj((d) => { if (fait) delete d.lecons[id]; else d.lecons[id] = { date: new Date().toISOString() }; }); r(); } } }, fait ? 'Marquer comme non terminée' : 'J’ai terminé cette leçon'), lienProfil()); };
    r();
  });

  // Quiz
  document.querySelectorAll('.quiz').forEach((el) => {
    const q = JSON.parse(el.dataset.quiz);
    const jouer = () => {
      el.replaceChildren(); let score = 0, repondu = 0;
      const prec = (charger().quiz || {})[q.id];
      if (prec) el.append($('p', {}, `Dernier score : ${prec.score}/${prec.total} (${date(prec.date)})`));
      const res = $('div');
      q.questions.forEach((x, i) => {
        const bloc = $('div', { class: 'quiz-q' }, $('p', {}, $('strong', {}, `Question ${i + 1}/${q.questions.length}. `), x.question));
        const fb = $('div');
        const btns = x.choix.map((c, j) => $('button', { class: 'gb-btn quiz-choix', on: { click: () => {
          btns.forEach((b) => (b.disabled = true));
          btns[x.bonne_reponse].classList.add('bon');
          const ok = j === x.bonne_reponse; if (!ok) btns[j].classList.add('faux'); else score++;
          btns[j].classList.add('choisi');
          fb.append($('p', { class: ok ? 'gb-ok' : 'gb-ko' }, ok ? '✅ Bonne réponse.' : `❌ Pas tout à fait. La bonne réponse : « ${x.choix[x.bonne_reponse]} ».`), $('p', {}, x.explication || ''));
          if (++repondu === q.questions.length) {
            maj((d) => { d.quiz[q.id] = { score, total: repondu, date: new Date().toISOString() }; });
            res.append($('h3', {}, `Ton score : ${score}/${repondu}`), $('p', {}, 'Score enregistré dans ta progression. Pas de note minimale : tu peux refaire le quiz quand tu veux.'), $('button', { class: 'gb-btn primaire', on: { click: () => { jouer(); el.scrollIntoView(); } } }, 'Refaire le quiz'));
          }
        } } }, `${String.fromCharCode(65 + j)}. ${c}`));
        bloc.append(...btns, fb); el.append(bloc);
      });
      el.append(res, lienProfil());
    };
    jouer();
  });

  // Connexion (profil local)
  document.querySelectorAll('.connexion').forEach((el) => {
    const r = () => {
      el.replaceChildren();
      const inp = $('input', { class: 'gb-input', placeholder: 'Ton pseudo (ex. Joseph)', maxlength: 40 }); inp.value = profil() || '';
      const fichier = $('input', { type: 'file', accept: 'application/json', style: 'display:none', on: { change: async (e) => { try { const d = JSON.parse(await e.target.files[0].text()); if (!d.profil || !d.progression) throw 0; localStorage.setItem(K_PROFIL, d.profil); localStorage.setItem(kProg(d.profil), JSON.stringify(d.progression)); alert('Progression importée.'); r(); } catch { alert('Fichier invalide.'); } } } });
      el.append(
        profil() ? $('p', { class: 'gb-ok' }, `Connecté en local : ${profil()}`) : $('p', {}, 'Aucun profil pour l’instant.'),
        $('label', {}, 'Pseudo'), inp,
        $('div', {}, $('button', { class: 'gb-btn primaire', on: { click: () => { const v = inp.value.trim(); if (!v) return alert('Écris un pseudo.'); const ancien = profil(); if (!ancien && localStorage.getItem(kProg('invité')) && !localStorage.getItem(kProg(v))) localStorage.setItem(kProg(v), localStorage.getItem(kProg('invité'))); localStorage.setItem(K_PROFIL, v); r(); } } }, profil() ? 'Changer de profil' : 'Se connecter'),
          profil() ? $('button', { class: 'gb-btn', on: { click: () => { localStorage.removeItem(K_PROFIL); r(); } } }, 'Se déconnecter') : '',
          $('button', { class: 'gb-btn', on: { click: () => { const b = new Blob([JSON.stringify({ profil: profil() || 'invité', progression: charger() }, null, 2)], { type: 'application/json' }); const a = $('a', { href: URL.createObjectURL(b), download: `progression-${profil() || 'invite'}.json` }); a.click(); } } }, 'Exporter ma progression'),
          $('button', { class: 'gb-btn', on: { click: () => fichier.click() } }, 'Importer'), fichier));
    };
    r();
  });

  document.querySelectorAll('.accueil-profil').forEach((el) => el.append(lienProfil()));

  // Page progression
  document.querySelectorAll('.progression').forEach(async (el) => {
    const idx = await indexContenu(), d = charger(), L = d.lecons || {}, P = d.preuves || {}, Q = d.quiz || {};
    const nb = idx.lecons.filter((l) => L[l.id]).length;
    el.append(lienProfil(), $('h2', {}, `Leçons : ${nb}/${idx.lecons.length}`), $('progress', { max: idx.lecons.length, value: nb, style: 'width:100%' }),
      $('ul', {}, idx.lecons.map((l) => $('li', {}, L[l.id] ? '✅ ' : '⬜ ', $('a', { href: `${BASE}lecons/${l.id}/` }, l.id.toUpperCase()), L[l.id] ? ` — ${date(L[l.id].date)}` : ''))),
      $('h2', {}, 'Quiz'), $('ul', {}, idx.quiz.map((q) => $('li', {}, $('a', { href: `${BASE}quiz/${q.slug}/` }, `${q.id} — ${q.titre}`), Q[q.id] ? ` : dernier score ${Q[q.id].score}/${Q[q.id].total} (${date(Q[q.id].date)})` : ' : pas encore fait'))),
      $('h2', {}, 'Preuves de test'), Object.keys(P).length ? $('ul', {}, Object.entries(P).map(([k, v]) => $('li', {}, v.resultat === 'ok' ? '✅ ' : v.resultat === 'ko' ? '❌ ' : '… ', $('a', { href: v.page }, k), ` — « ${v.phrase || '(vide)'} »`))) : $('p', {}, 'Aucune preuve enregistrée.'),
      $('button', { class: 'gb-btn', on: { click: () => { if (confirm('Effacer toute la progression de ce profil ?')) { localStorage.removeItem(kProg(profil() || 'invité')); location.reload(); } } } }, 'Réinitialiser ma progression'));
  });
})();
