import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { COUNTS } from "@/data/verses";

export const metadata: Metadata = {
  title: "Method & Sources",
  description:
    "How the study was done: the corpus, root hygiene, the five clusters, the verification standard, the sources, and what this study is not.",
};

const method = [
  {
    number: "01",
    title: "Collect the whole family",
    body: "Every word containing the root letters was collected from the 6,236-verse corpus, then filtered by reading each candidate in context.",
  },
  {
    number: "02",
    title: "Exclude look-alike roots",
    body: "وصل (join), صلح (rectify), فصل (separate), صلب (crucify), and other near-forms were read and excluded. The remaining family is the true Ṣ-L-W root.",
  },
  {
    number: "03",
    title: "Read in context",
    body: "Each verse was studied with its surrounding passage, grammar, word-form, and parallel formulas elsewhere in the Quran.",
  },
  {
    number: "04",
    title: "Order by function",
    body: "Five clusters: fire-anchors, divine action, the commanded formula, life-institutions, and the transformative check. Canonical order inside each.",
  },
  {
    number: "05",
    title: "Synthesize late",
    body: "No meaning was proposed until all 108 verses had been studied. The thesis was then tested back against every verse.",
  },
  {
    number: "06",
    title: "Name the hard cases",
    body: "The verification reports direct fits, explained nuances, and contradictions separately. Nothing is hidden inside an average.",
  },
];

const downloads = [
  ["1_Salah_Verses.md", "The collected verses, with Arabic and word-forms", "33 KB"],
  ["2_Study_Order.md", "The study plan: 108 items in five clusters", "8 KB"],
  ["Verification_Salah.md", "The verse-by-verse fit test", "24 KB"],
  ["Final_Research_Salah.md", "The full 18-part research document", "49 KB"],
  ["Conclusion_Salah.md", "The detailed twelve-section conclusion", "11 KB"],
  ["Conclusion_Salah_Simple.md", "The plain-language conclusion", "6 KB"],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">Method & sources</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            How the study was <span className="italic text-gold">actually done</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            This is a Quran-internal study. It does not begin from a dictionary, a school,
            or a translation. It begins with the root, collects every verse, reads each one
            in context, and only then asks what they share.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {method.map((item) => (
            <div key={item.number} className="card-flat p-5">
              <span className="font-mono text-xs text-gold">{item.number}</span>
              <h2 className="mt-3 font-display text-lg leading-snug text-ink">
                {item.title}
              </h2>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The corpus</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              A complete Quranic text, checked twice
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The study used the Tanzil Simple-Minimal text: 6,236 verses, UTF-8, with
              partial diacritics. A diacritics-stripped copy was built for reliable matching,
              so a word could not be missed because of a vowel mark.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-gold">·</span> 6,236 verses in the corpus
              </li>
              <li className="flex gap-2">
                <span className="text-gold">·</span> {COUNTS.verses} distinct Ṣ-L-W verses
              </li>
              <li className="flex gap-2">
                <span className="text-gold">·</span> {COUNTS.occurrences} root occurrences
              </li>
              <li className="flex gap-2">
                <span className="text-gold">·</span> {COUNTS.forms} word forms
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">The five clusters</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              The reading order
            </h2>
            <ol className="mt-4 space-y-2.5 text-sm">
              {[
                ["A", "Fire-anchors — the root's non-prayer uses"],
                ["B", "Divine — God and the angels stand toward"],
                ["C", "Commanded — prophets, covenants, establishment"],
                ["D", "Life — institutions, clock, law, community"],
                ["E", "Transformation — the check by its fruit"],
              ].map(([letter, label]) => (
                <li key={letter} className="flex gap-3">
                  <span className="font-mono text-xs text-gold">{letter}</span>
                  <span className="text-muted">{label}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-faint">
              Canonical order within each cluster. The order matters: the fire-verses show
              the root&apos;s skeleton before the devotional uses are read.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="card-flat p-6">
            <p className="eyebrow">The verification standard</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              Every verse, or it does not count
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The thesis was taken back through all {COUNTS.verses} verses. A verse was not
              allowed to be “close enough.” It had to fit directly, fit with a named
              structural nuance, or break the thesis.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                [COUNTS.direct, "direct"],
                [COUNTS.nuance, "nuance"],
                ["0", "breaks"],
              ].map(([value, label]) => (
                <div key={String(label)} className="rounded-xl border border-line bg-surface p-3">
                  <p className="font-display text-xl text-ink">{value}</p>
                  <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-faint">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/poles" className="btn mt-5">
              See the three-pole map
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="card-flat border-l-2 border-l-gold/60 p-6">
            <p className="eyebrow">What this is not</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              Limits, stated plainly
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Not a fatwa, and not a substitute for scholarly or pastoral counsel.</li>
              <li>Not a standard translation: the verse lines are research renderings.</li>
              <li>Not a survey of classical tafsīr; the argument is Quran-internal.</li>
              <li>Not a claim that the Arabic dictionary gives the unified thesis; the dictionary supports the components, and the Quranic context supplies the structure.</li>
              <li>The Arabic text is primary. Where a rendering and the Arabic differ, the Arabic wins.</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="sources"
        className="scroll-mt-24 border-y border-line bg-surface/30"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Sources</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              The working documents
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The research was done in six documents. They are available for reading and
              download, so the argument can be checked rather than trusted.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map(([file, description, size]) => (
              <a
                key={file}
                href={`/research/${file}`}
                download
                className="group card-flat flex items-start gap-3 p-4 transition-colors hover:border-line-strong"
              >
                <FileText className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="min-w-0">
                  <span className="block truncate font-mono text-[0.78rem] text-ink">
                    {file}
                  </span>
                  <span className="mt-1 block text-[0.78rem] leading-relaxed text-muted">
                    {description}
                  </span>
                  <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.12em] text-faint">
                    {size}
                  </span>
                </span>
                <Download className="ml-auto size-4 shrink-0 text-faint transition-colors group-hover:text-gold" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Author</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink">
              Muhammad Idrees
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Independent Quranic research. The study was conducted verse by verse, in
              public, with the working notes preserved alongside the final synthesis.
            </p>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-faint">
              Released under the MIT License. Copyright © 2026 Muhammad Idrees. The
              license notice is included with this project.
            </p>
          </div>

          <div className="card-flat p-6">
            <p className="eyebrow">How to cite</p>
            <p className="mt-3 font-mono text-[0.8rem] leading-relaxed text-muted">
              Idrees, Muhammad. <em>The Standing: A Quranic Study of Ṣ-L-W</em>. 2026.
              Web. &lt;{process.env.NEXT_PUBLIC_SITE_URL ?? "https://salah-research.vercel.app"}&gt;.
            </p>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-faint">
              When quoting a verse, cite the Quranic reference first and the research
              rendering second. The Arabic is the primary text.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
