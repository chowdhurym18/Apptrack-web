import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/config";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Tracky protects your privacy. Your data stays on your iPhone, Apple Health is optional, and we never sell your information.",
  path: "/privacy",
});

const LAST_UPDATED = "June 20, 2026";

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: (
      <>
        <p>Tracky collects as little as possible. Here&apos;s the full list.</p>
        <ul>
          <li>
            <strong>Profile information</strong> — your display name and any
            preferences you set. Stays on your device.
          </li>
          <li>
            <strong>Activity data</strong> — the promises, journeys, goals,
            focus sessions, reflections, and progress you create. Stays on your
            device, stored with Apple&apos;s on-device data framework.
          </li>
          <li>
            <strong>Health and fitness data (optional).</strong> Tracky never
            reads Apple Health unless you allow it, and you can turn that
            permission off at any time in the iOS Settings or Health app. If you
            do connect Health, Tracky can read your steps, workouts, active
            energy, exercise minutes, and body measurements. It never writes to
            Health without an action from you, and nothing else in the app
            depends on it.
          </li>
          <li>
            <strong>Subscription status</strong> — if you subscribe to Tracky
            Pro, Apple tells us whether your subscription is active. We never
            see your card details.
          </li>
          <li>
            <strong>Diagnostic information</strong> — if you turn on sharing in
            your device settings, Apple may send us anonymized, aggregated crash
            and performance reports. These aren&apos;t tied to your identity.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "How We Use Information",
    body: (
      <>
        <p>We use this information only to:</p>
        <ul>
          <li>Run and maintain the app.</li>
          <li>
            Calculate your Momentum, identity, growth stage, and Future You
            projections from the promises you keep.
          </li>
          <li>Show Apple Health insights, if you&apos;ve connected Health.</li>
          <li>Process and restore subscriptions through Apple.</li>
          <li>Answer your support emails and improve Tracky.</li>
        </ul>
        <p>
          We never use your activity or health data for advertising, and we
          never sell it.
        </p>
      </>
    ),
  },
  {
    heading: "Where Your Data Is Stored",
    body: (
      <>
        <p>
          <strong>Your Tracky data lives on your iPhone.</strong> We don&apos;t
          keep a copy on a server.
        </p>
        <p>
          If you use iCloud device backup, your data is included in that
          encrypted Apple backup, which is covered by Apple&apos;s privacy
          practices. Deleting the app removes the data from your iPhone.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    body: (
      <>
        <p>Tracky uses four Apple services, each for one purpose:</p>
        <ul>
          <li>
            <strong>App Store</strong> — distributes the app.
          </li>
          <li>
            <strong>StoreKit</strong> — handles subscriptions and billing.
          </li>
          <li>
            <strong>Apple Health</strong> — read-only, and only if you connect
            it.
          </li>
          <li>
            <strong>iCloud</strong> — only if you use device backup.
          </li>
        </ul>
        <p>
          Apple&apos;s privacy policy also covers your use of these services.
          Tracky contains no third-party advertising or analytics SDKs, so
          nothing in the app tracks you across other apps.
        </p>
      </>
    ),
  },
  {
    heading: "Data Sharing & Disclosure",
    body: (
      <>
        <p>We don&apos;t sell, rent, or trade your personal information.</p>
        <p>
          We may disclose information only where the law requires it, or to
          protect the rights, property, or safety of Tracky, our users, or
          others. Any sharing needed to run the app, such as Apple processing
          your subscription, is limited to what that purpose requires.
        </p>
      </>
    ),
  },
  {
    heading: "Your Rights & Choices",
    body: (
      <>
        <p>
          Depending on where you live, privacy laws such as the GDPR (EU, EEA,
          and UK) or the CCPA (California) give you the right to access,
          correct, delete, or port your information, and to object to certain
          processing.
        </p>
        <p>
          Because your data sits on your device, you can act on most of these
          rights yourself:
        </p>
        <ul>
          <li>
            <strong>Access and edit</strong> — open the app at any time.
          </li>
          <li>
            <strong>Revoke Apple Health access</strong> — use the iOS Settings
            or Health app.
          </li>
          <li>
            <strong>Delete everything</strong> — delete the app.
          </li>
        </ul>
        <p>
          For anything else, email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and
          we&apos;ll respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    heading: "Children's Privacy",
    body: (
      <p>
        Tracky isn&apos;t directed to children under 13, or under the minimum
        age in your country. We don&apos;t knowingly collect personal
        information from children. If you believe a child has given us
        information, contact us and we&apos;ll take appropriate action.
      </p>
    ),
  },
  {
    heading: "Data Retention",
    body: (
      <p>
        Your activity data stays on your device for as long as the app is
        installed. Apple keeps subscription records under its own policies.
        Deleting the app removes the on-device data from your iPhone.
      </p>
    ),
  },
  {
    heading: "Security",
    body: (
      <p>
        We rely on Apple&apos;s on-device storage and platform security to
        protect your information, alongside our own reasonable measures. No
        method of electronic storage is completely secure, so we can&apos;t
        guarantee absolute security.
      </p>
    ),
  },
  {
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. When we do, we&apos;ll
        change the &ldquo;Last updated&rdquo; date at the top of this page, and
        we may flag significant changes in the app. Continuing to use Tracky
        after an update means you accept the revised policy.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        If anything here is unclear, or you want to know what Tracky stores
        about you, email{" "}
        <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        We&apos;re glad to answer privacy questions, and a real person replies
        to every message.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            Tracky stores your promises, focus sessions, and progress{" "}
            <strong>on your iPhone</strong>. Apple handles the App Store,
            subscriptions, and optional iCloud backups. Apple Health stays off
            until you turn it on. We never sell your information.
          </p>
          <p>
            This policy explains the detail — what {SITE.name} (&ldquo;we,&rdquo;{" "}
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, why, and what you
            control.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
