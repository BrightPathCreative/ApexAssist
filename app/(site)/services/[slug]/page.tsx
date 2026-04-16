import Link from "next/link";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";
import {
  SERVICE_ORDER,
  isServiceSlug,
  servicesBySlug,
  type ServiceSlug,
} from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return { title: "Service | Apex Assist" };
  const s = servicesBySlug[slug as ServiceSlug];
  return {
    title: s.title,
    description: s.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const s = servicesBySlug[slug];
  const idx = SERVICE_ORDER.indexOf(slug);
  const prev = idx > 0 ? SERVICE_ORDER[idx - 1] : null;
  const next = idx < SERVICE_ORDER.length - 1 ? SERVICE_ORDER[idx + 1] : null;

  return (
    <main className="px-5 py-14 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50 dark:text-zinc-500">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600">
            Home
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          <Link href="/services" className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600">
            Services
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          <span className="text-ink/70 dark:text-zinc-400">{s.title}</span>
        </p>

        {s.favoriteCallout ? (
          <p className="mt-5 flex items-start gap-2.5 rounded-2xl border-2 border-emerald-800 bg-primary/70 px-4 py-3.5 text-[15px] leading-relaxed text-ink/85 dark:border-primary dark:bg-emerald-800/45 dark:text-zinc-200 sm:text-[16px]">
            <Star
              className="mt-0.5 h-5 w-5 shrink-0 fill-primary-deep/35 text-primary-deep dark:fill-emerald-700/50 dark:text-emerald-500"
              strokeWidth={1.75}
              aria-hidden
            />
            <span>{s.favoriteCallout}</span>
          </p>
        ) : null}

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-4xl">
          {s.title}
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-ink/75 dark:text-zinc-400">{s.intro}</p>

        <h2 className="mt-12 text-xl font-semibold text-ink dark:text-zinc-100">
          Why work with me?
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-[17px] leading-relaxed text-ink/75 marker:text-zinc-500 dark:text-zinc-400 dark:marker:text-zinc-600">
          {s.whyMe.map((item, i) => (
            <li key={`why-${i}`}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-semibold text-ink dark:text-zinc-100">
          What&apos;s included
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-[17px] leading-relaxed text-ink/75 marker:text-zinc-500 dark:text-zinc-400 dark:marker:text-zinc-600">
          {s.included.map((item, i) => (
            <li key={`inc-${i}`}>{item}</li>
          ))}
        </ul>

        {s.note ? (
          <p className="mt-10 rounded-2xl border-2 border-emerald-800 bg-primary/40 px-5 py-4 text-[15px] leading-relaxed text-ink/75 dark:border-primary dark:bg-emerald-800/35 dark:text-zinc-400">
            {s.note}
          </p>
        ) : null}

        <div className="mt-14 flex flex-col gap-4 border-t-2 border-emerald-800/50 pt-10 dark:border-primary/40 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-ink/90 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          >
            Text me about this service
          </Link>
          <Link
            href="/services"
            className="text-center text-sm font-medium text-ink underline decoration-ink/25 underline-offset-4 dark:text-zinc-400 dark:decoration-zinc-600 sm:text-right"
          >
            All services
          </Link>
        </div>

        <nav
          className="mt-10 flex flex-col gap-3 border-t-2 border-emerald-800/50 pt-10 text-sm dark:border-primary/40 sm:flex-row sm:justify-between"
          aria-label="Other services"
        >
          {prev ? (
            <Link
              href={`/services/${prev}`}
              className="text-ink/70 underline decoration-ink/20 underline-offset-2 hover:text-ink dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200"
            >
              ← {servicesBySlug[prev].title.split(" (")[0]}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/services/${next}`}
              className="text-ink/70 underline decoration-ink/20 underline-offset-2 hover:text-ink dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200 sm:text-right"
            >
              {servicesBySlug[next].title.split(" (")[0]} →
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
