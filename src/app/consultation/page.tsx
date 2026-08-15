import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free 45-minute consultation with Mr. Ko or Geon at ko art studio in Cobble Hill, Brooklyn. We review work, talk through goals, and recommend the right program. No commitment.",
};

const what = [
  {
    title: "Bring any work the student has",
    body: "Sketchbooks, photos of finished pieces, anything in progress. Don't worry about it being polished — we're looking at where the student is, not a portfolio.",
  },
  {
    title: "We listen and ask questions",
    body: "What does the student like? What are the goals — a stronger creative habit, a specific art high school, RISD, a personal practice? The answer shapes the recommendation.",
  },
  {
    title: "We make a real recommendation",
    body: "Sometimes it's a trial class first. Sometimes it's straight into a program. For portfolio prep, we usually leave with a starting plan and target schools.",
  },
  {
    title: "No commitment, no pressure",
    body: "Genuinely. The consultation is free. If we're not the right fit, we'll tell you. If we are, you can think about it.",
  },
] as const;

const facts = [
  { label: "Duration", value: "45 minutes" },
  { label: "Cost", value: "Free" },
  { label: "Where", value: "In-studio or video" },
  { label: "Who you meet", value: "Mr. Ko or Geon" },
  { label: "Bring", value: "Any of the student's work" },
  { label: "Booking", value: "Pick a slot in Square Appointments" },
] as const;

export default function ConsultationPage() {
  return (
    <>
   
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={3}
            className="-top-28 -right-40 w-[42rem] h-[42rem] opacity-40"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              Consultation · free · 45 minutes
            </p>
            <h1 className="mt-6 font-display italic text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl text-ink">
              Book a free{" "}
              <span className="text-crimson relative inline-block">
                consultation.
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              The fastest way to know if we're the right fit. 45 minutes
              with Mr. Ko or Geon. We review the student's work, talk
              through goals, and recommend the right program. No
              commitment.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SquareBookingLink service="consultation" variant="primary" size="lg">
                Book a Free Consultation
              </SquareBookingLink>
            </div>
          </div>
        </section>

        {/* ─── What to expect ───────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-24">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              What to expect
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display italic text-3xl text-ink">
              The 45 minutes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {what.map((w, i) => (
              <article
                key={i}
                className="p-7 bg-paper-deep/40 border border-paper-edge/60 rounded-lg"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crimson">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display italic text-2xl text-ink leading-tight">
                  {w.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                  {w.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Quick facts ──────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={1}
            className="-bottom-32 -right-32 w-[34rem] h-[34rem] opacity-25"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  The details
                </p>
                <h2 className="mt-4 font-display italic text-4xl md:text-5xl leading-[1.05] text-ink">
                  Quick facts.
                </h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  Booking happens through Square — pick a slot that
                  works and you'll get a confirmation by email.
                </p>
              </div>
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 self-start">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="border-t border-paper-edge/40 pt-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                      {f.label}
                    </dt>
                    <dd className="mt-1 font-display italic text-xl text-ink leading-snug">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
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
                Ready when you are
              </p>
              <h2 className="mt-4 font-display italic text-5xl md:text-6xl leading-[1.05] text-ink">
                Pick a slot.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Slots open most weekday afternoons. Confirmation comes
                by email.
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
