import type { Metadata } from "next";
import { SITE } from "@/lib/config";

interface PageMetaOptions {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/support". Defaults to "/". */
  path?: string;
}

/**
 * Builds a complete, SEO-friendly `Metadata` object for a route, including
 * canonical URL, Open Graph, and Twitter card tags. The root layout provides
 * `metadataBase` and the default OG image, so individual pages only override
 * what differs.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: PageMetaOptions): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: `${title} · ${SITE.name}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE.name}`,
      description,
    },
  };
}
