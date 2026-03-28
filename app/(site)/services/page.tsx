import Link from "next/link";
import { SERVICE_ORDER, servicesBySlug } from "@/lib/services";

export const metadata = {
  title: "Services",
  description:
    "Tutoring, tech help, gardening, pet and house help, and home organisation in Brighton — Apex Assist.",
};

export default function ServicesIndexPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2">
            Home
          </Link>
          <span className="mx-2 text-ink/30">/</span>
          Services
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/70">
          Each page explains why local families and seniors choose Apex Assist, what
          is included, and how I like to work. Start with whatever fits your week.
        </p>
        <ul className="mt-12 space-y-3">
          {SERVICE_ORDER.map((slug) => {
            const s = servicesBySlug[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="flex flex-col gap-1 rounded-2xl border border-ink/8 bg-primary/25 px-5 py-4 transition hover:border-ink/15 hover:bg-primary/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-ink">{s.title}</span>
                  <span className="text-sm text-ink/60">{s.cardBlurb}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
