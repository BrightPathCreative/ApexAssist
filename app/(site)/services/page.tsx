import Link from "next/link";
import { SERVICE_ORDER, servicesBySlug } from "@/lib/services";

export const metadata = {
  title: "Services",
  description:
    "Tutoring, tech help, gardening, dog walking, and home organisation in Brighton Central — Apex Assist.",
};

export default function ServicesIndexPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50 dark:text-zinc-500">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600">
            Home
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          Services
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-4xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
          Each service has its own page — benefits, what&apos;s included, and how I
          work. Start with whatever fits your week.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICE_ORDER.map((slug) => {
            const s = servicesBySlug[slug];
            const Icon = s.icon;
            return (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="flex h-full gap-4 rounded-2xl border border-ink/5 bg-primary/30 p-5 shadow-sm transition hover:border-ink/15 hover:bg-primary/45 dark:border-zinc-700 dark:bg-emerald-800/25 dark:hover:border-zinc-600 dark:hover:bg-emerald-800/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-sm dark:bg-zinc-800 dark:text-zinc-100">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-medium text-ink dark:text-zinc-100">{s.title}</h2>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65 dark:text-zinc-400">
                      {s.cardBlurb}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-ink underline decoration-ink/25 underline-offset-2 dark:text-zinc-300 dark:decoration-zinc-600">
                      Read more
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-center text-[17px] text-ink/70 dark:text-zinc-400">
          Ready to book?{" "}
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4 dark:text-zinc-300 dark:decoration-zinc-600"
          >
            Contact me
          </Link>
          {" · "}
          <Link
            href="/pricing"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4 dark:text-zinc-300 dark:decoration-zinc-600"
          >
            See pricing
          </Link>
        </p>
      </div>
    </main>
  );
}
