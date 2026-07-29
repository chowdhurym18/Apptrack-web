import type { Metadata } from "next";
import { Clock, Mail, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/config";
import { SUPPORT_FAQS } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description:
    "Need help with Tracky? Find answers to common questions or contact us directly at trackysupport@gmail.com.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden scroll-mt-20">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald/15 blur-[130px]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-16 text-center sm:px-8 sm:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-ink">
            <MessageCircle className="h-3.5 w-3.5" /> Support
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            We&apos;re here to help
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-charcoal/65">
            Need help? Have feedback? Every email is read by a real person.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white/70 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald-ink">
                <Mail className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-charcoal">
                Email us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                The quickest way to reach us. If you&apos;re reporting a
                problem, a screenshot is always helpful.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="text-sm font-semibold text-emerald-ink underline-offset-4 hover:underline"
                >
                  {SITE.supportEmail}
                </a>
                <CopyEmailButton email={SITE.supportEmail} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white/70 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-health/10 text-health">
                <Clock className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-charcoal">
                Response time
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                We reply within{" "}
                <span className="font-semibold text-charcoal">48 hours</span>,
                and often much sooner.
              </p>
              <p className="mt-auto pt-5 text-xs font-medium text-charcoal/70">
                Monday–Friday · Replies sent in the order received.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Common questions"
            title="Quick answers"
            description="The questions we hear most often."
          />
          <Reveal className="mt-12">
            <Accordion items={SUPPORT_FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
