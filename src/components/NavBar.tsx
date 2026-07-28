import Link from "next/link";
import { Button } from "./Button";

const links = [
  { href: "/classes", label: "Classes" },
  { href: "/open-studio", label: "Open Studio" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-paper-edge/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-script text-3xl leading-none tracking-tight text-ink">
            ko
          </span>
          {/* <span className="font-display text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            Art Studio
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink hover:text-crimson transition relative"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <Button href="/consultation" size="sm" variant="primary">
            Book a Free Consultation
          </Button> */}
        </div>
      </div>
    </header>
  );
}
