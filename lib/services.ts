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
  | "dog-walking";

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
  /** Personal note shown at the top of the detail page (e.g. a favourite service). */
  favoriteCallout?: string;
};

export const SERVICE_ORDER: ServiceSlug[] = [
  "home-organisation",
  "tutoring",
  "tech-help",
  "gardening",
  "dog-walking",
];

export const servicesBySlug: Record<ServiceSlug, ServiceDefinition> = {
  "home-organisation": {
    slug: "home-organisation",
    title: "Home organisation",
    favoriteCallout:
      "I quite enjoy this service — I find something so satisfying about cleaning and making things precisely organised.",
    cardBlurb:
      "Sorting, decluttering, and tidy-ups so your space feels calm again.",
    icon: LayoutList,
    metaDescription:
      "Home organisation help in Brighton Central: decluttering, sorting, and light tidy-ups with Apex Assist.",
    intro:
      "A clearer benchtop or an organised cupboard can change how your whole week feels. I help with practical, respectful tidy-ups — no judgement, just steady progress.",
    whyMe: [
      "I’m patient, methodical, and used to juggling school and commitments — I know how clutter builds up when life is busy.",
      "It’s closer to old-fashioned neighbourhood help than a faceless service: I’m local, and you can reach me on text when you want to sort a time or ask a quick question.",
      "I don’t arrive with a one-size-fits-all system — we decide what “sorted” means for your bench, cupboard, or kids’ zone, then I work to that so you’re not left wondering where anything went.",
    ],
    included: [
      "Decluttering and sorting cupboards, desks, or kids’ spaces",
      "Grouping items so you can find things quickly",
      "Detailed rearranging and packing away",
      "Recycling and rubbish sorted as we go, where you’d like",
    ],
  },
  tutoring: {
    slug: "tutoring",
    title: "Tutoring (maths, science & reading)",
    cardBlurb:
      "Primary maths, science, and reading; Years 7–8 maths too — at your place or online.",
    icon: BookOpen,
    metaDescription:
      "Primary tutoring in maths, science, and reading; Year 7–8 maths — in-home or online — Brighton Central, Apex Assist.",
    intro:
      "I’m strongest in maths and science and love helping primary students build confidence. I also tutor early high-school maths for Year 7 and Year 8. Reading support is aimed at primary — practice, comprehension, or finding books that click.",
    whyMe: [
      "I’m identified as highly gifted and compete in Da Vinci Decathlon and related programs — including a first-place result in one subject — so I’m used to breaking problems into clear steps.",
      "I’m a student leader at school with a strong record of commendations; I aim to be calm, encouraging, and consistent.",
      "Sessions can be at your home (within my service area) or online, whichever suits your family.",
    ],
    included: [
      "Primary school maths support",
      "Year 7 and Year 8 maths support (early high school)",
      "Primary school science support",
      "Reading practice and comprehension help (primary)",
      "Short, focused sessions with simple takeaways for home practice",
    ],
    note: "I’m working toward involving trusted, highly intelligent friends — all in advanced maths — for extra timeslots when I’m booked or you need another slot. I only suggest people I’d trust with my own reputation. Ask when you text.",
  },
  "tech-help": {
    slug: "tech-help",
    title: "Tech help",
    cardBlurb:
      "Patient help with phones, laptops, Wi‑Fi, email, and everyday apps.",
    icon: Laptop,
    metaDescription:
      "Friendly tech support for seniors and families in Brighton Central — devices, Wi‑Fi, email, Apex Assist.",
    intro:
      "Technology should make life easier, not stressful. I sit with you at your pace — explaining simply, writing steps down if that helps, and never making you feel silly for asking.",
    whyMe: [
      "Seniors and busy parents often tell me I explain things without rushing or jargon.",
      "I’m used to troubleshooting real-life setups: new phones, email, photos, Wi‑Fi, and “where did that file go?”",
      "You get a local contact you can text when something pops up again later.",
    ],
    included: [
      "Set-up for all new devices",
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
      "Garden care, outdoor tidy-ups, and bigger weekend projects — extra hands when needed.",
    icon: Sprout,
    metaDescription:
      "Gardening and outdoor work in Brighton Central — tidy-ups to team weekend jobs, Apex Assist.",
    intro:
      "Outdoor spaces slip when life is busy. I take on garden and outdoor work at different scales — regular upkeep, one-off tidy-ups, and bigger jobs we plan in advance. For a proper weekend project, I can line up a few of us so there are enough people on site to get it done.",
    whyMe: [
      "Regular practice with hands-on work means I’m comfortable putting in a full outdoor session and seeing something through to the end.",
      "I follow your priorities: what to trim, what to leave, and how you like things to look.",
      "If a job needs skills, gear, or licences I don’t have, I’ll say so upfront — no guesswork.",
    ],
    included: [
      "Weeding, pruning, and sweeping paths or driveways",
      "Green-waste bagging and tidying outdoor areas",
      "Simple planting or watering as agreed",
      "Outdoor furniture or bins moved only when safe and reasonable",
      "Straightforward outdoor repairs where it makes sense — e.g. stabilising or patching a planter box. I may already have tools that suit; it depends on the job, so text me with a quick description or a photo",
    ],
    note: "Bigger work is fine when we schedule it — I can bring extra people for a weekend push if the job needs it. Anything that needs heavy machinery, regulated trades, or specialist equipment is something I’ll flag honestly so you’re not left wondering.",
  },
  "dog-walking": {
    slug: "dog-walking",
    title: "Dog walking",
    favoriteCallout:
      "This is my personal favourite service — when I grow up I want to be a vet, and I absolutely love dogs and animals in general.",
    cardBlurb:
      "Short, reliable walks when you’re busy or away — we meet first so your dog is comfortable.",
    icon: PawPrint,
    metaDescription:
      "Dog walking in Brighton Central — local walks for dogs, meet-and-greet first, Apex Assist.",
    intro:
      "When work, school runs, or travel get in the way, dogs still need their walk. I offer straightforward dog walking for dogs that are happy with a new walker after we’ve met — same routes and habits you prefer, leash and harness as you specify.",
    whyMe: [
      "I’m used to juggling school and other commitments, so I take turning up on time and following your instructions seriously.",
      "I’m gentle with dogs and careful with keys, gates, leashes, harnesses, and any notes you leave about behaviour or no-go zones.",
      "I’m easy to reach by text — good for last-minute changes, a quick check-in after the walk, or questions.",
    ],
    included: [
      "Short walks on a schedule we agree (length and timing to suit your dog)",
      "Dogs that are comfortable with a new walker after a meet-and-greet first",
      "Your preferred route, pace, and gear (leash, harness, poo bags as you supply)",
      "Pick-up and drop-off from your home when that’s what we’ve arranged",
    ],
    note: "Every dog is different — tell me about temperament, vet contacts, and walking rules (reactivity, other dogs, traffic). If I’m unavailable, I’m working toward a small group of trusted friends to cover extra times, only with your OK.",
  },
};

export function isServiceSlug(s: string): s is ServiceSlug {
  return s in servicesBySlug;
}
