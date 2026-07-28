import { getBookingUrl } from "@/lib/square-bookings";

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-paper text-[13px] tracking-wide">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-3 text-center">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brick" aria-hidden />
        <span>
          <span className="font-display italic mr-1">Now open</span>
          Open Studio Club · adult drop-in every week
        </span>
        <a
          href={getBookingUrl("openStudio")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-brick decoration-1 hover:decoration-paper transition"
        >
          Reserve your spot →
        </a>
      </div>
    </div>
  );
}
