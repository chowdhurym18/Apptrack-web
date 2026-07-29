# WEBSITE_COPY_AUDIT.md

Complete extraction of every user-facing string on the Tracky website, exactly as
it exists in the codebase. Nothing summarized, shortened, improved, or rewritten.

Template values are resolved to what a visitor actually sees. Where a value comes
from a shared constant, the source is noted in brackets.

**Shared constants** (`src/lib/config.ts`) referenced throughout:

- `SITE.name` = `Tracky`
- `SITE.tagline` = `Identity Growth`
- `SITE.platform` = `iPhone · iOS 18+`
- `SITE.supportEmail` = `trackysupport@gmail.com`
- `SITE.url` = `https://tracky.app`
- `SITE.appStoreUrl` = `https://apps.apple.com/us/app/tracky-identity-growth/id6782687276`
- `SITE.appStoreId` = `6782687276`
- `SITE.description` = `Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency, recover from missed days, and keep moving forward.`
- `SITE.ogDescription` = `Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency without starting over.`
- `SITE.schemaDescription` = `Tracky is a habit tracker for iPhone that helps you build consistency with Momentum instead of streaks.`

---

====================================================
GLOBAL — SKIP LINK
====================================================

Source: `src/app/layout.tsx`
Visible only on keyboard focus.

Link:
```
Skip to content
```

---

====================================================
NAVIGATION
====================================================

Source: `src/components/layout/Navbar.tsx`, `src/lib/config.ts`

Logo link (text beside the mark):
```
Tracky
```

Logomark accessible name (`aria-label` on the SVG):
```
Tracky
```

Nav links (desktop and mobile, same list):
```
Features
How it works
Growth
FAQ
Support
```

Primary CTA (desktop, top right):
```
Download
```

Primary CTA (mobile menu, bottom of drawer):
```
Download
```

Mobile menu toggle — accessible name when menu is closed:
```
Open menu
```

Mobile menu toggle — accessible name when menu is open:
```
Close menu
```

Active state: the current route's nav link receives `aria-current="page"`. No
visible text change beyond colour weight.

---

====================================================
HOME
====================================================

Source: `src/app/page.tsx` (composes the seven sections below, in this order:
Hero, Features, How It Works, Growth Journey, Why Tracky, FAQ, Final CTA)

----------------------------------------------------
HOME — HERO
----------------------------------------------------

Source: `src/components/sections/Hero.tsx`

Eyebrow badge:
```
Habit Tracker · iPhone · iOS 18+
```
[literal text plus `SITE.platform`; `SITE.tagline` is still "Identity Growth" and remains in the OG image]

Headline:
```
Habits that survive a bad week.
```
[built word-by-word from the array `["Habits", "that", "survive", "a", "bad", "week."]`; the word `survive` renders in the brand gradient]

Subheadline:
```
Tracky is a habit tracker for iPhone built around Momentum instead of streaks. Keep the promises you make. Miss a day without losing everything.
```

Primary CTA:
```
Download on the
App Store
```
[the `AppStoreButton` component — see BUTTONS section]

Secondary CTA:
```
See how it works
```
[links to `/#how-it-works`, followed by a right-arrow icon]

Trust line (fine print below the CTAs):
```
Free to start · Data stays on your iPhone · No streaks to lose
```

Mascot alt text: empty (`alt=""`, decorative)

----------------------------------------------------
HOME — HERO PHONE MOCKUP
----------------------------------------------------

Source: `src/components/ui/PhoneMockup.tsx`

Note: this entire element carries `aria-hidden="true"`. The text is visible on
screen but is not announced to screen readers.

Status / greeting:
```
Tuesday · Good morning
```

Screen title:
```
Your Journey
```

Stage chip (top right):
```
Bloom
```

Momentum ring — value:
```
78
```

Momentum ring — label:
```
Momentum
```

Momentum state:
```
Building
```

Companion observation:
```
Five steady days. Even Tuesday didn't stop you.
```

Section label:
```
Today's promises
```

Vote counter:
```
+12 votes
```

Promise rows (label / meta):
```
Move for 20 minutes / Athlete
Read 10 pages / Learner
Evening wind-down / Mindful
```

----------------------------------------------------
HOME — FEATURES
----------------------------------------------------

Source: `src/components/sections/Features.tsx`, `src/lib/content.ts` (`FEATURES`)

