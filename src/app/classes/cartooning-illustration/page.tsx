import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";
import { cn } from "@/lib/cn";
import illo1 from "./assets/cartooningillo1.webp";
import illo2 from "./assets/cartooningillo2.webp";
import illo5 from "./assets/cartooningillo5.webp";
import illo6 from "./assets/cartooningillo6.webp";
import illo7 from "./assets/cartooningillo7.webp";
import illo8 from "./assets/cartooningillo8.webp";
import illo9 from "./assets/cartooningillo9.webp";

/* Bento layout — on md+ this tiles a 4-col grid exactly:
   [ 1  1  2  2 ]
   [ 1  1  5  6 ]
   [ 7  8  8  9 ]
   On mobile it collapses to a simple 2-col grid.
   */
const gallery = [
  { img: illo1, span: "md:col-span-2 md:row-span-2" },
  { img: illo2, span: "md:col-span-2" },
  { img: illo5, span: "" },
  { img: illo9, span: "" },
] as const;

export const metadata = {
  title: "Kids Cartooning & Illustration (Grade 3-5)",
  description: "This class is designed for students ages 7-10, offering a balance of creativity and foundational skill-building. From imaginative exploration to structured learning, students gain confidence in their artistic abilities while learning how to create with intention."
};

const sessionFlow = [
  {
    when: "Warm-up",
    title: "Quick observation drawing",
    body: "A short drawing prompt — a still life setup, a character, a hand — to get pencils moving and eyes warmed up.",
  },
  {
    when: "Lesson",
    title: "A real concept",
    body: "Each session has one foundation idea: line weight, proportion, color mixing, shading. Demonstrated, then practiced.",
  },
  {
    when: "Project",
    title: "Build something",
    body: "Themed projects across cartooning, illustration, painting, and printmaking — students apply the lesson to a piece they actually want to make.",
  },
  {
    when: "Critique",
    title: "Quick share",
    body: "Pieces go up. Teachers talk about what's working and what to push next. Students see each other's work and ideas.",
  },
] as const;

const skills = [
  {
    title: "Drawing fundamentals",
    body: "Line, shape, contour, proportion — drawn from life, not just imagination. The base every later skill builds on.",
  },
  {
    title: "Color & painting",
    body: "Color mixing, watercolor, gouache, and basic acrylic. How to make color choices that hold a piece together.",
  },
  {
    title: "Cartooning & character",
    body: "Building characters with consistent proportions, simple expressions, and a clear silhouette. The fun part — with structure underneath.",
  },
  {
    title: "Illustration & storytelling",
    body: "Short visual stories, comics panels, illustrated covers. Kids learn that an illustration carries an idea, not just a picture.",
  },
] as const;

const logistics = [
  { label: "Ages", value: "7–10 · Grades 3–5" },
  { label: "Class size", value: "Small group · Max ~8 students" },
  { label: "Session length", value: "90 minutes · Weekly" },
  { label: "Materials", value: "All supplies included" },
  { label: "Format", value: "In-studio · 47 Bergen St, 2nd Floor" },
  
] as const;

export default function Kids() {
  return (
    <>
   
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={5}
            className="-top-28 -right-40 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              Cartooning &amp; Illustration
            
              
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
            This class is designed for students ages 7-10, offering a balance of creativity and foundational skill-building. From imaginative exploration to structured learning, students gain confidence in their artistic abilities while learning how to create with intention.
            </p>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
            Our goal is to help young artists move beyond simply “making” art, and instead understand how to express ideas meaningfully through their work.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="cartooningIllustration" variant="primary" size="lg">
                Enroll in Cartooning &amp; Illustration
              </SquareBookingLink>
              <SquareBookingLink service="consultation" variant="secondary" size="lg">
                Book a consultation first
              </SquareBookingLink>
            </div>
          </div>
        </section>

        {/* ─── What a session looks like ────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
         
        </section>

        {/* ─── What they learn ──────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="flex items-baseline gap-4 mb-12">
          <h2 className="font-display text-5xl text-ink">
              What we cover
            </h2>
            <span className="h-px flex-1 bg-paper-edge/60" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((s, i) => (
              <article
                key={i}
                className="p-7 bg-paper/80 border border-paper-edge/60 rounded-lg"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                  {s.body}
                </p>
              </article>
            ))}
          </div>

          {/* ─── Bento gallery ──────────────────────────────── */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 auto-rows-[42vw] sm:auto-rows-[30vw] md:auto-rows-[190px] gap-3 md:gap-4">
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
                  alt="Students and work from the 2D animation class at Ko Art Studio"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 45vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─── Logistics ────────────────────────────────────── */}
        <section className="grain relative isolate ">
          <PaintStroke
            variant="blob"
            seed={3}
            className="-bottom-32 -right-32 w-[36rem] h-[36rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  What to expect
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  Small group, weekly sessions, everything included. Come
                  try a class before committing to a term.
                </p>
              </div>
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
                {logistics.map((l) => (
                  <div
                    key={l.label}
                    className="border-t border-paper-edge/40 pt-4"
                  >
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

        {/* ─── Next step / older students ───────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
         <h2 className="text-5xl mb-4">Related Classes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/classes/teen"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                Up next · grades 5–7
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Intro to Drawing &amp; Painting
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
              This 2.5-hour class provides a balanced approach to both technical skill development and creative growth. It is ideal for students who want to pursue art as a serious hobby or prepare for art-focused high school programs.
              The curriculum is structured to support students from diverse backgrounds, starting with strong foundational training and gradually building toward more advanced work.

              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                See teen class <span aria-hidden>→</span>
              </span>
            </Link>

            <Link
              href="/classes/hs-prep"
              className="group relative isolate p-8 bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                Later · grades 7–9
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink leading-tight group-hover:text-crimson transition">
                Art High School Portfolio
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                The same students often continue with us into portfolio
                prep for LaGuardia, Frank Sinatra, and other art high
                schools.
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
