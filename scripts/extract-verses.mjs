import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const source = join(root, "..", "Understanding The Quranic Word Salah", "1_Salah_Verses.md");
const corpus = join(root, "..", "Understanding The Quranic Word Salah", "quran-simple-min.txt");

const lines = readFileSync(source, "utf8").split(/\r?\n/);
const entries = [];
let surah = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const surahMatch = line.match(/^##\s+Surah\s+(\d+)/);
  if (surahMatch) {
    surah = Number(surahMatch[1]);
    continue;
  }
  const verseMatch = line.match(/^\*\*(\d+:\d+)\*\*\s+\[(.+)\]\s*$/);
  if (!verseMatch) continue;

  const ref = verseMatch[1];
  const forms = verseMatch[2].split("|").map((s) => s.trim()).filter(Boolean);

  let arabic = "";
  for (let j = i + 1; j < lines.length; j++) {
    if (lines[j].trim()) {
      arabic = lines[j].trim();
      break;
    }
  }
  entries.push({ ref, surah, forms, arabic });
}

// 107:4 belongs to the same passage as 107:5 (E13 covers 107:4-7).
const corpusLines = readFileSync(corpus, "utf8").split(/\r?\n/);
const ayah1074 = corpusLines.find((l) => l.startsWith("107|4|"));
const arabic1074 = ayah1074 ? ayah1074.split("|").slice(2).join("|") : "";
const entry1075 = entries.find((e) => e.ref === "107:5");
if (entry1075 && arabic1074) {
  entry1075.ref = "107:4-5";
  entry1075.arabic = `${arabic1074}\n${entry1075.arabic}`;
  entry1075.forms = ["للمصلين", ...entry1075.forms];
}

const ordered = [...entries].sort((a, b) => {
  const [as, aa] = a.ref.split(/[:\-]/).map(Number);
  const [bs, ba] = b.ref.split(/[:\-]/).map(Number);
  return as - bs || aa - ba;
});

mkdirSync(join(root, "src", "data"), { recursive: true });
writeFileSync(join(root, "src", "data", "verse-arabic.json"), JSON.stringify(ordered, null, 2) + "\n", "utf8");

console.log(`Wrote ${ordered.length} verse entries.`);
for (const e of ordered) {
  if (!e.arabic) console.log(`MISSING ARABIC: ${e.ref}`);
}
