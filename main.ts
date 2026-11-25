import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The verdict on my ex, in exactly one word: a typo.
// A typo is a mistake that slipped through editing and
// should have been caught before it ever went to print.
// One word, four letters, no punctuation, no caption needed.
const TYPO_HEAD = "ty";
const TYPO_TAIL = "po";
const VERDICT = TYPO_HEAD + TYPO_TAIL;

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = join(OUTPUT_DIR, OUTPUT_FILE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, VERDICT, "utf8");
