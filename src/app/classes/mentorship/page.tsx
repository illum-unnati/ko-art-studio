import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Art Mentorship with Mr. Ko",
  description:
"Led by Mr. Ko who brings over 40 years of experience in the art industry and has mentored numerous artists, this program provides clear direction and insight to help you navigate a new creative career path with confidence."};

const forWhom = [
  {
    title: "Career-changers",
    body: "Adults moving into art professionally from another field. Mentorship is built around closing the gap between where you are and where the work needs to be.",
  },
  {
    title: "Serious practitioners",
    body: "Adults with a developed practice who want a working artist's eye on the work. Critique, technical instruction, and direction on what to push next.",
  },
  {
    title: "Pre-MFA applicants",
    body: "Adults preparing for graduate programs in fine art who need to build a coherent body of work and a strong written and visual portfolio.",
  },
] as const;

const covers = [
  {
    label: "Technical",
    title: "Advanced craft",
    body: "Drawing, painting, color, composition — at the level you actually need it. Mr. Ko works backward from your goals to identify which skills need the most attention.",
  },
  {
    label: "Conceptual",
    title: "Voice & direction",
    body: "What you're making, why you're making it, and how a body of work holds together. The harder questions that don't get answered in group classes.",
  },
  {
    label: "Professional",
    title: "The path forward",
    body: "Studio practice, exhibition strategy, application prep, and the realities of working as an artist. Mr. Ko has 25+ group shows and 15+ solo exhibitions to draw on.",
  },
  {
    label: "Personal",
    title: "Your body of work",
    body: "Mentorship is shaped around what you're actually making. Bring works-in-progress, finished pieces, sketchbooks — whatever the conversation needs.",
  },
] as const;

const process = [
  {
    when: "Step 1",
    title: "Trial session with Mr. Ko",
    body: "Mentorship starts with a paid trial session with Mr. Ko. Bring work, talk through what you're trying to build, and get an honest read on fit before either side signs on.",
  },
  {
    when: "Step 2",
    title: "Mentorship plan",
    body: "If it's a fit, Mr. Ko proposes a working cadence and focus areas. Mentorship is structured but flexible — adjustments happen as the work develops.",
  },
  {
    when: "Step 3",
    title: "Regular sessions",
    body: "Private studio sessions on a regular cadence. Demos, critique, technical work, and conversations about direction.",
  },
  {
    when: "Step 4",
    title: "Ongoing review",
    body: "We re-evaluate the focus every few months as your work shifts. The mentorship grows with the practice.",
  },
] as const;

const logistics = [
  { label: "Audience", value: "Adults · career-changers & serious practitioners" },
  { label: "Format", value: "One-on-one · private sessions" },
  { label: "Cadence", value: "Custom — typically weekly or bi-weekly" },
  { label: "Duration", value: "Ongoing · minimum 3-month commitment" },
  { label: "Tuition", value: "By inquiry — varies with cadence" },
  { label: "Admission", value: "By consultation — limited slots per year" },
] as const;

export default function Mentorship() {
  return (
    <>
      <AnnouncementBar />
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
            <p className="text-sm uppercase tracking-[0.2em] text-ink-soft">
              One-on-one · by application
            </p>
            <h1 className="mt-6 font-display  text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-5xl text-ink">
              Art mentorship{" "}
              <span className="text-crimson relative inline-block">
                with Mr. Ko
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
              .
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
            This program is designed for adults who are transitioning into the art field and seeking structured, professional guidance.
Led by Mr. Ko who brings over 40 years of experience in the art industry and has mentored numerous artists, this program provides clear direction and insight to help you navigate a new creative career path with confidence.
Whether you’re pursuing a full career change or looking to take your artistic practice more seriously, this class focuses on building both technical skills and a strong artistic direction.

            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="mentorshipTrial" variant="primary" size="lg">
                Book a Trial with Mr. Ko
              </SquareBookingLink>
              <Button href="/about" size="lg" variant="secondary">
                About Mr. Ko
              </Button>
            </div>
          </div>
        </section>

        {/* ─── About Mr. Ko (brief) ─────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                About Mr. Ko
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                A working artist who teaches.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-ink leading-relaxed">
              <p>
                Mr. Ko began his career in Seoul in 1985 and has continued
                his practice in Brooklyn. His work centers on
                environmental themes and has been shown in 25+ group
                exhibitions and 15+ solo shows — including award-winning
                work in national competitions.
              </p>
              <p>
                He has taught art for 20+ years, building a structured
                curriculum used by hundreds of students. Mentorship is the
                most concentrated version of that teaching — built one
                student at a time.
              </p>
              <Link
                href="/about"
                className="inline-block font-display text-xl text-crimson hover:underline"
              >
                Read Mr. Ko's full story →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Who it's for ─────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                Who it's for
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display text-3xl text-ink">
                Three kinds of student
              </h2>
            </div>

            <p className="max-w-2xl text-[17px] text-ink-soft leading-relaxed mb-12">
              Mentorship isn't a class — it's a working relationship
              between an established artist and a student making real
              commitments to their practice. We take a small number of
              students each year.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {forWhom.map((w, i) => (
                <article
                  key={i}
                  className="p-7 bg-paper border border-paper-edge/60 rounded-lg"
                >
                  <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-crimson">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                    {w.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── What it covers ───────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
              What it covers
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display text-3xl text-ink">
              Four dimensions
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {covers.map((c, i) => (
              <article
                key={i}
                className="p-7 bg-paper-deep/40 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-soft">
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
        </section>

        {/* ─── Process ──────────────────────────────────────── */}
        <section className="grain relative isolate">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-bottom-32 -right-32 w-[36rem] h-[36rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                How it works
              </p>
              <span className="h-px flex-1 bg-paper-edge/60" />
              <h2 className="font-display text-3xl text-ink">
                From inquiry to studio
              </h2>
            </div>

            <ol className="max-w-4xl mx-auto">
              {process.map((p, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-6 md:grid-cols-[10rem_1fr] py-7 border-t border-paper-edge/40 first:border-t-0"
                >
                  <span className="font-display text-2xl md:text-3xl text-crimson leading-tight">
                    {p.when}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-ink leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── Logistics ────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                The details
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                Structure &amp; commitment
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Mentorship is a real commitment of time and energy on both
                sides. We confirm fit before either party signs on.
              </p>
            </div>
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
              {logistics.map((l) => (
                <div
                  key={l.label}
                  className="border-t border-paper-edge/40 pt-4"
                >
                  <dt className="font-medium text-[11px] uppercase tracking-[0.18em] text-ink-soft">
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
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32 pt-8">
          <div className="relative isolate py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-medium text-sm uppercase tracking-[0.2em] text-ink-soft">
                Start with a session
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                Sit down with Mr. Ko
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                A paid trial session in the studio. Bring work, questions,
                and what you're trying to build. If it's a fit, we'll
                outline a mentorship plan from there.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <SquareBookingLink service="mentorshipTrial" variant="primary" size="lg">
                  Book a Trial with Mr. Ko
                </SquareBookingLink>
                <Button href="/classes/adult" size="lg" variant="secondary">
                  Looking for group classes?
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
