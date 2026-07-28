import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Book a Trial Class",
  description:
    "Book a single trial session at ko art studio in Cobble Hill, Brooklyn. Available for kids, teen, and adult classes. One session, no commitment, before signing up for a term.",
};

const why = [
  {
    title: "See the actual room",
    body: "A studio looks different from photos. Sitting in the room — easels, paper, music, students working — tells you more in 90 minutes than any tour could.",
  },
  {
    title: "Meet the teacher",
    body: "Fit matters. The trial puts the student in the room with the person who'd actually be teaching them, working on a real prompt with real feedback.",
  },
  {
    title: "Know before you commit",
    body: "Most students leave knowing whether to sign up. Some take a few days to think about it. Either way, there's no pressure during or after.",
  },
] as const;

const tracks = [
  {
    href: "/classes/kids",
    title: "Kids · Cartooning & Illustration",
    audience: "Grades 3–5 · ages 7–10",
    body: "Cartooning, illustration, observational drawing, and color experiments in a 90-minute session.",
  },
  {
    href: "/classes/teen",
    title: "Teen · Intro to Drawing & Painting",
    audience: "Grades 5–7",
    body: "2.5-hour studio session — drawing from observation, color study, and the day's project.",
  },
  {
    href: "/classes/adult",
    title: "Adult · Beginner or Advanced",
    audience: "All levels · adults",
    body: "Sit in on an adult session. Beginners get foundations work; advanced students get critique on their own pieces.",
  },
] as const;

const facts = [
  { label: "Format", value: "One full studio session" },
  { label: "Duration", value: "90 min (kids) · 2.5 hrs (teen & adult)" },
  { label: "Cost", value: "Free or low-fee — set in booking" },
  { label: "Materials", value: "Everything provided" },
  { label: "Where", value: "47 Bergen St, 2nd Floor · Cobble Hill" },
  { label: "Booking", value: "Pick a slot in Square Appointments" },
] as const;

export default function TrialPage() {
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
            className="-top-28 -right-40 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Trial class · one session, no commitment
            </p>
            <h1 className="mt-6 font-display italic text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl text-ink">
              Book a{" "}
              <span className="text-crimson relative inline-block">
                trial class.
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              Try the studio before signing up. One full session in the
              room with our teachers — kids, teen, or adult. Everything
              provided.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="trial" variant="primary" size="lg">
                Book a Trial Class
              </SquareBookingLink>
              <SquareBookingLink service="consultation" variant="secondary" size="lg">
                Not sure? Talk to us first
              </SquareBookingLink>
            </div>
          </div>
        </section>

        {/* ─── Why trial ────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Why a trial
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display italic text-3xl text-ink">
              Better than a tour
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {why.map((w, i) => (
              <article
                key={i}
                className="p-7 bg-paper-deep/40 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crimson">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display italic text-2xl text-ink leading-tight">
                  {w.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                  {w.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Tracks ───────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Which trial?
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display italic text-3xl text-ink">
                Kids · Teen · Adult
              </h2>
            </div>

            <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-10">
              The trial is one session of whichever class fits. You'll
              pick the age group when booking. Not sure? Book a
              consultation instead — we'll recommend.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {tracks.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group p-6 bg-paper border border-paper-edge/60 rounded-lg flex flex-col"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    {t.audience}
                  </p>
                  <h3 className="mt-2 font-display italic text-2xl text-ink leading-tight group-hover:text-crimson transition">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-ink-soft leading-relaxed flex-1">
                    {t.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                    Class details <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Facts ────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                The details
              </p>
              <h2 className="mt-4 font-display italic text-4xl md:text-5xl leading-[1.05] text-ink">
                Quick facts.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Booking happens through Square — pick a slot and you'll
                get a confirmation by email with what to bring (usually
                nothing).
              </p>
            </div>
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
              {facts.map((f) => (
                <div key={f.label} className="border-t border-paper-edge/40 pt-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-display italic text-xl text-ink leading-snug">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
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
                Ready when you are
              </p>
              <h2 className="mt-4 font-display italic text-5xl md:text-6xl leading-[1.05] text-ink">
                Pick a session.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                One class, no commitment. We'll know after if it's
                the right fit.
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
