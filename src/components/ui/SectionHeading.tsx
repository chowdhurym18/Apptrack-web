import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Center the heading block. Defaults to true. */
  centered?: boolean;
  /** Use light ink for placement on dark "ceremony" sections. */
  dark?: boolean;
}

/** Consistent section header: eyebrow label, title, and optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${
        centered ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? (
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark
              ? "border-emerald/30 bg-emerald/10 text-mint"
              : "border-emerald/25 bg-emerald/5 text-emerald-ink"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1] ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-pretty text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/65" : "text-charcoal/65"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
