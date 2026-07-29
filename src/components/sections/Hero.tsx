"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { TrackyMascot } from "@/components/ui/TrackyMascot";
import { SITE } from "@/lib/config";

const headlineWords = ["Habits", "that", "survive", "a", "bad", "week."];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="download"
      className="relative overflow-hidden scroll-mt-20"
    >
      {/* Ambient growth glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grain"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start text-left">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-ink"
          >
            Habit Tracker · {SITE.platform}
          </motion.span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
            {headlineWords.map((word, i) => {
              const isAccent = word.startsWith("survive");
              return (
                <motion.span
                  key={`${word}-${i}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : 0.15 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${isAccent ? "text-gradient" : ""}`}
                >
                  {word}
                  {i < headlineWords.length - 1 ? " " : ""}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.7 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-charcoal/65"
          >
            Tracky is a habit tracker for iPhone built around Momentum
            instead of streaks. Keep the promises you make. Miss a day without
            losing everything.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.82 }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <AppStoreButton />
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal transition-colors hover:text-emerald-ink"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.95 }}
            className="mt-6 text-xs font-medium text-charcoal/70"
          >
            Free to start · Data stays on your iPhone · No streaks to lose
          </motion.p>
        </div>

        {/* Phone + companion */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            /* Shrink-wraps the phone, so the companion is placed relative to the
               phone itself rather than the column — predictable at every width. */
            className="relative"
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>

            {/* Tracky stands in front of the phone's lower-left corner, waving. */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute -bottom-8 -left-8 z-10 w-[54%] sm:-left-16 sm:w-[62%]"
            >
              <TrackyMascot
                art="wave"
                priority
                glow
                sizes="(max-width: 640px) 162px, 186px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
