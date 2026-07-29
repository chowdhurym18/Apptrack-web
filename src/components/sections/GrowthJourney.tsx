"use client";

import { motion, useReducedMotion } from "framer-motion";
import { STAGES } from "@/lib/content";
import { GROWTH_STAGE_ART } from "@/lib/tracky-assets";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackyMascot } from "@/components/ui/TrackyMascot";

export function GrowthJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="growth" className="ceremony scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="The Growth Journey"
          title={
            <>
              Six stages, Seed to <span className="text-gradient">Mastery</span>
            </>
          }
          description="Your companion grows with your consistency. Every stage is earned, and your progress is never taken away."
        />

        {/* Horizontal, swipeable timeline */}
        <div className="relative mt-16">
          {/* the vine */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] h-[3px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full origin-left rounded-full"
              style={{ backgroundImage: "linear-gradient(to right, #7CFF5E, #22C55E)" }}
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <ol className="grid grid-flow-col auto-cols-[minmax(190px,1fr)] gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-fr">
            {STAGES.map((stage, i) => (
              <motion.li
                key={stage.name}
                className="snap-start"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* node */}
                <div className="relative mx-auto grid h-[104px] w-[104px] place-items-center rounded-full border border-emerald/30 bg-white/[0.04] p-1.5 shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)]">
                  {/* The stage name is announced by the heading below, so the
                      art itself is decorative here. */}
                  <TrackyMascot art={GROWTH_STAGE_ART[i]} alt="" sizes="104px" />
                </div>

                <div className="mt-5 text-center">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-mint/70">
                    Stage {i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {stage.name}
                  </h3>
                  <p className="text-xs font-medium text-emerald">{stage.caption}</p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-white/55">
                    {stage.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
