// Cours Grok Bot V2 — progression anonyme, 6 niveaux, leçons 1–43.
(function () {
  const M = JSON.parse(document.getElementById('gb-meta').textContent);
  const K = 'gb2:progression';
  const lire = () => { try { return JSON.parse(localStorage.getItem(K)) || {}; } catch { return {}; } };
  const etat = () => { const d = lire(); d.lecons ??= {}; d.preuves ??= {}; d.quiz ??= {}; return d; };
  const ecrire = (f) => { const d = etat(); f(d); localStorage.setItem(K, JSON.stringify(d)); rafraichir(); return d; };
  const $ = (t, a = {}, ...k) => { const e = document.createElement(t); for (const [x, v] of Object.entries(a)) { if (x === 'on') for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn); else if (x === 'class') e.className = v; else e.setAttribute(x, v); } k.flat().forEach((c) => c != null && e.append(c)); return e; };

  const dispo = M.lecons.filter((l) => l.disponible);
  const nbFaitesDispo = (d) => dispo.filter((l) => d.lecons[l.id]).length;
  const niveauActuel = (d) => {
    // Premier niveau qui a encore une leçon disponible non faite, sinon le dernier atteint
    for (const niv of M.niveaux) {
      const ls = M.lecons.filter((l) => l.niveau === niv.id && l.disponible);
      if (!ls.length) continue;
      if (ls.some((l) => !d.lecons[l.id])) return niv;
    }
    return M.niveaux[M.niveaux.length - 1];
  };
  // Leçon N débloquée si N==1 ou N-1 terminée (même si N-1 n'est pas encore publiée : on exige la précédente dispo terminée)
  const indexOf = (id) => M.lecons.findIndex((l) => l.id === id);
  const debloquee = (d, i) => {
    if (i <= 0) return true;
    // Cherche la dernière leçon disponible avant i
    for (let j = i - 1; j >= 0; j--) {
      if (M.lecons[j].disponible) return !!d.lecons[M.lecons[j].id];
    }
    return true;
  };
  const BADGES = [
    ['🌱', 'Premier pas', (d) => nbFaitesDispo(d) >= 1],
    ['🔥', 'Niveau 1 terminé', (d) => M.lecons.filter((l) => l.niveau === 1 && l.disponible).every((l) => d.lecons[l.id])],
    ['🧪', 'Première preuve ✅', (d) => Object.values(d.preuves).some((p) => p.resultat === 'ok')],
    ['🎯', 'Premier quiz', (d) => Object.keys(d.quiz).length >= 1],
    ['⭐', 'Quiz parfait', (d) => Object.values(d.quiz).some((q) => q.score === q.total)],
    ['🏆', 'Tout le contenu dispo', (d) => dispo.length > 0 && nbFaitesDispo(d) === dispo.length],
  ];
  const toast = (txt) => { const t = $('div', { class: 'toast' }, txt); document.body.append(t); requestAnimationFrame(() => t.classList.add('on')); setTimeout(() => { t.classList.remove('on'); setTimeout(() => t.remove(), 500); }, 2600); };
  let badgesAvant = BADGES.filter((b) => b[2](etat())).map((b) => b[1]);

  function rafraichir() {
    const d = etat(), n = nbFaitesDispo(d), pct = dispo.length ? Math.round((n / dispo.length) * 100) : 0;
    const niv = niveauActuel(d);
    document.querySelectorAll('[data-barre]').forEach((b) => (b.style.width = pct + '%'));
    document.querySelectorAll('[data-niveau]').forEach((e) => (e.textContent = `Niveau ${niv.id} · ${niv.nom}`));
    document.querySelectorAll('[data-niveau-nom]').forEach((e) => (e.textContent = `Niveau ${niv.id} · ${niv.nom}`));
    document.querySelectorAll('[data-compte]').forEach((e) => (e.textContent = `${n}/${dispo.length}`));

    M.niveaux.forEach((nivx) => {
      const ls = M.lecons.filter((l) => l.niveau === nivx.id && l.disponible);
      const f = ls.filter((l) => d.lecons[l.id]).length;
      const p = ls.length ? Math.round((f / ls.length) * 100) : 0;
      document.querySelectorAll(`[data-niv-compte="${nivx.id}"]`).forEach((e) => {
        e.textContent = ls.length ? `${f} / ${ls.length}` : 'Bientôt';
      });
      document.querySelectorAll(`[data-niv-barre="${nivx.id}"]`).forEach((b) => (b.style.width = p + '%'));
    });

    const prochaine = M.lecons.findIndex((l) => l.disponible && !d.lecons[l.id] && debloquee(d, indexOf(l.id)));
    const prochaineIdx = prochaine === -1 ? M.lecons.findIndex((l) => l.disponible && !d.lecons[l.id]) : prochaine;
    document.querySelectorAll('[data-continuer]').forEach((a) => {
      if (n === dispo.length && dispo.length) {
        a.textContent = 'Terminé';
        a.href = M.base + 'lecon/' + dispo[0].id + '/';
      } else if (prochaineIdx >= 0) {
        const L = M.lecons[prochaineIdx];
        a.textContent = n ? 'Continuer' : 'Commencer';
        a.href = M.base + 'lecon/' + L.id + '/';
      }
    });

    M.lecons.forEach((l, i) => document.querySelectorAll(`[data-lecon-carte="${l.id}"]`).forEach((c) => {
      if (!l.disponible) return;
      c.classList.toggle('fait', !!d.lecons[l.id]);
      c.classList.toggle('verrouillee', !debloquee(d, i));
      c.classList.toggle('actuelle', i === prochaineIdx);
      const et = c.querySelector('[data-etat]');
      if (et) et.textContent = d.lecons[l.id] ? '✓' : String(l.num);
    }));

    M.quiz.forEach((q) => document.querySelectorAll(`[data-quiz-score="${q.id}"]`).forEach((e) => {
      e.textContent = d.quiz[q.id]
        ? `Quiz · ${d.quiz[q.id].meilleur}/${q.nb}`
        : 'Quiz';
    }));

    document.querySelectorAll('[data-badges]').forEach((zone) => zone.replaceChildren(
      ...BADGES.map(([ico, nom, ok]) => $('div', { class: 'badge' + (ok(d) ? '' : ' off') }, $('span', { class: 'ico' }, ico), nom))
    ));
    const maintenant = BADGES.filter((b) => b[2](d)).map((b) => b[1]);
    maintenant.filter((b) => !badgesAvant.includes(b)).forEach((b) => toast(`🏅 Nouveau badge : ${b}`));
    badgesAvant = maintenant;
  }

  document.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => {
    if (confirm('Effacer toute ta progression sur cet appareil ?')) { localStorage.removeItem(K); badgesAvant = []; rafraichir(); }
  }));

  // Leçon
  document.querySelectorAll('.lecon').forEach((art) => {
    if (art.dataset.disponible !== '1') return;
    const id = art.dataset.lecon, i = indexOf(id);
    if (!debloquee(etat(), i)) { art.classList.add('bloquee'); art.querySelector('.verrou').hidden = false; }
    art.querySelector('[data-forcer]')?.addEventListener('click', () => { art.classList.remove('bloquee'); art.querySelector('.verrou').hidden = true; });
    const btn = art.querySelector('[data-terminer]'), bravo = art.querySelector('.bravo');
    const maj = () => { const fait = !!etat().lecons[id]; btn.textContent = fait ? '✓ Terminé' : "J'ai terminé"; btn.classList.toggle('fait', fait); };
    btn.addEventListener('click', () => {
      if (etat().lecons[id]) { ecrire((d) => delete d.lecons[id]); bravo.hidden = true; }
      else {
        ecrire((d) => (d.lecons[id] = { date: new Date().toISOString() }));
        bravo.hidden = false;
        art.querySelector('[data-suivante]')?.classList.replace('btn-sec', 'btn');
      }
      maj();
    });
    maj();
  });

  // Preuves
  document.querySelectorAll('.box.preuve').forEach((box) => {
    const id = box.dataset.preuve, w = box.querySelector('.preuve-widget'); if (!w) return;
    const cur = etat().preuves[id] || {};
    const ta = $('textarea', { placeholder: 'Colle ici la phrase exacte de ton bot…' }); ta.value = cur.phrase || '';
    const msg = $('span'), bOk = $('button', { type: 'button' }, '✅ Ça passe'), bKo = $('button', { type: 'button' }, '❌ Ça rate');
    const aff = (r) => { bOk.classList.toggle('on', r === 'ok'); bKo.classList.toggle('on', r === 'ko'); msg.textContent = r ? 'Enregistré' : ''; msg.className = r === 'ok' ? 'ok' : 'ko'; };
    const save = (r) => { ecrire((d) => (d.preuves[id] = { phrase: ta.value, resultat: r, date: new Date().toISOString() })); aff(r); };
    bOk.onclick = () => save('ok'); bKo.onclick = () => save('ko');
    ta.addEventListener('change', () => { const r = etat().preuves[id]?.resultat; if (r) save(r); });
    w.append(ta, $('div', { class: 'choix-preuve' }, bOk, bKo, msg)); aff(cur.resultat);
  });

  // Quiz
  document.querySelectorAll('.quiz').forEach((el) => {
    const q = JSON.parse(el.dataset.quiz), N = q.questions.length;
    const fin = (score) => {
      ecrire((d) => { const p = d.quiz[q.id]; d.quiz[q.id] = { score, total: N, meilleur: Math.max(score, p?.meilleur ?? 0), date: new Date().toISOString() }; });
      const r = score / N, et = r === 1 ? 3 : r >= 0.6 ? 2 : r > 0 ? 1 : 0;
      el.replaceChildren($('div', { class: 'q-carte q-fin' },
        $('div', { class: 'etoiles' }, '★'.repeat(et) + '☆'.repeat(3 - et)),
        $('div', { class: 'gros-score' }, `${score}/${N}`),
        $('p', {}, r === 1 ? 'Parfait ! 🎉' : r >= 0.6 ? 'Bien joué !' : 'Continue, tu progresses. Relis les leçons et retente.'),
        $('p', { class: 'discret' }, `Meilleur score : ${etat().quiz[q.id].meilleur}/${N}`),
        $('button', { class: 'btn', on: { click: () => jouer(0, 0) } }, 'Rejouer'), ' ',
        $('a', { class: 'btn-sec', href: M.base }, 'Accueil')));
    };
    const jouer = (i, score) => {
      if (i === N) return fin(score);
      const x = q.questions[i], fb = $('div');
      const btns = x.choix.map((c, j) => $('button', { type: 'button', on: { click: () => {
        btns.forEach((b) => (b.disabled = true));
        const ok = j === x.bonne_reponse; btns[x.bonne_reponse].classList.add('bon'); if (!ok) btns[j].classList.add('faux');
        const s = score + (ok ? 1 : 0);
        fb.replaceChildren($('div', { class: 'q-fb' },
          $('div', { class: ok ? 'ok' : 'ko' }, ok ? '✅ Bonne réponse !' : '❌ Pas tout à fait.'),
          $('div', {}, x.explication || ''),
          $('button', { class: 'btn', on: { click: () => jouer(i + 1, s) } }, i + 1 === N ? 'Voir mon score' : 'Question suivante')));
        el.querySelector('.q-score').textContent = `Score : ${s}`;
      } } }, c));
      el.replaceChildren($('div', { class: 'q-carte' },
        $('div', { class: 'q-entete' }, $('span', {}, `Question ${i + 1} / ${N}`), $('span', { class: 'q-score' }, `Score : ${score}`)),
        $('div', { class: 'barre', style: 'margin:12px 0 0' }, $('span', { style: `width:${(i / N) * 100}%` })),
        $('div', { class: 'q-texte' }, x.question), $('div', { class: 'q-choix' }, btns), fb));
    };
    jouer(0, 0);
  });

  rafraichir();
})();
