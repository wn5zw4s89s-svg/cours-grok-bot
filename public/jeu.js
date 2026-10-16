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

  // ===== OctoBoss : mascotte, bulles, tentacules =====
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const OCTO = M.octo || { tentacules: [], slogan: '' };
  const TENT = (id) => OCTO.tentacules.find((t) => t.projet === id) || { nom: `Projet ${id}`, emoji: '🐙', phrase: '' };
  const SVGNS = 'http://www.w3.org/2000/svg';
  const OCTO_SVG = `<svg class="octo" xmlns="http://www.w3.org/2000/svg" viewBox="-70 -60 140 140" width="140" height="140" aria-hidden="true"><g class="whole"><g class="tents"></g>
<ellipse cx="0" cy="-8" rx="42" ry="40" fill="#FF6B5A"/><ellipse cx="0" cy="22" rx="38" ry="12" fill="#C0443A" opacity=".5"/>
<ellipse cx="-12" cy="-30" rx="12" ry="7" fill="#fff" opacity=".18"/><circle cx="-26" cy="-36" r="3" fill="#fff" opacity=".2"/>
<g class="eye"><ellipse cx="-14" cy="-6" rx="10" ry="11" fill="#F2FBFA"/><circle class="pupil" cx="-12" cy="-4" r="5.5" fill="#06161A"/></g>
<g class="eye"><ellipse cx="14" cy="-6" rx="10" ry="11" fill="#F2FBFA"/><circle class="pupil" cx="16" cy="-4" r="5.5" fill="#06161A"/></g>
<ellipse class="blush" cx="-26" cy="8" rx="6" ry="3.5" fill="#fff"/><ellipse class="blush" cx="26" cy="8" rx="6" ry="3.5" fill="#fff"/>
<path class="mouth" d="M-8 10 Q0 17 8 10" stroke="#06161A" stroke-width="3" fill="none" stroke-linecap="round"/>
<path class="sweat" d="M32 -22 q4 6 0 9 q-4 -3 0 -9z" fill="#9fe3ff"/>
<path d="M-30 -42 l8 -14 l8 10 l8 -14 l6 14 l8 -10 l6 14z" fill="#FFD25A" stroke="#C0443A" stroke-width="2" stroke-linejoin="round" transform="translate(4,-4) scale(.62)"/></g></svg>`;
  function makeOcto(host, grown) {
    const exist = host.querySelector('svg.octo');
    if (exist) { octoGrow(exist, grown); return exist; }
    host.innerHTML = OCTO_SVG;
    const svg = host.firstElementChild, g = svg.querySelector('.tents');
    for (let i = 0; i < 8; i++) {
      const x = -31 + i * 8.9, ang = (i - 3.5) * -11;
      const t = document.createElementNS(SVGNS, 'g');
      t.setAttribute('class', 'tent' + (i < grown ? ' on' : ''));
      t.style.animationDelay = (-i * 0.35) + 's';
      t.innerHTML = `<g transform="translate(${x},20) rotate(${ang})"><g class="grow"><path d="M-6 0 C-8 18 6 26 -2 40 C-6 48 4 54 8 48" stroke="#FF6B5A" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-3" cy="16" r="1.8" fill="#C0443A"/><circle cx="0" cy="28" r="1.6" fill="#C0443A"/><g class="bot"><circle cx="8" cy="50" r="7" fill="#0F2A30" stroke="#F2FBFA" stroke-width="1.5"/><circle cx="6" cy="49" r="1.3" fill="#3DDC97"/><circle cx="10" cy="49" r="1.3" fill="#3DDC97"/></g></g></g>`;
      g.appendChild(t);
    }
    return svg;
  }
  const octoMood = (o, m) => {
    if (!o) return;
    o.classList.remove('happy', 'sad'); void o.getBoundingClientRect();
    if (m) o.classList.add(m);
    o.querySelector('.mouth').setAttribute('d', m === 'sad' ? 'M-8 15 Q0 9 8 15' : m === 'happy' ? 'M-10 8 Q0 22 10 8' : 'M-8 10 Q0 17 8 10');
  };
  const octoGrow = (o, n) => o?.querySelectorAll('.tent').forEach((t, i) => t.classList.toggle('on', i < n));
  const octos = () => [...document.querySelectorAll('[data-octo] > svg')];
  const pressFx = (el) => { el.classList.add('press'); setTimeout(() => el.classList.remove('press'), 140); };
  (function bulles() {
    const h = document.querySelector('[data-bulles]');
    if (!h || RM) return;
    for (let i = 0; i < 12; i++) {
      const b = document.createElement('i'), sz = 6 + Math.random() * 16;
      b.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${8 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s`;
      h.appendChild(b);
    }
  })();

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

  const BADGES_LECON = [
    ['lecon-01', '🐙', 'Première leçon', 'Tu as terminé ta première leçon.'],
    ['lecon-02', '🧬', 'Deuxième leçon', 'Le métier de ton bot est dans sa description.'],
  ];
  const BADGES = [
    // Badges de leçon : config (id leçon -> emoji, nom, texte). Ajouter une ligne suffit.
    ...BADGES_LECON.map(([id, e, nom]) => [e, nom, (d) => !!d.lecons[id], undefined, id]),
    ...UNITES.map((n) => [TENT(n.id).emoji, (n.badge && !/^Fin du /.test(n.badge)) ? n.badge : TENT(n.id).nom, (d) => nivFini(d, n.id), n.id]),
    ['🎯', 'Sans fausse note', (d) => Object.values(d.quiz).some((q) => q.meilleur === q.total && q.total > 0)],
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

  function confetti(n = 48, top = 40) {
    if (RM) return;
    const c = document.createElement('div');
    c.className = 'conf';
    document.body.appendChild(c);
    const cols = ['#FF6B5A', '#F2FBFA', '#3DDC97', '#FFD25A', '#6E9A9C'];
    let left = n;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('i');
      if (i % 3 === 0) p.className = 'b'; else p.style.background = cols[i % cols.length];
      const a = Math.random() * Math.PI * 2, r = 120 + Math.random() * 180, dx = Math.cos(a) * r, dy = Math.sin(a) * r - 80;
      p.style.top = top + '%';
      c.appendChild(p);
      p.animate([
        { transform: 'translate(0,0) rotate(0) scale(.4)', opacity: 1 },
        { transform: `translate(${dx}px,${dy}px) rotate(${Math.random() * 720}deg) scale(1)`, opacity: 1, offset: 0.6 },
        { transform: `translate(${dx * 1.1}px,${dy + 260}px) rotate(${Math.random() * 900}deg)`, opacity: 0 },
      ], { duration: 1600 + Math.random() * 900, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => { p.remove(); if (--left === 0) c.remove(); };
    }
  }
  function oldConfetti(burst = 48) {
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
    const text = `${emoji} J'ai débloqué « ${badgeNom} » sur OctoBoss 🐙 — ${OCTO.slogan || '8 tentacules, 8 bots, 0 salarié'}.`;
    return `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://wn5zw4s89s-svg.github.io/cours-grok-bot/')}`;
  }

  function badgeTexte(b) {
    const [, nom, , projId] = b;
    const bl = BADGES_LECON.find((x) => x[2] === nom);
    if (bl) return bl[3];
    if (nom === 'Sans fausse note') return 'Tu as eu un quiz sans aucune erreur.';
    if (projId) {
      const p = UNITES.find((n) => n.id === projId);
      return projId === 1 ? 'Tu as créé ton premier bot et fini le projet 1.' : `Tu as fini le projet ${projId}${p ? ` : ${p.nom}` : ''}.`;
    }
    return '';
  }
  function montrerBadge(badge, onNext) {
    const [emoji, nom, , projId] = badge;
    document.querySelector('.gb-badge-pop')?.remove();
    const d = etat();
    const nbT = UNITES.filter((n) => nivFini(d, n.id)).length;
    const host = $('div', { class: 'octo-host octo-fin', 'data-octo': '' });
    const fermer = () => { overlay.classList.remove('on'); setTimeout(() => overlay.remove(), 300); onNext && onNext(); };
    const overlay = $('div', { class: 'gb-badge-pop', role: 'dialog', 'aria-label': 'Badge débloqué' },
      host,
      $('div', { class: 'gb-badge-carte' },
        $('div', { class: 'medal', 'aria-hidden': 'true' },
          $('span', { class: 'medal-face' }, emoji || '★')),
        $('div', { class: 'k' }, 'Badge débloqué'),
        $('div', { class: 'n' }, nom),
        $('p', { class: 'd' }, badgeTexte(badge)),
        $('button', { class: 'btn btn-large', type: 'button', on: { click: fermer } }, 'Continuer'),
        $('a', { class: 'btn-sec btn-x', href: shareUrl(nom, emoji), target: '_blank', rel: 'noopener noreferrer' }, 'Partager sur 𝕏')));
    document.body.appendChild(overlay);
    const o = makeOcto(host, projId ? nbT - 1 : nbT);
    requestAnimationFrame(() => overlay.classList.add('on'));
    octoMood(o, 'happy');
    setTimeout(() => { octoGrow(o, nbT); octoMood(o, 'happy'); }, 500);
    confetti(70, 32);
  }

  function majStats(d) {
    const xp = d.xp || 0, sn = d.streak?.count || 0;
    document.querySelectorAll('[data-xp-n]').forEach((e) => { e.textContent = `${xp}`; });
    document.querySelectorAll('[data-streak-n]').forEach((e) => { e.textContent = `${sn}`; });
    document.querySelectorAll('[data-xp-u]').forEach((e) => { e.textContent = xp > 1 ? 'bulles' : 'bulle'; });
    document.querySelectorAll('[data-streak-u]').forEach((e) => { e.textContent = sn > 1 ? 'jours' : 'jour'; });
    document.querySelectorAll('[data-xp-pill]').forEach((e) => { e.hidden = xp <= 0; });
    document.querySelectorAll('[data-streak-pill]').forEach((e) => { e.hidden = sn <= 0; });
    document.querySelectorAll('[data-xp]').forEach((e) => { e.textContent = `${d.xp || 0} XP`; });
    document.querySelectorAll('[data-streak]').forEach((e) => {
      const n = d.streak?.count || 0;
      e.textContent = n > 0 ? `🔥 ${n}` : '🔥 0';
      e.title = n > 0 ? `Série de ${n} jour${n > 1 ? 's' : ''}` : 'Commence une leçon pour lancer ta série';
    });
  }

  function dessinerChemin(d, cur) {
    const host = document.querySelector('[data-chemin]');
    if (!host) return;
    if (!cur) { host.replaceChildren($('li', { class: 'step' }, $('span', { class: 'step-txt' }, 'Cours terminé : 8 projets sur 8.'))); return; }
    const ls = lecNiv(cur.id);
    const nextIdx = ls.findIndex((l) => !d.lecons[l.id]);
    const items = ls.map((l, i) => {
      const fait = !!d.lecons[l.id], actuelle = i === nextIdx, ok = debloquee(d, idx(l.id));
      const cls = `node${fait ? ' done' : actuelle ? ' cur' : ''}${!ok ? ' lock' : ''}`;
      const t = l.clair || l.court || `Leçon ${l.num}`;
      return $('li', { class: `step${actuelle ? ' cur' : ''}${fait ? ' done' : ''}` }, $('span', { class: cls }, fait ? '✓' : String(l.num)),
        ok ? $('a', { class: 'step-lien', href: `${M.base}lecon/${l.id}/` }, t) : $('span', { class: 'step-txt' }, t));
    });
    const q = M.quiz.find((x) => x.niveau === cur.id), quizOk = q && ls.every((l) => d.lecons[l.id]), fini = nivFini(d, cur.id);
    items.push($('li', { class: `step${quizOk && !fini ? ' cur' : ''}` }, $('span', { class: `node${fini ? ' done' : quizOk ? ' cur' : ' lock'}` }, '✓'),
      quizOk ? $('a', { class: 'step-lien', href: `${M.base}quiz/${q.slug}/` }, 'Quiz : vérifie ce que tu as appris') : $('span', { class: 'step-txt' }, 'Quiz : vérifie ce que tu as appris')));
    host.replaceChildren(...items);
  }

  function rafraichir() {
    const d = etat(), cur = nivCourant(d);
    majStats(d);
    const pill = document.querySelector('[data-niveau]');
    if (pill) pill.textContent = cur ? `${labelU} ${cur.id} · ${cur.nom}` : 'Cours terminé 🏆';
    const nbT = UNITES.filter((n) => nivFini(d, n.id)).length;
    octos().forEach((o) => { if (!o.closest('.gb-badge-pop')) octoGrow(o, nbT); });
    document.querySelectorAll('[data-hero-tag]').forEach((e) => {
      e.textContent = cur ? `Bot ${cur.id} sur ${UNITES.length} (tentacule ${cur.id} sur ${UNITES.length})` : `${UNITES.length} bots sur ${UNITES.length} 🐙`;
    });
    document.querySelectorAll('[data-projet-nom]').forEach((e) => { e.textContent = cur ? `${labelU} ${cur.id} · ${cur.nom}` : 'Cours terminé'; });
    document.querySelectorAll('[data-t]').forEach((e) => e.classList.toggle('on', nivFini(d, +e.dataset.t)));
    if (cur) {
      const ls = lecNiv(cur.id), f = ls.filter((l) => d.lecons[l.id]).length;
      const suiv = UNITES.find((n) => n.id === cur.id + 1);
      const nxt = ls.find((l) => !d.lecons[l.id]), debut = !L.some((l) => d.lecons[l.id]);
      document.querySelectorAll('[data-progres]').forEach((e) => (e.textContent = `Projet ${cur.id} sur ${UNITES.length} (${TENT(cur.id).nom}) · ${f} leçon${f > 1 ? 's' : ''} sur ${ls.length}`));
      document.querySelectorAll('[data-next-kick]').forEach((e) => (e.textContent = debut ? 'Ta première leçon · 2\u00a0min par étape' : nxt ? 'Ta prochaine leçon' : 'Dernière étape'));
      document.querySelectorAll('[data-next-titre]').forEach((e) => (e.textContent = nxt ? `Leçon ${nxt.num} · ${(nxt.clair || nxt.court).replace(/\s*\([^)]*\)\s*$/, '')}` : `Quiz · Projet ${cur.id}`));
      document.querySelectorAll('[data-next-but]').forEach((e) => (e.textContent = nxt ? (nxt.but || '') : 'Un quiz rapide pour valider le projet.'));
      document.querySelectorAll('[data-t-ligne]').forEach((e) => (e.textContent = `🐙 Bots créés : ${nbT} sur ${UNITES.length} (tentacules ${nbT} sur ${UNITES.length}). 1 projet terminé = 1 bot.`));
      document.querySelectorAll('[data-dire]').forEach((e) => (e.textContent = debut ? 'Salut boss ! Crée ton premier bot en 2\u00a0min.' : nxt ? `Bien joué boss ! ${f} leçon${f > 1 ? 's' : ''} faite${f > 1 ? 's' : ''}. On continue ?` : 'Tout est fait ! Passe le quiz pour gagner ton badge.'));
      document.querySelectorAll('[data-objectif]').forEach((e) => (e.textContent = `${f} leçon${f > 1 ? 's' : ''} sur ${ls.length} faite${f > 1 ? 's' : ''}`));
      document.querySelectorAll('[data-barre-niv]').forEach((b) => (b.style.setProperty('--p', f / ls.length)));
      const next = ls.find((l) => !d.lecons[l.id]);
      document.querySelectorAll('[data-continuer]').forEach((a) => {
        const q = M.quiz.find((x) => x.niveau === cur.id);
        if (!next && q) { a.textContent = 'Passer le quiz'; a.href = `${M.base}quiz/${q.slug}/`; return; }
        if (!next) return;
        a.textContent = L.some((l) => d.lecons[l.id]) ? 'Continuer' : 'Commencer';
        a.href = `${M.base}lecon/${next.id}/`;
      });
    } else {
      document.querySelectorAll('[data-objectif]').forEach((e) => (e.textContent = 'Tout est terminé'));
      document.querySelectorAll('[data-barre-niv]').forEach((b) => (b.style.setProperty('--p', 1)));
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
        e.textContent = fini ? '✓' : f > 0 ? `${f}/${ls.length} leçons` : '';
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
      let vt = c.querySelector('.verrou-txt');
      if (!ok && !vt) { vt = $('span', { class: 'verrou-txt' }, i > 0 ? `Finis la leçon ${L[i - 1].num}` : ''); c.querySelector('.titre')?.after(vt); }
      if (ok && vt) vt.remove();
      const a = c.querySelector('a');
      if (a) {
        if (!ok) { a.setAttribute('aria-disabled', 'true'); a.tabIndex = -1; }
        else { a.removeAttribute('aria-disabled'); a.removeAttribute('tabindex'); }
      }
    }));
    document.querySelectorAll('[data-quiz-lien]').forEach((a) => {
      const n = +a.dataset.quizNiv, ok = nivFini(d, n), q = d.quiz[a.dataset.quizLien];
      a.classList.toggle('mute', !ok);
      a.textContent = ok ? (q ? `Quiz ✓ ${q.meilleur}/${q.total}` : 'Quiz →') : 'Quiz 🔒';
    });
  }

  // Recommencer à zéro : confirmation en feuille (pas de confirm() natif)
  document.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => {
    const fermer = () => voile.remove();
    const voile = $('div', { class: 'confirme-voile', on: { click: (e) => { if (e.target === voile) fermer(); } } },
      $('div', { class: 'confirme', role: 'alertdialog', 'aria-modal': 'true', 'aria-label': 'Recommencer à zéro ?' },
        $('h2', {}, 'Tout effacer ?'),
        $('p', {}, 'Ta progression sera perdue.'),
        $('button', { type: 'button', class: 'btn btn-large btn-danger', on: { click: () => { localStorage.removeItem(K); location.href = M.base; } } }, 'Recommencer à zéro'),
        $('button', { type: 'button', class: 'lien', on: { click: fermer } }, 'Annuler')));
    document.body.append(voile);
    voile.querySelector('.lien').focus();
  }));

  document.querySelectorAll('[data-lecon-carte]').forEach((c) => {
    c.addEventListener('click', (ev) => {
      if (c.classList.contains('verrouillee')) { ev.preventDefault(); ev.stopPropagation(); }
    }, true);
  });

  document.querySelectorAll('.lecon').forEach((art) => {
    const id = art.dataset.lecon, i = idx(id);
    const verrou = art.querySelector('.verrou');
    // Première leçon (i<=0) ou leçon hors liste : jamais de verrou. Sinon numéro = leçon précédente.
    if (verrou && i > 0 && L[i - 1] && !debloquee(etat(), i)) {
      const p = verrou.querySelector('p');
      if (p) p.textContent = `Termine d'abord la leçon ${L[i - 1].num}.`;
      art.classList.add('bloquee');
      verrou.hidden = false;
    } else if (verrou) {
      verrou.hidden = true;
    }
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
      pressFx(btn);
      const go = () => { location.href = btn.dataset.suite || M.base; };
      const termine = () => {
        const ecran = $('section', { class: 'termine', role: 'status' },
          $('div', { class: 'termine-ok', 'aria-hidden': 'true' }, '✓'),
          $('h2', {}, `Leçon ${L[i].num} terminée`),
          art.dataset.recap ? $('p', { class: 'termine-recap' }, art.dataset.recap) : null,
          $('a', { class: 'btn btn-large', href: btn.dataset.suite || M.base }, btn.dataset.suiteLabel || 'Continuer'));
        art.querySelector('.contenu').replaceChildren(ecran);
        art.querySelector('.fin-lecon').hidden = true;
        art.querySelectorAll('.etape-n').forEach((e) => { e.hidden = true; });
        art.querySelectorAll('[data-barre-lecon]').forEach((b) => b.style.setProperty('--p', 1));
        scrollTo(0, 0);
      };
      octos().forEach((o) => octoMood(o, 'happy'));
      if (!deja) { confetti(niveauComplete ? 72 : 40, 70); rafraichir(); }
      termine();
      if (nouveaux.length) montrerBadge(nouveaux[nouveaux.length - 1]);
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
        nextL ? $('a', { class: 'btn', href: `${M.base}lecon/${nextL.id}/` }, `Projet ${niv + 1} · Leçon ${nextL.num} →`) : $('a', { class: 'btn', href: M.base }, 'Accueil'),
        $('p', {}, $('button', { class: 'lien', on: { click: () => jouer(0, 0) } }, 'Rejouer'))
      );
      el.replaceChildren($('div', { class: 'q-carte q-fin' }, ...actions));
      octoMood(octos()[0], score / N >= 0.6 ? 'happy' : 'sad');
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
          $('div', { class: ok ? 'ok' : 'ko' }, ok ? 'Bien joué, boss ! 🐙' : 'Aïe… ton bot va paniquer.'),
          $('div', {}, x.explication || ''),
          $('button', { class: 'btn', on: { click: () => jouer(i + 1, s) } }, i + 1 === N ? 'Voir mon score' : 'Suivante →')));
        const o = octos()[0]; octoMood(o, ok ? 'happy' : 'sad'); if (!ok) setTimeout(() => octoMood(o), 1400);
        if (ok) confetti(16, 45);
        fb.firstChild.classList.add(ok ? 'good' : 'bad');
        document.querySelectorAll('[data-barre-quiz]').forEach((b) => b.style.setProperty('--p', (i + 1) / N));
      } } }, c));
      document.querySelectorAll('[data-barre-quiz]').forEach((b) => b.style.setProperty('--p', i / N));
      el.replaceChildren($('div', { class: 'q-carte' },
        $('div', { class: 'q-texte' }, x.question), $('div', { class: 'q-choix' }, btns), fb));
    };
    jouer(0, 0);
  });

  // Mascottes de la page
  document.querySelectorAll('[data-octo]').forEach((h) => makeOcto(h, 0));
  // Répliques de la pieuvre : <div class="pieuvre" data-reaction="...">
  const pv = [...document.querySelectorAll('.contenu .pieuvre')];
  pv.forEach((p) => {
    const h = $('div', { class: 'octo-host octo-mini' }), b = $('div', { class: 'pv-bulle' });
    while (p.firstChild) b.appendChild(p.firstChild);
    p.append(h, b);
    const o = makeOcto(h, UNITES.filter((n) => nivFini(etat(), n.id)).length);
    if (p.dataset.reaction === 'croissance') {
      const m = p.textContent.match(/(?:Bot|Tentacule)\s+(\d+)\s+sur/i); p._n = p.dataset.n ? +p.dataset.n : m ? +m[1] : null;
      if (p._n) octoGrow(o, p._n - 1);
    }
    p._o = o;
  });
  const reagir = (p) => {
    const r = p.dataset.reaction, o = p._o;
    p.classList.add('vu');
    if (r === 'reussite') octoMood(o, 'happy');
    else if (r === 'erreur') { octoMood(o, 'sad'); setTimeout(() => octoMood(o), 1600); }
    else if (r === 'croissance') { setTimeout(() => { if (p._n) octoGrow(o, p._n); octoMood(o, 'happy'); }, 300); }
  };
  if (pv.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { reagir(e.target); io.unobserve(e.target); } }), { threshold: 0.6 });
    pv.forEach((p) => io.observe(p));
  } else pv.forEach(reagir);
  // Une étape par écran
  document.querySelectorAll('.lecon .contenu').forEach((c) => {
    const art = c.closest('.lecon'), kids = [...c.childNodes], groups = [[]];
    kids.forEach((k) => { if (k.nodeName === 'H2' && groups[groups.length - 1].some((x) => x.nodeName === 'H2')) groups.push([]); groups[groups.length - 1].push(k); });
    const secs = groups.map((g) => { const d = $('section', { class: 'etape-sec' }); g.forEach((k) => d.appendChild(k)); return d; });
    c.replaceChildren(...secs);
    const nxt = art.querySelector('[data-suivant]'), fin = art.querySelector('[data-terminer]'), bar = art.querySelectorAll('[data-barre-lecon]');
    let k = 0;
    const compteur = $('div', { class: 'etape-n', 'aria-live': 'polite' });
    art.querySelector('.lh')?.append(compteur);
    const show = (n) => {
      k = n; secs.forEach((s, i) => (s.hidden = i !== n));
      const last = n === secs.length - 1;
      nxt.hidden = last; fin.hidden = !last;
      bar.forEach((b) => b.style.setProperty('--p', (n + 1) / secs.length));
      art.dataset.etape = String(n + 1);
      art.dataset.etapes = String(secs.length);
      compteur.textContent = `Étape ${n + 1}/${secs.length}`;
      compteur.hidden = !!art.querySelector('.termine');
      scrollTo(0, 0);
      secs[n].querySelectorAll('.pieuvre').forEach((p) => p._o && reagir(p));
    };
    art.classList.add('pas-a-pas');
    nxt.addEventListener('click', () => show(k + 1));
    show(0);
  });
  // Champ d'écriture pour les « À toi » qui demandent d'écrire une phrase à trous (« ___ »)
  document.querySelectorAll('.lecon .box.atoi').forEach((box, n) => {
    const txt = box.textContent;
    if (!/(É|é)cris/.test(txt) || !/___/.test(txt)) return;
    const m = txt.match(/«\s*([^»]*___[^»]*)»/);
    const key = `gb2:ecrit:${box.closest('.lecon').dataset.lecon}:${n}`;
    const id = `ecrit-${n}`;
    const ta = $('textarea', { class: 'ecrit', id, rows: '2', placeholder: m ? m[1].trim() : 'Écris ici…', autocomplete: 'off' });
    try { ta.value = localStorage.getItem(key) || ''; } catch {}
    const ok = $('span', { class: 'ecrit-ok', 'aria-live': 'polite' });
    ta.addEventListener('input', () => { try { localStorage.setItem(key, ta.value); } catch {} ok.textContent = ta.value.trim() ? 'Enregistré ✓' : ''; });
    if (ta.value.trim()) ok.textContent = 'Enregistré ✓';
    box.append($('label', { class: 'sr', for: id }, 'Ta phrase'), ta, ok);
  });
  // Bouton COPIER sur les messages à envoyer (citation dans un « À toi » qui dit copie/envoie)
  document.querySelectorAll('.lecon .box.atoi').forEach((box) => {
    if (!/(copie|envoie)/i.test(box.textContent)) return;
    box.querySelectorAll('blockquote').forEach((bq) => {
      const b = $('button', { type: 'button', class: 'copier' }, 'Copier');
      b.addEventListener('click', async () => {
        const ps = [...bq.querySelectorAll('p')];
        const txt = (ps.length ? ps.map((x) => x.innerText.trim()).filter(Boolean).join('\n\n') : bq.innerText).trim();
        try { await navigator.clipboard.writeText(txt); }
        catch { const r = document.createRange(); r.selectNodeContents(bq); const s = getSelection(); s.removeAllRanges(); s.addRange(r); document.execCommand('copy'); s.removeAllRanges(); }
        b.textContent = 'Copié ✓'; b.classList.add('ok');
        setTimeout(() => { b.textContent = 'Copier'; b.classList.remove('ok'); }, 1800);
      });
      bq.classList.add('a-copier'); bq.after(b);
    });
  });
  // Liste des leçons (feuille)
  const sheet = document.querySelector('[data-sheet]');
  document.querySelector('[data-sheet-open]')?.addEventListener('click', () => { sheet.hidden = false; document.body.classList.add('fige'); });
  const ferme = () => { sheet.hidden = true; document.body.classList.remove('fige'); };
  sheet?.addEventListener('click', (e) => { if (e.target === sheet || e.target.closest('[data-sheet-close]')) ferme(); });
  // Solution : ouverture sans saut de scroll
  document.querySelectorAll('details.solution').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (!d.open) return;
      // garde le résumé sous le sticky header
      const top = d.getBoundingClientRect().top;
      if (top < 80) d.scrollIntoView({ block: 'nearest' });
    });
  });
  // Boutons 3D : effet pression tactile
  document.addEventListener('pointerdown', (e) => { const b = e.target.closest('.btn,.node,.q-choix button'); if (b) pressFx(b); });

  // Remarque : lien discret en bas de page + mailto (aucune donnée tierce)
  (function remarque() {
    const TO = 'leopold@mail.grokbot.com';
    const btn = $('button', {
      type: 'button',
      class: 'remarque-lien',
      'aria-label': 'Une remarque ?',
    }, 'Une remarque ?');
    const host = document.querySelector('main') || document.body;
    const wrap = $('p', { class: 'remarque-pied' }, btn);
    host.append(wrap);

    const parisNow = () => {
      try {
        return new Intl.DateTimeFormat('fr-FR', {
          timeZone: 'Europe/Paris',
          dateStyle: 'short',
          timeStyle: 'short',
        }).format(new Date());
      } catch {
        return new Date().toLocaleString('fr-FR');
      }
    };

    const ouvrir = () => {
      const fermer = () => { voile.remove(); document.body.classList.remove('fige'); };
      const ta = $('textarea', {
        class: 'remarque-ta',
        rows: '5',
        placeholder: 'Écris ta remarque…',
        autocomplete: 'off',
      });
      const envoyer = $('button', { type: 'button', class: 'btn btn-large', disabled: 'disabled' }, 'Envoyer');
      const maj = () => { envoyer.disabled = !ta.value.trim(); };
      ta.addEventListener('input', maj);
      envoyer.addEventListener('click', () => {
        const texte = ta.value.trim();
        if (!texte) return;
        const titre = (document.title || 'OctoBoss').replace(/\s*·\s*OctoBoss\s*$/, '').trim() || 'OctoBoss';
        const art = document.querySelector('.lecon');
        const etape = art?.dataset?.etape;
        const lignes = [texte, '', '—', `Page : ${location.href}`];
        if (etape) lignes.push(`Étape : ${etape}${art.dataset.etapes ? ` / ${art.dataset.etapes}` : ''}`);
        lignes.push(`Date : ${parisNow()} (Europe/Paris)`);
        const href = `mailto:${TO}?subject=${encodeURIComponent(`Remarque cours · ${titre}`)}&body=${encodeURIComponent(lignes.join('\n'))}`;
        fermer();
        const a = $('a', { href, style: 'display:none', 'data-remarque-mail': '1' });
        document.body.append(a);
        a.click();
        a.remove();
      });
      const voile = $('div', {
        class: 'confirme-voile remarque-voile',
        on: { click: (e) => { if (e.target === voile) fermer(); } },
      },
        $('div', { class: 'confirme remarque-feuille', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Une remarque ?' },
          $('h2', {}, 'Une remarque ?'),
          $('p', {}, 'Elle part dans ton app Mail.'),
          ta,
          envoyer,
          $('button', { type: 'button', class: 'lien', on: { click: fermer } }, 'Annuler')));
      document.body.append(voile);
      document.body.classList.add('fige');
      ta.focus();
    };
    btn.addEventListener('click', ouvrir);
  })();

  // Sync badges déjà mérités (migration)
  ecrire((d) => { syncBadges(d); });
  rafraichir();
  // Démo : ?badge=N affiche la carte du badge du projet N (sans rien enregistrer)
  const qb = new URLSearchParams(location.search).get('badge');
  if (qb) { const b = BADGES.find((x) => x[3] === +qb); if (b) setTimeout(() => montrerBadge(b), 200); }
})();
