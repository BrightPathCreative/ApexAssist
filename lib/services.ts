import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Laptop,
  LayoutList,
  PawPrint,
  Sprout,
} from "lucide-react";

export type ServiceSlug =
  | "home-organisation"
  | "tutoring"
  | "tech-help"
  | "gardening"
  | "pet-house";

export type ServiceDefinition = {
  slug: ServiceSlug;
  title: string;
  cardBlurb: string;
  icon: LucideIcon;
  metaDescription: string;
  intro: string;
  whyMe: string[];
  included: string[];
  note?: string;
};

export const SERVICE_ORDER: ServiceSlug[] = [
  "home-organisation",
  "tutoring",
  "tech-help",
  "gardening",
  "pet-house",
];

export const servicesBySlug: Record<ServiceSlug, ServiceDefinition> = {
  "home-organisation": {
    slug: "home-organisation",
    title: "Home organisation",
    cardBlurb:
      "Sorting, decluttering, and tidy-ups so your space feels calm again.",
    icon: LayoutList,
    metaDescription:
      "Home organisation help in Brighton: decluttering, sorting, and light tidy-ups with Apex Assist.",
    intro:
      "A clearer benchtop or an organised cupboard can change how your whole week feels. I help with practical, respectful tidy-ups — no judgement, just steady progress.",
    whyMe: [
      "I’m patient, methodical, and used to juggling school and commitments — I know how clutter builds up when life is busy.",
      "I treat your home with respect: I ask how you like things done and work at a pace that suits you.",
      "I’m local, easy to reach by text, and focused on small wins that last.",
    ],
    included: [
      "Decluttering and sorting cupboards, desks, or kids’ spaces",
      "Grouping items so you can find things quickly",
      "Light rearranging and packing away (no heavy furniture)",
      "Recycling and rubbish sorted as we go, where you’d like",
    ],
    note: "If a job is bigger than a typical session, we can plan it in stages — text me and we’ll map it out.",
  },
  tutoring: {
    slug: "tutoring",
    title: "Tutoring (maths, science & reading)",
    cardBlurb:
      "Primary-level maths, science, and reading — at your place or online.",
    icon: BookOpen,
    metaDescription:
      "Primary school tutoring in maths, science, and reading — in-home or online — Brighton area, Apex Assist.",
    intro:
      "I’m strongest in maths and science and love helping primary students build confidence. Reading support is available too — whether it’s practice, comprehension, or finding books that click.",
    whyMe: [
      "I’m identified as highly gifted and compete in Da Vinci Decathlon and related programs — including a first-place result in one subject — so I’m used to breaking problems into clear steps.",
      "I’m a student leader at school with a strong record of commendations; I aim to be calm, encouraging, and consistent.",
      "Sessions can be at your home (within my service area) or online, whichever suits your family.",
    ],
    included: [
      "Primary school maths support",
      "Primary school science support",
      "Reading practice and comprehension help",
      "Short, focused sessions with simple takeaways for home practice",
    ],
    note: "Tutoring is for primary school students only. For times I’m not available, I’m working toward involving trusted friends for extra slots — ask when you text.",
  },
  "tech-help": {
    slug: "tech-help",
    title: "Tech help",
    cardBlurb:
      "Patient help with phones, laptops, Wi‑Fi, email, and everyday apps.",
    icon: Laptop,
    metaDescription:
      "Friendly tech support for seniors and families in Brighton — devices, Wi‑Fi, email, Apex Assist.",
    intro:
      "Technology should make life easier, not stressful. I sit with you at your pace — explaining simply, writing steps down if that helps, and never making you feel silly for asking.",
    whyMe: [
      "Seniors and busy parents often tell me I explain things without rushing or jargon.",
      "I’m used to troubleshooting real-life setups: new phones, email, photos, Wi‑Fi, and “where did that file go?”",
      "You get a local contact you can text when something pops up again later.",
    ],
    included: [
      "Phones and tablets: settings, apps, messages, photos",
      "Laptops: basics, email, browsers, simple updates",
      "Home Wi‑Fi and connectivity checks (straightforward cases)",
      "Password resets and safer habits, explained clearly",
    ],
    note: "If something needs a specialist (e.g. hardware repair), I’ll say so honestly and help you find the next step.",
  },
  gardening: {
    slug: "gardening",
    title: "Gardening & outdoor work",
    cardBlurb:
      "Light gardening, sweeping, and outdoor tidy-ups.",
    icon: Sprout,
    metaDescription:
      "Light gardening and outdoor tidy-ups in Brighton — Apex Assist.",
    intro:
      "Outdoor spaces get away from all of us. I help with light gardening and tidy-ups so paths are clear, beds look cared for, and small jobs don’t turn into weekend-eating projects.",
    whyMe: [
      "I’m active every week with kickboxing, tennis, and bouldering — I’m fit for sensible outdoor work and careful with your property.",
      "I follow your priorities: what to trim, what to leave, and how you like things to look.",
      "If a job is too big or needs tools or skills I don’t offer, I’ll say so upfront — no guesswork.",
    ],
    included: [
      "Weeding, light pruning, and sweeping paths or driveways",
      "Green-waste bagging and tidying outdoor areas",
      "Simple planting or watering as agreed",
      "Outdoor furniture or bins moved only when safe and reasonable",
    ],
    note: "Heavy landscaping and power tools are outside what I offer — happy to discuss what’s realistic for a session.",
  },
  "pet-house": {
    slug: "pet-house",
    title: "Pet & house help",
    cardBlurb:
      "Pet feeding and walks, mail, plants — while you’re out or overwhelmed.",
    icon: PawPrint,
    metaDescription:
      "Pet care and light house help in Brighton — walks, feeding, mail, plants — Apex Assist.",
    intro:
      "Pets and plants still need attention when you’re flat out. I offer reliable check-ins — feeding, short walks where appropriate, mail brought in, and simple house tasks so you come home to calm.",
    whyMe: [
      "I’m dependable: student leadership and school commitments have trained me to show up on time and follow instructions.",
      "I’m gentle with animals and careful with keys, alarms, and your routines.",
      "You’re supporting a local student business with clear, text-first communication.",
    ],
    included: [
      "Pet feeding and fresh water",
      "Short walks for dogs that are comfortable with a new walker (we’ll meet first)",
      "Mail and parcels brought inside",
      "Watering indoor plants or a small garden patch",
    ],
    note: "Every pet is different — tell me about temperament, vet contacts, and any rules. If I’m unavailable, I’m building a small team of friends to cover extra times (with your agreement).",
  },
};

export function isServiceSlug(s: string): s is ServiceSlug {
  return s in servicesBySlug;
}
