import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CheckCircle2,
  Compass,
  Fingerprint,
  Handshake,
  PenLine,
  Sparkles,
  Timer,
} from "lucide-react";

import type { TrackyArtKey } from "@/lib/tracky-assets";

/** A product capability highlighted in the Features section. */
export interface Feature {
  icon: LucideIcon;
  /** Official mascot art, rendered in place of `icon` when set. */
  art?: TrackyArtKey;
  title: string;
  description: string;
  accent: "leaf" | "focus" | "health" | "streak" | "gold";
}

export const FEATURES: Feature[] = [
  {
    icon: Handshake,
    title: "Promises",
    description: "Small enough to do every day. Meaningful enough to matter.",
    accent: "leaf",
  },
  {
    icon: Timer,
    title: "Focus Sessions",
    description:
      "Stay focused on one task at a time. Tracky helps keep distractions out of the way until you're finished.",
    accent: "focus",
  },
  {
    icon: Activity,
    title: "Momentum",
    description:
      "One score that reflects how consistently you've shown up. Miss a day and it dips—not disappears.",
    accent: "health",
  },
  {
    icon: Fingerprint,
    title: "Identity",
    description:
      "Every promise strengthens the person you're trying to become. You can always see how you got there.",
    accent: "gold",
  },
  {
    icon: Sparkles,
    art: "sprout",
    title: "Growth Stages",
    description:
      "Your companion grows alongside your consistency. Every stage is earned through the promises you keep.",
    accent: "streak",
  },
];

/** A step in the core loop, shown in the How It Works section. */
export interface Step {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    icon: Compass,
    step: "01",
    title: "Pick a Journey",
    description:
      "Choose the kind of person you're working toward. Everything else grows from there.",
  },
  {
    icon: PenLine,
    step: "02",
    title: "Add two or three Promises",
    description:
      "Start small. Two or three promises are enough to build a routine you can keep.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Keep them",
    description:
      "Every promise builds Momentum. Miss one, and Second Chance helps you recover without starting over.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "See where it leads",
    description:
      "As your history grows, Future You shows where your current habits are taking you.",
  },
];

/**
 * Tracky's six growth stages (Seed → Mastery).
 *
 * Names and day ranges mirror `TrackyStage.title` / `.dayRangeText` in the iOS
 * app exactly — if those change in the app, change them here too.
 */
export interface Stage {
  name: string;
  caption: string;
  description: string;
}

export const STAGES: Stage[] = [
  {
    name: "Seed",
    caption: "Days 0–2",
    description: "Every routine starts somewhere. This is yours.",
  },
  {
    name: "Sprout",
    caption: "Days 2–7",
    description:
      "You're beginning to show up consistently. The habit is taking shape.",
  },
  {
    name: "Bud",
    caption: "Days 7–21",
    description: "Showing up is becoming part of your routine.",
  },
  {
    name: "Bloom",
    caption: "Days 21–60",
    description:
      "The habit feels more natural. You're relying less on motivation.",
  },
  {
    name: "Ascend",
    caption: "Months 2–6",
    description: "One missed day doesn't erase months of consistency.",
  },
  {
    name: "Mastery",
    caption: "6–12 months",
    description: "It's part of your life now. You don't think about it anymore.",
  },
];

/** A single row in the momentum-vs-streaks comparison. */
export interface Comparison {
  aspect: string;
  streak: string;
  tracky: string;
}

export const COMPARISONS: Comparison[] = [
  {
    aspect: "A missed day",
    streak: "Back to zero. Weeks of work, gone.",
    tracky: "Momentum drops a little, then builds back naturally.",
  },
  {
    aspect: "How it feels",
    streak: "Pressure. One slip reads as failure.",
    tracky: "One mistake doesn't erase your progress.",
  },
  {
    aspect: "What it counts",
    streak: "Consecutive days.",
    tracky: "The promises you keep over time.",
  },
  {
    aspect: "A hard week",
    streak: "The chain breaks, and usually the habit goes with it.",
    tracky:
      "You lose some Momentum, but the progress you've earned stays with you.",
  },
  {
    aspect: "What you end up with",
    streak: "A number that can vanish overnight.",
    tracky: "A record that reflects consistent effort over time.",
  },
];

/** A frequently asked question. */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What is Tracky?",
    answer:
      "A habit tracker for iPhone. You build consistency by keeping small daily promises, and Momentum measures how steadily you show up — so one missed day never sends you back to zero.",
  },
  {
    question: "How is Momentum different from a streak?",
    answer:
      "A streak only counts perfect consistency. Momentum reflects your overall consistency over time. Miss a day and it drops a little—it doesn't disappear.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your Promises, Focus Sessions, and progress stay on your iPhone. Apple Health is optional, and we never sell your data.",
  },
  {
    question: "What does Tracky cost?",
    answer:
      "Tracky is free to use. Tracky Pro adds deeper insights and premium features. Pricing is always shown plainly inside the app.",
  },
  {
    question: "Which devices does it support?",
    answer:
      "Tracky is available for iPhone running iOS 18 or later. Apple Health integration is completely optional.",
  },
  {
    question: "What are the Growth Stages?",
    answer:
      "Your companion grows through six stages: Seed, Sprout, Bud, Bloom, Ascend, and Mastery. Every stage is earned through consistency, and once you've reached one, it stays with you.",
  },
];

/** Support-page FAQ (operational questions). */
export const SUPPORT_FAQS: FAQItem[] = [
  {
    question: "How do I restore my subscription?",
    answer:
      "Open Tracky, go to Settings, then tap Restore Purchases. Your subscription is linked to your Apple ID.",
  },
  {
    question: "How do I cancel or manage my subscription?",
    answer:
      "Subscriptions are managed by Apple. Open Settings → Apple ID → Subscriptions to manage or cancel Tracky Pro.",
  },
  {
    question: "I got a new phone. Is my progress safe?",
    answer:
      "If your new iPhone was restored from an iCloud backup, your Tracky data should come with it. If something doesn't look right, email us.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "Your data stays on your device. Removing the app deletes it. If you'd like help, email us.",
  },
  {
    question: "I found a bug, or I have an idea.",
    answer:
      "We'd love to hear it. Send us an email with as much detail as you can, and include a screenshot if it helps.",
  },
];
