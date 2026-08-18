import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { EnrollButtons } from "@/components/EnrollButtons";
import { PaintStroke } from "@/components/PaintStroke";
import { cn } from "@/lib/cn";
import teen1 from "./assets/teen-1.webp";
import teen2 from "./assets/teen-2.webp";
import teen3 from "./assets/teen-3.webp";
import teen4 from "./assets/teen-4.webp";
import teen5 from "./assets/teen-5.webp";
import teen6 from "./assets/teen-6.webp";
import teen7 from "./assets/teen-7.webp";
import teen8 from "./assets/teen-8.webp";
import teen9 from "./assets/teen-9.webp";
import teen10 from "./assets/teen-10.webp";
import teen11 from "./assets/teen-11.webp";
import teen12 from "./assets/teen-12.webp";
import teen13 from "./assets/teen-13.webp";
import teen14 from "./assets/teen-14.webp";

export const metadata = {
  title: "Intro to Drawing & Painting",
  description:
    "Intro to Drawing & Painting for grades 5–7 in Cobble Hill, Brooklyn. 2.5-hour weekly studio sessions covering color theory, observational drawing, and themed projects. The bridge between kids class and portfolio prep.",
};

/* Bento gallery. On md+ a 4-col dense mosaic: wide landscape features
   (col-span-2) and tall portrait features (row-span-2), with 1×1 fillers
   packed into the gaps via grid-auto-flow: dense. On mobile it collapses
   to a plain 2-col grid. */
const gallery = [
  { img: teen1, span: "md:row-span-2" },
  { img: teen7, span: "md:row-span-2" },

  { img: teen13, span: "md:row-span-3 md:col-span-2" },
  { img: teen11, span: "md:row-span-3" },{ img: teen9, span: "md:row-span-3" },
  

 
  

  { img: teen14, span: "md:row-span-2" },
  { img: teen12, span: "md:row-span-2" },
] as const;

const focusAreas = [
  {
    label: "Observation",
    title: "Drawing from life",
    body: "Students move past drawing from imagination and learn to actually see proportion, value, contour, and gesture.",
  },
  {
    label: "Color",
    title: "Color theory & painting",
    body: "How color actually works: temperature, mixing, complements, value. We work in watercolor, gouache, and acrylic. Students learn what each medium is good at.",
  },
  {
    label: "Composition",
    title: "Themed projects",
    body: "Each term has projects with a real prompt, from character design, environment, self-portrait, or color study series. Students end up applying their skills to something they care about.",
  },
  {
    label: "Voice",
    title: "Personal direction",
    body: "By the end of the year, students start noticing what they like to make. The early signs of an artistic voice and what we'll build on in portfolio prep.",
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
  { label: "Class size", value: "Small group · Max ~10 students" },
  { label: "Session length", value: "2.5 hours · Weekly" },
  { label: "Materials", value: "$40 material cost / semester" },

] as const;

export default function Teen() {
  return (
    <>
      
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-top-28 -right-44 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-8">
            
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              Introduction to Drawing &amp; Painting
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              This class is for students in Grades 5-7. A weekly studio session covering color theory,
              observational drawing, and themed projects.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <EnrollButtons slug="intro-drawing-painting" size="lg" />
              <SquareBookingLink service="consultation" variant="secondary" size="lg">
                Book a Consultation
              </SquareBookingLink>
            </div>
          </div>
        </section>

       

        {/* ─── Focus areas ──────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
         
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-8 pb-24">
              {/* ─── Bento gallery ──────────────────────────────── */}
              <div className="pb-24 grid grid-cols-2 md:grid-cols-4 md:grid-flow-row-dense auto-rows-[44vw] sm:auto-rows-[30vw] md:auto-rows-[150px] gap-3 md:gap-4">
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className={cn(
                    "relative overflow-hidden rounded-xl border border-paper-edge/60 bg-paper-deep/30",
                    g.span
                  )}
                >
                  <Image
                    src={g.img}
                    alt="Student work and studio moments from the Intro to Drawing & Painting class at Ko Art Studio"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 45vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="font-display text-5xl text-ink">
                What we cover
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
                
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  What to expect
                </h2>
                <p className="mt-4 text-lg text-ink-soft leading-relaxed">
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
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
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
        <h2 className="mb-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  Related classes
                </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/classes/kids"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Before · Grades 3–5
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

        
      </main>

      <Footer />
    </>
  );
}
