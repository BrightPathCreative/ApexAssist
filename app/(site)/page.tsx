import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AREA_LABEL } from "@/lib/location";
import { SMS_E164 } from "@/lib/site";

const navLinks = [
  {
    href: "/about",
    title: "About",
    description: "Who I am and why I started Apex Assist.",
  },
  {
    href: "/services",
    title: "Services",
    description: "Tutoring, tech help, gardening, dog walking, organisation.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    description: "Estimated rates, confirmed before we start.",
  },
  {
    href: "/hours",
    title: "Hours",
    description: `When I’m available in ${AREA_LABEL}.`,
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Text me or send a message.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      {/* Hero: long fades; light (mint to primary) mirrors dark (emerald to zinc-950). */}
      <section
        className="border-b-2 border-emerald-800/35 px-5 pb-12 pt-14 sm:pb-16 sm:pt-20 dark:border-primary/40 bg-gradient-to-b from-[#A8C9B6] from-0% via-[#C8E4D4] via-[42%] to-primary to-100% dark:from-emerald-700 dark:from-0% dark:via-emerald-900/95 dark:via-[48%] dark:to-zinc-950 dark:to-100%"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold leading-tight text-ink dark:text-zinc-100 sm:text-4xl sm:leading-tight">
            Apex Assist: local help from Lucas
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
            Practical Life Support for locals: tutoring for primary students, tech help,
            light gardening, dog walking, and home organisation. Every section
            below is its own page, so tap through in your own time.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={`sms:${SMS_E164}`}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border-2 border-white/35 bg-ink px-8 py-4 text-[17px] font-medium text-white shadow-sm transition hover:bg-ink/90 active:scale-[0.99] dark:border-primary dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white sm:w-auto"
            >
              Text me
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-14 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold text-ink dark:text-zinc-100 sm:text-xl">
            Where would you like to go?
          </h2>
          <ul className="mx-auto mt-8 grid max-w-2xl auto-rows-fr gap-3 sm:grid-cols-2">
            {navLinks.map(({ href, title, description }, i) => {
              const isLast = i === navLinks.length - 1;
              return (
                <li
                  key={href}
                  className={`flex h-full min-h-0 ${
                    isLast ? "sm:col-span-2 sm:justify-center" : ""
                  }`}
                >
                  <Link
                    href={href}
                    className={`flex min-h-[14.5rem] w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-emerald-800 bg-white p-6 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:scale-[1.02] hover:border-emerald-950 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 dark:border-primary dark:bg-zinc-900 dark:hover:border-primary-muted dark:focus-visible:ring-primary dark:focus-visible:ring-offset-zinc-950 sm:min-h-[15.5rem] ${
                      isLast ? "sm:max-w-[calc(50%-0.375rem)]" : ""
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-ink dark:bg-emerald-700/55 dark:text-zinc-100">
                      <ChevronRight
                        className="h-6 w-6"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>
                    <span className="min-w-0 px-1">
                      <span className="block text-lg font-semibold text-ink dark:text-zinc-100 sm:text-xl">
                        {title}
                      </span>
                      <span className="mt-2 block text-base leading-relaxed text-ink/65 dark:text-zinc-400 sm:text-[17px]">
                        {description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
