import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { StatBlock } from "@/components/StatBadge";
import { ScatteredWorks, ScatteredWorksMobile } from "@/components/ScatteredWorks";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  description:
    "Art classes in Cobble Hill, Brooklyn. 97% high school acceptance, 95% college placement, 14 of 16 LaGuardia 2025. Portfolio prep, kids classes, adult drop-in. Book a free consultation.",
};

const programs = [
  {
    href: "/classes/kids",
    title: "Cartooning & Illustration",
    audience: "Grades 3–5 · Ages 7–10",
    blurb:
      "A balanced introduction to art for young students — creativity paired with structured fundamentals.",
  },
  {
    href: "/classes/teen",
    title: "Intro to Drawing & Painting",
    audience: "Grades 5–7",
    blurb:
      "2.5-hour studio sessions covering color theory, observational drawing, and themed projects.",
  },
  {
    href: "/classes/hs-prep",
    title: "Art High School Portfolio",
    audience: "Grades 7–9",
    blurb:
      "97% acceptance rate. Personalized portfolio prep for LaGuardia, Frank Sinatra, Art & Design, Murrow, and more.",
  },
  {
    href: "/classes/college",
    title: "Art College Portfolio",
    audience: "Grades 10–12 · U.S. & Europe",
    blurb:
      "Specialized tracks for RISD, Parsons, Pratt, Cornell, UAL, Goldsmiths. 95% placement.",
  },
  {
    href: "/classes/adult",
    title: "Adult Beginner & Advanced",
    audience: "All levels · adults",
    blurb:
      "Flexible, structured classes for working adults. Beginners welcome — no experience needed.",
  },
  {
    href: "/classes/mentorship",
    title: "Art Mentorship",
    audience: "Career-changers",
    blurb:
      "One-on-one mentorship with Mr. Ko (40+ years in the field). For adults entering art professionally.",
  },
  {
    href: "/open-studio",
    title: "Open Studio Club",
    audience: "Adults · drop in",
    blurb:
      "Weekly drop-in sessions for working professionals. $32 a session. No screens, just canvas.",
  },
  {
    href: "/summer-collective",
    title: "Summer Collective",
    audience: "Summer 2026",
    blurb:
      "Short, immersive workshops: oil painting, charcoal portraits, 2D animation, illustration.",
  },
] as const;

export default function Home() {
  return (
    <>
  
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          {/* Draggable artwork scatter (md+), sits behind the copy. */}
          <div className="hidden md:block absolute inset-0 z-0 mx-auto max-w-7xl">
            <ScatteredWorks />
          </div>

          <div className="relative z-10 pointer-events-none mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-28 md:min-h-[42rem]">
            
            <h1 className="mt-2 font-display  text-4xl md:text-5xl leading-[1.30] tracking-tight max-w-2xl text-ink">
              Art classes{" "}
              <span className="text-crimson relative inline">
                for all ages
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>{" "}
              in Brooklyn
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
              We offer portfolio prep for art high schools and colleges; adult, children, and teen
              classes; an adult drop-in club; and one-on-one mentorship.
            </p>

            <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="consultation" variant="primary" size="lg">
                Book a Free Consultation
              </SquareBookingLink>
              <Button href="/results" size="lg" variant="secondary">
                See our 2025 results
              </Button>
            </div>

            {/* Small-screen fallback: a simple scroll strip of the work. */}
            <div className="pointer-events-auto">
              <ScatteredWorksMobile />
            </div>
          </div>
        </section>

        {/* ─── Stats ────────────────────────────────────────── */}
        <section className="mt-8 mx-auto max-w-7xl px-4 md:px-6 pb-24 bg-transparent">
          <div className="bg-paper-deep/60 border border-paper-edge/60 rounded-lg deckle p-8 md:p-12">
            <StatBlock />
          </div>
        </section>

      

        {/* ─── Our Approach ─────────────────────────────────── */}
        <section className="grain relative isolate ">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-top-40 -right-60 w-[24rem] h-[24rem] md:w-[42rem] md:h-[42rem] opacity-55"
          />
           <PaintStroke
              variant="blob"
              seed={3}
              className="-top-40 -left-100 w-[24rem] h-[24rem] md:w-[48rem] md:h-[48rem] opacity-55"
            />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pb-28">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
               
                <h2 className="font-display text-4xl md:text-5xl leading-[1.30] tracking-tight text-ink">
                  Strong creations come from strong foundations
                </h2>
              </div>
              <div className="space-y-6 text-lg text-ink leading-relaxed">
                <p>
                  At Ko Art Studio, we believe artistic growth begins with a
                  solid foundation. Without fundamental skills, true progress
                  is hard to come by. That's why we emphasize structured
                  learning while making sure every student receives
                  personalized guidance and attention.
                </p>
                <p>
                  To us, art is more than a just a fun activity, it's a way to explore
                  different parts of yourself. With the right direction,
                  students don't just <em>make</em> art; they develop
                  meaningful work rooted in skill and understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

   

        {/* ─── About teaser ─────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-28">
       
          <div className="relative isolate bg-paper-deep/40 border border-paper-edge/60 rounded-lg deckle p-10 md:p-16">
        
            <div>
              <div className = "flex flex-row gap-8">
                <div className="relative mx-auto mb-8 w-44 md:w-108 rounded-md overflow-hidden deckle bg-paper-edge/30">
                  <Image
                    src="/portraits/geon2.webp"
                    alt="Geon, co-founder of Ko Art Studio"
                    fill
                    sizes="(min-width: 768px) 14rem, 11rem"
                    className="object-cover"
                  />
                </div>
                <div className = "flex flex-col">
                <h2 className="font-display text-4xl md:text-5xl leading-[1.30] tracking-tight text-ink text-left ">
                  From Seoul to Brooklyn
                </h2>
                <div className="mx-auto mt-6 pb-6 max-w-2xl space-y-4 text-ink-soft text-[17px] leading-relaxed text-left">
                  <p>
                    Ko Art Studio is a family-run business co-founded in 2023 by Mr. Ko and his son,
                    Geon. Mr. Ko brings over 40 years as a working artist and 20
                    years teaching. He has participated in dozens of both group exhibitions and solo shows centered on environmental work.
                  </p>
                  <p className="pb-4">
                    Geon studied advertising at the School of Visual Arts and
                    has earned awards in national competitions. He shapes the
                    studio into more than a place to learn art. His vision is to build a creative space that students of all ages can call home.
                  </p>
                  <Button href="/about" size="lg" variant="secondary">
                Read our full story
              </Button>
              </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ─── Final CTA ────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32">
          <div className="relative isolate  py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[32rem] md:h-[32rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
             
              <h2 className="mt-4 font-sans text-5xl md:text-6xl leading-[1.05] text-ink">
                Not sure where to start?
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Book 45 minutes with Geon or Mr. Ko. We'll review you or your child's
                work, assess skill level, and create a personalized
                roadmap. Free, no commitment.
              </p>
              <div className="mt-10">
                <SquareBookingLink service="consultation" variant="primary" size="lg">
                  Book a Free Consultation
                </SquareBookingLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
