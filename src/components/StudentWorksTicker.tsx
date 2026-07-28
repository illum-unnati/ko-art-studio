import Image from "next/image";

/**
 * Auto-looping ticker showing recent student work. Pure-CSS animation —
 * no client JS. The list is rendered twice; the track translates from
 * `0` to `-50%` of its total width, which puts us at the start of the
 * duplicated set (visually identical to where we began) so the loop is
 * seamless. The duplicate items get `aria-hidden` so screen readers
 * don't announce them twice.
 *
 * Behaviour:
 * - Continuous right-to-left scroll, ~60s per full loop
 * - Pauses on hover (desktop)
 * - `prefers-reduced-motion: reduce` swaps the animation for a static
 *   wrapping grid (see globals.css)
 * - Edge mask fades cards in and out at the viewport edges
 *
 * To add images: drop them in `public/student-works/` and append to
 * the `works` array below.
 */

type Work = { src: string; alt: string };

const works: Work[] = [
  { src: "/student-works/work-1.webp", alt: "Student artwork — graphite still life" },
  { src: "/student-works/work-2.webp", alt: "Student artwork — graphite octopus composition" },
  { src: "/student-works/work-3.webp", alt: "Student artwork — graphite portrait" },
  { src: "/student-works/work-4.webp", alt: "Student artwork — graphite surrealist study" },
  { src: "/student-works/work-5.webp", alt: "Student in the studio with finished painting" },
  { src: "/student-works/work-6.webp", alt: "Student artwork from ko art studio" },
  { src: "/student-works/work-7.webp", alt: "Student artwork from ko art studio" },
  { src: "/student-works/work-8.webp", alt: "Student artwork from ko art studio" },
  { src: "/student-works/work-9.webp", alt: "Student artwork from ko art studio" },
];

export function StudentWorksTicker() {
  // Duplicate so the loop is seamless when the track hits -50%
  const loop = [...works, ...works];

  return (
    <div className="student-ticker">
      <ul className="student-ticker__track" role="list">
        {loop.map((w, i) => {
          const isClone = i >= works.length;
          return (
            <li
              key={i}
              className="student-ticker__item"
              aria-hidden={isClone || undefined}
            >
              <div className="relative aspect-square overflow-hidden rounded-md deckle bg-paper-deep/40">
                <Image
                  src={w.src}
                  alt={isClone ? "" : w.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 11rem"
                  className="object-cover"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
