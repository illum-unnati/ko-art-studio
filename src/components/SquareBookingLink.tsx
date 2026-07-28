import { Button } from "./Button";
import { getBookingUrl, type BookingService } from "@/lib/square-bookings";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = {
  /** Which Square Appointments service to link to. */
  service: BookingService;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

/**
 * Renders a styled button that opens the Square Appointments booking flow
 * for the given service in a new tab.
 *
 * Use this anywhere we have a "Book a Consultation" / "Book a Trial" /
 * "Reserve Your Spot" CTA — it keeps every booking link pointed at the
 * config in lib/square-bookings.ts.
 */
export function SquareBookingLink({
  service,
  children,
  variant = "primary",
  size = "lg",
  className,
}: Props) {
  return (
    <Button
      href={getBookingUrl(service)}
      external
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
}
