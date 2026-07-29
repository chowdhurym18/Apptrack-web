import Image from "next/image";
import { TRACKY_ART } from "@/lib/tracky-assets";

interface TrackyMarkProps {
  className?: string;
  /** Pixel size of the square mark. */
  size?: number;
}

/**
 * The Tracky logomark — the official App Store icon.
 *
 * Rendered decoratively (`alt=""`): every place it appears, the word "Tracky"
 * sits next to it, so naming the image too would make screen readers announce
 * the brand twice. The rounded-square clip matches the icon's own silhouette.
 */
export function TrackyMark({ className = "", size = 32 }: TrackyMarkProps) {
  const art = TRACKY_ART.appIcon;

  return (
    <Image
      src={`/images/tracky/${art.file}`}
      width={size}
      height={size}
      sizes={`${size}px`}
      alt=""
      aria-hidden="true"
      className={`shrink-0 rounded-[22%] ${className}`}
    />
  );
}
