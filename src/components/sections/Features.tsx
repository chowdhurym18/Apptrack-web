import { FEATURES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackyMascot } from "@/components/ui/TrackyMascot";

const ACCENT_CLASSES: Record<string, string> = {
  leaf: "text-emerald-ink bg-emerald/10",
  focus: "text-focus bg-focus/10",
  health: "text-health bg-health/10",
  streak: "text-streak bg-streak/10",
  gold: "text-[#8a6a10] bg-gold/15",
};

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What's inside"
          title={
            <>
              Why Tracky feels{" "}
              <span className="text-gradient">different</span>
            </>
          }
          description="Each feature is simple on its own. Together, they make Tracky easier to stick with."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.06} className="h-full">
                <Card className="flex h-full flex-col">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      ACCENT_CLASSES[feature.accent]
                    }`}
                  >
                    {feature.art ? (
                      <TrackyMascot
                        art={feature.art}
                        alt=""
                        sizes="48px"
                        className="w-11"
                      />
                    ) : (
                      <Icon className="h-6 w-6" />
                    )}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-[0.95rem] leading-relaxed text-charcoal/65">
                    {feature.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}

          {/* Closing brand statement card */}
          <Reveal delay={FEATURES.length * 0.06} className="h-full">
            <div className="ceremony relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 text-white">
              <p className="relative text-lg font-medium leading-snug text-balance">
                Tracky grows with{" "}
                <span className="text-gradient">every promise you keep.</span>
              </p>
              <div className="relative mt-6 flex items-end justify-between gap-4">
                <p className="text-sm text-white/55">
                  You build the habit. Tracky keeps the record.
                </p>
                <TrackyMascot
                  art="present"
                  alt=""
                  sizes="120px"
                  className="w-[120px] shrink-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
