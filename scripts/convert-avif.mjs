import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const DIR = "public/images/idoruru";
const MAX_PX = 1600;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const files = await readdir(DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!EXTS.has(ext)) continue;

  const src = join(DIR, file);
  const dest = join(DIR, basename(file, ext) + ".avif");

  await sharp(src)
    .resize({ width: MAX_PX, height: MAX_PX, fit: "inside", withoutEnlargement: true })
    .avif({ quality: 70 })
    .toFile(dest);

  await unlink(src);
  console.log(`✓ ${file} → ${basename(dest)}`);
}
