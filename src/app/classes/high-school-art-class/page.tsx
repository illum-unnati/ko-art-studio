import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { EnrollButtons } from "@/components/EnrollButtons";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "High School Art Class — Skill & Personal Development",
  description:
    "A high school art class for skill and personal development at Ko Art Studio in Cobble Hill, Brooklyn. Build fundamentals across drawing, painting, and mixed media while developing a personal creative direction.",
};

const skills = [
  { title: "Drawing & painting fundamentals" },
  { title: "Working across mediums" },
  { title: "Composition & personal direction" },
  { title: "Critique & feedback" },
  { title: "Building a body of work" },
] as const;

const logistics = [
  { label: "Ages", value: "High school" },
  { label: "Class size", value: "Small group" },
  { label: "Session", value: "Mon · Tue · Wed · Thu" },
  { label: "Materials", value: "Material fee per semester" },
  { label: "Format", value: "In-studio · 47 Bergen St, 2nd Floor" },
] as const;

export default function HighSchoolArtClass() {
  return (
    <>
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-top-28 -right-40 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Extracurricular · high school
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              High School Art Class
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              A skill-and-personal-development class for high schoolers. Build
              real fundamentals across drawing, painting, and mixed media —
              and start developing a creative direction that's your own.
            </p>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              Not a portfolio-prep track and not a one-off craft hour —
              somewhere in between, for students who want to take art
              seriously without committing to an application timeline.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <EnrollButtons slug="high-school-art-class" size="lg" />
              <SquareBookingLink service="consultation" variant="secondary" size="lg">
                Book a consultation first
              </SquareBookingLink>
            </div>
          </div>
        </section>

        {/* ─── What we cover ────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="flex items-baseline mb-12">
            <h2 className="font-display text-5xl text-ink">What we cover</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((s, i) => (
              <article
                key={i}
                className="p-7 bg-paper/80 border border-paper-edge/60 rounded-lg"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-crimson">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                  {s.title}
                </h3>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Logistics ────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-bottom-32 -right-32 w-[36rem] h-[36rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  What to expect
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  A good fit for high schoolers who want to keep growing as
                  artists — building skill, confidence, and a personal voice
                  at their own pace.
                </p>
              </div>
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
                {logistics.map((l) => (
                  <div key={l.label} className="border-t border-paper-edge/40 pt-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink-soft">
                      {l.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl text-ink leading-snug">
                      {l.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ─── Related classes ──────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <h2 className="text-5xl mb-4 font-display">Related classes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/classes/acrylic-portrait"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                Extracurricular · grades 8–11
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Acrylic &amp; Portrait
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                A focused acrylic-painting and portraiture class for high
                schoolers.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See the class <span aria-hidden>→</span>
              </span>
            </Link>

            <Link
              href="/classes/hs-prep"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                Portfolio prep · grades 7–9
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Art High School Portfolio
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                Aiming for a specialized art high school? Move into our
                portfolio-prep program.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See portfolio prep <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