Eyebrow:
```
What's inside
```

Headline:
```
Why Tracky feels different
```
[the word `different` renders in the brand gradient]

Subheadline:
```
Each feature is simple on its own. Together, they make Tracky easier to stick with.
```

**Feature card 1**

Title:
```
Promises
```

Body:
```
Small enough to do every day. Meaningful enough to matter.
```

**Feature card 2**

Title:
```
Focus Sessions
```

Body:
```
Stay focused on one task at a time. Tracky helps keep distractions out of the way until you're finished.
```

**Feature card 3**

Title:
```
Momentum
```

Body:
```
One score that reflects how consistently you've shown up. Miss a day and it dips—not disappears.
```

**Feature card 4**

Title:
```
Identity
```

Body:
```
Every promise strengthens the person you're trying to become. You can always see how you got there.
```

**Feature card 5**

Title:
```
Growth Stages
```

Body:
```
Your companion grows alongside your consistency. Every stage is earned through the promises you keep.
```

**Feature card 6 — closing brand statement card (dark)**

Statement:
```
Tracky grows with every promise you keep.
```
[the fragment `every promise you keep.` renders in the brand gradient]

Supporting line:
```
You build the habit. Tracky keeps the record.
```

Mascot alt text: empty (`alt=""`, decorative)

----------------------------------------------------
HOME — HOW IT WORKS
----------------------------------------------------

Source: `src/components/sections/HowItWorks.tsx`, `src/lib/content.ts` (`STEPS`)

Eyebrow:
```
How it works
```

Headline:
```
How Tracky works
```

Subheadline:
```
Set everything up in a couple of minutes. After that, keep the promises you make.
```

**Step 01**

Number:
```
01
```

Title:
```
Pick a Journey
```

Body:
```
Choose the kind of person you're working toward. Everything else grows from there.
```

**Step 02**

Number:
```
02
```

Title:
```
Add two or three Promises
```

Body:
```
Start small. Two or three promises are enough to build a routine you can keep.
```

**Step 03**

Number:
```
03
```

Title:
```
Keep them
```

Body:
```
Every promise builds Momentum. Miss one, and Second Chance helps you recover without starting over.
```

**Step 04**

Number:
```
04
```

Title:
```
See where it leads
```

Body:
```
As your history grows, Future You shows where your current habits are taking you.
```

Mascot alt text (step 04 only): empty (`alt=""`, decorative)

----------------------------------------------------
HOME — GROWTH JOURNEY
----------------------------------------------------

Source: `src/components/sections/GrowthJourney.tsx`, `src/lib/content.ts` (`STAGES`)

Eyebrow:
```
The Growth Journey
```

Headline:
```
Six stages, Seed to Mastery
```
[the word `Mastery` renders in the brand gradient]

Subheadline:
```
Your companion grows with your consistency. Every stage is earned, and your progress is never taken away.
```

Per-stage label prefix (rendered above each stage name, 1 through 6):
```
Stage 1
Stage 2
Stage 3
Stage 4
Stage 5
Stage 6
```

**Stage 1**

Name:
```
Seed
```

Caption:
```
Days 0–2
```

Description:
```
Every routine starts somewhere. This is yours.
```

**Stage 2**

Name:
```
Sprout
```

Caption:
```
Days 2–7
```

Description:
```
You're beginning to show up consistently. The habit is taking shape.
```

**Stage 3**

Name:
```
Bud
```

Caption:
```
Days 7–21
```

Description:
```
Showing up is becoming part of your routine.
```

**Stage 4**

Name:
```
Bloom
```

Caption:
```
Days 21–60
```

Description:
```
The habit feels more natural. You're relying less on motivation.
```

**Stage 5**

Name:
```
Ascend
```

Caption:
```
Months 2–6
```

Description:
```
One missed day doesn't erase months of consistency.
```

**Stage 6**

Name:
```
Mastery
```

Caption:
```
6–12 months
```

Description:
```
It's part of your life now. You don't think about it anymore.
```

Mascot alt text (all six stages): empty (`alt=""`, decorative — the stage name is
already announced by the adjacent heading)

----------------------------------------------------
HOME — WHY TRACKY
----------------------------------------------------

Source: `src/components/sections/WhyTracky.tsx`, `src/lib/content.ts` (`COMPARISONS`)

