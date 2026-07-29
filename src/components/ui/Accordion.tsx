"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { FAQItem } from "@/lib/content";

interface AccordionProps {
  items: FAQItem[];
  /** Render light text/borders for dark backgrounds. */
  dark?: boolean;
}

/** Accessible, animated FAQ accordion. One panel open at a time. */
export function Accordion({ items, dark = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  const border = dark ? "border-white/10" : "border-charcoal/10";
  const text = dark ? "text-white" : "text-charcoal";
  const subText = dark ? "text-white/65" : "text-charcoal/65";

  return (
    <div className={`divide-y rounded-3xl border ${border} ${dark ? "divide-white/10" : "divide-charcoal/10"} ${dark ? "bg-white/[0.03]" : "bg-white/60"}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left ${text}`}
              >
                <span className="text-base font-semibold tracking-tight sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    dark ? "text-mint" : "text-emerald-ink"
                  } ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`px-6 pb-5 text-[0.95rem] leading-relaxed ${subText}`}>
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
