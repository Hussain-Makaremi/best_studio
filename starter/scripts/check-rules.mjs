/*
  Mechanical enforcement of RULES.md. Exit code 1 on any error.
  Rule IDs (H = html, S = seo, A = a11y, E = external/embed, P = performance, L = links) map to RULES.md §5-§8.
*/
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { parse } from 'parse5';
import { ROOT, config, listPages, urlPathOf, rel } from './lib.mjs';

const errors = [];
const warns = [];
const err = (file, line, id, msg) => errors.push(`${file}${line ? ':' + line : ''}  [${id}] ${msg}`);
const warn = (file, line, id, msg) => warns.push(`${file}${line ? ':' + line : ''}  [${id}] ${msg}`);

const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value;
const has = (n, name) => n.attrs?.some((a) => a.name === name);
const line = (n) => n.sourceCodeLocation?.startLine;
const walk = (n, fn) => { fn(n); (n.childNodes || []).forEach((c) => walk(c, fn)); if (n.content) walk(n.content, fn); };
const text = (n) => (n.childNodes || []).map((c) => (c.nodeName === '#text' ? c.value : text(c))).join('').replace(/\s+/g, ' ').trim();

const isLocal = (u) => u.startsWith('/') && !u.startsWith('//');
const hasScheme = (u) => /^(https?:)?\/\//i.test(u);
const FOCUSABLE = (n) =>
  (n.nodeName === 'a' && has(n, 'href')) ||
  (['button', 'select', 'textarea', 'summary'].includes(n.nodeName) && !has(n, 'disabled')) ||
  (n.nodeName === 'input' && attr(n, 'type') !== 'hidden' && !has(n, 'disabled')) ||
  (has(n, 'tabindex') && Number(attr(n, 'tabindex')) >= 0);

function targetExists(u) {
  const clean = u.split('#')[0].split('?')[0];
  if (!clean) return true;
  const p = path.join(ROOT, clean);
  if (clean.endsWith('/')) return fs.existsSync(path.join(p, 'index.html'));
  return fs.existsSync(p);
}

const pages = listPages();
const sitemap = fs.existsSync(path.join(ROOT, 'sitemap.xml')) ? fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8') : '';

