import type { ReactNode } from "react";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}

/** Shared shell for long-form legal pages with clean, readable typography. */
export function LegalLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <header className="border-b border-charcoal/10 pb-8">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm font-medium text-charcoal/70">
          Last updated: {lastUpdated}
        </p>
        {/* space-y-4 matches the section bodies below, so a multi-paragraph
            intro keeps the same rhythm as the rest of the page. */}
        <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-charcoal/70">
          {intro}
        </div>
      </header>

      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section, i) => (
          <section key={section.heading} className="scroll-mt-24" id={`s-${i + 1}`}>
            <h2 className="text-xl font-semibold tracking-tight text-charcoal">
              <span className="mr-2 text-emerald-ink">{i + 1}.</span>
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-[0.975rem] leading-relaxed text-charcoal/70 [&_a]:font-medium [&_a]:text-emerald-ink [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ml-1 [&_strong]:font-semibold [&_strong]:text-charcoal [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
