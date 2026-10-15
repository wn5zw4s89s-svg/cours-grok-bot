// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages : https://<compte>.github.io/<depot>/
// À changer via variables d'environnement si le compte/dépôt change.
const SITE = process.env.SITE_URL ?? 'https://wn5zw4s89s-svg.github.io';
const BASE = process.env.BASE_PATH ?? '/cours-grok-bot';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Cours Grok Bot',
      defaultLocale: 'root',
      locales: { root: { label: 'Français', lang: 'fr' } },
      customCss: ['./src/styles/cours.css'],
      head: [
        { tag: 'script', attrs: { src: `${BASE.replace(/\/$/, '')}/cours.js`, defer: true } },
      ],
      sidebar: [
        { label: 'Accueil', link: '/' },
        { label: 'Mon profil', link: '/connexion/' },
        { label: 'Ma progression', link: '/progression/' },
        { label: 'Leçons', items: [{ autogenerate: { directory: 'lecons' } }] },
        { label: 'Quiz', items: [{ autogenerate: { directory: 'quiz' } }] },
      ],
    }),
  ],
});
