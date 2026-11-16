# The Standing — A Quranic Study of Ṣ-L-W

A public research notebook for the Quranic root **Ṣ-L-W** (ص-ل-و). It presents the study step by step, then opens the complete library of all 108 distinct verses with Arabic, a research-consistent rendering, the word-form, the pole, and a note on how each verse fits.

**Thesis:** Ṣ-L-W names a standing-state within the full working reach of a power that determines one — sustained, renewed, settled. The same stem names the standing taken toward God (STATE), the standing imposed within fire (DELIVERY), and the assigned space of standing (SITE).

## What is inside

| Route | Content |
|---|---|
| `/` | The thesis, the three poles, the ten-chapter journey, the 87:12 / 87:15 hinge |
| `/journey` | The research in order: question, method, fire-verses, divine side, commanded Standing, life institutions, transformation, bridges, verification, settled meaning |
| `/poles` | The three-pole map, the noun lexicon, verb voices, honor economy, breach pattern, settlement vocabulary, site/time/posture tables, the three surah-bridges, and the verification table |
| `/verses` | All 108 verses with search and filters (cluster, pole, fit) |
| `/conclusion` | Plain-language and detailed conclusions, with print/PDF |
| `/appendix` | The full 18-part research document, with downloads |
| `/about` | Method, corpus, root hygiene, sources, limits, citation |

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- `react-markdown` + `remark-gfm` for the research documents
- `next/font` — Fraunces (display), Inter (body), Amiri (Arabic)
- Static content only: no database, no server state
- PWA: manifest + service worker for offline reading
- Deployed on Vercel

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build
npm run start
```

## Content pipeline

The app's data is generated from the research documents and committed, so Vercel builds do not need the parent research folder.

```bash
node scripts/extract-verses.mjs     # 1_Salah_Verses.md -> src/data/verse-arabic.json
node scripts/build-documents.mjs    # research markdown  -> src/data/documents.ts + public/research
node scripts/make-icons.mjs         # PWA icons          -> public/icon-192.png etc.
```

The verse translations, titles, fit notes, journey chapters, and tables are authored in:

- `src/data/verses.ts`
- `src/data/chapters.ts`
- `src/data/tables.ts`

## Notes on the text

- The Arabic follows the study corpus (Tanzil Simple-Minimal, 6,236 verses).
- The English verse lines are **research renderings**, not a standard translation:
  - “the Standing” renders ṣalāh;
  - “made to stand within” renders the fire-verb;
  - “stands toward” renders the ʿalā construction.
- 107:4 and 107:5 are shown as one card because the study order treats 107:4–7 as a single passage (E13). The collection remains 108 distinct verses.
- The research is Quran-internal. It is not a fatwa and not a substitute for scholarly counsel.

## Deploy

The repository is ready for Vercel’s Git integration:

1. Push to GitHub.
2. In Vercel, **Add New → Project**, select the repository.
3. Framework preset: **Next.js**. No environment variables are required.
4. Deploy.

For a custom domain later, set `NEXT_PUBLIC_SITE_URL` to the final URL so canonical links, the sitemap, and social metadata use it.

## Author & license

Research and writing by **Muhammad Idrees**.

MIT License. Copyright © 2026 Muhammad Idrees. See `LICENSE`.