for (const file of pages) {
  const name = rel(file);
  const src = fs.readFileSync(file, 'utf8');
  const doc = parse(src, { sourceCodeLocationInfo: true });
  const urlPath = urlPathOf(file);
  const is404 = path.basename(file) === '404.html';

  // H-01 unminified: readable line length, real line breaks
  src.split('\n').forEach((l, i) => {
    if (l.length > 200 && !/application\/ld\+json/.test(l)) err(name, i + 1, 'H-01', `line is ${l.length} chars: HTML must be unminified (max 200)`);
  });
  if (!src.startsWith('<!doctype html>')) err(name, 1, 'H-02', 'must start with lowercase <!doctype html>');

  let htmlEl, head, body;
  walk(doc, (n) => { if (n.nodeName === 'html') htmlEl = n; if (n.nodeName === 'head') head = n; if (n.nodeName === 'body') body = n; });
  if (attr(htmlEl, 'lang') !== config.lang) err(name, line(htmlEl), 'H-03', `<html lang> must be "${config.lang}"`);
  if (attr(htmlEl, 'dir') !== config.dir) err(name, line(htmlEl), 'H-03', `<html dir> must be "${config.dir}"`);

  const firstHead = head.childNodes.find((c) => c.nodeName !== '#text' && c.nodeName !== '#comment');
  if (firstHead?.nodeName !== 'meta' || !has(firstHead, 'charset')) err(name, line(head), 'H-04', '<meta charset> must be the first element in <head>');

  const metas = {};
  const links = [];
  const headings = [];
  const focusables = [];
  const ids = new Set();
  let mainCount = 0;
  const scriptsSrc = [];

  walk(doc, (n) => {
    if (!n.nodeName || n.nodeName.startsWith('#')) return;
    const id = attr(n, 'id');
    if (id) ids.add(id);
    if (n.nodeName === 'meta') {
      const key = attr(n, 'name') || attr(n, 'property');
      if (key) metas[key] = attr(n, 'content') ?? '';
    }
    if (n.nodeName === 'link') links.push(n);
    if (/^h[1-6]$/.test(n.nodeName)) headings.push({ level: +n.nodeName[1], n });
    if (n.nodeName === 'main') mainCount++;
    if (body && FOCUSABLE(n) && n !== body) focusables.push(n);

    // E-01 no embedded code or assets
    if (n.nodeName === 'style') err(name, line(n), 'E-01', 'inline <style> is forbidden: put CSS in src/css');
    if (has(n, 'style')) err(name, line(n), 'E-01', 'style="" attribute is forbidden: use Tailwind utilities');
    for (const a of n.attrs || []) {
      if (/^on[a-z]+$/i.test(a.name)) err(name, line(n), 'E-01', `inline event handler ${a.name}="" is forbidden: use Alpine directives`);
      if (/^\s*javascript:/i.test(a.value)) err(name, line(n), 'E-01', 'javascript: URLs are forbidden');
      if (/^\s*data:/i.test(a.value)) err(name, line(n), 'E-01', `data: URI in ${a.name} is forbidden: reference a file in /static`);
    }
    if (n.nodeName === 'script') {
      const type = attr(n, 'type');
      if (has(n, 'src')) scriptsSrc.push(n);
      else if (type !== 'application/ld+json') err(name, line(n), 'E-01', 'inline <script> is forbidden (only application/ld+json data blocks are allowed)');
      else {
        try { JSON.parse(text(n)); } catch { err(name, line(n), 'S-09', 'JSON-LD is not valid JSON'); }
      }
    }

    // E-02 no external runtime resources
    const resource = { script: 'src', img: 'src', source: 'src', iframe: 'src', video: 'src', audio: 'src', embed: 'src', object: 'data', track: 'src' }[n.nodeName];
    if (resource && attr(n, resource) && hasScheme(attr(n, resource))) err(name, line(n), 'E-02', `external ${n.nodeName} ${attr(n, resource)}: self-host it in /static`);
    if (n.nodeName === 'link' && ['stylesheet', 'preload', 'modulepreload', 'icon', 'apple-touch-icon', 'manifest', 'preconnect', 'dns-prefetch'].some((r) => (attr(n, 'rel') || '').split(/\s+/).includes(r)) && hasScheme(attr(n, 'href') || '')) {
      err(name, line(n), 'E-02', `external <link rel="${attr(n, 'rel')}"> ${attr(n, 'href')}: no runtime third-party dependencies`);
    }
    if (n.nodeName === 'a' && hasScheme(attr(n, 'href') || '') && !(attr(n, 'href') || '').startsWith(config.siteUrl)) {
      if (attr(n, 'target') === '_blank' && !/noopener/.test(attr(n, 'rel') || '')) err(name, line(n), 'E-03', 'target="_blank" needs rel="noopener"');
    }

    // A-01 images
    if (n.nodeName === 'img') {
      if (!has(n, 'alt')) err(name, line(n), 'A-01', '<img> needs alt (alt="" if decorative)');
      if (!has(n, 'width') || !has(n, 'height')) err(name, line(n), 'P-01', '<img> needs width and height (prevents CLS)');
      if (!['lazy', 'eager'].includes(attr(n, 'loading'))) err(name, line(n), 'P-02', '<img> needs explicit loading="lazy|eager"');
      if (attr(n, 'loading') === 'lazy' && attr(n, 'fetchpriority') === 'high') err(name, line(n), 'P-02', 'never lazy-load the LCP image');
    }
    if (n.nodeName === 'button' && !has(n, 'type')) err(name, line(n), 'A-02', '<button> needs explicit type');
    if (has(n, 'tabindex') && Number(attr(n, 'tabindex')) > 0) err(name, line(n), 'A-03', 'positive tabindex breaks natural tab order');
    if (/\b(order-[\w-]+|flex-(row|col)-reverse)\b/.test(attr(n, 'class') || '') && focusables.length) warn(name, line(n), 'A-04', 'visual order utilities can desync tab order from visual order: verify manually');

    // L-01 internal links
    for (const k of ['href', 'src']) {
      const u = attr(n, k);
      if (u && isLocal(u) && !targetExists(u)) err(name, line(n), 'L-01', `broken local reference ${u}`);
    }
  });

  // S-* SEO
  const title = text(head.childNodes.find((c) => c.nodeName === 'title') || { childNodes: [] });
  if (title.length < 10 || title.length > 60) err(name, null, 'S-01', `<title> is ${title.length} chars (10-60)`);
  const desc = metas.description || '';
  if (!is404 && (desc.length < 70 || desc.length > 160)) err(name, null, 'S-02', `meta description is ${desc.length} chars (70-160)`);
  if (!metas.viewport) err(name, null, 'H-05', 'missing viewport meta');
  else if (/user-scalable\s*=\s*no|maximum-scale/i.test(metas.viewport)) err(name, null, 'A-05', 'viewport must not disable zoom');
  if (!metas['theme-color']) err(name, null, 'S-08', 'missing theme-color');

  const noindex = /noindex/i.test(metas.robots || '');
  const canonical = links.find((l) => attr(l, 'rel') === 'canonical');
  if (!is404) {
    const expected = config.siteUrl.replace(/\/$/, '') + urlPath;
    if (!noindex && attr(canonical || { attrs: [] }, 'href') !== expected) err(name, null, 'S-03', `canonical must be ${expected}`);
    if (!noindex) {
      for (const k of ['og:title', 'og:description', 'og:type', 'og:url', 'og:image', 'og:locale', 'twitter:card']) if (!metas[k]) err(name, null, 'S-04', `missing <meta ${k}>`);
      if (metas['og:image'] && !hasScheme(metas['og:image'])) err(name, null, 'S-04', 'og:image must be an absolute URL');
      if (metas['og:image'] && hasScheme(metas['og:image'])) {
        const p = metas['og:image'].replace(config.siteUrl.replace(/\/$/, ''), '');
        if (!targetExists(p)) err(name, null, 'S-04', `og:image file not found (${p})`);
      }
    }
  } else if (!noindex) err(name, null, 'S-05', '404 page must be noindex');
  if (!links.some((l) => attr(l, 'rel') === 'manifest')) err(name, null, 'S-08', 'missing <link rel="manifest">');
  if (!links.some((l) => (attr(l, 'rel') || '').split(/\s+/).includes('icon'))) err(name, null, 'S-08', 'missing favicon <link rel="icon">');

  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length !== 1) err(name, null, 'S-06', `exactly one <h1> required, found ${h1s.length}`);
  headings.reduce((prev, h) => {
    if (h.level - prev > 1) err(name, line(h.n), 'S-07', `heading level skips from h${prev} to h${h.level}`);
    return h.level;
  }, 1);

  // A-* structure
  if (mainCount !== 1) err(name, null, 'A-06', `exactly one <main> required, found ${mainCount}`);
  else walk(doc, (n) => { if (n.nodeName === 'main' && attr(n, 'id') !== 'main') err(name, line(n), 'A-06', '<main> needs id="main" (skip-link target)'); });
  const firstFocus = focusables[0];
  if (!firstFocus || firstFocus.nodeName !== 'a' || attr(firstFocus, 'href') !== '#main') err(name, firstFocus && line(firstFocus), 'A-07', 'first focusable element must be the skip link <a href="#main">');
  walk(doc, (n) => {
    if (n.nodeName === 'a' && (attr(n, 'href') || '').startsWith('#') && attr(n, 'href').length > 1 && !ids.has(attr(n, 'href').slice(1))) err(name, line(n), 'L-02', `anchor target ${attr(n, 'href')} not found in page`);
  });

  // P-* performance hints
  const preloadFont = links.find((l) => attr(l, 'rel') === 'preload' && attr(l, 'as') === 'font');
  if (!is404 && !preloadFont) warn(name, null, 'P-03', 'no <link rel="preload" as="font" crossorigin> for the primary font');
  if (preloadFont && (attr(preloadFont, 'type') !== 'font/woff2' || !has(preloadFont, 'crossorigin'))) err(name, line(preloadFont), 'P-03', 'font preload needs type="font/woff2" and crossorigin');
  const css = links.filter((l) => attr(l, 'rel') === 'stylesheet');
  if (css.length !== 1) err(name, null, 'P-04', `exactly one stylesheet expected, found ${css.length}`);
  for (const s of scriptsSrc) if (!has(s, 'defer') && attr(s, 'type') !== 'module') err(name, line(s), 'P-05', '<script src> needs defer');

  if (!is404 && !noindex && sitemap && !sitemap.includes(`<loc>${config.siteUrl.replace(/\/$/, '') + urlPath}</loc>`)) err(name, null, 'S-10', 'page missing from sitemap.xml (run npm run sitemap)');
}

