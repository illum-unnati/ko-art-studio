import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Summer Collective 2026",
  description:
    "Short, immersive summer art workshops at ko art studio. Oil painting, charcoal portraits, 2D animation, and illustration. One subject, one week, one finished piece. Summer 2026.",
};

const workshops = [
  {
    eyebrow: "Workshop 01 · Painting",
    title: "Oil painting",
    duration: "5 days · 3 hours per day",
    dates: "Session A · early July · Session B · mid August",
    body: "From a primed canvas to a finished still life. Oil-specific technique — layering, glazing, fat-over-lean — taught at the pace it actually needs.",
    skills: ["Oil-specific technique", "Color mixing in oils", "Layering & glazing", "Finished piece to take home"],
    accent: "crimson",
    seed: 2,
  },
  {
    eyebrow: "Workshop 02 · Drawing",
    title: "Charcoal portraits",
    duration: "4 days · 3 hours per day",
    dates: "Session A · mid July",
    body: "Drawing the head from observation. Vine and compressed charcoal, value structure, and how to push a likeness without losing the drawing.",
    skills: ["Head & facial proportion", "Value & form", "Drawing from a live model", "Two finished portraits"],
    accent: "ink",
    seed: 3,
  },
  {
    eyebrow: "Workshop 03 · Digital",
    title: "2D animation",
    duration: "5 days · 3 hours per day",
    dates: "Session A · late July",
    body: "Hand-drawn animation principles applied digitally. Walk cycles, timing, key frames. End the week with a short loop you actually made.",
    skills: ["12 principles of animation", "Frame-by-frame technique", "Digital workflow basics", "Short looped animation"],
    accent: "harbour",
    seed: 4,
  },
  {
    eyebrow: "Workshop 04 · Illustration",
    title: "Illustration intensive",
    duration: "5 days · 3 hours per day",
    dates: "Session A · early August",
    body: "From concept to finished illustration. Thumbnails, character design, composition, and color — applied to a personal project across the week.",
    skills: ["Concept & thumbnails", "Character design", "Composition & color", "Finished illustration"],
    accent: "brick",
    seed: 5,
  },
] as const;

const format = [
  {
    title: "One subject, one week",
    body: "Each workshop focuses on a single medium or skill. Five (or four) days of concentrated work, not a sampler. You leave with real progress in one thing.",
  },
  {
    title: "A finished piece",
    body: "Every workshop is built around producing something. Not a sketchbook of exercises — an actual piece you can show, hang, or post.",
  },
  {
    title: "Small group",
    body: "Workshops cap at ~8 students. Enough for a cohort, small enough that every student gets real attention from the instructor.",
  },
  {
    title: "All levels welcome",
    body: "Workshops are taught with mixed-level instruction. Beginners get foundational scaffolding; experienced students get pushed where it counts.",
  },
] as const;

const logistics = [
  { label: "When", value: "Summer 2026 · July & August" },
  { label: "Format", value: "In-studio · 47 Bergen St" },
  { label: "Duration", value: "4–5 day workshops · 3 hours per day" },
  { label: "Class size", value: "Max ~8 students per workshop" },
  { label: "Audience", value: "Teens & adults · all levels" },
  { label: "Materials", value: "Included for most workshops · digital workshop requires laptop" },
] as const;

const accentClass: Record<string, string> = {
  crimson: "text-crimson",
  ink: "text-ink",
  harbour: "text-harbour",
  brick: "text-brick",
};

export default function SummerCollective() {
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
          <PaintStroke
            variant="blob"
            seed={4}
            className="bottom-8 left-4 md:left-12 w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Summer 2026 · workshops
            </p>
            <h1 className="mt-6 font-display italic text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              The Summer{" "}
              <span className="text-crimson relative inline-block">
                Collective
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
              .
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              Short, immersive workshops across July and August. One
              medium, one week, one finished piece. For teens and adults
              who want a focused break from their regular practice — or a
              way in.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/summer-collective/register" size="lg" variant="primary">
                Register for a Workshop
              </Button>
              <SquareBookingLink service="consultation" variant="secondary" size="lg">
                Not sure which? Talk to us
              </SquareBookingLink>
            </div>
          </div>
        </section>

        {/* ─── The four workshops ───────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Four workshops
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display italic text-3xl text-ink">
              July &amp; August 2026
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {workshops.map((w, i) => (
              <article
                key={i}
                className="relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle flex flex-col"
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] ${accentClass[w.accent]}`}
                >
                  {w.eyebrow}
                </p>
                <h3 className="mt-3 font-display italic text-3xl md:text-4xl text-ink leading-tight">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft font-mono">
                  {w.duration}
                </p>
                <p className="mt-4 text-[15px] text-ink leading-relaxed">
                  {w.body}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {w.skills.map((s) => (
                    <li
                      key={s}
                      className="flex gap-2 text-[14px] text-ink-soft leading-relaxed"
                    >
                      <span className="text-crimson font-display italic" aria-hidden>
                        ·
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-5 border-t border-paper-edge/40 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                  {w.dates}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── How it works ─────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                How they work
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display italic text-3xl text-ink">
                Short &amp; focused
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {format.map((f, i) => (
                <article
                  key={i}
                  className="p-7 bg-paper border border-paper-edge/60 rounded-lg"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display italic text-2xl text-ink leading-tight">
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                The details
              </p>
              <h2 className="mt-4 font-display italic text-4xl md:text-5xl leading-[1.05] text-ink">
                When &amp; what to bring.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Sessions are scheduled across July and August. Register
                early — workshops cap at a small cohort and sell out.
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
                  <dd className="mt-1 font-display italic text-xl text-ink leading-snug">
                    {l.value}
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
                Limited cohort
              </p>
              <h2 className="mt-4 font-display italic text-5xl md:text-6xl leading-[1.05] text-ink">
                Save your seat.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Workshops are small and tend to fill before they're
                announced widely. Register, or get on the list to hear
                when dates lock.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button href="/summer-collective/register" size="lg" variant="primary">
                  Register for a Workshop
                </Button>
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
