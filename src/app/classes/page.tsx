import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";
// Shared with the Intro to Drawing & Painting bento — single source of truth.
import teenWork11 from "./intro-drawing-painting/assets/teen-11.webp";

export const metadata = {
  title: "Classes",
  description:
    "All classes at ko art studio in Cobble Hill, Brooklyn — kids, teens, art high school and college portfolio prep, adult classes, one-on-one mentorship, drop-in studio, and summer workshops.",
};

type ClassCard = {
  href: string;
  title: string;
  audience: string;
  duration: string;
  blurb: string;
  highlight?: string;
};

type Group = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  blob: { seed: 1 | 2 | 3 | 4 | 5; className: string };
  classes: ClassCard[];
  /** Pool of environmental photos (public-URL strings or static imports).
   *  Each class card in this group gets one assigned by index — adding
   *  more cards rotates through the pool. */
  photoPool?: (string | StaticImageData)[];
};

const groups: Group[] = [
  {
    id: "kids",
    eyebrow: "Kids",
    title: "Building the foundation",
    intro:
      "Our youngest programs introduce real art-making with the fundamentals underneath. Students move from cartooning and illustration into observational drawing and color theory as they grow.",
    blob: { seed: 5, className: "-top-24 -right-32 w-[34rem] h-[34rem] opacity-25" },
    photoPool: [
      "/envkids/envkids1.webp",
      teenWork11,
      "/envkids/envkids3.webp",
    ],
    classes: [
      {
        href: "/classes/cartooning-illustration",
        title: "Cartooning & Illustration",
        audience: "Grades 3–5 · Ages 7–10",
        duration: "1.5 hours · weekly",
        blurb:
          "A balanced introduction to art for young students — creativity paired with structured fundamentals.",
      },
      {
        href: "/classes/intro-drawing-painting",
        title: "Introduction to Drawing & Painting",
        audience: "Grades 5–7",
        duration: "2.5 hours · weekly",
        blurb:
          "Studio sessions covering color theory, observational drawing, and themed projects. The bridge to portfolio prep.",
      },
      {
        href: "/classes/2d-animation",
        title: "2D Animation",
        audience: "Grades 4-7",
        duration: "2 hours · weekly",
        blurb:
          "Designed for students who love animation and are looking to learn both digital and analog techniques.",
      },
    ],
  },

  {
    id: "portfolio",
    eyebrow: "Portfolio prep",
    title: "Get into art school",
    intro:
      "Personalized portfolio prep for art high schools and colleges. Foundations-first, school-specific, and shaped around each student's strengths.",
    blob: { seed: 2, className: "-top-24 -left-32 w-[34rem] h-[34rem] opacity-25" },
    photoPool: [
      "/envportfolio/env1.webp",
      "/envportfolio/env3.webp",
      "/envportfolio/env4.webp",
      "/envportfolio/env6.webp",
    ],
    classes: [
      {
        href: "/classes/hs-prep",
        title: "High School Portfolio Prep",
        audience: "Grades 7–9",
        duration: "Weekly · multi-year",
        blurb:
          "Portfolio prep for LaGuardia, Frank Sinatra, Art & Design, Murrow, Packer, St. Ann's, and more.",
        highlight: "97% acceptance · 14/16 LaGuardia 2025",
      },
      {
        href: "/classes/college",
        title: "College Portfolio Prep",
        audience: "Grades 10–12 · U.S. & Europe",
        duration: "Weekly · multi-year",
        blurb:
          "Specialized tracks for U.S. (Cornell, RISD, Pratt, Parsons, SVA) and Europe (UAL, Goldsmiths, RCA, Slade).",
        highlight: "95% college placement",
      },
    ],
  },
  {
    id: "adults",
    eyebrow: "Adults",
    title: "For working artists & beginners",
    intro:
      "Real instruction in a calm studio — not a paint-and-sip. From total beginners to adults with a developed practice, plus one-on-one mentorship with Mr. Ko.",
    blob: { seed: 3, className: "-top-24 -right-32 w-[34rem] h-[34rem] opacity-25" },
    photoPool: [
      "/envadults/enva1.webp",
      "/envadults/enva4.webp",
      "/envadults/enva7.webp",
      "/envadults/enva11.webp",
    ],
    classes: [
      {
        href: "/classes/adult-beginner",
        title: "Adult Beginner",
        audience: "All levels · adults",
        duration: "2 hours · weekly",
        blurb:
          "A foundations course tailored to each student",
        highlight: "~$300 / month",
      },
      {
        href: "/classes/adult-intermediate-advanced",
        title: "Adult Intermediate - Advanced",
        audience: "Adults · drop-in",
        duration: "~2 hours · weekly",
        blurb:
          "Drop-in studio sessions for adults. Bring your own work or use what's on the table. No screens, just canvas.",
        highlight: "~$300 / month",
      },
      {
        href: "/classes/mentorship",
        title: "Art Mentorship",
        audience: "Career-changers · serious practitioners",
        duration: "One-on-one · custom cadence",
        blurb:
          "Private mentorship with Mr. Ko — 40+ years as a working artist, 25+ group shows, 15+ solo exhibitions.",
        highlight: "By application",
      },
      
    ],
  },
  {
    id: "seasonal",
    eyebrow: "Seasonal",
    title: "Short, immersive workshops.",
    intro:
      "Limited-run workshops with a specific focus and a finished piece at the end. Open to teens and adults.",
    blob: { seed: 4, className: "-top-24 -left-32 w-[34rem] h-[34rem] opacity-25" },
    classes: [
      {
        href: "/summer-collective",
        title: "Summer Collective 2026",
        audience: "Teens & adults · all levels",
        duration: "4–5 day workshops · July & August",
        blurb:
          "Oil painting, charcoal portraits, 2D animation, and illustration. One medium, one week, one finished piece.",
        highlight: "Summer 2026",
      },
    ],
  },
];

