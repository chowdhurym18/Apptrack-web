import Link from "next/link";
import { SITE } from "@/lib/config";
import { TrackyMark } from "@/components/ui/TrackyMark";

interface FooterLink {
  label: string;
  href: string;
  /** Opens in a new tab with the usual rel hardening. */
  external?: boolean;
}

const FOOTER_LINKS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Growth Journey", href: "/#growth" },
      { label: "FAQ", href: "/#faq" },
      { label: "App Store", href: SITE.appStoreUrl, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-sage/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2.5">
            <TrackyMark size={32} />
            <span className="text-lg font-semibold tracking-tight text-charcoal">
              {SITE.name}
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
            A habit tracker built around Momentum instead of streaks.
            Designed for iPhone.
          </p>
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="mt-4 inline-block text-sm font-medium text-emerald-ink underline-offset-4 hover:underline"
          >
            {SITE.supportEmail}
          </a>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.heading}>
            <h3 className="text-sm font-semibold text-charcoal">{group.heading}</h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => {
                const style =
                  "text-sm text-charcoal/60 transition-colors hover:text-charcoal";
                return (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={style}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-charcoal/10">
        {/* /70 rather than /50: 12px text needs 4.5:1 against the sage footer. */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-charcoal/70 sm:flex-row sm:px-8">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Made for people who&apos;ve quit a habit app before.</p>
        </div>
      </div>
    </footer>
  );
}
