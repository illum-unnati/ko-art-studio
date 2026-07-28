import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Intro to Drawing & Painting",
  description:
    "Intro to Drawing & Painting for grades 5–7 in Cobble Hill, Brooklyn. 2.5-hour weekly studio sessions covering color theory, observational drawing, and themed projects. The bridge between kids class and portfolio prep.",
};

const focusAreas = [
  {
    label: "Observation",
    title: "Drawing from life",
    body: "Still life, hands, environments. Students move past drawing from imagination and learn to actually see — proportion, value, contour, gesture.",
  },
  {
    label: "Color",
    title: "Color theory & painting",
    body: "How color actually works: temperature, mixing, complements, value. We work in watercolor, gouache, and acrylic — students learn what each medium is good at.",
  },
  {
    label: "Composition",
    title: "Themed projects",
    body: "Each term has projects with a real prompt — character design, environment, self-portrait, color study series — so students apply skills to something they care about.",
  },
  {
    label: "Voice",
    title: "Personal direction",
    body: "By the end of the year, students start noticing what they like to make. The early signs of an artistic voice — and what we'll build on in portfolio prep.",
  },
] as const;

const sessionStructure = [
  {
    minutes: "0:00 – 0:15",
    title: "Warm-up sketch",
    body: "Quick drawing — gesture, hands, or a daily prompt. Sketchbooks open.",
  },
  {
    minutes: "0:15 – 0:30",
    title: "Concept & demo",
    body: "Teacher walks through the day's idea: a color theory concept, a composition principle, or a technique. Demonstrated live.",
  },
  {
    minutes: "0:30 – 2:00",
    title: "Studio work",
    body: "Students work on the project of the day. Teachers move around the room, give individual feedback, demo as needed.",
  },
  {
    minutes: "2:00 – 2:30",
    title: "Critique & next steps",
    body: "Pieces up on the wall. Group conversation about what's working. Notes on what to push next time.",
  },
] as const;

const logistics = [
  { label: "Ages", value: "Grades 5–7" },
  { label: "Class size", value: "Small group · max ~10 students" },
  { label: "Session length", value: "2.5 hours · weekly" },
  { label: "Materials", value: "All studio supplies included" },
  { label: "Sketchbook", value: "Personal sketchbook provided · taken between classes" },
  { label: "Trial class", value: "Available — try a session first" },
] as const;

export default function Teen() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-top-28 -right-44 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Teen · grades 5–7
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              Introduction to Drawing &amp; Painting
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              2.5-hour weekly studio sessions covering color theory,
              observational drawing, and themed projects. The bridge
              between kids class and portfolio prep — real studio time,
              real instruction.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="trial" variant="primary" size="lg">
                Book a Trial Class
              </SquareBookingLink>
              <SquareBookingLink service="consultation" variant="secondary" size="lg">
                Talk to us first
              </SquareBookingLink>
            </div>
          </div>
        </section>

        {/* ─── Why this class ───────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Why this class
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                A studio, not a craft hour
              </h2>
            </div>
            <div className="space-y-6 text-lg text-ink leading-relaxed">
              <p>
                This is the age where kids either drift away from art or
                get serious about it. Most after-school art programs at
                this age are still doing one-off crafts. We don't.
              </p>
              <p>
                Students get 2.5 hours of real studio time, a personal
                sketchbook they keep between sessions, and projects that
                stretch over multiple weeks. The work starts to look like
                work — not just an activity to fill an afternoon.
              </p>
              <p>
                Students who finish this class are ready, if they want, to
                move into portfolio prep for art high schools.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Focus areas ──────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                What students work on
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display text-3xl text-ink">
                Four areas, year-round
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {focusAreas.map((f, i) => (
                <article
                  key={i}
                  className="p-7 bg-paper border border-paper-edge/60 rounded-lg"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crimson">
                    {f.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Session structure ────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              A 2.5-hour session
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display text-3xl text-ink">
              How it runs
            </h2>
          </div>

          <ol className="max-w-4xl mx-auto">
            {sessionStructure.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-6 md:grid-cols-[11rem_1fr] py-6 border-t border-paper-edge/40 first:border-t-0"
              >
                <span className="font-mono text-sm md:text-base text-crimson pt-1">
                  {s.minutes}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── Logistics ────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-bottom-32 -right-32 w-[36rem] h-[36rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  The details
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  What to expect
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  Small group, weekly studio time, sketchbook included.
                  Trial sessions available before committing to a term.
                </p>
              </div>
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
                {logistics.map((l) => (
                  <div
                    key={l.label}
                    className="border-t border-paper-edge/40 pt-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
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

        {/* ─── Before / after ───────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/classes/kids"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Before · grades 3–5
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Cartooning &amp; Illustration
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                The 90-minute kids class for younger students — fun
                projects with real fundamentals underneath.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See kids class <span aria-hidden>→</span>
              </span>
            </Link>

            <Link
              href="/classes/hs-prep"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Next · grades 7–9
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Art High School Portfolio
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                Portfolio prep for LaGuardia, Frank Sinatra, and other
                specialized and independent art high schools. 97%
                acceptance.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See portfolio prep <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32 pt-8">
          <div className="relative isolate overflow-hidden py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Try before you commit
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                Book a trial class
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                One session, no commitment. Bring a sketchbook if you have
                one — we'll provide one if you don't.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <SquareBookingLink service="trial" variant="primary" size="lg">
                  Book a Trial Class
                </SquareBookingLink>
                <Button href="/faq" size="lg" variant="secondary">
                  Read the FAQ
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
