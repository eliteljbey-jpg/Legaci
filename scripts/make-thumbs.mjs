// Writes 640px copies of every image in public/assets to public/assets/thumbs,
// so new covers only need dropping into public/assets/covers.
import { readdirSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import sharp from 'sharp';

const root = 'public/assets';
const out = join(root, 'thumbs');
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? (join(d, e.name) === out ? [] : walk(join(d, e.name))) : e.name.endsWith('.webp') ? [join(d, e.name)] : []);

let made = 0;
for (const f of walk(root)) {
  const target = join(out, relative(root, f));
  if (existsSync(target) && statSync(target).mtimeMs >= statSync(f).mtimeMs) continue;
  mkdirSync(dirname(target), { recursive: true });
  await sharp(f).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
  made++;
}
console.log(`thumbs: ${made} created`);
