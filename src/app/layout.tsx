import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Shared across the document title, Open Graph, and Twitter cards. */
const SOCIAL_TITLE = `${SITE.name} — Habit tracking for iPhone, without streaks`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SOCIAL_TITLE,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Tracky",
    "habit tracker",
    "habit app iPhone",
    "habit tracker without streaks",
    "momentum habit tracker",
    "identity habits",
    "focus sessions",
    "iOS habit app",
    "atomic habits",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SOCIAL_TITLE,
    description: SITE.ogDescription,
    url: SITE.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SITE.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  /* Icons come from the app/icon.png + app/apple-icon.png file convention,
     which serves the official App Store artwork. No override needed here. */
  /** Smart App Banner: offers the install directly from Safari on iOS. */
  itunes: { appId: SITE.appStoreId },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Tracky: Identity Growth",
  alternateName: SITE.name,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS 18.0 or later",
  description: SITE.schemaDescription,
  url: SITE.url,
  installUrl: SITE.appStoreUrl,
  downloadUrl: SITE.appStoreUrl,
  softwareVersion: "1.0",
  author: {
    "@type": "Person",
    name: "Mohaimenul Hoque Chowdhury",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: SITE.appStoreUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
