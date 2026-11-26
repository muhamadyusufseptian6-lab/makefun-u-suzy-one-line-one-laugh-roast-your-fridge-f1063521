import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Line, One Laugh: Roast Your Fridge
// Writes a single-line fridge roast to /output/entry.txt.
// Stdlib only, deterministic: the same input always produces the same line.

const ENTRY =
  "My fridge hums one tired note, guards a yoghurt from 2019 like a family heirloom, and calls itself an appliance \u2014 it's a museum whose only working exhibit is the lightbulb.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
