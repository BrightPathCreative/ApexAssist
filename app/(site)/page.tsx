import Link from "next/link";
import { servicesBySlug, type ServiceSlug } from "@/lib/services";

const HOME_SERVICES = [
  {
    slug: "home-organisation",
    title: "Home organisation",
    description:
      "Sorting, decluttering, and tidy-ups so your space feels calm again.",
    price: "$30 / hr",
  },
  {
    slug: "tutoring",
    title: "Tutoring (maths, science & reading)",
    description:
      "Primary maths, science, and reading; Years 7 and 8 maths too, at your place or online.",
    price: "$35 / hr",
  },
  {
    slug: "tech-help",
    title: "Tech help",
    description:
      "Patient help with phones, laptops, Wi‑Fi, email, and everyday apps.",
    price: "$15 / hr",
  },
  {
    slug: "gardening",
    title: "Gardening & outdoor work",
    description:
      "Garden care, outdoor tidy-ups, and bigger weekend projects, with extra hands when needed.",
    price: "$25 / hr",
  },
  {
    slug: "dog-walking",
    title: "Dog walking",
    description:
      "Short, reliable walks when you're busy or away. We meet first so your dog is comfortable.",
    price: "$20 / hr",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section
        className="border-b-2 border-emerald-800/35 px-5 pb-12 pt-14 sm:pb-16 sm:pt-20 dark:border-primary/40 bg-gradient-to-b from-[#A8C9B6] from-0% via-[#C8E4D4] via-[42%] to-primary to-100% dark:from-emerald-700 dark:from-0% dark:via-emerald-900/95 dark:via-[48%] dark:to-zinc-950 dark:to-100%"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold leading-tight text-ink dark:text-zinc-100 sm:text-4xl sm:leading-tight">
            Apex Assist: Local Assistance
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
            Practical Life Support for locals: From tutoring and tech help to gardening and home organization, we provide diverse assistance tailored to your needs.
          </p>
        </div>
      </section>

      <section className="bg-primary px-5 py-14 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-2xl">
            Five Services, One Form Away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
            Each service has its own page with benefits, what&apos;s included, and how I work. Start with whatever fits your week.
          </p>

          <ul className="mt-10 space-y-4">
            {HOME_SERVICES.map((s) => {
              const slug = s.slug as ServiceSlug;
              const Icon = servicesBySlug[slug].icon;
              return (
                <li
                  key={s.slug}
                  className="flex gap-4 rounded-2xl border-2 border-emerald-800 bg-white px-5 py-5 dark:border-primary dark:bg-zinc-900"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-ink shadow-sm dark:bg-emerald-700/55 dark:text-zinc-100">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-ink dark:text-zinc-100">
                      <Link
                        href={`/services/${s.slug}`}
                        className="underline decoration-ink/25 underline-offset-2 transition hover:decoration-ink/50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
                      >
                        {s.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70 dark:text-zinc-400 sm:text-[17px]">
                      {s.description}
                    </p>
                    <p className="mt-3 text-base font-semibold tabular-nums text-ink dark:text-zinc-100">
                      {s.price}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t-2 border-emerald-800/35 bg-primary px-5 py-14 sm:py-16 dark:border-primary/40 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <h2 className="shrink-0 text-left text-xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-2xl lg:pt-1 lg:max-w-[11rem]">
            Learn About Me
          </h2>
          <div className="min-w-0 flex-1 rounded-2xl border-2 border-emerald-800 bg-white px-5 py-5 shadow-sm dark:border-primary dark:bg-zinc-900 sm:px-6 sm:py-6">
            <p className="text-[17px] leading-relaxed text-ink/75 dark:text-zinc-300">
              I&apos;m <strong className="font-medium text-ink dark:text-zinc-100">Lucas</strong>. I&apos;m
              fourteen, in Year 9, and I live in Brighton.{" "}
              <strong className="font-medium text-ink dark:text-zinc-100">Apex Assist</strong> is my small
              business. I&apos;m trying to get it up and running, grow it over time, and use it to help my
              local community lighten the load where I can. Some of what I offer is{" "}
              <strong className="font-medium text-ink dark:text-zinc-100">tutoring</strong>,{" "}
              <strong className="font-medium text-ink dark:text-zinc-100">tech help</strong>,{" "}
              <strong className="font-medium text-ink dark:text-zinc-100">outdoor and gardening work</strong>,{" "}
              <strong className="font-medium text-ink dark:text-zinc-100">dog walking</strong>, and{" "}
              <strong className="font-medium text-ink dark:text-zinc-100">home organisation</strong>.
            </p>
            <p className="mt-5">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-[17px] font-medium text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink/60 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
              >
                Read More <span aria-hidden>→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-emerald-800/35 bg-primary px-5 py-12 dark:border-primary/40 dark:bg-zinc-950">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border-2 border-emerald-800 bg-white px-6 py-6 shadow-sm dark:border-primary dark:bg-zinc-900 sm:px-8 sm:py-8">
            <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="text-center text-lg font-semibold text-ink dark:text-zinc-100 sm:text-left sm:text-xl">
                Ready to contact me?
              </p>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-emerald-800 bg-primary/40 px-8 py-3.5 text-center text-[17px] font-medium text-ink shadow-sm transition hover:border-emerald-950 hover:bg-primary/60 active:scale-[0.99] dark:border-primary dark:bg-emerald-800/35 dark:text-zinc-100 dark:hover:border-primary-muted dark:hover:bg-emerald-800/50 sm:min-w-[11rem]"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
