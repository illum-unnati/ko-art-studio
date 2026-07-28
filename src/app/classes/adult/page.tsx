import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Adult Beginner & Advanced Art Classes",
  description:
    "Adult art classes in Cobble Hill, Brooklyn. Flexible, structured classes for working adults at every level. Beginners welcome — no prior experience needed. Drawing, painting, and personal project work.",
};

const tracks = [
  {
    label: "Beginner",
    title: "Foundations, from zero",
    body: "If you've never drawn before — or it's been twenty years — this is where to start. Pencil, paper, observation. We build up to color and paint when foundations are in place.",
    bullets: [
      "Drawing from observation",
      "Line, value, and proportion",
      "Intro to watercolor & acrylic",
      "No prior experience needed",
    ],
  },
  {
    label: "Advanced",
    title: "Push the work further",
    body: "For adults with some experience who want real instruction. We work on whatever you bring — paintings in progress, personal projects, a body of work you want to develop.",
    bullets: [
      "Critique on your own work",
      "Advanced color & composition",
      "Long-form painting projects",
      "Optional personal direction work",
    ],
  },
] as const;

const focus = [
  {
    title: "Real instruction",
    body: "Demos, critique, and individual feedback every session — not just a room with paint. Working artists teach, not hobbyists.",
  },
  {
    title: "Flexible attendance",
    body: "Life gets in the way. Make-up sessions and a flexible cadence make this work for adults with jobs and kids.",
  },
  {
    title: "Quiet adult atmosphere",
    body: "Adult-only sessions. Calm room, no rushed kids energy, room to focus for two and a half hours.",
  },
  {
    title: "Bring your own work",
    body: "If you have a project in progress — a portrait, a landscape series, a personal book — we'll work on it with you in class.",
  },
] as const;

const logistics = [
  { label: "Level", value: "Beginner & Advanced · adults" },
  { label: "Class size", value: "Small group · max ~10 students" },
  { label: "Session length", value: "2.5 hours · weekly" },
  { label: "Tuition", value: "~$300 / month" },
  { label: "Materials", value: "Starter supplies included · personal supplies optional" },
  { label: "Trial class", value: "Available — try before committing" },
] as const;

export default function Adult() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-28 -right-44 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Adult classes · all levels
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              Adult beginner &amp; advanced
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              Flexible, structured classes for working adults. Beginners
              welcome — no prior experience needed. For people who want
              real instruction in a calm studio, not a paint-and-sip.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="trial" variant="primary" size="lg">
                Book a Trial Class
              </SquareBookingLink>
              <Button href="/open-studio" size="lg" variant="secondary">
                Just want to drop in? See Open Studio
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Two tracks ───────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
              Two tracks
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display text-3xl text-ink">
              Beginner &amp; advanced
            </h2>
          </div>

          <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-12">
            We run separate beginner and advanced sessions so the
            instruction lands at the right level. Not sure which is right
            for you? Book a trial — we'll figure it out together.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((t, i) => (
              <article
                key={i}
                className="relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
              >
                <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  {t.label}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink leading-tight">
                  {t.title}
                </h3>
                <p className="mt-4 text-[15px] text-ink leading-relaxed">
                  {t.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[14px] text-ink-soft leading-relaxed"
                    >
                      <span className="text-crimson font-display" aria-hidden>
                        ·
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ─── What makes this different ────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
                What's different
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display text-3xl text-ink">
                Made for working adults
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {focus.map((f, i) => (
                <article
                  key={i}
                  className="p-7 bg-paper border border-paper-edge/60 rounded-lg"
                >
                  <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    0{i + 1}
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

        {/* ─── Logistics ────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
                The details
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                What to expect.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Tuition is monthly, with flexible attendance and make-up
                sessions. Drop a trial class on the calendar before
                committing.
              </p>
            </div>
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
              {logistics.map((l) => (
                <div
                  key={l.label}
                  className="border-t border-paper-edge/40 pt-4"
                >
                  <dt className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    {l.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl text-ink leading-snug">
                    {l.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─── Adjacent programs ────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint mb-8">
            Also for adults
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/open-studio"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
                Drop-in
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Open Studio Club
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                Weekly drop-in sessions for adults who want studio time
                without a commitment. $32 a session. No screens, just
                canvas.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See Open Studio <span aria-hidden>→</span>
              </span>
            </Link>

            <Link
              href="/classes/mentorship"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
                One-on-one
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Art Mentorship
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                Private mentorship with Mr. Ko (40+ years in the field).
                For adults moving toward art professionally.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See mentorship <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32 pt-8">
          <div className="relative isolate py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
                Try before you commit
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                Book a trial class
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                One session, no commitment. Bring whatever you want to
                work on — or nothing at all. We'll figure out the right
                level together.
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
