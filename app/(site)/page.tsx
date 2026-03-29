import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AREA_LABEL, SERVICE_RADIUS_LINE } from "@/lib/location";
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
    description: "Estimated rates — confirmed before we start.",
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
      <section className="border-b border-primary-deep/20 bg-[linear-gradient(180deg,var(--hero-green-top)_0%,var(--hero-green-mid)_42%,var(--hero-green-base)_78%,#E8F5E9_100%)] px-5 pb-12 pt-14 sm:pb-16 sm:pt-20 [--hero-green-base:#E8F5E9] [--hero-green-mid:#DFF0E3] [--hero-green-top:#D0E9D6]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl sm:leading-tight">
            Apex Assist — local help from Lucas
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink/70">
            Practical Life Support for locals: tutoring for primary students, tech help,
            light gardening, dog walking, and home organisation. Every section
            below is its own page — tap through in your own time.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={`sms:${SMS_E164}`}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-ink px-8 py-4 text-[17px] font-medium text-white shadow-sm transition hover:bg-ink/90 active:scale-[0.99] sm:w-auto"
            >
              Text me
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/50">{SERVICE_RADIUS_LINE}</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold text-ink sm:text-xl">
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
                    className={`flex min-h-[14.5rem] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:scale-[1.02] hover:border-ink hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 sm:min-h-[15.5rem] ${
                      isLast ? "sm:max-w-[calc(50%-0.375rem)]" : ""
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-ink">
                      <ChevronRight
                        className="h-6 w-6"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>
                    <span className="min-w-0 px-1">
                      <span className="block text-lg font-semibold text-ink sm:text-xl">
                        {title}
                      </span>
                      <span className="mt-2 block text-base leading-relaxed text-ink/65 sm:text-[17px]">
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
