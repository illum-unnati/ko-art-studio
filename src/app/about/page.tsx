import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SquareBookingLink } from "@/components/SquareBookingLink";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "About",
  description:
    "ko art studio is a family-owned art studio in Cobble Hill, Brooklyn. Co-founded in 2023 by Mr. Ko and his son Geon, the studio offers inclusive art education for kids, teens, and adults.",
};

const milestones = [
  { year: "1985", text: "Mr. Ko begins his career as a working artist in Seoul." },
  { year: "2007", text: "Mr. Ko begins teaching professionally and develops a foundation-first curriculum." },
  { year: "2023", text: "Mr. Ko and Geon co-found ko art studio at 47 Bergen St, Cobble Hill, Brooklyn." },
  { year: "2024", text: "First high school portfolio cohort graduates. Most accepted to LaGuardia and Frank Sinatra." },
  { year: "2025", text: "14 of 16 students accepted to LaGuardia. College placements include Pratt, Cornell, UAL London, Goldsmiths." },
  { year: "2026", text: "Open Studio Club launches for adult drop-in sessions every week." },
] as const;

const teachers = [
  { name: "Elleyes", role: "Teacher", src: "/portraits/Elleyse.webp" },
  { name: "Sahara", role: "Teacher", src: "/portraits/Sahara.webp" },
] as const;

