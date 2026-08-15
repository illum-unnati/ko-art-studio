import Link from "next/link";
import { Button } from "./Button";

const links = [
  { href: "/classes", label: "Classes" },
  { href: "/workshops", label: "Workshops" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-paper-edge/60">
      <div className=" mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline group ">
          <span className="font-script text-3xl leading-none tracking-tight text-ink">
            ko art studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 ">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink hover:text-crimson hover:underline underline-offset-4 decoration-wash transition ease-in-out duration-1000 relative"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        
      </div>
    </header>
  );
}
