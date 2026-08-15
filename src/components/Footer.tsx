import Link from "next/link";
import { getBookingUrl } from "@/lib/square-bookings";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-paper-edge/60 bg-paper-deep/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-3">
            <span className="font-script text-5xl text-ink leading-none">
              ko art studio
            </span>
          </div>
          <p className="mt-4 max-w-md text-ink-soft text-sm leading-relaxed">
            A family-owned art studio in Cobble Hill, Brooklyn. Portfolio prep,
            kids classes, and an adult drop-in club — taught by working artists.
          </p>
          <p className="mt-6 text-sm text-ink-soft">
            47 Bergen St, 2nd Floor
            <br />
            Cobble Hill, Brooklyn, NY 11201
          </p>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Programs
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/classes/kids" className="hover:text-crimson">Cartooning & Illustration</Link></li>
            <li><Link href="/classes/teen" className="hover:text-crimson">Intro to Drawing & Painting</Link></li>
            <li><Link href="/classes/hs-prep" className="hover:text-crimson">HS Portfolio Prep</Link></li>
            <li><Link href="/classes/college" className="hover:text-crimson">College Portfolio</Link></li>
            <li><Link href="/classes/adult" className="hover:text-crimson">Adult Classes</Link></li>
            <li><Link href="/classes/mentorship" className="hover:text-crimson">Mentorship</Link></li>
            <li><Link href="/open-studio" className="hover:text-crimson">Open Studio Club</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Studio
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-crimson">About</Link></li>
            <li><Link href="/results" className="hover:text-crimson">Results</Link></li>
            <li><Link href="/faq" className="hover:text-crimson">FAQ</Link></li>
            <li>
              <a
                href={getBookingUrl("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-crimson"
              >
                Book a Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper-edge/40 py-5">
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} ko Art Studio. All work shown © respective students.</p>
          <p>Cobble Hill, Brooklyn · koartstudionyc.com</p>
        </div>
      </div>
    </footer>
  );
}
