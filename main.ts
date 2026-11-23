// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to /output/entry.txt.
// The line roasts the wireless earbuds case I use every day: it runs out
// of charge before the earbuds it is supposed to protect do.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My wireless earbuds case dies faster than the earbuds themselves — a bodyguard who faints before the fight starts.";

// The gate requires 1–200 characters of non-whitespace text; refuse to
// emit anything outside that window rather than ship an invalid entry.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast line is ${ROAST.length} characters, outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
