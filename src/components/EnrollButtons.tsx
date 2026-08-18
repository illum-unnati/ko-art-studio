import { Button } from "./Button";
import { getEnrollOptions, type ClassSlug } from "@/lib/square-catalog";

type Size = "sm" | "md" | "lg";

type Props = {
  /** Which class's checkout link(s) to render. */
  slug: ClassSlug;
  size?: Size;
  className?: string;
};

/**
 * Renders the "Enroll" button(s) for a class, each opening its Square
 * Checkout Link in a new tab. Classes with one purchase option render a
 * single primary button; classes with separate monthly/semester items
 * render two (first primary, rest secondary). Links come from
 * lib/square-catalog.ts.
 */
export function EnrollButtons({ slug, size = "lg", className }: Props) {
  const options = getEnrollOptions(slug);
  return (
    <>
      {options.map((opt, i) => (
        <Button
          key={opt.url}
          href={opt.url}
          external
          variant={i === 0 ? "primary" : "secondary"}
          size={size}
          className={className}
        >
          {opt.label}
        </Button>
      ))}
    </>
  );
}
