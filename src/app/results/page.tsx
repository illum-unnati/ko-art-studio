import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { StatBlock } from "@/components/StatBadge";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Admission Results",
  description:
    "See ko art studio's 2025 admission results. 97% high school acceptance. 95% college placement. 14 of 16 students accepted to LaGuardia. Students placed at Pratt, Cornell, UAL London, Goldsmiths, and more.",
};

/* Schools where ko art studio students have been accepted.
   Owner provided these via 2026-05-11 content brief. */
const hsSchools = [
  "LaGuardia",
  "Frank Sinatra School of the Arts",
  "Art & Design",
  "Murrow",
  "Packer",
  "St. Ann's",
  "Bay Ridge Prep",
] as const;

const collegeSchools = [
  "Cornell",
  "University of Michigan",
  "Pratt",
  "Parsons",
  "School of Visual Arts (SVA)",
  "University of the Arts London (UAL)",
  "Goldsmiths",
] as const;

/* Student initials preserved as given by the owner — number of stars
   corresponds to the actual name length (privacy convention). */
const hsStudents = [
  {
    initials: "Max",
    schools: ["LaGuardia", "Frank Sinatra"],
    quote: "Thanks to Ko, I was able to believe in myself going into LaGuardia.",
  },
  {
    initials: "Noah",
    schools: ["Frank Sinatra"],
  },
  {
    initials: "Seraphine",
    schools: ["St. Ann's", "Packer", "LaGuardia", "Frank Sinatra"],
  },
  {
    initials: "Emily",
    schools: ["Art & Design", "Bay Ridge Prep"],
  },
  {
    initials: "Riyadh",
    schools: ["LaGuardia", "Art & Design"],
    quote: "It was a tough road.",
  },
] as const;

const collegeStudents = [
  {
    initials: "James",
    schools: ["Cornell", "University of Michigan"],
  },
  {
    initials: "Kelsey",
    schools: ["SVA", "Parsons"],
  },
  {
    initials: "Emilia",
    schools: ["Goldsmiths", "UAL"],
  },
] as const;

export default function Results() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-top-28 -right-44 w-[40rem] h-[40rem] opacity-35"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Results · class of 2025
            </p>
            <h1 className="mt-6 font-display italic text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl text-ink">
              Where our students{" "}
              <span className="text-crimson relative inline-block">
                get in.
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
            </h1>
            <div className="bg-paper-deep/60 border border-paper-edge/60 rounded-lg deckle p-8 md:p-12 ">
            <StatBlock />
          </div>
          </div>
        </section>

        {/* ─── Stats ────────────────────────────────────────── */}
        <section className="">
         
        </section>

        {/* ─── High School Placements ───────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              High school
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display italic text-3xl text-ink">
              Class of 2025
            </h2>
          </div>

          <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-10">
            Our high school portfolio students apply to NYC's specialized art
            high schools and select private programs. Below are the schools
            they've been accepted to, and a few of the students who got in.
          </p>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-3">
            Accepted schools
          </p>
          <ul className="flex flex-wrap gap-2 mb-14">
            {hsSchools.map((s) => (
              <li
                key={s}
                className="px-3 py-1.5 border border-paper-edge/70 rounded-full text-sm text-ink bg-paper"
              >
                {s}
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-4">
            Students · 2025
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hsStudents.map((s, i) => (
              <article
                key={i}
                className="relative isolate p-6 bg-paper-deep/40 border border-paper-edge/60 rounded-lg flex flex-col"
              >
                <p className="font-display italic text-3xl text-crimson leading-none">
                  {s.initials}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.schools.map((sch) => (
                    <li
                      key={sch}
                      className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wide text-ink-soft bg-paper border border-paper-edge/60"
                    >
                      {sch}
                    </li>
                  ))}
                </ul>
                {"quote" in s && s.quote && (
                  <blockquote className="mt-5 pt-5 border-t border-paper-edge/40 font-display italic text-lg text-ink leading-snug">
                    "{s.quote}"
                  </blockquote>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/classes/hs-prep"
              className="font-display italic text-xl text-crimson hover:underline"
            >
              Start HS Portfolio Prep →
            </Link>
          </div>
        </section>

        {/* ─── College Placements ───────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              College &amp; university
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display italic text-3xl text-ink">
              U.S. &amp; Europe
            </h2>
          </div>

          <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-10">
            Our college portfolio program prepares students for both U.S. and
            European art schools — each path with its own portfolio
            expectations and admissions process.
          </p>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-3">
            Accepted schools
          </p>
          <ul className="flex flex-wrap gap-2 mb-14">
            {collegeSchools.map((s) => (
              <li
                key={s}
                className="px-3 py-1.5 border border-paper-edge/70 rounded-full text-sm text-ink bg-paper"
              >
                {s}
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-4">
            Students · 2025
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collegeStudents.map((s, i) => (
              <article
                key={i}
                className="relative isolate p-6 bg-paper-deep/40 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-display italic text-3xl text-crimson leading-none">
                  {s.initials}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.schools.map((sch) => (
                    <li
                      key={sch}
                      className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wide text-ink-soft bg-paper border border-paper-edge/60"
                    >
                      {sch}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/classes/college"
              className="font-display italic text-xl text-crimson hover:underline"
            >
              Start College Portfolio Prep →
            </Link>
          </div>
        </section>

        {/* ─── Why students get in ──────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={1}
            className="top-12 left-4 md:left-16 w-[14rem] h-[14rem] md:w-[24rem] md:h-[24rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Why our students get in
                </p>
                <h2 className="mt-4 font-display italic text-4xl md:text-5xl leading-[1.05] text-ink">
                  Foundations first. Portfolios second.
                </h2>
              </div>
              <div className="space-y-6 text-lg text-ink leading-relaxed">
                <p>
                  Strong portfolios don't come from drilling for a specific
                  audition. They come from a real foundation — proportion,
                  observation, color, composition — built up over time, refined
                  through critique, and presented with intention.
                </p>
                <p>
                  Every portfolio student receives a personalized development
                  plan, two or more parent meetings, school selection guidance,
                  professional photography and video of finished work, and
                  optional support with the NYC application portal. We don't
                  believe in a one-size-fits-all portfolio — every student is
                  guided to build work that reflects both skill and identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32">
          <div className="relative isolate overflow-hidden py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Talk to us
              </p>
              <h2 className="mt-4 font-display italic text-5xl md:text-6xl leading-[1.05] text-ink">
                Want your child on this page?
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Start with a free 45-minute consultation. We'll review your
                child's current work, assess where they are, and outline a
                clear path to the schools they're aiming for.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <SquareBookingLink service="consultation" variant="primary" size="lg">
                  Book a Free Consultation
                </SquareBookingLink>
                <Button href="/about" size="lg" variant="secondary">
                  About the studio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
