import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { StatBadge } from "@/components/StatBadge";
import { PaintStroke } from "@/components/PaintStroke";


import illo1 from "./assets/collegeprep1.webp";
import illo2 from "./assets/collegeprep2.webp";
import illo3 from "./assets/collegeprep3.webp";
import illo4 from "./assets/collegeprep4.webp";
import illo5 from "./assets/collegeprep5.webp";
import illo6 from "./assets/collegeprep6.webp";

/* Bento layout — on md+ this tiles a 4-col grid exactly:
   [ 1  1  2  2 ]
   [ 1  1  5  6 ]
   [ 7  8  8  9 ]
   On mobile it collapses to a simple 2-col grid.
   */
   const gallery = [
    { img: illo1, span: "md:col-span-2 md:row-span-2" },
    { img: illo4, span: "md:row-span-2" },
    { img: illo3, span: "" }, 
    { img: illo6, span: "md:row-span-2 " },
    { img: illo5, span: "" },
    { img: illo2, span: "md:row-span-2 md:col-span-2" },
   
  ] as const;

export const metadata = {
  title: "Art College Portfolio Prep",
  description:
    "Portfolio prep for U.S. and European art colleges. 95% placement. Students placed at Cornell, Pratt, Parsons, SVA, University of the Arts London, Goldsmiths, and more. Specialized tracks for U.S. and U.K./Europe applicants.",
};

const usSchools = [
  { name: "Cornell", note: "Architecture, Art & Planning · Ithaca, NY" },
  { name: "Pratt", note: "Communications design, Fine Art · Brooklyn" },
  { name: "Parsons", note: "Design and Fine Art · The New School · NYC" },
  { name: "School of Visual Arts (SVA)", note: "Advertising, Illustration, Fine art · NYC" },
  { name: "RISD", note: "Rhode Island School of Design · Providence" },
  { name: "University of Michigan", note: "Stamps School of Art & Design · Ann Arbor" },
] as const;

const ukSchools = [
  { name: "University of the Arts London (UAL)", note: "Central Saint Martins, Camberwell, Chelsea, Wimbledon" },
  { name: "Goldsmiths", note: "Fine Art · University of London" },
  { name: "Royal College of Art", note: "Postgraduate · London" },
  { name: "Slade", note: "Fine Art · University College London" },
] as const;

const tracks = [
  {
    label: "U.S. track",
    title: "American art & design schools",
    body: "Common App or school-specific portals. Portfolios usually 10–20 pieces showing range and personal voice. Most schools want both observational work and a clear personal direction.",
    highlight: "Common App · SlideRoom · school portals",
  },
  {
    label: "U.K. / Europe track",
    title: "European art schools",
    body: "UCAS portal and direct applications, often with a Foundation Year requirement. European portfolios lean conceptual — schools want to see how you think, not just what you can render.",
    highlight: "UCAS · Foundation Year · sketchbook-heavy",
  },
] as const;

const included = [
  {
    title: "Personalized portfolio plan",
    body: "We start with the student's actual interests and target schools. Each student gets a written plan with project sequence, voice direction, and deadlines.",
  },
  {
    title: "Concept & voice development",
    body: "College portfolios are about thinking, not just skill. We work with students to find a body of work with recurring themes, materials, and ideas that are actually theirs.",
  },
  {
    title: "Sketchbook & process work",
    body: "European schools especially want to see process. We help students develop sketchbooks that document research, experiments, and iteration.",
  },
  {
    title: "School selection & application strategy",
    body: "Reach, target, and safety across U.S. and Europe. We help families understand the differences between programs, costs, and what each school is actually looking for.",
  },
  {
    title: "Professional documentation",
    body: "In-studio photography and short process videos of finished work.",
  },
  {
    title: "Interview & SlideRoom support",
    body: "We prep students for portfolio interviews, help write artist statements, and review SlideRoom uploads before they go in.",
  },
] as const;

const curriculum = [
  {
    label: "Skill",
    title: "Advanced drawing & painting",
    body: "Long-form observational work — figure, still life, environment — alongside experiments in materials and scale.",
  },
  {
    label: "Voice",
    title: "Concept development",
    body: "Identifying recurring themes in a student's work and building a body of pieces that share an internal logic.",
  },
  {
    label: "Process",
    title: "Sketchbooks & research",
    body: "Visual research, idea development, source material, and iteration.",
  },
  {
    label: "Range",
    title: "Cross-medium experimentation",
    body: "Printmaking, collage, digital, sculpture are encouraged, when relevant. Schools want students who think across mediums.",
  },
] as const;

const timeline = [
  {
    when: "1+ year out",
    title: "Foundations",
    body: "Ideal start. Students build skill before portfolio-specific work begins. This is when 9th-10th graders should start.",
  },
  {
    when: "8-12 months out",
    title: "Portfolio",
    body: "Project sequence targeted at each school's specific requirements. Most schools require minimum 6 to 20 finished pieces that include observational, oil painting, portrait etc.",
  },
  {
    when: "Submission window",
    title: "Documentation and submit",
    body: "We photograph and final works to get the best photo of their works to get submitted.",
  },
  {
    when: "Post-submission",
    title: "Pre-college build",
    body: "After submission is more refined training. We closely look at what each student was lacking and create a close to complete understanding of foundation plus creative workshops exercise. ",
  },
] as const;

