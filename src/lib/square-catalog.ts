/**
 * Central config for class *enrollment* links — Square **Checkout Links**
 * (square.link/…). These open Square's minimal hosted checkout for a class
 * item, where the buyer picks the payment variation (Full Payment / monthly
 * split / etc.). This is separate from lib/square-bookings.ts, which handles
 * Square *Appointments* (consultation, trials) — those stay time-slot bookings.
 *
 * To update a link: Square Dashboard → Payments → Links → open the class →
 * copy its square.link URL here. Every "Enroll" CTA reads from this file via
 * <EnrollButtons />.
 */

export type ClassSlug =
  | "2d-animation"
  | "intro-drawing-painting"
  | "cartooning-illustration"
  | "hs-prep"
  | "college"
  | "adult-beginner"
  | "adult-intermediate-advanced"
  | "acrylic-portrait"
  | "high-school-art-class";

export type EnrollOption = {
  /** Button label. */
  label: string;
  /** Square checkout link. */
  url: string;
};

/** One or more purchase options per class. Classes with separate monthly and
 *  semester items get two options → two buttons; the rest get one. */
export const CLASS_ENROLL: Record<ClassSlug, EnrollOption[]> = {
  "2d-animation": [
    { label: "Enroll in 2D Animation", url: "https://square.link/u/DJHp6ILa" },
  ],
  "intro-drawing-painting": [
    { label: "Enroll in Intro to Drawing & Painting", url: "https://square.link/u/xef7r9Qm" },
  ],
  "cartooning-illustration": [
    { label: "Enroll in Cartooning & Illustration", url: "https://square.link/u/ieUSYoto" },
  ],
  "hs-prep": [
    { label: "Enroll in HS Portfolio Prep", url: "https://square.link/u/DDSYe8xK" },
  ],
  "college": [
    { label: "Enroll in College Portfolio Prep", url: "https://square.link/u/Mn3Yrf64" },
  ],
  "adult-beginner": [
    { label: "Enroll in semester", url: "https://square.link/u/BXag3Z6O" },
    { label: "Enroll monthly", url: "https://square.link/u/axa0HAwO" },
  ],
  "adult-intermediate-advanced": [
    { label: "Enroll in semester", url: "https://square.link/u/18fXiBbc" },
    { label: "Enroll monthly", url: "https://square.link/u/8nhlRscs" },
  ],
  "acrylic-portrait": [
    { label: "Enroll in Acrylic & Portrait", url: "https://square.link/u/9UsDGrpZ" },
  ],
  "high-school-art-class": [
    { label: "Enroll in the High School Art Class", url: "https://square.link/u/SOTzWagE" },
  ],
};

export function getEnrollOptions(slug: ClassSlug): EnrollOption[] {
  return CLASS_ENROLL[slug];
}