export default function About() {
  return (
    <>
  
      <NavBar />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={3}
            className="-top-28 -right-44 w-[42rem] h-[42rem] opacity-35"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-24">
            <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
              About · since 2023
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl text-ink">
              From Seoul to{" "}
              <span className="text-crimson relative inline-block">
                Brooklyn.
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-1 left-0 w-full h-3"
                />
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed">
              ko art studio is a family-owned art studio in Cobble Hill,
              Brooklyn. Co-founded in 2023 by Mr. Ko and his son Geon, we
              offer inclusive art education for students of every age — from
              first-time kids to working adults to artists preparing for the
              country's most competitive art schools.
            </p>
          </div>
        </section>

        {/* ─── Our Story ────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-4 md:px-6 pb-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">
            Our story
          </p>
          <div className="space-y-6 text-[17px] text-ink leading-relaxed">
            <p>
              The studio began as an idea between a father and his son. Mr. Ko
              had spent four decades as a working artist in Korea, exhibiting
              widely and increasingly focused on environmental work. For the
              last 20+ years he had also been teaching — and over time he
              developed a curriculum that took students of any background and
              gave them the tools to think and make like real artists.
            </p>
            <p>
              When Geon moved to New York City to study advertising at the
              School of Visual Arts, Brooklyn became the family's second home.
              The two saw a gap in the neighborhood: a place where art
              education wasn't just craft hour or audition drilling, but a
              real studio environment with room for both rigor and imagination.
            </p>
            <p>
              In 2023, they opened ko art studio on Bergen Street, two floors
              above Cobble Hill. Three years later, the studio has placed
              students at LaGuardia, Frank Sinatra, Art &amp; Design, Murrow,
              Packer, St. Ann's, Pratt, Cornell, UAL London, Goldsmiths, and
              the Royal College of Art — and welcomes adults from across the
              borough to draw, paint, and step away from screens.
            </p>
          </div>
        </section>

        {/* ─── The founders ─────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-28">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              The founders
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display text-3xl text-ink">
              Meet Mr. Ko &amp; Geon
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Mr. Ko */}
            <article className="relative isolate overflow-hidden bg-paper-deep/40 border border-paper-edge/60 rounded-lg p-8 md:p-10 deckle">
              <PaintStroke
                variant="blob"
                seed={1}
                className="-top-20 -right-20 w-[24rem] h-[24rem] opacity-25"
              />
              <div className="relative aspect-[4/5] rounded-md overflow-hidden mb-6 bg-paper-edge/30">
                <Image
                  src="/portraits/Dugho.webp"
                  alt="Portrait of Mr. Ko"
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
                Co-founder · Master Teacher
              </p>
              <h3 className="mt-2 font-display text-4xl text-ink leading-tight">
                Mr. Ko
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Artist · Environmental activist
              </p>
              <div className="mt-5 space-y-4 text-[15px] text-ink leading-relaxed">
                <p>
                  Mr. Ko is an artist with 40+ years of practice and 20+ years
                  teaching art. He has exhibited in 25+ group shows and 15+
                  solo exhibitions, and is an award-winning artist whose work
                  centers on environmental activism.
                </p>
                <p>
                  He began his career in Korea and continues his practice in
                  Brooklyn. He believes art has the power to create positive
                  change — and that the way to give students that power is to
                  give them a real foundation. Over the past 15+ years he has
                  built a structured curriculum used by hundreds of students
                  from a wide range of backgrounds.
                </p>
              </div>
            </article>

            {/* Geon */}
            <article className="relative isolate overflow-hidden bg-paper-deep/40 border border-paper-edge/60 rounded-lg p-8 md:p-10 deckle">
              <PaintStroke
                variant="blob"
                seed={2}
                className="-top-20 -right-20 w-[24rem] h-[24rem] opacity-25"
              />
              <div className="relative aspect-[4/5] rounded-md overflow-hidden mb-6 bg-paper-edge/30">
                <Image
                  src="/portraits/Geon.webp"
                  alt="Portrait of Geon"
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
                Co-founder · Head Teacher
              </p>
              <h3 className="mt-2 font-display  text-4xl text-ink leading-tight">
                Geon
              </h3>
              <p className="mt-1 text-sm text-ink-soft ">
                Artist · Guidance counselor
              </p>
              <div className="mt-5 space-y-4 text-[15px] text-ink leading-relaxed">
                <p>
                  Geon moved to New York City from Korea to study at the
                  School of Visual Arts, where he majored in Advertising. He
                  has earned multiple awards in national art competitions, and
                  brings a strategic, forward-thinking perspective to both the
                  work students make and the studio itself.
                </p>
                <p>
                  Day-to-day, Geon leads instruction and acts as guidance
                  counselor for portfolio students. His larger ambition is to
                  make the studio feel like more than a class — a creative
                  space across generations that students of any age can call a
                  second home.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ─── Teachers ─────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-28">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Studio
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display  text-3xl text-ink">
              Our teachers
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            {teachers.map((t) => (
              <div key={t.name} className="flex gap-5">
                <div className="relative aspect-square w-28 bg-paper-edge/30 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={t.src}
                    alt={`Portrait of ${t.name}`}
                    fill
                    sizes="7rem"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                    {t.role}
                  </p>
                  <h3 className="mt-1 font-display  text-2xl text-ink leading-tight">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    Bio coming soon.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Philosophy ───────────────────────────────────── */}
        <section className="grain relative isolate overflow-hidden">
          <PaintStroke
            variant="blob"
            seed={4}
            className="-top-24 -left-36 w-[36rem] h-[36rem] opacity-30"
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-28">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Teaching philosophy
                </p>
                <h2 className="mt-4 font-display  text-4xl md:text-5xl leading-[1.05] text-ink">
                  Foundation, then voice.
                </h2>
              </div>
              <div className="space-y-6 text-lg text-ink leading-relaxed">
                <p>
                  We believe artistic growth begins with a solid foundation.
                  Without fundamental skills — proportion, observation,
                  composition, color — true progress is hard to come by.
                  That's why every program emphasizes structured learning
                  while making sure every student receives personalized
                  guidance and attention.
                </p>
                <p>
                  Art is more than a fun activity. It's a way to explore parts
                  of yourself and to develop work that's rooted in skill and
                  understanding. Strong creations come from strong foundations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Timeline ─────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-28">
          <div className="flex items-baseline gap-4 mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Timeline
            </p>
            <span className="h-px flex-1 bg-paper-edge/60" />
            <h2 className="font-display text-3xl text-ink">
              1985 → today
            </h2>
          </div>
          <ol className="max-w-3xl mx-auto">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="grid grid-cols-[7rem_1fr] gap-6 py-6 border-t border-paper-edge/40 first:border-t-0"
              >
                <span className="font-display text-3xl text-crimson leading-none pt-1">
                  {m.year}
                </span>
                <p className="text-[17px] text-ink leading-relaxed">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-32">
          <div className="relative isolate overflow-hidden py-16 text-center">
            <PaintStroke
              variant="blob"
              seed={5}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-25"
            />
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Visit the studio
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                Come see the space
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                We're at 47 Bergen St, 2nd Floor, Cobble Hill, Brooklyn. Book
                a free consultation, or stop by during open hours — Mr. Ko
                and Geon are usually around.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <SquareBookingLink service="consultation" variant="primary" size="lg">
                  Book a Free Consultation
                </SquareBookingLink>
                <Button href="/results" size="lg" variant="secondary">
                  See our results
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
