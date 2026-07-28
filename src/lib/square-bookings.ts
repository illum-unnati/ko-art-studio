/**
 * Central config for all Square Appointments booking links.
 *
 * When a service changes in Square (new service ID, new location, etc.),
 * update it here — every booking CTA across the site reads from this file
 * via the <SquareBookingLink /> component.
 *
 * Services live in the studio's Square Appointments dashboard:
 *   Appointments → Services → click into service → URL bar.
 */

export type BookingService =
  | "consultation"
  | "trial"
  | "openStudio"
  | "mentorshipTrial"
  | "cartooningIllustration";

const SQUARE_BOOKING_BASE =
  "https://book.squareup.com/appointments/30006o467gylfl/location/LE4P2S8F8QZDF";

/** Direct booking URLs per service. Each opens the Square hosted flow. */
export const SQUARE_BOOKING_URLS: Record<BookingService, string> = {
  consultation: `${SQUARE_BOOKING_BASE}/services/UA3QXVY74VBYTZRFBV6OAWTN`,
  trial: `${SQUARE_BOOKING_BASE}/services/TWNNUJ37H3NXNBATHI6KQNWS`,
  openStudio: `${SQUARE_BOOKING_BASE}/services/MQMYOIO7W7ZYHNNEON3PACHV`,
  mentorshipTrial: `${SQUARE_BOOKING_BASE}/services/UQAA2CJTOSUCU55CBOKOU54H`,
  cartooningIllustration: `${SQUARE_BOOKING_BASE}/services/EX3M5FBDNNZW7JHCYMME2VVG`,
};

/** Index page across all bookable services (fallback / "see all" link). */
export const SQUARE_BOOKING_HOME = `${SQUARE_BOOKING_BASE}/services`;

export function getBookingUrl(service: BookingService): string {
  return SQUARE_BOOKING_URLS[service];
}
