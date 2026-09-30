/*
  Cache busting without renaming files: appends ?v=<content-hash> to the two built assets in every page.
  Lets .htaccess serve /static with a 1-year immutable cache; a changed file gets a new URL automatically.
*/
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT, listPages, rel } from './lib.mjs';

const assets = ['static/assets/css/app.css', 'static/assets/js/app.js'];
const hashes = Object.fromEntries(
  assets.map((a) => [a, crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT, a))).digest('hex').slice(0, 10)])
);

let changed = 0;
for (const file of listPages()) {
  const html = fs.readFileSync(file, 'utf8');
  let next = html;
  for (const a of assets) {
    const re = new RegExp(`/${a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\?v=[0-9a-f]+)?"`, 'g');
    next = next.replace(re, `/${a}?v=${hashes[a]}"`);
  }
  if (next !== html) {
    fs.writeFileSync(file, next);
    changed++;
    console.log(`stamped ${rel(file)}`);
  }
}
console.log(`stamp: ${changed} page(s) updated`);
