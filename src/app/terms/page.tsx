import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/config";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Tracky, including subscriptions, billing, acceptable use, and your rights as a user.",
  path: "/terms",
});

const LAST_UPDATED = "June 20, 2026";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of These Terms",
    body: (
      <p>
        By downloading, accessing, or using the Tracky application
        (&ldquo;Tracky,&rdquo; the &ldquo;App&rdquo;), you agree to these Terms
        of Service (&ldquo;Terms&rdquo;). If you don&apos;t agree, please
        don&apos;t use the App. These Terms form a binding agreement between you
        and {SITE.name}.
      </p>
    ),
  },
  {
    heading: "License to Use the App",
    body: (
      <p>
        We give you a personal, limited, non-exclusive, non-transferable,
        revocable license to download and use Tracky on Apple devices you own or
        control, for your own personal, non-commercial use. This license is
        subject to these Terms and to the Apple Media Services and App Store
        Terms of Service.
      </p>
    ),
  },
  {
    heading: "Subscriptions & Billing",
    body: (
      <>
        <p>
          Tracky is free to download and use. Tracky Pro is an optional
          subscription that adds features such as advanced analytics and Future
          You forecasting.
        </p>
        <ul>
          <li>
            <strong>Subscriptions renew automatically.</strong> Tracky Pro
            renews at the end of each billing period at the then-current price
            until you cancel.
          </li>
          <li>
            <strong>Apple handles billing.</strong> Apple processes every
            payment through your App Store account. We never collect or store
            your payment details.
          </li>
          <li>
            <strong>Manage or cancel in Settings.</strong> Open iOS Settings,
            tap your name, then Subscriptions. Canceling takes effect at the
            end of the period you&apos;ve already paid for, and your access
            continues until then.
          </li>
          <li>
            <strong>Refunds follow Apple&apos;s policies.</strong> Because Apple
            handles purchases, we generally can&apos;t issue refunds ourselves.
            Contact Apple Support for billing questions.
          </li>
          <li>
            <strong>Free trials.</strong> Where a trial is offered, billing
            starts when it ends unless you cancel at least 24 hours beforehand.
            Buying a subscription forfeits any unused part of a trial.
          </li>
          <li>
            <strong>Lifetime and one-time purchases.</strong> Where offered, a
            lifetime purchase grants access for the lifetime of the App under a
            single, non-recurring payment.
          </li>
        </ul>
        <p>
          Prices and plans may change. Any price change applies only to future
          billing periods, with notice and your consent where required.
        </p>
      </>
    ),
  },
  {
    heading: "Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App unlawfully, or in violation of these Terms.</li>
          <li>
            Reverse engineer, decompile, or try to extract the App&apos;s source
            code, except where the law permits it.
          </li>
          <li>
            Interfere with the App or its related systems, or try to gain
            unauthorized access to them.
          </li>
          <li>
            Resell, redistribute, or sublicense the App or any subscription
            access.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Health & Wellness Disclaimer",
    body: (
      <>
        <p>
          <strong>
            Tracky helps you build habits. It isn&apos;t medical advice.
          </strong>
        </p>
        <p>
          Tracky is not a medical device, and it doesn&apos;t provide medical,
          psychological, or professional advice. Any health or fitness
          information it shows, including data from Apple Health, is for
          information only. Always talk to a qualified professional before
          making decisions about your health.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    body: (
      <p>
        {SITE.name} owns the App, including its design, text, graphics, the
        Tracky companion, and its growth stages, and all of it is protected by
        intellectual property laws. These Terms don&apos;t grant you any right
        to use our trademarks, logos, or branding without our prior written
        permission. Anything you create inside the App remains yours.
      </p>
    ),
  },
  {
    heading: "Disclaimer of Warranties",
    body: (
      <p>
        The App is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis, without warranties of any kind, whether express
        or implied, including but not limited to warranties of merchantability,
        fitness for a particular purpose, and non-infringement. We don&apos;t
        warrant that the App will be uninterrupted or error-free, or that any
        results or projections it provides will be achieved.
      </p>
    ),
  },
  {
    heading: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, {SITE.name} shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of data, profits, or goodwill, arising out of or
        related to your use of, or inability to use, the App. Our total
        liability for any claim relating to the App shall not exceed the amount
        you paid for the App in the twelve months preceding the claim.
      </p>
    ),
  },
  {
    heading: "Termination",
    body: (
      <p>
        We may suspend or terminate your access to the App if you violate these
        Terms. You can stop using the App at any time by deleting it from your
        device. Provisions that by their nature should outlast termination —
        including ownership, disclaimers, and limitations of liability — will
        survive.
      </p>
    ),
  },
  {
    heading: "Apple-Specific Terms",
    body: (
      <p>
        These Terms are between you and {SITE.name} only, not with Apple. Apple
        isn&apos;t responsible for the App or its content. If the App fails to
        conform to any applicable warranty, you may notify Apple, and Apple may
        refund the purchase price, if any; to the maximum extent permitted by
        law, Apple has no other warranty obligation with respect to the App.
        Apple and its subsidiaries are third-party beneficiaries of these Terms
        and may enforce them against you.
      </p>
    ),
  },
  {
    heading: "Governing Law",
    body: (
      <p>
        These Terms are governed by and construed in accordance with applicable
        law, without regard to conflict-of-laws principles. Any disputes will be
        resolved in the courts of competent jurisdiction, except where mandatory
        consumer-protection laws provide otherwise.
      </p>
    ),
  },
  {
    heading: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. When we do, we&apos;ll
        change the &ldquo;Last updated&rdquo; date above. Continuing to use the
        App after changes take effect means you accept the revised Terms.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        If any of this is unclear, or you want to check something before you
        subscribe, email{" "}
        <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        We&apos;d rather answer the question than have you guess.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          These are the rules for using Tracky. They&apos;re short, they
          aren&apos;t complicated, and they cover what&apos;s worth knowing —
          what you can do with the App, how subscriptions and billing work
          through Apple, and where our responsibilities end.
        </p>
      }
      sections={sections}
    />
  );
}
