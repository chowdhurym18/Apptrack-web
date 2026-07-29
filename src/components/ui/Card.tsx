import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** A premium surface card with a soft border, subtle elevation, and rounded feel. */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-charcoal/10 bg-white/70 p-7 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_18px_40px_-24px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-[0_24px_50px_-24px_rgba(34,197,94,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}
