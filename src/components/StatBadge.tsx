import { cn } from "@/lib/cn";

type Props = {
  value: string;
  label: string;
  accent?: "crimson" | "wash" | "harbour" | "ink";
  className?: string;
};

const accentMap = {
  crimson: "text-crimson",
  wash: "text-wash-deep",
  harbour: "text-harbour",
  ink: "text-ink",
} as const;

export function StatBadge({ value, label, accent = "crimson", className }: Props) {
  return (
    <div className={cn("flex flex-col items-start gap-1", className)}>
      <span
        className={cn(
          "font-script text-5xl md:text-8xl leading-none tracking-tight font-light",
          accentMap[accent]
        )}
      >
        {value}
      </span>
      <span className="font-sans text-sm text-ink-soft  tracking-[0.14em]">
        {label}
      </span>
    </div>
  );
}

export function StatBlock() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 items-end">
      <StatBadge value="97%" label="HS Acceptance" accent="crimson" />
      <StatBadge value="95%" label="College Placement" accent="ink" />
      <StatBadge value="14/16" label="LaGuardia · 2025" accent="harbour" />
    </div>
  );
}
