import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { StatBadge } from "@/components/StatBadge";
import { PaintStroke } from "@/components/PaintStroke";
import { cn } from "@/lib/cn";
import illo1 from "./assets/hsprep1.webp";
import illo2 from "./assets/hsprep2.webp";
import illo3 from "./assets/hsprep3.webp";
import illo4 from "./assets/hsprep4.webp";
import illo5 from "./assets/hsprep5.webp";

/* Bento layout — on md+ this tiles a 4-col grid exactly:
  */
   const gallery = [
    { img: illo1, span: "md:col-span-2 md:row-span-2" },
    { img: illo2, span: "md:col-span-2 md:row-span-2" },
    { img: illo3, span: "md:row-span-2" },
    { img: illo4, span: "md:col-span-2 md:row-span-2" },
    { img: illo5, span: "md:row-span-2" },
  ] as const;
  

export const metadata = {
  title: "Art High School Portfolio Prep",
  description:
    "Portfolio prep for LaGuardia, Frank Sinatra, Art & Design, Murrow, Packer, and St. Ann's. 97% acceptance rate. 14 of 16 students accepted to LaGuardia in 2025. Personalized portfolio prep in Cobble Hill, Brooklyn.",
};

const schools = [
  {
    name: "LaGuardia",
    type: "Specialized public",
    note: "Most competitive visual-arts audition in NYC.",
  },
  {
    name: "Frank Sinatra School of the Arts",
    type: "Specialized public",
    note: "Queens-based fine art and design audition.",
  },
  {
    name: "Art & Design",
    type: "Specialized public",
    note: "Manhattan, with strong illustration & cartooning track.",
  },
  {
    name: "Edward R. Murrow",
    type: "Audition public",
    note: "Brooklyn — art program by audition.",
  },
  {
    name: "Packer Collegiate",
    type: "Independent",
    note: "Brooklyn Heights — portfolio submitted with application.",
  },
  {
    name: "St. Ann's",
    type: "Independent",
    note: "Brooklyn Heights — known for arts depth.",
  },
 
] as const;

const included = [
  {
    title: "Personalized development plan",
    body: "We start with where the student is. Each student gets a tailored, written plan with skill targets, project sequence, and target schools.",
  },
  {
    title: "Two or more parent meetings",
    body: "We meet with parents at least twice during the cycle to walk through progress, school selection, and what's left to do before submission.",
  },
  {
    title: "School selection guidance",
    body: "We help families pick a realistic set of schools — reach, target, and safety — based on the student's strengths, interests, and current portfolio.",
  },
  {
    title: "Professional photography & video",
    body: "Finished work is photographed and filmed in-studio so students submit clean, properly lit documentation.",
  },
  {
    title: "Optional NYC application portal support",
    body: "We can help families navigate the MySchools portal and audition signups so you're not figuring it out the night before a deadline.",
  },
] as const;

const curriculum = [
  {
    label: "Foundations",
    title: "Drawing fundamentals",
    body: "Proportion, line weight, contour, gesture, and value structure are taught.",
  },
  {
    label: "Color",
    title: "Color & paint",
    body: "Color mixing, temperature, and basic painting in gouache, acrylic, or watercolor depending on the student's track.",
  },
  {
    label: "Composition",
    title: "Composition & idea",
    body: "How to frame a piece, where to put the focus, and how to develop personal subject matter that goes beyond just demonstrating skill.",
  },
  {
    label: "Portfolio",
    title: "Portfolio-specific pieces",
    body: "Once foundations are in place, we build the actual portfolio: home test pieces, observational drawings, color studies, and a personal piece.",
  },
] as const;

const timeline = [
  {
    when: "6+ months out",
    title: "Foundations period",
    body: "Ideal start. Students build skill before portfolio-specific work begins — this is when 7th & 8th graders should start.",
  },
  {
    when: "3-4 months out",
    title: "Portfolio build",
    body: "Project sequence targeted at each school's specific requirements. Most schools require 3–5 finished pieces plus observational drawings.",
  },
  {
    when: "Submission window",
    title: "Documentation & submit",
    body: "We photograph and film final work videos and help families through the MySchools portal and school-specific portals.",
  },
  {
    when: "Post-submission",
    title: "Pre-high school",
    body: "After submission is more important than submitting the portfolio. Students continue refining their technical skills, adapting to any portfolio revisions or additional requirements requested by schools, and expanding their artistic abilities through new mediums such as charcoal, watercolor, and more. Whether they attend an art high school, an independent school, or another academic path, continued art education helps them grow as artists and prepares them for future opportunities.",
  },
] as const;

export default function HsPrep() {
  return (
    <>

      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-28 -right-40 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
            High School Portfolio Prep
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              Personalized portfolio prep for 7th and 8th graders to get into NYC's specialized art high
              schools and select independent programs.
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
              <StatBadge value="97%" label="Acceptance" accent="crimson" />
              <StatBadge value="14/16" label="LaGuardia · 2025" accent="harbour" />
              <StatBadge value="7" label="Partner schools" accent="ink" />
            </div>
          </div>
        </section>

        {/* ─── Who it's for ─────────────────────────────────── */}
        <section className="grain relative isolate">
          <div className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
            {/* ─── Bento gallery ──────────────────────────────── */}
            <div className="mb-24 grid grid-cols-2 md:grid-cols-4 auto-rows-[42vw] sm:auto-rows-[30vw] md:auto-rows-[190px] gap-3 md:gap-4">
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
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  Who it's for
                </h2>
              </div>
              <div className="space-y-6 text-lg text-ink leading-relaxed">
                <p>
               This class is for 7th, 8th, and 9th graders applying to art high schools. Most of our students start in 7th or early 8th grade, which
                  gives us enough runway to build foundations before
                  portfolio-specific work begins. We also take students later
                  in the cycle, but the earlier the start, the more grounded
                  the portfolio.
                </p>
                <p>
                  Students do not need prior formal training. They do need to
                  want to be there. portfolio prep is real work, and we
                  expect students to show up to studio sessions and home
                  assignments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What's included ──────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-6">
            
            <h2 className="font-display text-5xl text-ink">
              What's included
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {included.map((item, i) => (
              <article
                key={i}
                className="relative isolate p-7 bg-paper/60 border border-paper-edge/60 rounded-lg"
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

        {/* ─── Schools ──────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="font-display text-5xl text-ink">
              Schools we prep for
            </h2>
          </div>

          <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-4">
            Each school has its own portfolio requirements and audition
            format. We tailor each student's project sequence to their
            specific school list. There's no one-size-fits-all portfolio.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schools.map((s) => (
              <article
                key={s.name}
                className="p-5 bg-harbour-soft/40 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  {s.type}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {s.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/results"
              className="font-display text-xl text-crimson hover:underline"
            >
              See where our 2025 students got in →
            </Link>
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
                <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                  Curriculum
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  Foundations first, portfolio second
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  Strong portfolios don't come from drilling for a specific
                  audition. They come from a real foundation, refined through
                  critique, presented with intention.
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
          <div className="flex items-baseline gap-4 mb-12">
           
            <h2 className="font-display text-5xl text-ink">
            Suggested timeline
            </h2>
          </div>

          <ol className="max-w-4xl mx-auto">
            {timeline.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-1.5 sm:grid-cols-[10rem_1fr] sm:gap-6 md:grid-cols-[14rem_1fr] py-7 border-t border-paper-edge/40 first:border-t-0"
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

      

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32 pt-8">
          <div className="relative isolate py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                Start with a conversation
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                Free 45-minute consultation
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                We'll review your child's current work, assess where they
                are, and outline a clear plan for the schools they're aiming
                for. No commitment.
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
