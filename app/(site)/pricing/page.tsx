import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Straightforward rates for Apex Assist — home help, tutoring & tech, and outdoor work in Brighton.",
};

export default function PricingPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2">
            Home
          </Link>
          <span className="mx-2 text-ink/30">/</span>
          Pricing
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Pricing
        </h1>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink/65">
          Straightforward rates by type of work. I&apos;ll confirm the exact quote when
          you text — no surprises.
        </p>
        <div className="mt-10 space-y-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-5 sm:flex-row sm:items-center"
            >
              <div>
                <h2 className="font-medium text-ink">{tier.name}</h2>
                <p className="mt-1 text-sm text-ink/60">{tier.detail}</p>
              </div>
              <p className="text-lg font-semibold tabular-nums text-ink sm:text-right">
                {tier.price}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink/55">
          Final pricing depends on the job. Longer bookings or regular help may be
          discounted — ask when you get in touch.
        </p>
        <p className="mt-8">
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4"
          >
            Contact me to book or ask a question →
          </Link>
        </p>
      </div>
    </main>
  );
}
