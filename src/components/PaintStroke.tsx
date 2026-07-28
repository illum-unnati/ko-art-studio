import { cn } from "@/lib/cn";

type Color = "crimson" | "brick" | "wash" | "harbour" | "ink";
type Variant = "underline" | "swoosh" | "blob" | "scribble" | "streak";
type BrushSeed = 1 | 2 | 3 | 4 | 5;

type Props = {
  color?: Color;
  className?: string;
  variant?: Variant;
  /** Which brush image to use for the blob variant (1–5). Stable across SSR. */
  seed?: BrushSeed;
};

const colorMap: Record<Color, string> = {
  crimson: "var(--color-crimson)",
  brick: "var(--color-brick)",
  wash: "var(--color-wash)",
  harbour: "var(--color-harbour)",
  ink: "var(--color-ink)",
};

export function PaintStroke({
  color = "crimson",
  className,
  variant = "underline",
  seed = 1,
}: Props) {
  const stroke = colorMap[color];

  /* ─────────────────────────  BLOB  ─────────────────────────
     Blobs were the painterly brush-scan backgrounds. Retired in the
     white/grid redesign — the variant now renders nothing so every
     existing <PaintStroke variant="blob" /> across the site is a no-op.
     The `seed` prop is only meaningful for this (now inert) variant. */
  if (variant === "blob") {
    void seed;
    return null;
  }

  /* ─────────────────────────  STREAK (brushy)  ───────────────────── */
  if (variant === "streak") {
    const hairs = 11;
    const paths = Array.from({ length: hairs }, (_, i) => {
      const t = i - (hairs - 1) / 2;
      const yBase = 14 + t * 1.6;
      const wobble = (i % 3) - 1;
      return {
        d: `M2 ${yBase + wobble * 0.6} Q 50 ${yBase - 2 - wobble}, 100 ${yBase + 2 + wobble}, 150 ${yBase - 1}, 198 ${yBase + wobble}`,
        opacity: 0.30 + ((i * 13) % 7) * 0.07,
      };
    });

    return (
      <svg
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
        className={cn("pointer-events-none", className)}
        aria-hidden
      >
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke={stroke}
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
            opacity={p.opacity}
            filter="url(#kasr-rough)"
          />
        ))}
      </svg>
    );
  }

  /* ─────────────────────────  SWOOSH  ───────────────────── */
  if (variant === "swoosh") {
    const hairs = 8;
    const paths = Array.from({ length: hairs }, (_, i) => {
      const t = i - (hairs - 1) / 2;
      const off = t * 1.4;
      return {
        d: `M4 ${28 + off} C 50 ${6 + off}, 110 ${36 + off}, 160 ${14 + off} S 210 ${24 + off}, 218 ${10 + off}`,
        opacity: 0.30 + ((i * 11) % 6) * 0.07,
      };
    });

    return (
      <svg
        viewBox="0 0 220 40"
        className={cn("pointer-events-none", className)}
        aria-hidden
      >
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity={p.opacity}
            filter="url(#kasr-rough)"
          />
        ))}
      </svg>
    );
  }

  /* ─────────────────────────  SCRIBBLE  ───────────────────── */
  if (variant === "scribble") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={cn("pointer-events-none", className)}
        aria-hidden
      >
        <path
          d="M10 50 C 20 30, 40 70, 55 45 S 80 55, 90 35 M15 65 C 35 55, 55 75, 80 60"
          stroke={stroke}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
          filter="url(#kasr-rough)"
        />
      </svg>
    );
  }

  /* ─────────────────────────  UNDERLINE  ───────────────────── */
  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <path
        d="M2 8 C 30 2, 60 11, 100 6 S 170 10, 198 4"
        stroke={stroke}
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.92"
        filter="url(#kasr-rough)"
      />
    </svg>
  );
}
