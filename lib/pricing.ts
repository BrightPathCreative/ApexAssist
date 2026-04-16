/** Order matches `SERVICE_ORDER` in `lib/services.ts` (services index & nav). */
export const pricingTiers = [
  {
    name: "Home organisation",
    detail: "Decluttering, sorting & light tidy-ups",
    price: "$30 / hr",
  },
  {
    name: "Tutoring",
    detail: "Primary maths, science & reading; Year 7 and 8 maths",
    price: "$35 / hr",
  },
  {
    name: "Tech help",
    detail: "Devices, Wi‑Fi, email & everyday apps",
    price: "$15 / hr",
  },
  {
    name: "Gardening & outdoor work",
    detail: "Weeding, tidy-ups & outdoor tasks",
    price: "$25 / hr",
  },
  {
    name: "Dog walking",
    detail: "Scheduled walks, meet-and-greet first",
    price: "$20 / hr",
  },
] as const;
