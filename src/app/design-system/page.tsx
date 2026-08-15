import { AnnouncementBar } from "@/components/AnnouncementBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { StatBadge, StatBlock } from "@/components/StatBadge";
import { PaintStroke } from "@/components/PaintStroke";

export const metadata = {
  title: "Design System",
  description: "Internal preview of Ko Art Studio design tokens and components.",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "paper",         var: "--color-paper",         hex: "#F1EBE0", note: "Base background" },
  { name: "paper-deep",    var: "--color-paper-deep",    hex: "#E7DEC9", note: "Cards, sections" },
  { name: "paper-edge",    var: "--color-paper-edge",    hex: "#D8CDB5", note: "Borders, rules" },
  { name: "ink",           var: "--color-ink",           hex: "#2C2620", note: "Body text" },
  { name: "ink-soft",      var: "--color-ink-soft",      hex: "#5A4F45", note: "Secondary text" },
  { name: "ink-faint",     var: "--color-ink-faint",     hex: "#8A7E72", note: "Captions" },
  { name: "crimson",       var: "--color-crimson",       hex: "#4C050C", note: "Deepest oxblood — primary" },
  { name: "crimson-deep",  var: "--color-crimson-deep",  hex: "#2A0506", note: "Hover / pressed only" },
  { name: "brick",         var: "--color-brick",         hex: "#9B3A2E", note: "Brick — warm secondary" },
  { name: "harbour",       var: "--color-harbour",       hex: "#5E657B", note: "Harbour blue — accent" },
  { name: "harbour-deep",  var: "--color-harbour-deep",  hex: "#404659", note: "Harbour, deeper" },
  { name: "harbour-soft",  var: "--color-harbour-soft",  hex: "#AAB1C2", note: "Harbour, faded" },
  { name: "wash",          var: "--color-wash",          hex: "#94B1C8", note: "Soft sky" },
  { name: "wash-deep",     var: "--color-wash-deep",     hex: "#6F8AA3", note: "Sky, deeper" },
  { name: "wash-soft",     var: "--color-wash-soft",     hex: "#CFDCE5", note: "Pale sky" },
];