// ---- built assets ----
const cssPath = path.join(ROOT, 'static/assets/css/app.css');
const jsPath = path.join(ROOT, 'static/assets/js/app.js');
const gz = (f) => zlib.gzipSync(fs.readFileSync(f)).length;
if (!fs.existsSync(cssPath) || !fs.existsSync(jsPath)) err('static/assets', null, 'P-06', 'built assets missing: run npm run build');
else {
  const css = fs.readFileSync(cssPath, 'utf8');
  if (/@import\s+(url\()?["']?https?:|url\(\s*["']?https?:/i.test(css)) err('static/assets/css/app.css', null, 'E-02', 'external URL inside CSS');
  if (/url\(\s*["']?data:/i.test(css)) err('static/assets/css/app.css', null, 'E-01', 'data: URI inside CSS (embedded asset)');
  const cssGz = gz(cssPath), jsGz = gz(jsPath);
  if (cssGz > 25 * 1024) err('static/assets/css/app.css', null, 'P-06', `CSS ${(cssGz / 1024).toFixed(1)} KB gzip > 25 KB budget`);
  if (jsGz > 50 * 1024) err('static/assets/js/app.js', null, 'P-06', `JS ${(jsGz / 1024).toFixed(1)} KB gzip > 50 KB budget`);
  console.log(`budgets: css ${(cssGz / 1024).toFixed(1)} KB gz / 25, js ${(jsGz / 1024).toFixed(1)} KB gz / 50`);
  for (const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
    const u = m[1];
    if (!hasScheme(u) && !u.startsWith('data:')) {
      const p = path.resolve(path.dirname(cssPath), u.split('?')[0]);
      if (!fs.existsSync(p)) err('static/assets/css/app.css', null, 'L-01', `CSS references missing file ${u}`);
    }
  }
}
for (const f of ['robots.txt', 'sitemap.xml', 'site.webmanifest', '.htaccess', '404.html']) {
  if (!fs.existsSync(path.join(ROOT, f))) err(f, null, 'S-11', 'required file missing');
}
if (fs.existsSync(path.join(ROOT, 'robots.txt')) && !/^Sitemap:/m.test(fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf8'))) err('robots.txt', null, 'S-11', 'missing Sitemap: line');

warns.forEach((w) => console.warn('warn  ' + w));
errors.forEach((e) => console.error('error ' + e));
console.log(`\nrules: ${pages.length} page(s) checked, ${errors.length} error(s), ${warns.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
