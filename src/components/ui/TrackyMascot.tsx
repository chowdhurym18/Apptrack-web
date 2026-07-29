import Image from "next/image";
import { TRACKY_ART, type TrackyArtKey } from "@/lib/tracky-assets";

interface TrackyMascotProps {
  /** Which official render to show — see TRACKY_ART in @/lib/tracky-assets. */
  art: TrackyArtKey;
  className?: string;
  /** Only for above-the-fold art. Everything else stays lazy-loaded. */
  priority?: boolean;
  /** Responsive width hint so the browser picks the right srcset candidate. */
  sizes?: string;
  /** Override the alt text. Pass "" when nearby copy already names the art. */
  alt?: string;
  /** Soft emerald halo behind the art, matching the app's ambient treatment. */
  glow?: boolean;
}

/**
 * Renders the official Tracky artwork. The intrinsic dimensions come from the
 * manifest, so the aspect ratio is always the artwork's own — it can never be
 * stretched by a caller. Next.js serves resized AVIF/WebP (alpha intact) and
 * emits a srcset, which keeps the render sharp on Retina displays.
 */
export function TrackyMascot({
  art,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 45vw, 320px",
  alt,
  glow = false,
}: TrackyMascotProps) {
  const source = TRACKY_ART[art];
  const label = alt ?? source.alt;
  const decorative = label === "";

  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div
          className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-emerald/20 blur-3xl"
          aria-hidden="true"
        />
      ) : null}
      <Image
        src={`/images/tracky/${source.file}`}
        width={source.width}
        height={source.height}
        alt={label}
        aria-hidden={decorative || undefined}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
