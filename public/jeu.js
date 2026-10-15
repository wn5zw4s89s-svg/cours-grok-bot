// Cours Grok Bot — progression anonyme (localStorage), niveaux, badges.
(function () {
  const M = JSON.parse(document.getElementById('gb-meta').textContent);
  const K = 'gb2:progression';
  const etat = () => { let d; try { d = JSON.parse(localStorage.getItem(K)) || {}; } catch { d = {}; } d.lecons ??= {}; d.preuves ??= {}; d.quiz ??= {}; return d; };
  const ecrire = (f) => { const d = etat(); f(d); localStorage.setItem(K, JSON.stringify(d)); return d; };
  const $ = (t, a = {}, ...k) => { const e = document.createElement(t); for (const [x, v] of Object.entries(a)) { if (x === 'on') for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn); else if (x === 'class') e.className = v; else e.setAttribute(x, v); } k.flat().forEach((c) => c != null && e.append(c)); return e; };
  const L = M.lecons, idx = (id) => L.findIndex((l) => l.id === id);
  const lecNiv = (n) => L.filter((l) => l.niveau === n);
  const nivFini = (d, n) => lecNiv(n).every((l) => d.lecons[l.id]);
  const debloquee = (d, i) => i <= 0 || !!d.lecons[L[i - 1].id] || !!d.lecons[L[i].id];
  const nivCourant = (d) => M.niveaux.find((n) => !nivFini(d, n.id)) || null;
  const BADGES = [
    ['🌱', 'Premier pas', (d) => L.some((l) => d.lecons[l.id])],
    ...M.niveaux.map((n) => ['🏅', `Niveau ${n.id} · ${n.nom}`, (d) => nivFini(d, n.id)]),
    ['⭐', 'Quiz parfait', (d) => Object.values(d.quiz).some((q) => q.score === q.total)],
  ];

  function rafraichir() {
    const d = etat(), cur = nivCourant(d);
    const pill = document.querySelector('[data-niveau]');
    if (pill) pill.textContent = cur ? `Niveau ${cur.id} · ${cur.nom}` : 'Cours terminé 🏆';
    if (cur) {
      const ls = lecNiv(cur.id), f = ls.filter((l) => d.lecons[l.id]).length;
      const suiv = M.niveaux.find((n) => n.id === cur.id + 1);
      document.querySelectorAll('[data-objectif]').forEach((e) => (e.textContent = `${f}/${ls.length} avant ${suiv ? suiv.nom : 'la fin du cours'}`));
      document.querySelectorAll('[data-barre-niv]').forEach((b) => (b.style.width = Math.round((f / ls.length) * 100) + '%'));
      const next = ls.find((l) => !d.lecons[l.id]);
      document.querySelectorAll('[data-continuer]').forEach((a) => { a.textContent = L.some((l) => d.lecons[l.id]) ? `Continuer · Leçon ${next.num}` : 'Commencer'; a.href = `${M.base}lecon/${next.id}/`; });
    } else {
      document.querySelectorAll('[data-objectif]').forEach((e) => (e.textContent = 'Tout est terminé'));
      document.querySelectorAll('[data-barre-niv]').forEach((b) => (b.style.width = '100%'));
      document.querySelectorAll('[data-continuer]').forEach((a) => { a.textContent = 'Revoir la leçon 1'; a.href = `${M.base}lecon/${L[0].id}/`; });
    }
    const pb = BADGES.find((b) => !b[2](d));
    document.querySelectorAll('[data-prochain-badge]').forEach((e) => e.replaceChildren(...(pb ? [$('span', { class: 'silhouette' }, pb[0]), ` Prochain badge : ${pb[1]}`] : ['🏆 Tous les badges'])));
    M.niveaux.forEach((n) => {
      const ls = lecNiv(n.id), f = ls.filter((l) => d.lecons[l.id]).length, fini = f === ls.length;
      const ouvert = cur ? n.id <= cur.id : false;
      document.querySelectorAll(`[data-niveau-bloc="${n.id}"]`).forEach((b) => { b.open = cur && n.id === cur.id; b.classList.toggle('verrouille', !ouvert && !fini); });
      document.querySelectorAll(`[data-niv-etat="${n.id}"]`).forEach((e) => (e.textContent = fini ? `${ls.length} leçons ✓` : n.id === cur?.id ? `${f}/${ls.length}` : `${ls.length} leçons 🔒`));
    });
    L.forEach((l, i) => document.querySelectorAll(`[data-lecon-carte="${l.id}"]`).forEach((c) => {
      c.classList.toggle('fait', !!d.lecons[l.id]); c.classList.toggle('verrouillee', !debloquee(d, i));
      c.querySelector('[data-etat]').textContent = d.lecons[l.id] ? '✓' : l.num;
    }));
    document.querySelectorAll('[data-quiz-lien]').forEach((a) => {
      const n = +a.dataset.quizNiv, ok = nivFini(d, n), q = d.quiz[a.dataset.quizLien];
      a.classList.toggle('mute', !ok);
      a.textContent = ok ? (q ? `Quiz · ${q.meilleur}/${q.total}` : 'Quiz →') : 'Quiz 🔒';
    });
  }

  document.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => { if (confirm('Effacer ta progression sur cet appareil ?')) { localStorage.removeItem(K); rafraichir(); } }));

  document.querySelectorAll('.lecon').forEach((art) => {
    const id = art.dataset.lecon;
    if (!debloquee(etat(), idx(id))) { art.classList.add('bloquee'); art.querySelector('.verrou').hidden = false; }
    art.querySelector('[data-forcer]')?.addEventListener('click', () => { art.classList.remove('bloquee'); art.querySelector('.verrou').hidden = true; });
    art.querySelector('[data-terminer]').addEventListener('click', () => ecrire((d) => (d.lecons[id] ??= { date: new Date().toISOString() })));
  });

  document.querySelectorAll('.box.preuve').forEach((box) => {
    const id = box.dataset.preuve, w = box.querySelector('.preuve-widget'); if (!w) return;
    const cur = etat().preuves[id] || {};
    const ta = $('textarea', { placeholder: 'Colle ici la phrase exacte de ton bot…' }); ta.value = cur.phrase || '';
    const bOk = $('button', { type: 'button' }, '✅ Ça passe'), bKo = $('button', { type: 'button' }, '❌ Ça rate');
    const aff = (r) => { bOk.classList.toggle('on', r === 'ok'); bKo.classList.toggle('on', r === 'ko'); };
    const save = (r) => { ecrire((d) => (d.preuves[id] = { phrase: ta.value, resultat: r, date: new Date().toISOString() })); aff(r); };
    bOk.onclick = () => save('ok'); bKo.onclick = () => save('ko');
    ta.addEventListener('change', () => { const r = etat().preuves[id]?.resultat; if (r) save(r); });
    w.append(ta, $('div', { class: 'choix-preuve' }, bOk, bKo)); aff(cur.resultat);
  });

  document.querySelectorAll('.quiz').forEach((el) => {
    const q = JSON.parse(el.dataset.quiz), N = q.questions.length, niv = +el.dataset.niveau;
    const d0 = etat();
    if (!nivFini(d0, niv)) {
      const v = document.querySelector('[data-quiz-verrou]'); v.hidden = false;
      const next = lecNiv(niv).find((l) => !d0.lecons[l.id]);
      const a = v.querySelector('[data-quiz-suite]'); a.href = `${M.base}lecon/${next.id}/`; a.textContent = `Leçon ${next.num}`;
      return;
    }
    const fin = (score) => {
      ecrire((d) => { const p = d.quiz[q.id]; d.quiz[q.id] = { score, total: N, meilleur: Math.max(score, p?.meilleur ?? 0), date: new Date().toISOString() }; });
      const r = score / N, et = r === 1 ? 3 : r >= 0.6 ? 2 : r > 0 ? 1 : 0;
      const nextL = L.find((l) => l.niveau === niv + 1);
      el.replaceChildren($('div', { class: 'q-carte q-fin' },
        $('div', { class: 'etoiles' }, '★'.repeat(et) + '☆'.repeat(3 - et)),
        $('div', { class: 'gros-score' }, `${score}/${N}`),
        nextL ? $('a', { class: 'btn', href: `${M.base}lecon/${nextL.id}/` }, `Niveau ${niv + 1} →`) : $('a', { class: 'btn', href: M.base }, 'Accueil'),
        $('p', {}, $('button', { class: 'lien', on: { click: () => jouer(0, 0) } }, 'Rejouer'))));
      rafraichir();
    };
    const jouer = (i, score) => {
      if (i === N) return fin(score);
      const x = q.questions[i], fb = $('div');
      const btns = x.choix.map((c, j) => $('button', { type: 'button', on: { click: () => {
        btns.forEach((b) => (b.disabled = true));
        const ok = j === x.bonne_reponse; btns[x.bonne_reponse].classList.add('bon'); if (!ok) btns[j].classList.add('faux');
        const s = score + (ok ? 1 : 0);
        fb.replaceChildren($('div', { class: 'q-fb' }, $('div', { class: ok ? 'ok' : 'ko' }, ok ? '✅ Bonne réponse' : '❌ Pas tout à fait'), $('div', {}, x.explication || ''),
          $('button', { class: 'btn', on: { click: () => jouer(i + 1, s) } }, i + 1 === N ? 'Voir mon score' : 'Suivante →')));
        el.querySelector('.q-score').textContent = `${s}`;
      } } }, c));
      el.replaceChildren($('div', { class: 'q-carte' },
        $('div', { class: 'q-entete' }, $('span', {}, `${i + 1} / ${N}`), $('span', { class: 'q-score' }, `${score}`)),
        $('div', { class: 'barre', style: 'margin:12px 0 0' }, $('span', { style: `width:${(i / N) * 100}%` })),
        $('div', { class: 'q-texte' }, x.question), $('div', { class: 'q-choix' }, btns), fb));
    };
    jouer(0, 0);
  });

  rafraichir();
})();
