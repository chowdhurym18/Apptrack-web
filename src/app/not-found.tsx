import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrackyMascot } from "@/components/ui/TrackyMascot";
import { SITE } from "@/lib/config";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 pb-24 pt-16 text-center sm:px-8 sm:pt-24">
        <TrackyMascot
          art="concerned"
          alt=""
          sizes="180px"
          className="w-[150px] sm:w-[180px]"
        />

        <span className="mt-6 inline-flex items-center rounded-full border border-emerald/25 bg-emerald/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-ink">
          Error 404
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
          This page isn&apos;t here
        </h1>

        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-charcoal/65">
          The page you&apos;re looking for doesn&apos;t exist, or it may have
          moved.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            href="/support"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal transition-colors hover:text-emerald-ink"
          >
            Get help
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <p className="mt-8 text-xs font-medium text-charcoal/70">
          Still stuck? Email{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-emerald-ink underline-offset-4 hover:underline"
          >
            {SITE.supportEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