export default function DesignSystemPage() {
  return (
    <>
  
      <NavBar />

      <main className="grain mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Header */}
        <div className="relative isolate">
          <PaintStroke
            variant="blob"
            seed={5}
            className="-top-24 -left-32 w-[34rem] h-[34rem] opacity-40"
          />
          <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
            Internal · v0.2
          </p>
          <h1 className="mt-3 font-display italic text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink relative inline-block">
            Design System
            <PaintStroke
              variant="underline"
              color="crimson"
              className="absolute -bottom-2 left-0 w-full h-3"
            />
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Foundational tokens and components for the ko art studio site. Painterly,
            warm, hand-cut; meant to feel like a printed studio brochure.
          </p>
        </div>

        {/* Palette */}
        <Section title="Palette" eyebrow="01 — Color">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {swatches.map((s) => (
              <div
                key={s.name}
                className="rounded-md overflow-hidden border border-paper-edge/60 bg-paper"
              >
                <div className="h-24 w-full" style={{ background: `var(${s.var})` }} />
                <div className="p-3">
                  <p className="font-sans text-sm text-ink">{s.name}</p>
                  <p className="font-mono text-xs text-ink-faint mt-0.5">{s.hex}</p>
                  <p className="text-xs text-ink-soft mt-1">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography" eyebrow="02 — Type">
          <div className="space-y-12">
            <TypeRow label="Display · Cormorant Garamond, light italic">
              <p className="font-display italic text-6xl md:text-7xl leading-[1.04] tracking-tight">
                Art Classes in Cobble Hill, Brooklyn.
              </p>
            </TypeRow>

            <TypeRow label="Display · Regular roman, 600">
              <p className="font-display font-semibold text-4xl md:text-5xl leading-tight text-ink">
                95% acceptance, taught by working artists.
              </p>
            </TypeRow>

            <TypeRow label="Body · Inter, 17/1.6">
              <p className="text-[17px] leading-relaxed max-w-2xl text-ink">
                koartstudio is a family-owned art education studio in Cobble Hill,
                Brooklyn. We prepare students for LaGuardia, Frank Sinatra School of
                the Arts, Pratt, Cornell, and UAL London — and welcome adults for
                drop-in sessions every week.
              </p>
            </TypeRow>

            <TypeRow label="Caption · Inter, 13/1.5, uppercase">
              <p className="text-[13px] uppercase tracking-[0.18em] text-ink-faint">
                47 Bergen St · 2nd Floor · Brooklyn, NY 11217
              </p>
            </TypeRow>

            <TypeRow label="Script accent · Pinyon Script (sparingly)">
              <p className="font-script text-5xl md:text-6xl text-crimson leading-tight">
                ko art studio
              </p>
            </TypeRow>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons" eyebrow="03 — Actions">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg">Book a Free Consultation</Button>
            <Button variant="primary" size="md">Reserve your spot</Button>
            <Button variant="primary" size="sm">Enroll</Button>
            <Button variant="secondary" size="md">View Schedule</Button>
            <Button variant="ghost" size="md">Learn more →</Button>
          </div>
        </Section>

        {/* Stats */}
        <Section title="Stats Block" eyebrow="04 — Proof">
          <div className="bg-paper-deep/60 rounded-lg p-8 md:p-10 border border-paper-edge/60 deckle">
            <StatBlock />
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatBadge value="100/100" label="LaGuardia Score" accent="crimson" />
            <StatBadge value="$550" label="HS Prep / week" accent="ink" />
            <StatBadge value="$3,200" label="College Portfolio" accent="ink" />
            <StatBadge value="$32" label="Open Studio Drop-in" accent="harbour" />
          </div>
        </Section>

        {/* Painterly elements */}
        <Section title="Painterly Marks" eyebrow="05 — Texture">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Underline">
              <div className="relative inline-block">
                <span className="font-display italic text-4xl">LaGuardia</span>
                <PaintStroke
                  variant="underline"
                  color="crimson"
                  className="absolute -bottom-2 left-0 w-full h-3"
                />
              </div>
            </Card>
            <Card title="Swoosh">
              <PaintStroke variant="swoosh" color="harbour" className="w-full h-12" />
            </Card>
            <Card title="Brush · 1">
              <div className="relative h-40">
                <PaintStroke variant="blob" seed={1} className="inset-0 w-full h-full" />
              </div>
            </Card>
            <Card title="Brush · 2">
              <div className="relative h-40">
                <PaintStroke variant="blob" seed={2} className="inset-0 w-full h-full" />
              </div>
            </Card>
            <Card title="Brush · 3">
              <div className="relative h-40">
                <PaintStroke variant="blob" seed={3} className="inset-0 w-full h-full" />
              </div>
            </Card>
            <Card title="Brush · 4">
              <div className="relative h-40">
                <PaintStroke variant="blob" seed={4} className="inset-0 w-full h-full" />
              </div>
            </Card>
            <Card title="Brush · 5">
              <div className="relative h-40">
                <PaintStroke variant="blob" seed={5} className="inset-0 w-full h-full" />
              </div>
            </Card>
            <Card title="Streak">
              <PaintStroke variant="streak" color="crimson" className="w-full h-8" />
            </Card>
            <Card title="Scribble">
              <PaintStroke variant="scribble" color="ink" className="w-32 h-32" />
            </Card>
            <Card title="Deckle edge (this card)">
              <p className="text-sm text-ink-soft">
                Paper-cut border using <code className="font-mono text-xs">.deckle</code>{" "}
                with an SVG displacement filter.
              </p>
            </Card>
          </div>
        </Section>

        {/* Sample composition */}
        <Section title="Sample Composition" eyebrow="06 — Hero in context">
          <div className="relative isolate overflow-hidden rounded-lg bg-paper-deep/40 border border-paper-edge/60 p-8 md:p-14 deckle">
            <PaintStroke
              variant="blob"
              seed={3}
              className="-top-28 -right-28 w-[38rem] h-[38rem] opacity-45"
            />
            <PaintStroke
              variant="blob"
              seed={4}
              className="-bottom-32 -left-24 w-[32rem] h-[32rem] opacity-30"
            />
            <div className="relative max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-ink-faint">
                Cobble Hill, Brooklyn · since 2023
              </p>
              <h2 className="mt-4 font-display font-semibold italic text-5xl md:text-7xl leading-[1.04] tracking-tight">
                Art classes for kids, teens,{" "}
                <span className="text-crimson not-italic font-semibold">and the rest of us.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
                Portfolio prep with a 95% acceptance rate. Summer studios for kids.
                A weekly drop-in club for adults.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" size="lg">Book a Free Consultation</Button>
                <Button variant="secondary" size="lg">See our 2026 results</Button>
              </div>
              <p className="mt-10 font-script text-3xl text-crimson">
                — mr. ko & mr. geon
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-paper-edge/60" />
        <h2 className="font-display italic text-3xl text-ink">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function TypeRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-8 items-start">
      <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint pt-2">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative isolate rounded-md border border-paper-edge/60 bg-paper p-6 deckle">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint mb-4">
        {title}
      </p>
      {children}
    </div>
  );
}
