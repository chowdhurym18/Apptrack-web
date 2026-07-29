import { SITE } from "@/lib/config";

interface AppStoreButtonProps {
  /** "dark" = black badge (for light backgrounds); "light" = white badge (for dark). */
  variant?: "dark" | "light";
  className?: string;
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/**
 * "Download on the App Store" call-to-action. Opens the live listing from
 * `SITE.appStoreUrl`, so the whole site updates from that one constant.
 */
export function AppStoreButton({
  variant = "dark",
  className = "",
}: AppStoreButtonProps) {
  const isLight = variant === "light";

  const surface = isLight
    ? "bg-white text-charcoal hover:bg-white/90"
    : "bg-charcoal text-white hover:bg-charcoal/90";

  return (
    <a
      href={SITE.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      /* No aria-label: the visible "Download on the App Store" text is the
         accessible name, which keeps WCAG 2.5.3 (Label in Name) satisfied. */
      className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)] ${surface} ${className}`}
    >
      <AppleGlyph className="h-7 w-7 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.65rem] font-medium opacity-80">
          Download on the
        </span>
        <span className="text-lg font-semibold tracking-tight">App Store</span>
      </span>
    </a>
  );
}
