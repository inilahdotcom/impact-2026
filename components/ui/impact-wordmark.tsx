import { cn } from "@/lib/utils";

interface ImpactWordmarkProps {
  className?: string;
  /** "light" renders the halftone dot with white sub-dots (use on dark bg). "red" uses red sub-dots (use on light bg). */
  variant?: "light" | "red";
  as?: "span" | "div";
}

/**
 * Renders the IMPA●CT signature wordmark where the "C" is replaced by a
 * circular halftone dot. The component is purely typographic: it sizes off
 * the current `font-size`, so set the size via Tailwind text-* utilities
 * (e.g. `text-2xl`, `text-[26px]`).
 */
export function ImpactWordmark({
  className,
  variant = "light",
  as: Tag = "span",
}: ImpactWordmarkProps) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center font-black uppercase leading-none tracking-[-0.02em]",
        className
      )}
      aria-label="IMPACT"
    >
      <span aria-hidden="true">IMPA</span>
      <span
        aria-hidden="true"
        className={cn(
          "impact-cdot",
          variant === "red" && "impact-cdot--red"
        )}
      />
      <span aria-hidden="true">CT</span>
    </Tag>
  );
}
