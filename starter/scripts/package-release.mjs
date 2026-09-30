/* Builds release/site.zip containing ONLY what DirectAdmin's public_html needs (no node_modules, src, scripts, CI). */
import fs from 'node:fs';
import path from 'node:path';
import { ZipArchive } from 'archiver';
import { ROOT, listPages, rel } from './lib.mjs';

fs.mkdirSync(path.join(ROOT, 'release'), { recursive: true });
const out = path.join(ROOT, 'release/site.zip');
const output = fs.createWriteStream(out);
const zip = new ZipArchive({ zlib: { level: 9 } });
zip.pipe(output);

for (const page of listPages()) zip.file(page, { name: rel(page) });
for (const f of ['robots.txt', 'sitemap.xml', 'site.webmanifest', '.htaccess']) zip.file(path.join(ROOT, f), { name: f });
zip.glob('**/*', { cwd: path.join(ROOT, 'static'), ignore: ['images/src/**', '**/*.map'] }, { prefix: 'static' });

output.on('close', () => console.log(`release/site.zip  ${(zip.pointer() / 1024).toFixed(0)} KB`));
await zip.finalize();
