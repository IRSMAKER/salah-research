import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PoleDiagram } from "@/components/PoleDiagram";
import { DataTable } from "@/components/DataTable";
import {
  breachPattern,
  bridges,
  honorEconomy,
  nounLexicon,
  postureTable,
  settlementVocabulary,
  siteTable,
  timeTable,
  verbVoices,
  verificationRows,
} from "@/data/tables";
import { COUNTS } from "@/data/verses";

export const metadata: Metadata = {
  title: "The Three Poles",
  description:
    "The full map: SITE, STATE, and DELIVERY, with the noun lexicon, verb voices, honor economy, breach pattern, settlement vocabulary, and the surah-bridges.",
};

const glossary = [
  {
    term: "the Standing",
    gloss: "ṣalāh",
    body: "The state or institution: the standing kept up willingly toward God.",
  },
  {
    term: "the Standings",
    gloss: "ṣalawāt",
    body: "Renewed cycles of the standing — or, in the site-pole, houses of standing.",
  },
  {
    term: "made to stand within",
    gloss: "the fire-verb",
    body: "The imposed standing inside fire: assigned, sustained, settled.",
  },
  {
    term: "stands toward",
    gloss: "ʿalā construction",
    body: "God's standing toward a person, or a human standing toward the Prophet.",
  },
  {
    term: "establish",
    gloss: "aqīmu",
    body: "Make the standing stand and keep it standing — not merely perform it.",
  },
  {
    term: "house of standing",
    gloss: "the site-pole",
    body: "The assigned space where the Name is mentioned much.",
  },
];

export default function PolesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">The map</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            One root, <span className="italic text-gold">three poles</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The same stem names an assigned space, a willing standing, and an imposed
            standing. The poles are not separate meanings; they are three directions of
            one structure.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <PoleDiagram initial="state" />
      </section>

      <section
        id="how-to-read"
        className="scroll-mt-24 border-y border-line bg-surface/30"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Reading aid</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              How to read the renderings
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The verse library uses a deliberately consistent vocabulary, not an idiomatic
              translation. The Arabic is the primary text; these renderings show the shape
              the study found.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {glossary.map((item) => (
              <div key={item.term} className="card-flat p-5">
                <p className="font-display text-lg text-ink">{item.term}</p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.14em] text-gold">
                  {item.gloss}
                </p>
                <p className="mt-2.5 text-[0.82rem] leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-2">
          <DataTable
            eyebrow="Noun lexicon"
            title="The root's nouns"
            columns={["Lexeme", "Form", "Sense", "Where"]}
            rows={nounLexicon}
            note="The same noun-family serves both directions: taṣliya and ṣalwah name the fire-standing; ṣalāh and ṣalawāt name the willing standing."
          />
          <DataTable
            eyebrow="Verb voices"
            title="Every voice, one state"
            columns={["Form", "Voice", "Rendering", "Where"]}
            rows={verbVoices}
            note="The root's voice coverage is complete: future, divine action, earned title, imperative, passive, bridge, divine ʿalā, human command, and human establishment."
          />
          <DataTable
            eyebrow="Honor economy"
            title="Honor granted or withheld"
            columns={["Negative pole", "Positive pole"]}
            rows={honorEconomy}
            note="The same stem names honor that can be granted or withheld. The fire-stand is dishonor imposed; the divine standing is honor granted."
          />
          <DataTable
            eyebrow="Breach pattern"
            title="Self-steering, then self-settlement"
            columns={["Verse", "The breach", "The settlement"]}
            rows={breachPattern}
            note="In every fire-usage, the delivered person first steered himself. The imposed standing is the end-state of a chosen direction."
          />
          <DataTable
            eyebrow="Settlement vocabulary"
            title="The fire as an address"
            columns={["Word", "Sense", "Where"]}
            rows={settlementVocabulary}
            note="The fire is described with the vocabulary of lodging: destination, settled abode, bedding, return-hostel, served portion."
          />
          <DataTable
            eyebrow="Site pole"
            title="The space of standing"
            columns={["Lexeme", "Form", "Sense", "Where"]}
            rows={siteTable}
            note="The defining criterion is stable across the site-words: the place where the name of God is mentioned much."
          />
          <DataTable
            eyebrow="Time"
            title="The Standing as a clock"
            columns={["Where", "Time-form"]}
            rows={timeTable}
            note="The Standing occupies a duration, not a moment. It times the household, the economy, and legal testimony."
          />
          <DataTable
            eyebrow="Posture"
            title="The body of the Standing"
            columns={["Posture", "Where", "Sense"]}
            rows={postureTable}
            note="The willing Standing is multi-posture; the fire-standing is a single imposed posture."
          />
        </div>
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">The Quran&apos;s own proof</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Three surah-bridges
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Each surah uses the root in both directions within one passage. The link is
              not imposed by the study; it is written into the text.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {bridges.map((bridge) => (
              <div key={bridge.surah} className="card-flat p-6">
                <p className="eyebrow">{bridge.surah}</p>
                <h3 className="mt-2 font-display text-xl text-ink">{bridge.title}</h3>
                <ol className="mt-4 space-y-3">
                  {bridge.steps.map((step) => (
                    <li key={step.ref} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[0.68rem] text-gold">
                        {step.ref}
                      </span>
                      <span className="text-[0.82rem] leading-relaxed text-muted">
                        {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 border-t border-line pt-4 text-[0.78rem] leading-relaxed text-faint">
                  {bridge.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Verification</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Every verse has a home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The thesis was taken back through all {COUNTS.verses} verses. {COUNTS.direct}{" "}
              fit directly. {COUNTS.nuance} require an explicit nuance, and the three-pole
              model explains all three. No verse required a forced reading.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                [COUNTS.direct, "direct"],
                [COUNTS.nuance, "nuance"],
                ["0", "contradictions"],
              ].map(([value, label]) => (
                <div key={String(label)} className="card-flat p-4">
                  <p className="font-display text-2xl text-ink">{value}</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-faint">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/verses" className="btn mt-6">
              Check every verse
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <DataTable
            eyebrow="Final tally"
            title="The verification table"
            columns={["Cluster", "Verses", "Fit", "Nuance", "Contradictions"]}
            rows={verificationRows}
            note="The three nuance cases: 22:40 and 2:125 are SITE-pole verses; 87:15 is the BRIDGE verb."
          />
        </div>
      </section>
    </>
  );
}
