import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Hours & availability",
  description:
    "When Apex Assist is available: Thursday afternoons and alternate Saturdays, Brighton Central.",
};

export default function HoursPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50 dark:text-zinc-500">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600">
            Home
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          Hours
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-4xl">
          Availability
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
          I fit Apex Assist around school and training. Regular hours are:
        </p>
        <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/80 dark:text-zinc-300">
          <li className="flex gap-3 rounded-xl border-2 border-emerald-800 bg-primary/35 px-4 py-3 dark:border-primary dark:bg-emerald-800/30">
            <Home className="mt-0.5 h-5 w-5 shrink-0 text-ink/50 dark:text-zinc-500" aria-hidden />
            <span>
              <strong className="font-medium text-ink dark:text-zinc-100">Thursday</strong> afternoons,
              finishing before 5:30&nbsp;pm
            </span>
          </li>
          <li className="flex gap-3 rounded-xl border-2 border-emerald-800 bg-primary/35 px-4 py-3 dark:border-primary dark:bg-emerald-800/30">
            <CalendarDays
              className="mt-0.5 h-5 w-5 shrink-0 text-ink/50 dark:text-zinc-500"
              aria-hidden
            />
            <span>
              <strong className="font-medium text-ink dark:text-zinc-100">Every second Saturday</strong>, from
              about 1:00&nbsp;pm (afternoons)
            </span>
          </li>
        </ul>
        <p className="mt-6 text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
          Public holidays and school breaks can add or remove time slots compared with my
          usual hours, so contact me if you&apos;re unsure.
        </p>
        <p className="mt-6 text-sm text-ink/55 dark:text-zinc-500">
          Contact me for the next Saturday I&apos;m on, or to discuss online tutoring
          times. When I&apos;m booked out, I may suggest a trusted friend for tutoring
          or hands-on help, only if you&apos;re comfortable with that.
        </p>
        <p className="mt-8">
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4 dark:text-zinc-300 dark:decoration-zinc-600"
          >
            Contact me →
          </Link>
        </p>
      </div>
    </main>
  );
}
