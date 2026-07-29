# Tracky — Website

The marketing and legal website for **Tracky**, a calm habit-building companion for
iPhone. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer
Motion, and Lucide icons.

> Tracky's philosophy: every promise you keep is a vote for who you're becoming.
> Tracky grows from kept commitments — never from raw metrics — evolving alongside
> you from a single **Seed** to a flourishing **Grove**.

## Pages

- `/` — Home (Hero, Features, How It Works, Growth Journey, Why Tracky, FAQ, CTA)
- `/support` — Support, contact, and FAQ
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Run locally

Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (type-check + lint)
npm run start   # serve the production build
npm run lint    # ESLint
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Framework preset is auto-detected as **Next.js** — no configuration needed.
4. Click **Deploy**. Add your custom domain under **Settings → Domains**.

Or from the CLI:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

## Configuration

All site-wide constants live in [`src/lib/config.ts`](src/lib/config.ts):

- `SITE.url` — the canonical site URL (update when your domain is final).
- `SITE.supportEmail` — support contact (`trackysupport@gmail.com`).
- `SITE.appStoreUrl` — the live App Store listing. Every "Download on the App
  Store" button, the footer link, and the structured data read from here.
- `SITE.appStoreId` — numeric App Store ID, used for the iOS Smart App Banner.

## Mascot artwork

Official Tracky renders live in `public/images/tracky/` and are declared once in
[`src/lib/tracky-assets.ts`](src/lib/tracky-assets.ts). No component hardcodes an
image path — to add artwork, drop the file in and add a manifest entry.

The six growth stages (`GROWTH_STAGE_ART`, and `STAGES` in
[`src/lib/content.ts`](src/lib/content.ts)) mirror `TrackyStage` in the iOS app:
**Seed, Sprout, Bud, Bloom, Ascend, Mastery**. If those change in the app, change
them here too.
