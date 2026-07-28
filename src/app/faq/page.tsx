import Link from "next/link";
import { getBookingUrl } from "@/lib/square-bookings";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ko art studio — class enrollment, portfolio prep, ages, pricing, trial classes, materials, location, and policies.",
};

type Section = {
  id: string;
  title: string;
  intro?: string;
  items: { q: string; a: React.ReactNode }[];
};

const sections: Section[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        q: "Where are you located?",
        a: (
          <>
            47 Bergen St, 2nd Floor, Cobble Hill, Brooklyn. We're a short walk
            from the Bergen St (F/G) and Hoyt-Schermerhorn (A/C/G) stations.
          </>
        ),
      },
      {
        q: "Who teaches at the studio?",
        a: (
          <>
            Mr. Ko (co-founder, 40+ years working artist, 20+ years teaching)
            leads instruction alongside Geon (co-founder, SVA-trained
            illustrator and guidance counselor for portfolio students). They're
            joined by Elleyes and Sahara as additional studio teachers.{" "}
            <Link href="/about" className="text-crimson hover:underline">
              Read more about the team
            </Link>
            .
          </>
        ),
      },
      {
        q: "What ages do you teach?",
        a: (
          <>
            Grades 3 through adult. Kids start at ages 7–10, with separate
            programs through teen years, high-school portfolio prep, college
            portfolio prep, adult classes, and one-on-one mentorship.
          </>
        ),
      },
      {
        q: "How do I know which class is right for us?",
        a: (
          <>
            Book a free 45-minute consultation. We'll look at where the
            student is and recommend the best fit — sometimes that's a trial
            class first, sometimes it's straight into a program.
          </>
        ),
      },
      {
        q: "Can we observe a class before signing up?",
        a: (
          <>
            For kids and teen programs, we recommend booking a trial class
            rather than observing — students learn more by participating.
            For adult and mentorship programs, the consultation covers the
            same ground.
          </>
        ),
      },
    ],
  },
  {
    id: "enrollment",
    title: "Enrollment, trials & consultations",
    items: [
      {
        q: "How do I book a trial class?",
        a: (
          <>
            Trial classes are available for kids, teen, and adult programs.{" "}
            <a
              href={getBookingUrl("trial")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-crimson hover:underline"
            >
              Book one here
            </a>
            .
          </>
        ),
      },
      {
        q: "Is the consultation actually free?",
        a: <>Yes — the 45-minute consultation is free and there's no commitment to enroll.</>,
      },
      {
        q: "What happens in the consultation?",
        a: (
          <>
            We meet (in person or video), look at any work the student has,
            ask about goals, and walk through which programs fit. For
            portfolio prep, we usually leave with a starting plan.
          </>
        ),
      },
      {
        q: "When can I start?",
        a: (
          <>
            Most classes have rolling enrollment with occasional waitlists.
            Summer Collective workshops are date-specific. The fastest way
            to know is to book a consultation — we'll tell you immediately.
          </>
        ),
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio prep · high school & college",
    intro:
      "These come up most often for families considering portfolio prep for art high schools or colleges.",
    items: [
      {
        q: "What's your acceptance rate?",
        a: (
          <>
            97% high school acceptance and 95% college placement across
            recent cohorts. In 2025, 14 of 16 students were accepted to
            LaGuardia.{" "}
            <Link href="/results" className="text-crimson hover:underline">
              See full results
            </Link>
            .
          </>
        ),
      },
      {
        q: "Do you guarantee admission?",
        a: (
          <>
            No, and no one should. Admissions decisions are made by the
            schools. What we guarantee is real foundations, a clear plan,
            a coherent portfolio, and a process that's worked for the
            students you can see on our results page.
          </>
        ),
      },
      {
        q: "When should we start portfolio prep?",
        a: (
          <>
            For high school portfolios: ideally 7th or early 8th grade. For
            college portfolios: ideally sophomore year. We accept students
            later in the cycle, but earlier means stronger foundations
            before portfolio-specific work begins.
          </>
        ),
      },
      {
        q: "What schools do you prep for?",
        a: (
          <>
            High school: LaGuardia, Frank Sinatra School of the Arts, Art &
            Design, Edward R. Murrow, Packer Collegiate, St. Ann's, and Bay
            Ridge Prep. College: Cornell, Pratt, Parsons, SVA, RISD,
            University of Michigan, UAL (Central Saint Martins, Camberwell,
            Chelsea, Wimbledon), Goldsmiths, Royal College of Art, and Slade.
          </>
        ),
      },
      {
        q: "What's included in portfolio prep?",
        a: (
          <>
            A personalized development plan, at least two parent meetings,
            school selection guidance, professional photography and video
            of finished work, and optional support with the NYC application
            portal. Plus, obviously, the studio sessions.
          </>
        ),
      },
    ],
  },
  {
    id: "adults",
    title: "Adult programs",
    items: [
      {
        q: "Do I need any prior experience?",
        a: <>No. Beginners are genuinely welcome. The beginner track starts from scratch.</>,
      },
      {
        q: "What's the difference between Adult Classes and Open Studio Club?",
        a: (
          <>
            Adult Classes are structured weekly sessions with instruction,
            critique, and a curriculum. Open Studio Club is a $32 drop-in
            session — no class, no curriculum, just studio time. Many
            adults do both.
          </>
        ),
      },
      {
        q: "What's the difference between Adult Classes and Mentorship?",
        a: (
          <>
            Adult Classes are small-group instruction. Mentorship is
            one-on-one with Mr. Ko, by application, for adults developing a
            serious body of work or moving into art professionally.
          </>
        ),
      },
      {
        q: "How much do adult classes cost?",
        a: <>Adult classes are approximately $300 / month. Open Studio is $32 per session. Mentorship pricing is by inquiry.</>,
      },
    ],
  },
  {
    id: "logistics",
    title: "Materials, class size & policies",
    items: [
      {
        q: "Are materials included?",
        a: (
          <>
            For kids and teen classes: yes, all supplies are included. For
            adult classes: starter supplies are included; personal supplies
            are optional. For Summer Collective workshops: most include
            materials (the digital animation workshop requires a laptop).
          </>
        ),
      },
      {
        q: "What's the class size?",
        a: (
          <>
            Kids: max ~8 students. Teen and adult: max ~10 students.
            Summer Collective workshops: max ~8 per workshop. Mentorship:
            one-on-one.
          </>
        ),
      },
      {
        q: "What's the make-up / cancellation policy?",
        a: (
          <>
            Adult and teen classes allow make-up sessions with notice. For
            portfolio prep, we work with families directly when life
            interferes. Open Studio reservations can be moved up to 24
            hours before a session.
          </>
        ),
      },
      {
        q: "How do I pay?",
        a: (
          <>
            We accept card payments through Square — online for class
            tuition, Open Studio reservations, and Summer Collective
            workshops.
          </>
        ),
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={2}
            className="-top-28 -right-40 w-[42rem] h-[42rem] opacity-35"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-16">
      
            <h1 className="mt-6 font-display italic text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl text-ink">
             Frequently Asked Questions
            </h1>
            
          </div>
        </section>

        {/* ─── Table of contents ───────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
          <nav aria-label="FAQ sections">
            <ul className="flex flex-wrap gap-x-4 gap-y-6">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="px-4 py-2 border border-paper-edge/70 rounded-full text-sm text-ink bg-paper hover:bg-paper-deep/40 transition"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* ─── FAQ sections ─────────────────────────────────── */}
        {sections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className="mx-auto max-w-7xl px-4 md:px-6 pb-24 scroll-mt-24"
          >
            <div className="flex items-baseline gap-4 mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                0{idx + 1}
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display italic text-3xl md:text-4xl text-ink">
                {section.title}
              </h2>
            </div>

            {section.intro && (
              <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-10">
                {section.intro}
              </p>
            )}

            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 max-w-6xl">
              {section.items.map((item, i) => (
                <article key={i} className="border-t border-paper-edge/40 pt-6">
                  <h3 className="font-display italic text-2xl text-ink leading-snug">
                    {item.q}
                  </h3>
                  <div className="mt-3 text-[15px] text-ink leading-relaxed">
                    {item.a}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* ─── CTA ──────────────────────────────────────────── */}
        {/* <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32 pt-8">
          <div className="relative isolate overflow-hidden py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Still have questions?
              </p>
              <h2 className="mt-4 font-display italic text-5xl md:text-6xl leading-[1.05] text-ink">
                Just ask.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                A free 45-minute consultation is the fastest way to get a
                real answer for your situation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <SquareBookingLink service="consultation" variant="primary" size="lg">
                  Book a Free Consultation
                </SquareBookingLink>
                <SquareBookingLink service="trial" variant="secondary" size="lg">
                  Or book a trial class
                </SquareBookingLink>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
