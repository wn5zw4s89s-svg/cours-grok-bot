import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export const prerender = true;

export const GET = () => {
  const build = createHash('sha1').update(readFileSync('public/jeu.js')).digest('hex').slice(0, 8);
  return new Response(JSON.stringify({ build }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};
