import { buildId } from '../lib/build.js';
export const prerender = true;
export const GET = () => new Response(JSON.stringify({ build: buildId }), {
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
});