export default function College() {
  return (
    <>
    
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={3}
            className="-top-28 -right-44 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              College portfolio prep
              
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              For high-schoolers aiming to apply to U.S. and European art schools. We take into account each school's portfolio expectations, application process,
              and admissions calendar to offer a tailored path for each student.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="consultation" variant="primary" size="lg">
                Book a Free Consultation
              </SquareBookingLink>
              <Button href="/results" size="lg" variant="secondary">
                See our 2025 results
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Stats strip ──────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="bg-paper-deep/60 border border-paper-edge/60 rounded-lg deckle p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 items-end">
              <StatBadge value="95%" label="Placement" accent="crimson" />
              <StatBadge value="2" label="Tracks · US + EU" accent="harbour" />
              <StatBadge value="10+" label="Partner schools" accent="ink" />
            </div>
          </div>
        </section>

        {/* ─── Two tracks ───────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mt-24 mx-auto max-w-7xl px-4 md:px-6 pb-24">
            <div className="flex items-baseline gap-4 mb-4">
              
              <h2 className="font-display text-5xl text-ink">
                Two tracks: U.S. &amp; Europe
              </h2>
            </div>

            <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-12">
              U.S. and European art schools want different things from a
              portfolio. We work with each student on the specific track that
              fits their school list.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {tracks.map((t, i) => (
                <article
                  key={i}
                  className="relative isolate p-8 bg-harbour-soft/40 border border-paper-edge/60 rounded-lg deckle"
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
                  <p className="mt-5 pt-5 border-t border-paper-edge/40 font-medium text-[11px] uppercase tracking-[0.16em] text-crimson">
                    {t.highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Schools ──────────────────────────────────────── */}
        <section className="mt-24 mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-8">
            
            <h2 className="font-display text-5xl text-ink">
              Schools we've prepped for
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-medium text-xl uppercase tracking-[0.18em] text-ink-soft/70 mb-4">
                United States
              </p>
              <ul className="space-y-3">
                {usSchools.map((s) => (
                  <li
                    key={s.name}
                    className="p-4 bg-paper/50 border border-paper-edge/60 rounded-lg"
                  >
                    <p className="font-display  text-xl text-ink leading-tight">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {s.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-xl uppercase tracking-[0.18em] text-ink-soft/70 mb-4">
                United Kingdom &amp; Europe
              </p>
              <ul className="space-y-3">
                {ukSchools.map((s) => (
                  <li
                    key={s.name}
                    className="p-4 bg-paper border border-paper-edge/60 rounded-lg"
                  >
                    <p className="font-display  text-xl text-ink leading-tight">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {s.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/results"
              className="font-display  text-xl text-crimson hover:underline"
            >
              See where our 2025 students got in →
            </Link>
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

        {/* ─── What's included ──────────────────────────────── */}
        <section className="mt-24 mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-8">
          <h2 className="font-display text-5xl text-ink">
              What's included
            </h2>
           
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <article
                key={i}
                className="p-7  bg-paper/70 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Curriculum ───────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-bottom-32 -right-32 w-[36rem] h-[36rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-medium text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Curriculum
                </p>
                <h2 className="mt-4 font-display  text-4xl md:text-5xl leading-[1.05] text-ink">
                  Skill, voice, process, range
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  College admissions readers look at a portfolio for less
                  than two minutes. The work has to be skilled, but it also
                  has to feel like it came from a real person with a real
                  point of view.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {curriculum.map((c, i) => (
                  <article
                    key={i}
                    className="p-6 bg-paper border border-paper-edge/60 rounded-lg"
                  >
                    <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                      {c.label}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                      {c.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Timeline ─────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="flex items-baseline gap-4 mb-8">
            
            <h2 className="font-display text-5xl text-ink">
              When to start
            </h2>
          </div>

          <ol className="max-w-4xl mx-auto">
            {timeline.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-1.5 sm:grid-cols-[10rem_1fr] sm:gap-6 md:grid-cols-[16rem_1fr] py-7 border-t border-paper-edge/40 first:border-t-0"
              >
                <div>
                  <span className="font-display text-2xl md:text-3xl text-crimson leading-tight">
                    {t.when}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-tight">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── Editorial pull-quote ─────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] opacity-30"
          />
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-28 text-center">
            <p className="font-display text-3xl md:text-5xl leading-[1.18] text-ink">
              A college portfolio isn't a list of skills. It's a body of work
              that says something only this student could have made.
            </p>
            <p className="mt-8 font-medium text-sm uppercase tracking-[0.2em] text-ink-faint">
              ko art studio · teaching philosophy
            </p>
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
                Start with a conversation
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                Free 45-minute consultation
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                We'll review your current work, talk through your target
                schools, and outline a clear plan for the next semester or
                year. Bring sketchbooks if you have them.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <SquareBookingLink service="consultation" variant="primary" size="lg">
                  Book a Free Consultation
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
