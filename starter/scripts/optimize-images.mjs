/*
  Image pipeline (RULES.md §7.4). Source files live in static/images/src (originals, never served).
  - raster (jpg/png): responsive AVIF + WebP at 480/960/1440/1920 (never upscaled)  ->  static/images/<name>-<w>.{avif,webp}
  - og-*.svg  -> 1200x630 PNG (social share image)
  - icon.svg  -> icon-192.png, icon-512.png, apple-touch-icon.png (180)
*/
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { ROOT } from './lib.mjs';

const srcDir = path.join(ROOT, 'static/images/src');
const outDir = path.join(ROOT, 'static/images');
const WIDTHS = [480, 960, 1440, 1920];

for (const file of fs.readdirSync(srcDir)) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const input = path.join(srcDir, file);

  if (ext === '.svg') {
    if (base.startsWith('og-')) {
      await sharp(input, { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile(path.join(outDir, `${base}.png`));
      console.log(`og: ${base}.png`);
    } else if (base === 'icon') {
      for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
        await sharp(input, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(outDir, name));
      }
      console.log('icons: 192, 512, apple-touch');
    }
    continue;
  }

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  const { width } = await sharp(input).metadata();
  const sizes = WIDTHS.filter((w) => w <= width);
  if (!sizes.length) sizes.push(width);
  for (const w of sizes) {
    const pipeline = sharp(input).resize({ width: w, withoutEnlargement: true });
    await pipeline.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(outDir, `${base}-${w}.avif`));
    await pipeline.clone().webp({ quality: 78, effort: 6 }).toFile(path.join(outDir, `${base}-${w}.webp`));
  }
  console.log(`responsive: ${base} -> ${sizes.join(', ')}`);
}
