import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { Reveal } from "@/components/ui/Reveal";
import { TrackyMascot } from "@/components/ui/TrackyMascot";

export function FinalCTA() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="ceremony relative overflow-hidden rounded-[2.5rem] border border-emerald/20 px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-emerald/20 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative">
            <TrackyMascot
              art="celebrate"
              glow
              sizes="(max-width: 640px) 40vw, 180px"
              className="mx-auto w-[150px] sm:w-[180px]"
            />
            <h2 className="mx-auto mt-7 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
              Start with <span className="text-gradient">one promise.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Pick one promise. Keep it tomorrow. Tracky will keep track from there.
            </p>
            <div className="mt-9 flex justify-center">
              <AppStoreButton variant="light" />
            </div>
            <p className="mt-5 text-xs font-medium text-white/45">
              Free to start · {`iPhone · iOS 18+`}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
