/*
  Production-like local server (same CSP + cache headers intent as .htaccess) for Lighthouse CI and QA.
  Usage: node scripts/serve.mjs [port]   (Live Server remains the everyday dev server)
*/
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { ROOT } from './lib.mjs';

const port = Number(process.argv[2] || 8080);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json',
  '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif'
};
const CSP = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'";
const BLOCKED = /^\/(node_modules|src|scripts|partials|release|docs|\.)/;

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(ROOT, path.normalize(p));
  let status = 200;
  if (BLOCKED.test(p) || !file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    status = 404;
    file = path.join(ROOT, '404.html');
  }
  const ext = path.extname(file);
  const headers = {
    'content-type': TYPES[ext] || 'application/octet-stream',
    'content-security-policy': CSP,
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'strict-origin-when-cross-origin',
    'cache-control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
  };
  let body = fs.readFileSync(file);
  if (/gzip/.test(req.headers['accept-encoding'] || '') && /text|javascript|json|xml|svg/.test(headers['content-type'])) {
    body = zlib.gzipSync(body);
    headers['content-encoding'] = 'gzip';
  }
  res.writeHead(status, headers);
  res.end(body);
}).listen(port, () => console.log(`serving ${ROOT} on http://localhost:${port}`));
