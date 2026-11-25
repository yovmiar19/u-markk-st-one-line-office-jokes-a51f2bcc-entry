// One-Line Office Jokes — make.fun entry
// Writes the entry line to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1-199 characters.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const LINE =
  "Our printer only jams when you're late, which makes it the most punctual thing in the building.";

const MIN_CHARS = 1;
const MAX_CHARS = 199;

function checkGate(line: string): void {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    throw new Error(
      `Entry is ${line.length} characters; gate requires ${MIN_CHARS}-${MAX_CHARS}.`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
}

function writeEntry(line: string): void {
  checkGate(line);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

function verifyEntry(line: string): void {
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== line) {
    throw new Error("Read-back mismatch: /output/entry.txt does not match the entry line.");
  }
}

writeEntry(LINE);
verifyEntry(LINE);