export default function ClassesIndex() {
  return (
    <>

      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate ">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-top-28 -right-44 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-8">
           
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl text-ink">
              Classes for {" "}
              <span className="text-crimson relative inline-block">
                every 
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                /> 
              </span>
              {" "}level
            </h1>
        
           
          </div>
        </section>

        {/* ─── Section index ────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 ">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-shadow-ink-soft mb-4">
              Filter by:
            </p>
          <nav aria-label="Class categories">
            <ul className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="px-4 py-2 border border-wash-deep rounded-full text-sm text-shadow-ink-soft bg-wash/10 hover:bg-wash/40 transition"
                  >
                    {g.eyebrow}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* ─── Groups ───────────────────────────────────────── */}
        {groups.map((group, gIdx) => (
          <section
            key={group.id}
            id={group.id}
            className={
              gIdx % 2 === 0
                ? "grain relative isolate  scroll-mt-24"
                : "relative isolate scroll-mt-24"
            }
          >
            {gIdx % 2 === 0 && (
              <PaintStroke
                variant="blob"
                seed={group.blob.seed}
                className={group.blob.className}
              />
            )}

            <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
              <div className="grid gap-12 md:grid-cols-[1fr_2fr] mb-14">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-shadow-ink-faint">
                    {group.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display  text-4xl md:text-5xl leading-[1.05] text-ink">
                    {group.title}
                  </h2>
                </div>
                <div className="text-lg text-ink leading-relaxed self-end">
                  <p>{group.intro}</p>
                </div>
              </div>

              <div
                className={
                  group.classes.length === 1
                    ? "grid gap-6 md:grid-cols-1 max-w-3xl"
                    : group.classes.length === 2
                      ? "grid gap-6 md:grid-cols-2"
                      : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                }
              >
                {group.classes.map((c, cIdx) => {
                  const photo = group.photoPool?.[cIdx % group.photoPool.length];
                  return (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="group relative isolate bg-paper-deep/40 border border-paper-edge/60 rounded-lg overflow-hidden deckle flex flex-col hover:border-crimson/40 transition"
                    >
                      {photo && (
                        <div className="relative aspect-[4/3] overflow-hidden bg-paper-edge/30">
                          <Image
                            src={photo}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 95vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      <div className="p-7 flex flex-col flex-1">
                        <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                          {c.audience}
                        </p>
                        <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-crimson transition">
                          {c.title}
                        </h3>
                        <p className="mt-2 text-sm text-ink-soft font-medium">
                          {c.duration}
                        </p>
                        <p className="mt-4 text-[15px] text-ink leading-relaxed flex-1">
                          {c.blurb}
                        </p>
                        {c.highlight && (
                          <p className="mt-5 pt-5 border-t border-paper-edge/40 font-mono text-[11px] uppercase tracking-[0.16em] text-crimson">
                            {c.highlight}
                          </p>
                        )}
                        <span className="mt-5 inline-flex items-center gap-1 text-sm text-crimson group-hover:gap-2 transition-all">
                          Learn more <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32 pt-8">
          <div className="relative isolate py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Not sure where to start?
              </p>
              <h2 className="mt-4 font-display italic text-5xl md:text-6xl leading-[1.05] text-ink">
                Talk to us.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Free 45-minute consultation. We'll look at what the
                student is working on and recommend the right program —
                or a trial class to start with.
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