Eyebrow:
```
Why Tracky
```

Headline:
```
Momentum, not streaks
```
[the word `streaks` renders struck through]

Subheadline:
```
Most habit apps are built around an unbroken chain, which makes one bad day expensive. Tracky isn't. Here's what changes.
```

Left column heading:
```
Streak apps
```

Right column heading:
```
Tracky
```

**Row 1**

Label (appears in both columns):
```
A missed day
```

Streak apps:
```
Back to zero. Weeks of work, gone.
```

Tracky:
```
Momentum drops a little, then builds back naturally.
```

**Row 2**

Label:
```
How it feels
```

Streak apps:
```
Pressure. One slip reads as failure.
```

Tracky:
```
One mistake doesn't erase your progress.
```

**Row 3**

Label:
```
What it counts
```

Streak apps:
```
Consecutive days.
```

Tracky:
```
The promises you keep over time.
```

**Row 4**

Label:
```
A hard week
```

Streak apps:
```
The chain breaks, and usually the habit goes with it.
```

Tracky:
```
You lose some Momentum, but the progress you've earned stays with you.
```

**Row 5**

Label:
```
What you end up with
```

Streak apps:
```
A number that can vanish overnight.
```

Tracky:
```
A record that reflects consistent effort over time.
```

----------------------------------------------------
HOME — FAQ
----------------------------------------------------

Source: `src/components/sections/FAQ.tsx`, `src/lib/content.ts` (`FAQS`)

Eyebrow:
```
FAQ
```

Headline:
```
Questions people ask
```

Subheadline:
```
Still have a question? We'd be happy to help.
```

**Question 1**

Question:
```
What is Tracky?
```

Answer:
```
A habit tracker for iPhone. You build consistency by keeping small daily promises, and Momentum measures how steadily you show up — so one missed day never sends you back to zero.
```

**Question 2**

Question:
```
How is Momentum different from a streak?
```

Answer:
```
A streak only counts perfect consistency. Momentum reflects your overall consistency over time. Miss a day and it drops a little—it doesn't disappear.
```

**Question 3**

Question:
```
Is my data private?
```

Answer:
```
Yes. Your Promises, Focus Sessions, and progress stay on your iPhone. Apple Health is optional, and we never sell your data.
```

**Question 4**

Question:
```
What does Tracky cost?
```

Answer:
```
Tracky is free to use. Tracky Pro adds deeper insights and premium features. Pricing is always shown plainly inside the app.
```

**Question 5**

Question:
```
Which devices does it support?
```

Answer:
```
Tracky is available for iPhone running iOS 18 or later. Apple Health integration is completely optional.
```

**Question 6**

Question:
```
What are the Growth Stages?
```

Answer:
```
Your companion grows through six stages: Seed, Sprout, Bud, Bloom, Ascend, and Mastery. Every stage is earned through consistency, and once you've reached one, it stays with you.
```

----------------------------------------------------
HOME — FINAL CTA
----------------------------------------------------

Source: `src/components/sections/FinalCTA.tsx`

Headline:
```
Start with one promise.
```
[the fragment `one promise.` renders in the brand gradient]

Body:
```
Pick one promise. Keep it tomorrow. Tracky will keep track from there.
```

Primary CTA:
```
Download on the
App Store
```
[light variant of `AppStoreButton`]

Trust line (fine print below the CTA):
```
Free to start · iPhone · iOS 18+
```

