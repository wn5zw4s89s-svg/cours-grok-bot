import { defineConfig } from 'astro/config';
const SITE = process.env.SITE_URL ?? 'https://wn5zw4s89s-svg.github.io';
const BASE = process.env.BASE_PATH ?? '/cours-grok-bot';
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
});
