import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { ROOT, listPages, rel } from './lib.mjs';

const bin = path.join(ROOT, 'node_modules/html-validate/bin/html-validate.mjs');
const files = listPages().map(rel);
try {
  execFileSync(process.execPath, [bin, ...files], { cwd: ROOT, stdio: 'inherit' });
} catch {
  process.exit(1);
}
