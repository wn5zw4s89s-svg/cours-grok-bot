// Cours Grok Bot — progression anonyme, gamification Duolingo-style.
(function () {
  const M = JSON.parse(document.getElementById('gb-meta').textContent);
  const K = 'gb2:progression';
  const SITE_URL = (typeof location !== 'undefined' ? location.origin : '') + (M.base || '/');
  const XP_LECON = 10;
  const XP_QUIZ = 20;
  const XP_QUIZ_PARFAIT = 10;

  const etat = () => {
    let d;
    try { d = JSON.parse(localStorage.getItem(K)) || {}; } catch { d = {}; }
    d.lecons ??= {};
    d.preuves ??= {};
    d.quiz ??= {};
    d.xp ??= 0;
    d.streak ??= { count: 0, last: null };
    d.badges ??= {};
    return d;
  };
  const ecrire = (f) => { const d = etat(); f(d); localStorage.setItem(K, JSON.stringify(d)); return d; };
  const $ = (t, a = {}, ...k) => {
    const e = document.createElement(t);
    for (const [x, v] of Object.entries(a)) {
      if (x === 'on') for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn);
      else if (x === 'class') e.className = v;
      else if (x === 'style' && typeof v === 'object') Object.assign(e.style, v);
      else e.setAttribute(x, v);
    }
    k.flat().forEach((c) => c != null && e.append(c));
    return e;
  };

  const L = M.lecons, idx = (id) => L.findIndex((l) => l.id === id);
  const UNITES = M.projets || M.niveaux || [];
  const labelU = M.labelUnite || (M.projets ? 'Projet' : 'Niveau');
  const lecNiv = (n) => L.filter((l) => l.niveau === n);
  const nivFini = (d, n) => {
    const ls = lecNiv(n);
    return ls.length > 0 && ls.every((l) => d.lecons[l.id]);
  };
  const debloquee = (d, i) => {
    if (i <= 0) return true;
    if (d.lecons[L[i].id]) return true;
    if (!d.lecons[L[i - 1].id]) return false;
    return true;
  };
  const nivCourant = (d) => UNITES.find((n) => !nivFini(d, n.id)) || null;

  const jourLocal = () => {
    const n = new Date();
    const y = n.getFullYear();
    const m = String(n.getMonth() + 1).padStart(2, '0');
    const day = String(n.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };
  const hierLocal = () => {
    const n = new Date();
    n.setDate(n.getDate() - 1);
    const y = n.getFullYear();
    const m = String(n.getMonth() + 1).padStart(2, '0');
    const day = String(n.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };
  const toucherStreak = (d) => {
    const today = jourLocal();
    if (d.streak.last === today) return;
    if (d.streak.last === hierLocal()) d.streak.count = (d.streak.count || 0) + 1;
    else d.streak.count = 1;
    d.streak.last = today;
  };

  const BADGES = [
    ['🌱', 'Premier pas', (d) => !!d.lecons['lecon-01']],
    ...UNITES.map((n) => ['🏅', n.badge || `Fin du ${labelU.toLowerCase()} ${n.id}`, (d) => nivFini(d, n.id), n.id]),
    ['⭐', 'Quiz parfait', (d) => Object.values(d.quiz).some((q) => q.meilleur === q.total && q.total > 0)],
  ];
  // Prochain badge = premier non gagné (y compris celui du projet en cours).
  const prochainBadge = (d) => BADGES.find((b) => !b[2](d));
  const badgesGagnes = (d) => BADGES.filter((b) => b[2](d));
  const syncBadges = (d) => {
    const nouveaux = [];
    for (const b of BADGES) {
      const key = b[1];
      if (b[2](d) && !d.badges[key]) {
        d.badges[key] = { date: new Date().toISOString(), emoji: b[0] };
        nouveaux.push(b);
      }
    }
    return nouveaux;
  };

  function confetti(burst = 48) {
    const c = document.createElement('canvas');
    c.className = 'gb-confetti';
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    Object.assign(c.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '99' });
    document.body.appendChild(c);
    const ctx = c.getContext('2d');
    const colors = ['#FF385C', '#FFB400', '#008A05', '#00A699', '#7B61FF', '#222'];
    const parts = Array.from({ length: burst }, () => ({
      x: Math.random() * c.width,
      y: -20 - Math.random() * c.height * 0.3,
      r: 3 + Math.random() * 5,
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vr: -0.2 + Math.random() * 0.4,
      color: colors[(Math.random() * colors.length) | 0],
      life: 60 + (Math.random() * 40) | 0,
    }));
    let frame = 0;
    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, c.width, c.height);
      let alive = 0;
      for (const p of parts) {
        if (p.life-- <= 0) continue;
        alive++;
        p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
      }
      if (alive && frame < 120) requestAnimationFrame(tick);
      else c.remove();
    };
    requestAnimationFrame(tick);
  }

  function shareUrl(badgeNom, emoji) {
    const text = `${emoji} Badge débloqué : ${badgeNom} — Cours Grok Bot`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(SITE_URL)}`;
  }

  function montrerBadge(badge) {
    const [emoji, nom] = badge;
    let overlay = document.querySelector('.gb-badge-pop');
    if (overlay) overlay.remove();
    overlay = $('div', { class: 'gb-badge-pop' },
      $('div', { class: 'gb-badge-carte' },
        $('div', { class: 'gb-badge-emoji' }, emoji),
        $('div', { class: 'gb-badge-titre' }, 'Badge débloqué'),
        $('div', { class: 'gb-badge-nom' }, nom),
        $('a', {
          class: 'btn btn-large',
          href: shareUrl(nom, emoji),
          target: '_blank',
          rel: 'noopener noreferrer',
        }, 'Partager sur X'),
        $('button', { class: 'lien', type: 'button', on: { click: () => overlay.remove() } }, 'Continuer')));
    document.body.appendChild(overlay);
    confetti(64);
  }

  function majStats(d) {
    document.querySelectorAll('[data-xp]').forEach((e) => { e.textContent = `${d.xp || 0} XP`; });
    document.querySelectorAll('[data-streak]').forEach((e) => {
      const n = d.streak?.count || 0;
      e.textContent = n > 0 ? `🔥 ${n}` : '🔥 0';
      e.title = n > 0 ? `Série de ${n} jour${n > 1 ? 's' : ''}` : 'Commence une leçon pour lancer ta série';
    });
  }

  function dessinerChemin(d, cur) {
    const host = document.querySelector('[data-chemin]');
    if (!host || !cur) { if (host) host.replaceChildren(); return; }
    const ls = lecNiv(cur.id);
    const nextIdx = ls.findIndex((l) => !d.lecons[l.id]);
    const nodes = [];
    ls.forEach((l, i) => {
      if (i > 0) {
        const done = !!d.lecons[ls[i - 1].id] && !!d.lecons[l.id];
        const half = !!d.lecons[ls[i - 1].id];
        nodes.push($('span', { class: `chemin-trait${done ? ' on' : half ? ' half' : ''}` }));
      }
      const fait = !!d.lecons[l.id];
      const actuelle = i === nextIdx;
      const ok = debloquee(d, idx(l.id));
      const cls = `chemin-dot${fait ? ' fait' : ''}${actuelle ? ' actuelle' : ''}${!ok ? ' lock' : ''}`;
      const label = fait ? '✓' : actuelle ? String(l.num) : ok ? String(l.num) : '·';
      const a = ok
        ? $('a', { class: cls, href: `${M.base}lecon/${l.id}/`, title: l.court || `Leçon ${l.num}` }, label)
        : $('span', { class: cls, title: 'Verrouillé' }, '🔒');
      nodes.push(a);
    });
    // Badge fin de niveau en bout de chemin
    const fini = nivFini(d, cur.id);
    nodes.push($('span', { class: `chemin-trait${fini ? ' on' : ''}` }));
    nodes.push($('span', { class: `chemin-dot badge-end${fini ? ' fait' : ''}`, title: cur.badge || `${labelU} ${cur.id}` }, fini ? '🏅' : '🏆'));
    host.replaceChildren(...nodes);
  }

  function rafraichir() {
    const d = etat(), cur = nivCourant(d);
    majStats(d);
    const pill = document.querySelector('[data-niveau]');
    if (pill) pill.textContent = cur ? `${labelU} ${cur.id} · ${cur.nom}` : 'Cours terminé 🏆';
    if (cur) {
      const ls = lecNiv(cur.id), f = ls.filter((l) => d.lecons[l.id]).length;
      const suiv = UNITES.find((n) => n.id === cur.id + 1);
      document.querySelectorAll('[data-objectif]').forEach((e) => (e.textContent = `${f}/${ls.length} avant ${suiv ? suiv.nom : 'la fin du cours'}`));
      document.querySelectorAll('[data-barre-niv]').forEach((b) => (b.style.width = Math.round((f / ls.length) * 100) + '%'));
      const next = ls.find((l) => !d.lecons[l.id]);
      document.querySelectorAll('[data-continuer]').forEach((a) => {
        a.textContent = L.some((l) => d.lecons[l.id]) ? `Continuer · Leçon ${next.num}` : 'Commencer';
        a.href = `${M.base}lecon/${next.id}/`;
      });
    } else {
      document.querySelectorAll('[data-objectif]').forEach((e) => (e.textContent = 'Tout est terminé'));
      document.querySelectorAll('[data-barre-niv]').forEach((b) => (b.style.width = '100%'));
      document.querySelectorAll('[data-continuer]').forEach((a) => { a.textContent = 'Revoir la leçon 1'; a.href = `${M.base}lecon/${L[0].id}/`; });
    }
    dessinerChemin(d, cur);

    const pb = prochainBadge(d);
    document.querySelectorAll('[data-prochain-badge]').forEach((e) => {
      e.replaceChildren(...(pb ? [$('span', { class: 'silhouette' }, pb[0]), ` Prochain badge : ${pb[1]}`] : ['🏆 Tous les badges']));
    });

    // Liste badges gagnés + partage du dernier
    const gagnes = badgesGagnes(d);
    document.querySelectorAll('[data-badges-list]').forEach((e) => {
      if (!gagnes.length) { e.hidden = true; e.replaceChildren(); return; }
      e.hidden = false;
      const last = gagnes[gagnes.length - 1];
      e.replaceChildren(
        $('div', { class: 'badges-row' }, ...gagnes.map((b) => $('span', { class: 'badge-chip', title: b[1] }, b[0]))),
        $('a', {
          class: 'btn-sec btn-share',
          href: shareUrl(last[1], last[0]),
          target: '_blank',
          rel: 'noopener noreferrer',
        }, 'Partager mon badge sur X')
      );
    });

    UNITES.forEach((n) => {
      const ls = lecNiv(n.id), f = ls.filter((l) => d.lecons[l.id]).length, fini = ls.length > 0 && f === ls.length;
      const ouvert = cur ? n.id <= cur.id : true;
      document.querySelectorAll(`[data-niveau-bloc="${n.id}"]`).forEach((b) => {
        b.open = !!(cur && n.id === cur.id);
        b.classList.toggle('verrouille', !ouvert && !fini);
      });
      document.querySelectorAll(`[data-niv-etat="${n.id}"]`).forEach((e) => {
        e.textContent = fini ? `${ls.length} leçons ✓` : n.id === cur?.id ? `${f}/${ls.length}` : `${ls.length} leçons 🔒`;
      });
    });

    const nextIdx = L.findIndex((l) => !d.lecons[l.id]);
    L.forEach((l, i) => document.querySelectorAll(`[data-lecon-carte="${l.id}"]`).forEach((c) => {
      const ok = debloquee(d, i);
      c.classList.toggle('fait', !!d.lecons[l.id]);
      c.classList.toggle('verrouillee', !ok);
      c.classList.toggle('actuelle', i === nextIdx);
      const et = c.querySelector('[data-etat]');
      if (et) et.textContent = d.lecons[l.id] ? '✓' : String(l.num);
      const a = c.querySelector('a');
      if (a) {
        if (!ok) { a.setAttribute('aria-disabled', 'true'); a.tabIndex = -1; }
        else { a.removeAttribute('aria-disabled'); a.removeAttribute('tabindex'); }
      }
    }));
    document.querySelectorAll('[data-quiz-lien]').forEach((a) => {
      const n = +a.dataset.quizNiv, ok = nivFini(d, n), q = d.quiz[a.dataset.quizLien];
      a.classList.toggle('mute', !ok);
      a.textContent = ok ? (q ? `Quiz · ${q.meilleur}/${q.total}` : 'Quiz →') : 'Quiz 🔒';
    });
  }

  document.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => {
    localStorage.removeItem(K); location.href = M.base;
  }));

  document.querySelectorAll('[data-lecon-carte]').forEach((c) => {
    c.addEventListener('click', (ev) => {
      if (c.classList.contains('verrouillee')) { ev.preventDefault(); ev.stopPropagation(); }
    }, true);
  });

  document.querySelectorAll('.lecon').forEach((art) => {
    const id = art.dataset.lecon, i = idx(id);
    if (!debloquee(etat(), i)) { art.classList.add('bloquee'); art.querySelector('.verrou').hidden = false; }
    art.querySelector('[data-forcer]')?.addEventListener('click', () => { art.classList.remove('bloquee'); art.querySelector('.verrou').hidden = true; });
    const btn = art.querySelector('[data-terminer]');
    btn?.addEventListener('click', (ev) => {
      ev.preventDefault();
      const deja = !!etat().lecons[id];
      const niv = L[i]?.niveau;
      let nouveaux = [];
      let niveauComplete = false;
      ecrire((d) => {
        if (!d.lecons[id]) {
          d.lecons[id] = { date: new Date().toISOString() };
          d.xp = (d.xp || 0) + XP_LECON;
          toucherStreak(d);
        }
        niveauComplete = niv != null && nivFini(d, niv);
        nouveaux = syncBadges(d);
      });
      if (!deja) confetti(niveauComplete ? 72 : 40);
      const go = () => { location.href = btn.dataset.suite || M.base; };
      if (nouveaux.length) {
        montrerBadge(nouveaux[nouveaux.length - 1]);
        const pop = document.querySelector('.gb-badge-pop .lien');
        if (pop) pop.addEventListener('click', go, { once: true });
        // auto-continue after share dismiss; also allow 4s autopilot if they ignore
        setTimeout(() => { if (document.querySelector('.gb-badge-pop')) go(); }, 8000);
      } else {
        go();
      }
    });
  });

  document.querySelectorAll('.quiz').forEach((el) => {
    const q = JSON.parse(el.dataset.quiz), N = q.questions.length, niv = +el.dataset.niveau;
    const nb = +el.dataset.nb || lecNiv(niv).length;
    const d0 = etat();
    if (!nivFini(d0, niv)) {
      const v = document.querySelector('[data-quiz-verrou]');
      v.hidden = false;
      const faites = lecNiv(niv).filter((l) => d0.lecons[l.id]).length;
      const next = lecNiv(niv).find((l) => !d0.lecons[l.id]);
      const msg = v.querySelector('[data-quiz-msg]');
      if (msg) msg.textContent = `Finis les ${nb} leçons de ce projet pour débloquer le quiz (${faites}/${nb}).`;
      const a = v.querySelector('[data-quiz-suite]');
      if (next) { a.href = `${M.base}lecon/${next.id}/`; a.textContent = `Continuer · Leçon ${next.num}`; }
      else { a.href = M.base; a.textContent = 'Accueil'; }
      el.replaceChildren();
      return;
    }
    const fin = (score) => {
      let nouveaux = [];
      ecrire((d) => {
        const p = d.quiz[q.id];
        const premier = !p;
        d.quiz[q.id] = { score, total: N, meilleur: Math.max(score, p?.meilleur ?? 0), date: new Date().toISOString() };
        if (premier) {
          d.xp = (d.xp || 0) + XP_QUIZ + (score === N ? XP_QUIZ_PARFAIT : 0);
          toucherStreak(d);
        } else if (score === N && (p?.meilleur ?? 0) < N) {
          d.xp = (d.xp || 0) + XP_QUIZ_PARFAIT;
        }
        nouveaux = syncBadges(d);
      });
      confetti(score === N ? 64 : 36);
      const r = score / N, et = r === 1 ? 3 : r >= 0.6 ? 2 : r > 0 ? 1 : 0;
      const nextL = L.find((l) => l.niveau === niv + 1);
      const actions = [
        $('div', { class: 'etoiles' }, '★'.repeat(et) + '☆'.repeat(3 - et)),
        $('div', { class: 'gros-score' }, `${score}/${N}`),
        $('p', { class: 'q-xp' }, `+${XP_QUIZ}${score === N ? ` (+${XP_QUIZ_PARFAIT} parfait)` : ''} XP`),
      ];
      if (nouveaux.length) {
        const b = nouveaux[nouveaux.length - 1];
        actions.push($('a', {
          class: 'btn-sec btn-share',
          href: shareUrl(b[1], b[0]),
          target: '_blank',
          rel: 'noopener noreferrer',
        }, `${b[0]} Partager sur X`));
      }
      actions.push(
        nextL ? $('a', { class: 'btn', href: `${M.base}lecon/${nextL.id}/` }, `${labelU} ${niv + 1} →`) : $('a', { class: 'btn', href: M.base }, 'Accueil'),
        $('p', {}, $('button', { class: 'lien', on: { click: () => jouer(0, 0) } }, 'Rejouer'))
      );
      el.replaceChildren($('div', { class: 'q-carte q-fin' }, ...actions));
      if (nouveaux.length) setTimeout(() => montrerBadge(nouveaux[nouveaux.length - 1]), 400);
      rafraichir();
    };
    const jouer = (i, score) => {
      if (i === N) return fin(score);
      const x = q.questions[i], fb = $('div');
      const btns = x.choix.map((c, j) => $('button', { type: 'button', on: { click: () => {
        btns.forEach((b) => (b.disabled = true));
        const ok = j === x.bonne_reponse; btns[x.bonne_reponse].classList.add('bon'); if (!ok) btns[j].classList.add('faux');
        const s = score + (ok ? 1 : 0);
        fb.replaceChildren($('div', { class: 'q-fb' },
          $('div', { class: ok ? 'ok' : 'ko' }, ok ? '✅ Bonne réponse' : '❌ Pas tout à fait'),
          $('div', {}, x.explication || ''),
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

  // Sync badges déjà mérités (migration)
  ecrire((d) => { syncBadges(d); });
  rafraichir();
})();
