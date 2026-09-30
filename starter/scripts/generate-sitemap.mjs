/* sitemap.xml + robots.txt sitemap line from real pages. noindex pages and 404 are excluded. */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, config, listPages, urlPathOf } from './lib.mjs';

function lastmod(file) {
  try {
    const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    if (d) return d;
  } catch { /* not a git checkout */ }
  return fs.statSync(file).mtime.toISOString().slice(0, 10);
}

const urls = listPages()
  .filter((f) => path.basename(f) !== '404.html')
  .filter((f) => !/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(fs.readFileSync(f, 'utf8')))
  .map((f) => ({ loc: config.siteUrl.replace(/\/$/, '') + urlPathOf(f), lastmod: lastmod(f) }));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);

const robotsPath = path.join(ROOT, 'robots.txt');
const line = `Sitemap: ${config.siteUrl.replace(/\/$/, '')}/sitemap.xml`;
let robots = fs.readFileSync(robotsPath, 'utf8');
robots = /^Sitemap:.*$/m.test(robots) ? robots.replace(/^Sitemap:.*$/m, line) : robots.trimEnd() + '\n\n' + line + '\n';
fs.writeFileSync(robotsPath, robots);
console.log(`sitemap: ${urls.length} url(s)`);
