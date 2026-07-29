import { STEPS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackyMascot } from "@/components/ui/TrackyMascot";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-sage/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="How Tracky works"
          description="Set everything up in a couple of minutes. After that, keep the promises you make."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            // The last step is "Meet your Future You" — show the crowned Tracky.
            const isFinalStep = i === STEPS.length - 1;
            return (
              <Reveal as="li" key={step.step} delay={i * 0.08} className="h-full">
                <div className="relative flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white/70 p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald/10 text-emerald-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-3xl font-bold tracking-tight text-charcoal/10">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                    {step.description}
                  </p>
                  {isFinalStep ? (
                    <TrackyMascot
                      art="mastery"
                      alt=""
                      sizes="96px"
                      className="mt-auto w-24 self-end pt-4"
                    />
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
