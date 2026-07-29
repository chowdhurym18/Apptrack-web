import { Check, X } from "lucide-react";
import { COMPARISONS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyTracky() {
  return (
    <section id="why" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Tracky"
          title={
            <>
              Momentum, not{" "}
              <span className="text-charcoal/35 line-through decoration-streak/60">
                streaks
              </span>
            </>
          }
          description="Most habit apps are built around an unbroken chain, which makes one bad day expensive. Tracky isn't. Here's what changes."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Streak apps */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-sage/40 p-7">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-streak/10 text-streak">
                  <X className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-charcoal/80">
                  Streak apps
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {COMPARISONS.map((row) => (
                  <li key={row.aspect} className="flex gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-streak/70" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                        {row.aspect}
                      </p>
                      <p className="text-[0.95rem] leading-relaxed text-charcoal/65">
                        {row.streak}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Tracky */}
          <Reveal delay={0.08}>
            <div className="ceremony relative flex h-full flex-col overflow-hidden rounded-3xl border border-emerald/20 p-7">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald/15 text-mint">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">Tracky</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {COMPARISONS.map((row) => (
                  <li key={row.aspect} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-mint/60">
                        {row.aspect}
                      </p>
                      <p className="text-[0.95rem] leading-relaxed text-white/80">
                        {row.tracky}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
