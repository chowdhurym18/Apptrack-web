import { Flame, Leaf } from "lucide-react";

const RING_RADIUS = 30;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const MOMENTUM = 78; // 0–100

const PROMISES: { label: string; meta: string; done: boolean }[] = [
  { label: "Move for 20 minutes", meta: "Athlete", done: true },
  { label: "Read 10 pages", meta: "Learner", done: true },
  { label: "Evening wind-down", meta: "Mindful", done: false },
];

/**
 * A code-rendered iPhone showing a Tracky home screen — momentum ring, today's
 * promises, and the companion's observation. No image assets; everything is SVG
 * and styled markup so it stays crisp at any size.
 */
export function PhoneMockup({ className = "" }: { className?: string }) {
  const dash = (MOMENTUM / 100) * RING_CIRCUMFERENCE;

  return (
    <div
      className={`relative w-[280px] shrink-0 rounded-[3rem] border-[10px] border-[#0c0c0e] bg-[#0c0c0e] shadow-[0_50px_90px_-40px_rgba(15,23,42,0.6)] ${className}`}
      aria-hidden="true"
    >
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

      {/* Screen */}
      <div className="ceremony relative overflow-hidden rounded-[2.3rem]">
        <div className="flex flex-col gap-5 px-5 pb-7 pt-12">
          {/* Status / greeting */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.7rem] font-medium text-white/45">
                Tuesday · Good morning
              </p>
              <p className="text-base font-semibold text-white">Your Journey</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-[0.65rem] font-semibold text-mint">
              <Leaf className="h-3 w-3" /> Bloom
            </span>
          </div>

          {/* Momentum hero */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-4">
              <div className="relative grid h-[78px] w-[78px] place-items-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="7"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="url(#momentum)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={`${dash} ${RING_CIRCUMFERENCE}`}
                  />
                  <defs>
                    <linearGradient id="momentum" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#7CFF5E" />
                      <stop offset="1" stopColor="#22C55E" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <span className="block text-xl font-bold text-white">
                    {MOMENTUM}
                  </span>
                  <span className="block text-[0.55rem] font-medium uppercase tracking-wide text-white/45">
                    Momentum
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Building</p>
                <p className="mt-1 text-[0.72rem] leading-snug text-white/55">
                  Five steady days. Even Tuesday didn't stop you.
                </p>
              </div>
            </div>
          </div>

          {/* Today's promises */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[0.72rem] font-semibold uppercase tracking-wider text-white/45">
                Today&apos;s promises
              </p>
              <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-gold">
                <Flame className="h-3 w-3" /> +12 votes
              </span>
            </div>
            {PROMISES.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
              >
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full border ${
                    p.done
                      ? "border-emerald bg-emerald text-greenblack"
                      : "border-white/30"
                  }`}
                >
                  {p.done ? (
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </span>
                <span className="flex-1">
                  <span
                    className={`block text-[0.8rem] font-medium ${
                      p.done ? "text-white/55 line-through" : "text-white"
                    }`}
                  >
                    {p.label}
                  </span>
                  <span className="block text-[0.62rem] text-emerald/80">
                    {p.meta}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
