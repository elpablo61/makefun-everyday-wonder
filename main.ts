import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning sentence, chosen by pairwise judging over five variants:
// an ordinary 3 a.m. silence, heard for the first time.
const ENTRY =
  "At 3 a.m. the fridge stopped humming, and the silence that rushed in sounded exactly like the house remembering my name.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The gate only accepts 1–200 characters: refuse to write anything longer.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate needs 1-200.`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
if (outDir !== "/output") {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}
console.log(`Wrote ${ENTRY.length} characters to entry.txt`);
