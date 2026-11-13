// ai-happy-01 entry: a small robot offers a sunflower to a laughing
// grandmother on a park bench at golden hour. The program just copies
// the bundled image to the output directory; the judge sees exactly
// these bytes.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
