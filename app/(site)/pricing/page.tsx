import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Estimated hourly rates for Apex Assist in Brighton — tutoring, tech help, home organisation, dog walking, and gardening.",
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
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/65">
          The hourly figures below are <strong className="font-medium text-ink/80">estimates only</strong>. I&apos;ll confirm what applies when you text. Actual cost may be higher or lower depending on what&apos;s involved — it&apos;s at my discretion. For example, harder or more complex gardening jobs might be at an increased price; however, easier, quick tech fixes could also be much lower priced.
        </p>
        <h2 className="mt-10 text-lg font-semibold text-ink">
          Estimated hourly rates
        </h2>
        <div className="mt-4 space-y-4">
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
          These rates are meant to be competitive and budget-friendly — strong value for
          clients while keeping things sustainable on my side. Longer bookings or regular
          help may be discounted; ask when you get in touch.
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
