/** Single source of truth for site-wide constants. */
export const SITE = {
  name: "Tracky",
  /** App Store descriptor / positioning line (CLAUDE.md V41). */
  tagline: "Identity Growth",
  /** Home page meta description. */
  description:
    "Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency, recover from missed days, and keep moving forward.",
  /** Shorter variant used for Open Graph and Twitter cards. */
  ogDescription:
    "Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency without starting over.",
  /** One-line variant used in JSON-LD structured data. */
  schemaDescription:
    "Tracky is a habit tracker for iPhone that helps you build consistency with Momentum instead of streaks.",
  /** Canonical site URL. Update when the production domain is final. */
  url: "https://tracky.app",
  supportEmail: "trackysupport@gmail.com",

  /** Live App Store listing. */
  appStoreUrl:
    "https://apps.apple.com/us/app/tracky-identity-growth/id6782687276",
  /** Numeric App Store ID, used for the iOS Smart App Banner. */
  appStoreId: "6782687276",

  /** Minimum supported platform, surfaced in copy. */
  platform: "iPhone · iOS 18+",
} as const;

/** Primary navigation links used by the Navbar and Footer. */
export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Growth", href: "/#growth" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
] as const;