Mascot alt text:
```
Tracky celebrating — crowned and grinning with both fists raised amid drifting sparks
```
[no `alt` override is passed here, so the manifest's descriptive alt is used]

---

====================================================
SUPPORT
====================================================

Source: `src/app/support/page.tsx`, `src/lib/content.ts` (`SUPPORT_FAQS`)

Eyebrow badge:
```
Support
```

Headline (H1):
```
We're here to help
```

Subheadline:
```
Need help? Have feedback? Every email is read by a real person.
```

**Contact card 1**

Heading:
```
Email us
```

Body:
```
The quickest way to reach us. If you're reporting a problem, a screenshot is always helpful.
```

Email link:
```
trackysupport@gmail.com
```

Copy button — default state:
```
Copy
```

Copy button — default accessible name:
```
Copy email address
```

Copy button — confirmation state (shown for 2 seconds after a successful copy):
```
Copied
```

Copy button — confirmation accessible name:
```
Email copied
```

Clipboard failure behaviour: fails silently. No error message is shown to the user.

**Contact card 2**

Heading:
```
Response time
```

Body:
```
We reply within 48 hours, and often much sooner.
```
[the fragment `48 hours` renders in a heavier weight]

Footnote:
```
Monday–Friday · Replies sent in the order received.
```

**Support FAQ section**

Eyebrow:
```
Common questions
```

Headline:
```
Quick answers
```

Subheadline:
```
The questions we hear most often.
```

**Question 1**

Question:
```
How do I restore my subscription?
```

Answer:
```
Open Tracky, go to Settings, then tap Restore Purchases. Your subscription is linked to your Apple ID.
```

**Question 2**

Question:
```
How do I cancel or manage my subscription?
```

Answer:
```
Subscriptions are managed by Apple. Open Settings → Apple ID → Subscriptions to manage or cancel Tracky Pro.
```

**Question 3**

Question:
```
I got a new phone. Is my progress safe?
```

Answer:
```
If your new iPhone was restored from an iCloud backup, your Tracky data should come with it. If something doesn't look right, email us.
```

**Question 4**

Question:
```
How do I delete my data?
```

Answer:
```
Your data stays on your device. Removing the app deletes it. If you'd like help, email us.
```

**Question 5**

Question:
```
I found a bug, or I have an idea.
```

Answer:
```
We'd love to hear it. Send us an email with as much detail as you can, and include a screenshot if it helps.
```

---

====================================================
404 / NOT FOUND
====================================================

Source: `src/app/not-found.tsx`

Eyebrow badge:
```
Error 404
```

Headline (H1):
```
This page isn't here
```

Body:
```
The page you're looking for doesn't exist, or it may have moved.
```

Primary CTA:
```
Back to home
```

Secondary CTA:
```
Get help
```
[links to `/support`, followed by a right-arrow icon]

Footnote:
```
Still stuck? Email trackysupport@gmail.com
```

Mascot alt text: empty (`alt=""`, decorative)

---

====================================================
PRIVACY POLICY
====================================================

Source: `src/app/privacy/page.tsx`, `src/components/legal/LegalLayout.tsx`

Page title (H1):
```
Privacy Policy
```

Last-updated label:
```
Last updated: June 20, 2026
```

Intro:
```
Tracky stores your promises, focus sessions, and progress on your iPhone. Apple handles the App Store, subscriptions, and optional iCloud backups. Apple Health stays off until you turn it on. We never sell your information.

This policy explains the detail — what Tracky (“we,” “us,” or “our”) collects, why, and what you control.
```

Note: each section heading is prefixed with an auto-numbered `1.` through `11.`

**1. Information We Collect**

```
Tracky collects as little as possible. Here's the full list.

Profile information — your display name and any preferences you set. Stays on your device.
Activity data — the promises, journeys, goals, focus sessions, reflections, and progress you create. Stays on your device, stored with Apple's on-device data framework.
Health and fitness data (optional). Tracky never reads Apple Health unless you allow it, and you can turn that permission off at any time in the iOS Settings or Health app. If you do connect Health, Tracky can read your steps, workouts, active energy, exercise minutes, and body measurements. It never writes to Health without an action from you, and nothing else in the app depends on it.
Subscription status — if you subscribe to Tracky Pro, Apple tells us whether your subscription is active. We never see your card details.
Diagnostic information — if you turn on sharing in your device settings, Apple may send us anonymized, aggregated crash and performance reports. These aren't tied to your identity.
```

**2. How We Use Information**

```
We use this information only to:

Run and maintain the app.
Calculate your Momentum, identity, growth stage, and Future You projections from the promises you keep.
Show Apple Health insights, if you've connected Health.
Process and restore subscriptions through Apple.
Answer your support emails and improve Tracky.

We never use your activity or health data for advertising, and we never sell it.
```

**3. Where Your Data Is Stored**

```
Your Tracky data lives on your iPhone. We don't keep a copy on a server.

If you use iCloud device backup, your data is included in that encrypted Apple backup, which is covered by Apple's privacy practices. Deleting the app removes the data from your iPhone.
```

**4. Third-Party Services**

```
Tracky uses four Apple services, each for one purpose:

App Store — distributes the app.
StoreKit — handles subscriptions and billing.
Apple Health — read-only, and only if you connect it.
iCloud — only if you use device backup.

Apple's privacy policy also covers your use of these services. Tracky contains no third-party advertising or analytics SDKs, so nothing in the app tracks you across other apps.
```

**5. Data Sharing & Disclosure**

```
We don't sell, rent, or trade your personal information.

We may disclose information only where the law requires it, or to protect the rights, property, or safety of Tracky, our users, or others. Any sharing needed to run the app, such as Apple processing your subscription, is limited to what that purpose requires.
```

**6. Your Rights & Choices**

```
Depending on where you live, privacy laws such as the GDPR (EU, EEA, and UK) or the CCPA (California) give you the right to access, correct, delete, or port your information, and to object to certain processing.

Because your data sits on your device, you can act on most of these rights yourself:

Access and edit — open the app at any time.
Revoke Apple Health access — use the iOS Settings or Health app.
Delete everything — delete the app.

For anything else, email trackysupport@gmail.com and we'll respond within a reasonable timeframe.
```

**7. Children's Privacy**

```
Tracky isn't directed to children under 13, or under the minimum age in your country. We don't knowingly collect personal information from children. If you believe a child has given us information, contact us and we'll take appropriate action.
```

**8. Data Retention**

```
Your activity data stays on your device for as long as the app is installed. Apple keeps subscription records under its own policies. Deleting the app removes the on-device data from your iPhone.
```

**9. Security**

```
We rely on Apple's on-device storage and platform security to protect your information, alongside our own reasonable measures. No method of electronic storage is completely secure, so we can't guarantee absolute security.
```

**10. Changes to This Policy**

```
We may update this policy from time to time. When we do, we'll change the “Last updated” date at the top of this page, and we may flag significant changes in the app. Continuing to use Tracky after an update means you accept the revised policy.
```

**11. Contact Us**

```
If anything here is unclear, or you want to know what Tracky stores about you, email trackysupport@gmail.com. We're glad to answer privacy questions, and a real person replies to every message.
```
---

====================================================
TERMS OF SERVICE
====================================================

Source: `src/app/terms/page.tsx`, `src/components/legal/LegalLayout.tsx`

Page title (H1):
```
Terms of Service
```

Last-updated label:
```
Last updated: June 20, 2026
```

Intro:
```
These are the rules for using Tracky. They're short, they aren't complicated, and they cover what's worth knowing — what you can do with the App, how subscriptions and billing work through Apple, and where our responsibilities end.
```

Note: each section heading is prefixed with an auto-numbered `1.` through `13.`

**1. Acceptance of These Terms**

```
By downloading, accessing, or using the Tracky application (“Tracky,” the “App”), you agree to these Terms of Service (“Terms”). If you don't agree, please don't use the App. These Terms form a binding agreement between you and Tracky.
```

**2. License to Use the App**

```
We give you a personal, limited, non-exclusive, non-transferable, revocable license to download and use Tracky on Apple devices you own or control, for your own personal, non-commercial use. This license is subject to these Terms and to the Apple Media Services and App Store Terms of Service.
```

**3. Subscriptions & Billing**

```
Tracky is free to download and use. Tracky Pro is an optional subscription that adds features such as advanced analytics and Future You forecasting.

Subscriptions renew automatically. Tracky Pro renews at the end of each billing period at the then-current price until you cancel.
Apple handles billing. Apple processes every payment through your App Store account. We never collect or store your payment details.
Manage or cancel in Settings. Open iOS Settings, tap your name, then Subscriptions. Canceling takes effect at the end of the period you've already paid for, and your access continues until then.
Refunds follow Apple's policies. Because Apple handles purchases, we generally can't issue refunds ourselves. Contact Apple Support for billing questions.
Free trials. Where a trial is offered, billing starts when it ends unless you cancel at least 24 hours beforehand. Buying a subscription forfeits any unused part of a trial.
Lifetime and one-time purchases. Where offered, a lifetime purchase grants access for the lifetime of the App under a single, non-recurring payment.

Prices and plans may change. Any price change applies only to future billing periods, with notice and your consent where required.
```

**4. Acceptable Use**

```
You agree not to:

Use the App unlawfully, or in violation of these Terms.
Reverse engineer, decompile, or try to extract the App's source code, except where the law permits it.
Interfere with the App or its related systems, or try to gain unauthorized access to them.
Resell, redistribute, or sublicense the App or any subscription access.
```

**5. Health & Wellness Disclaimer**

```
Tracky helps you build habits. It isn't medical advice.

Tracky is not a medical device, and it doesn't provide medical, psychological, or professional advice. Any health or fitness information it shows, including data from Apple Health, is for information only. Always talk to a qualified professional before making decisions about your health.
```

**6. Intellectual Property**

```
Tracky owns the App, including its design, text, graphics, the Tracky companion, and its growth stages, and all of it is protected by intellectual property laws. These Terms don't grant you any right to use our trademarks, logos, or branding without our prior written permission. Anything you create inside the App remains yours.
```

**7. Disclaimer of Warranties**

```
The App is provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We don't warrant that the App will be uninterrupted or error-free, or that any results or projections it provides will be achieved.
```

**8. Limitation of Liability**

```
To the maximum extent permitted by law, Tracky shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or goodwill, arising out of or related to your use of, or inability to use, the App. Our total liability for any claim relating to the App shall not exceed the amount you paid for the App in the twelve months preceding the claim.
```

**9. Termination**

```
We may suspend or terminate your access to the App if you violate these Terms. You can stop using the App at any time by deleting it from your device. Provisions that by their nature should outlast termination — including ownership, disclaimers, and limitations of liability — will survive.
```

**10. Apple-Specific Terms**

```
These Terms are between you and Tracky only, not with Apple. Apple isn't responsible for the App or its content. If the App fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price, if any; to the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.
```

**11. Governing Law**

```
These Terms are governed by and construed in accordance with applicable law, without regard to conflict-of-laws principles. Any disputes will be resolved in the courts of competent jurisdiction, except where mandatory consumer-protection laws provide otherwise.
```

**12. Changes to These Terms**

```
We may update these Terms from time to time. When we do, we'll change the “Last updated” date above. Continuing to use the App after changes take effect means you accept the revised Terms.
```

**13. Contact Us**

```
If any of this is unclear, or you want to check something before you subscribe, email trackysupport@gmail.com. We'd rather answer the question than have you guess.
```
---

====================================================
FOOTER
====================================================

Source: `src/components/layout/Footer.tsx`

Brand name (beside the logomark):
```
Tracky
```

Brand description:
```
A habit tracker built around Momentum instead of streaks. Designed for iPhone.
```

Contact link:
```
trackysupport@gmail.com
```

Column 1 heading:
```
Product
```

Column 1 links:
```
Features
How it works
Growth Journey
FAQ
App Store
```
[`App Store` opens the live listing in a new tab]

Column 2 heading:
```
Company
```

Column 2 links:
```
Support
Privacy Policy
Terms of Service
```

Copyright (bottom bar, left):
```
© 2026 Tracky. All rights reserved.
```
[year is generated at render time from `new Date().getFullYear()`]

Tagline (bottom bar, right):
```
Made for people who've quit a habit app before.
```

---

====================================================
BUTTONS & CTAs — CONSOLIDATED
====================================================

Every clickable label on the site, in one list.

App Store button — small label (line 1):
```
Download on the
```

App Store button — large label (line 2):
```
App Store
```
[Source: `src/components/ui/AppStoreButton.tsx`. Appears twice: Hero (dark
variant) and Final CTA (light variant). No `aria-label` — the visible text is the
accessible name. Opens `SITE.appStoreUrl` in a new tab.]

Navbar CTA (desktop and mobile):
```
Download
```

Hero secondary CTA:
```
See how it works
```

404 primary CTA:
```
Back to home
```

404 secondary CTA:
```
Get help
```

Support copy button — idle:
```
Copy
```

Support copy button — success:
```
Copied
```

Skip link:
```
Skip to content
```

FAQ accordion triggers: the question text itself acts as the button label. See
the FAQ and SUPPORT sections above for all eleven.

---

====================================================
METADATA — HOME
====================================================

Source: `src/app/layout.tsx`

Title tag:
```
Tracky — Habit tracking for iPhone, without streaks
```

Title template applied to child pages:
```
%s · Tracky
```

Meta description:
```
Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency, recover from missed days, and keep moving forward.
```

Application name:
```
Tracky
```

Author:
```
Tracky
```

Creator:
```
Tracky
```

Keywords:
```
Tracky
habit tracker
habit app iPhone
habit tracker without streaks
momentum habit tracker
identity habits
focus sessions
iOS habit app
atomic habits
```

Canonical:
```
/
```

Robots:
```
index: true
follow: true
```

Smart App Banner (`apple-itunes-app`):
```
app-id=6782687276
```

Theme colour (light):
```
#F4F4EF
```

Theme colour (dark):
```
#050505
```

---

====================================================
METADATA — SUPPORT
====================================================

Source: `src/app/support/page.tsx` via `src/lib/metadata.ts`

Title tag (after template):
```
Support · Tracky
```

Meta description:
```
Need help with Tracky? Find answers to common questions or contact us directly at trackysupport@gmail.com.
```

Canonical:
```
/support
```

---

====================================================
METADATA — PRIVACY
====================================================

Source: `src/app/privacy/page.tsx` via `src/lib/metadata.ts`

Title tag (after template):
```
Privacy Policy · Tracky
```

Meta description:
```
Learn how Tracky protects your privacy. Your data stays on your iPhone, Apple Health is optional, and we never sell your information.
```

Canonical:
```
/privacy
```

---

====================================================
METADATA — TERMS
====================================================

Source: `src/app/terms/page.tsx` via `src/lib/metadata.ts`

Title tag (after template):
```
Terms of Service · Tracky
```

Meta description:
```
Read the Terms of Service for Tracky, including subscriptions, billing, acceptable use, and your rights as a user.
```

Canonical:
```
/terms
```

---

====================================================
OPEN GRAPH & TWITTER
====================================================

**Home** — Source: `src/app/layout.tsx`

Open Graph type:
```
website
```

Open Graph site name:
```
Tracky
```

Open Graph title:
```
Tracky — Habit tracking for iPhone, without streaks
```

Open Graph description:
```
Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency without starting over.
```

Open Graph URL:
```
https://tracky.app
```

Open Graph locale:
```
en_US
```

Twitter card type:
```
summary_large_image
```

Twitter title:
```
Tracky — Habit tracking for iPhone, without streaks
```

Twitter description:
```
Tracky is a habit tracker for iPhone that replaces streaks with Momentum. Build consistency without starting over.
```

**Subpages** — Source: `src/lib/metadata.ts`

Open Graph and Twitter titles on subpages follow the pattern `{page title} · Tracky`:
```
Support · Tracky
Privacy Policy · Tracky
Terms of Service · Tracky
```

Their Open Graph and Twitter descriptions are identical to the meta descriptions
listed in the METADATA sections above.

**Open Graph image** — Source: `src/app/opengraph-image.tsx`

Image alt text:
```
Tracky — Identity Growth
```

Text rendered inside the 1200×630 image — brand row:
```
Tracky
```

Text rendered inside the image — headline:
```
Habits that survive a bad week.
```

Text rendered inside the image — footer line:
```
Identity Growth · iPhone · iOS 18+
```

---

====================================================
STRUCTURED DATA (JSON-LD)
====================================================

Source: `src/app/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Tracky: Identity Growth",
  "alternateName": "Tracky",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "iOS 18.0 or later",
  "description": "Tracky is a habit tracker for iPhone that helps you build consistency with Momentum instead of streaks.",
  "url": "https://tracky.app",
  "installUrl": "https://apps.apple.com/us/app/tracky-identity-growth/id6782687276",
  "downloadUrl": "https://apps.apple.com/us/app/tracky-identity-growth/id6782687276",
  "softwareVersion": "1.0",
  "author": {
    "@type": "Person",
    "name": "Mohaimenul Hoque Chowdhury"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://apps.apple.com/us/app/tracky-identity-growth/id6782687276"
  }
}
```

Structured data description (the human-readable string above, isolated):
```
Tracky is a habit tracker for iPhone that helps you build consistency with Momentum instead of streaks.
```

---

====================================================
ALT TEXT — MASCOT ARTWORK
====================================================

Source: `src/lib/tracky-assets.ts`

Every render declares descriptive alt text in the manifest. Components may pass
`alt=""` to mark a specific placement decorative, which several do — those
overrides are noted under each section above.

**Currently displayed on the site**

`seed` — `tracky-seed.png`:
```
Tracky as a seed — a smiling dark sphere with a single glowing leaf, breaking out of a cracked stone shell
```

`sprout` — `tracky-sprout.png`:
```
Tracky as a sprout — a small hooded companion with one leaf and a short green cape
```

`bud` — `tracky-bud.png`:
```
Tracky as a bud — a hooded companion with a pair of leaves, reaching out an open hand
```

`bloom` — `tracky-bloom.png`:
```
Tracky in bloom — wearing a small gold crown beneath two full leaves, with a flowing green cape
```

`ascend` — `tracky-ascend.png`:
```
Tracky ascending — a headbanded companion lifting a kettlebell with a determined glowing gaze
```

`mastery` — `tracky-mastery.png`:
```
Tracky at mastery — crowned with a gemmed circlet of leaves, raising a calm hand in greeting
```

`wave` — `tracky-wave.png`:
```
Tracky waving hello with a raised hand and a wide smile
```

`present` — `tracky-present.png`:
```
Tracky holding out an open palm, calmly presenting something
```

`celebrate` — `tracky-celebrate.png`:
```
Tracky celebrating — crowned and grinning with both fists raised amid drifting sparks
```

`concerned` — `tracky-concerned.png`:
```
Tracky looking thoughtful, a hand raised to its chin beside a question mark
```

**Declared in the manifest but not currently rendered anywhere**

`cheer` — `tracky-cheer.png`:
```
Tracky cheering with a raised fist
```

`thumbsup` — `tracky-thumbsup.png`:
```
Tracky giving a thumbs up
```

`calm` — `tracky-calm.png`:
```
Tracky standing calmly with a gentle smile
```

`focused` — `tracky-focused.png`:
```
Tracky focused — arms folded with a steady, narrowed gaze
```

`masteryWave` — `tracky-mastery-wave.png`:
```
Tracky at mastery, crowned with leaves and waving
```

`masteryCheer` — `tracky-mastery-cheer.png`:
```
Tracky at mastery, crowned with leaves and cheering with a raised fist
```

`default` — `tracky-default.png`:
```
Tracky, a calm hooded companion with a glowing leaf sprout and a green cape
```

**Other image alt text**

Logomark (`TrackyMark`, inline SVG in Navbar and Footer) `aria-label`:
```
Tracky
```

Phone mockup: entire element is `aria-hidden="true"`, so it exposes no
accessible text.

---

====================================================
ERROR MESSAGES, EMPTY STATES & TOOLTIPS
====================================================

The site is a static marketing site with no forms, no authentication, and no data
fetching. The complete inventory of these states is:

**Error messages**

The 404 page is the only error state. Its full copy is in the 404 / NOT FOUND
section above.

There are no form validation messages, no network error messages, and no toast
or banner errors anywhere in the codebase.

**Empty states**

None. Every section renders from static arrays that are never empty.

**Loading states**

None. There are no spinners, skeletons, or loading strings. All four routes are
statically prerendered, and the Inter webfont uses `display: swap`.

**Tooltips**

No `title` attributes and no tooltip components exist. The only hover affordances
are colour and transform changes, which carry no text.

**Confirmation messages**

One: the Support page copy button, which swaps `Copy` → `Copied` for two seconds
and updates its accessible name from `Copy email address` → `Email copied`. Full
copy is in the SUPPORT section above.

**Purchase / subscription messaging**

The site itself sells nothing and contains no purchase flow. All subscription
language is descriptive only, and lives in three places already captured above:
the home FAQ ("What does Tracky cost?"), Support FAQ questions 1 and 2, and Terms
section 3 ("Subscriptions & Billing"). Privacy section 1 also references
subscription status.

---

====================================================
NON-VISIBLE STRINGS (FOR COMPLETENESS)
====================================================

These are not rendered as visible copy but are user-reachable or
crawler-reachable.

`robots.txt` — Source: `src/app/robots.ts`
```
User-agent: *
Allow: /
Sitemap: https://tracky.app/sitemap.xml
Host: https://tracky.app
```

`sitemap.xml` — Source: `src/app/sitemap.ts`, listing four routes:
```
https://tracky.app
https://tracky.app/support
https://tracky.app/privacy
https://tracky.app/terms
```

HTML language attribute:
```
en
```
