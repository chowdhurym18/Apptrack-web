"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Travel distance in px before settling. */
  y?: number;
  /** HTML element to render. */
  as?: "div" | "section" | "li" | "article";
}

/**
 * Scroll-reveal wrapper. Fades and lifts its children into view once, and fully
 * respects `prefers-reduced-motion` (content renders immediately, no transform).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const motionTags = {
    div: motion.div,
    section: motion.section,
    li: motion.li,
    article: motion.article,
  };
  // Cast to ElementType so the polymorphic tag is a single, JSX-friendly type.
  const MotionTag = motionTags[as] as ElementType;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
