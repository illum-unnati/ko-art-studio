import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { ScatteredWorks, ScatteredWorksMobile } from "@/components/ScatteredWorks";
import { PaintStroke } from "@/components/PaintStroke";

const openStudioPhotos = [
  { src: "/openstudiopics/open-1.webp", alt: "Adults at work during an Open Studio session" },
  { src: "/openstudiopics/open-2.webp", alt: "Open Studio Club in session" },
  { src: "/openstudiopics/open-3.webp", alt: "Studio space during Open Studio" },
  { src: "/openstudiopics/open-4.webp", alt: "Working at the easel during Open Studio" },
];

export const metadata = {
  title: "Open Studio Club — Adult Drop-In",
  description:
    "Weekly drop-in studio sessions for adults in Cobble Hill, Brooklyn. $32 a session. Bring your own work or use studio supplies. No screens, just canvas. Open every week.",
};

const youGet = [
  {
    title: "A real studio space",
    body: "47 Bergen St, 2nd floor. South-facing light, large tables, easels, a wall to pin work on. Built for actual studio use.",
  },
  {
    title: "Basic supplies on hand",
    body: "Pencils, paper, easels, brushes, and a few shared paints. Feel free to bring your own work-in-progress, or your own materials if you have something specific in mind.",
  },
  {
    title: "A quiet adult atmosphere",
    body: "No kids, no instruction, no rush. People show up, work for a couple of hours, and leave with something. Music plays softly in the background, conversation stays low.",
  },
  {
    title: "Optional studio chat",
    body: "Teachers are often around. If you want a quick critique or technique question answered, they are available.",
  },
] as const;

const whoComes = [
  {
    title: "Working professionals",
    body: "People with day jobs who want a regular hour or two with a brush. Architects, designers, doctors, teachers; the room is mixed.",
  },
  {
    title: "Adults on a sketch habit",
    body: "Sketchbookers, watercolorists, urban sketchers who want a quiet place to work that isn't their kitchen table.",
  },
  {
    title: "Returning artists",
    body: "Adults rebuilding a practice after a long break. The drop-in format makes it easier to start without committing to a term.",
  },
] as const;

const logistics = [
  { label: "Pricing", value: "$32 per session" },
  { label: "When", value: "Weekly · check calendar for next session" },
  { label: "Where", value: "47 Bergen St, 2nd Floor · Cobble Hill" },
  { label: "Duration", value: "~2 hours per session" },
  { label: "Materials", value: "Basic supplies provided · BYO welcome" },
  { label: "Booking", value: "Reserve a spot — limited seats" },
] as const;

export default function OpenStudio() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          {/* Draggable Open Studio photos (md+), sits behind the copy. */}
          <div className="hidden md:block absolute inset-0 z-0 mx-auto max-w-7xl">
            <ScatteredWorks images={openStudioPhotos} />
          </div>

          <div className="relative z-10 pointer-events-none mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20 md:min-h-[42rem]">
            
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl text-ink">
              Open Studio{" "}
              <span className="text-crimson relative inline-block">
                Club
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
              
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
              Weekly drop-in sessions for adults in Cobble Hill. Bring your own work or use what's on the table.
            </p>
            <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="openStudio" variant="primary" size="lg">
                Reserve Your Spot
              </SquareBookingLink>
            </div>

            {/* Small-screen fallback: bounded draggable canvas. */}
            <div className="pointer-events-auto">
              <ScatteredWorksMobile images={openStudioPhotos} />
            </div>
          </div>
        </section>

        {/* ─── What it is ───────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
            
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                A studio you can drop into
              </h2>
            </div>
            <div className="space-y-6 text-lg text-ink leading-relaxed">
              <p>
                Open Studio Club is the lightest commitment we offer.
                There's no class, no curriculum, no homework. You reserve
                a seat for a session, show up, and work for a couple of
                hours in a real studio.
              </p>
             
            </div>
          </div>
        </section>

        {/* ─── What you get ─────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-2">

           
              <h2 className="font-script z-10 text-3xl text-ink">
                what you get
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {youGet.map((y, i) => (
                <article
                  key={i}
                  className="p-7 bg-harbour-soft border border-paper-edge/60 rounded-lg"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crimson">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display  text-2xl text-ink leading-tight">
                    {y.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                    {y.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Who shows up ─────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="flex items-baseline gap-4 mb-2">
  
            <h2 className="font-script  text-3xl text-ink">
              who shows up
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whoComes.map((w, i) => (
              <article
                key={i}
                className="p-7 bg-wash-soft bg-paper-deep/40 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display  text-2xl text-ink leading-tight">
                  {w.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                  {w.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Pull quote ───────────────────────────────────── */}
        {/* <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={3}
            className="-top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] opacity-30"
          />
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-28 text-center">
            <p className="font-display  text-3xl md:text-5xl leading-[1.18] text-ink">
              No screens. Just canvas, paper, and the people next to you
              working on theirs.
            </p>
          </div>
        </section> */}

        {/* ─── Logistics ────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              
              <h2 className="mt-4 font-display  text-4xl md:text-5xl leading-[1.05] text-ink">
                Reserve a seat today
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Reserve a seat before the session — sessions can fill up.
                Walk-ins welcome only if space allows.
              </p>
              <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="openStudio" variant="primary" size="lg">
                Reserve Your Spot
              </SquareBookingLink>
            </div>
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
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        
      </main>

      <Footer />
    </>
  );
}
