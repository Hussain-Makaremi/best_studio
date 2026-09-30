/*
  Plain-HTML "includes" without a runtime or template engine (works in Live Server and on any host).
  Pages hold generated copies between markers:
      <!-- partial:header -->  ...  <!-- /partial:header -->
  Source of truth: partials/<name>.html. `npm run sync` rewrites, `--check` fails if a page is stale.
  In a partial, `data-nav` on <a> becomes aria-current="page" on the matching page and is removed elsewhere.
*/
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, listPages, urlPathOf, rel } from './lib.mjs';

const check = process.argv.includes('--check');
const partialsDir = path.join(ROOT, 'partials');
const partials = Object.fromEntries(
  fs.readdirSync(partialsDir).filter((f) => f.endsWith('.html')).map((f) => [path.basename(f, '.html'), fs.readFileSync(path.join(partialsDir, f), 'utf8').replace(/\s+$/, '')])
);

function render(name, pageUrl) {
  return partials[name].replace(/<a\b[^>]*>/g, (tag) => {
    if (!/\sdata-nav(\s|>|=)/.test(tag)) return tag;
    const href = /\shref="([^"]+)"/.exec(tag)?.[1];
    const stripped = tag.replace(/\sdata-nav/, '');
    return href === pageUrl ? stripped.replace(/>$/, ' aria-current="page">') : stripped;
  });
}

let stale = 0;
for (const file of listPages()) {
  let html = fs.readFileSync(file, 'utf8');
  const pageUrl = urlPathOf(file);
  const next = html.replace(/([ \t]*)<!-- partial:([\w-]+) -->[\s\S]*?<!-- \/partial:\2 -->/g, (m, indent, name) => {
    if (!partials[name]) throw new Error(`${rel(file)}: unknown partial "${name}"`);
    const body = render(name, pageUrl).split('\n').map((l) => (l ? indent + l : l)).join('\n');
    return `${indent}<!-- partial:${name} -->\n${body}\n${indent}<!-- /partial:${name} -->`;
  });
  if (next !== html) {
    stale++;
    if (check) console.error(`stale partial in ${rel(file)} (run: npm run sync)`);
    else fs.writeFileSync(file, next);
  }
}
if (check && stale) process.exit(1);
console.log(check ? 'partials: in sync' : `partials: ${stale} page(s) updated`);
