/**
 * The official Tracky artwork library — the single source of truth for mascot
 * images on the website.
 *
 * Mirrors the iOS app's `Tracky/TrackyArt.swift`, which resolves the same
 * renders from the asset catalog. Both platforms draw on one library, so a
 * pose means the same thing in the app and on the web.
 *
 * To add new artwork: drop the file into `public/images/tracky/` and add one
 * entry below. Nothing else in the codebase references an image path.
 */

export interface TrackyArt {
  /** Filename inside `public/images/tracky/`. */
  file: string;
  /** Intrinsic pixel width of the source render. */
  width: number;
  /** Intrinsic pixel height of the source render. */
  height: number;
  /** Descriptive alt text, used whenever the art carries meaning. */
  alt: string;
}

export const TRACKY_ART = {
  // ── Evolution stages (Seed → Mastery) ────────────────────────────────────
  seed: {
    file: "tracky-seed.png",
    width: 990,
    height: 990,
    alt: "Tracky as a seed — a smiling dark sphere with a single glowing leaf, breaking out of a cracked stone shell",
  },
  sprout: {
    file: "tracky-sprout.png",
    width: 871,
    height: 871,
    alt: "Tracky as a sprout — a small hooded companion with one leaf and a short green cape",
  },
  bud: {
    file: "tracky-bud.png",
    width: 941,
    height: 941,
    alt: "Tracky as a bud — a hooded companion with a pair of leaves, reaching out an open hand",
  },
  bloom: {
    file: "tracky-bloom.png",
    width: 1033,
    height: 1033,
    alt: "Tracky in bloom — wearing a small gold crown beneath two full leaves, with a flowing green cape",
  },
  ascend: {
    file: "tracky-ascend.png",
    width: 1008,
    height: 1008,
    alt: "Tracky ascending — a headbanded companion lifting a kettlebell with a determined glowing gaze",
  },
  mastery: {
    file: "tracky-mastery.png",
    width: 1037,
    height: 1037,
    alt: "Tracky at mastery — crowned with a gemmed circlet of leaves, raising a calm hand in greeting",
  },

  // ── Poses ────────────────────────────────────────────────────────────────
  wave: {
    file: "tracky-wave.png",
    width: 1004,
    height: 1004,
    alt: "Tracky waving hello with a raised hand and a wide smile",
  },
  present: {
    file: "tracky-present.png",
    width: 961,
    height: 961,
    alt: "Tracky holding out an open palm, calmly presenting something",
  },
  celebrate: {
    file: "tracky-celebrate.png",
    width: 1036,
    height: 1036,
    alt: "Tracky celebrating — crowned and grinning with both fists raised amid drifting sparks",
  },
  cheer: {
    file: "tracky-cheer.png",
    width: 951,
    height: 951,
    alt: "Tracky cheering with a raised fist",
  },
  thumbsup: {
    file: "tracky-thumbsup.png",
    width: 973,
    height: 973,
    alt: "Tracky giving a thumbs up",
  },
  calm: {
    file: "tracky-calm.png",
    width: 1011,
    height: 1011,
    alt: "Tracky standing calmly with a gentle smile",
  },
  focused: {
    file: "tracky-focused.png",
    width: 1013,
    height: 1013,
    alt: "Tracky focused — arms folded with a steady, narrowed gaze",
  },
  concerned: {
    file: "tracky-concerned.png",
    width: 1005,
    height: 1005,
    alt: "Tracky looking thoughtful, a hand raised to its chin beside a question mark",
  },
  masteryWave: {
    file: "tracky-mastery-wave.png",
    width: 1022,
    height: 1022,
    alt: "Tracky at mastery, crowned with leaves and waving",
  },
  masteryCheer: {
    file: "tracky-mastery-cheer.png",
    width: 1044,
    height: 1044,
    alt: "Tracky at mastery, crowned with leaves and cheering with a raised fist",
  },
  default: {
    file: "tracky-default.png",
    width: 884,
    height: 884,
    alt: "Tracky, a calm hooded companion with a glowing leaf sprout and a green cape",
  },

  // ── Brand mark ───────────────────────────────────────────────────────────
  /** The official App Store icon. Used for the logomark, favicon, and OG card. */
  appIcon: {
    file: "tracky-app-icon.png",
    // Downscaled from the 1254px master: the mark only ever renders at 30–32px,
    // so 256px covers 3x displays without shipping a megabyte.
    width: 256,
    height: 256,
    alt: "The Tracky app icon — the hooded companion with a glowing leaf",
  },
} satisfies Record<string, TrackyArt>;

export type TrackyArtKey = keyof typeof TRACKY_ART;

/**
 * The six growth stages in order, index-aligned with `STAGES` in `@/lib/content`
 * and with `TrackyStage` in the iOS app.
 */
export const GROWTH_STAGE_ART = [
  "seed",
  "sprout",
  "bud",
  "bloom",
  "ascend",
  "mastery",
] as const satisfies readonly TrackyArtKey[];
