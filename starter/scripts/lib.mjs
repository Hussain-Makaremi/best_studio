import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));

const SKIP_DIRS = new Set(['node_modules', 'static', 'src', 'scripts', 'partials', 'release', '.git', '.github', '.vscode', '.lighthouseci']);

/** All HTML pages that are deployed: index.html, 404.html and <slug>/index.html at any depth. */
export function listPages(dir = ROOT) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name) && !entry.name.startsWith('.')) out.push(...listPages(full));
    } else if (entry.name.endsWith('.html')) {
      const isRoot = dir === ROOT;
      if (isRoot || entry.name === 'index.html') out.push(full);
    }
  }
  return out.sort();
}

/** Public URL path of a page file. index.html -> "/", a/index.html -> "/a/", 404.html -> "/404.html". */
export function urlPathOf(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}

export const rel = (file) => path.relative(ROOT, file).split(path.sep).join('/');
