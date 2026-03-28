import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Hours & availability",
  description:
    "When Apex Assist is available — Thursday afternoons and alternate Saturdays, Brighton Central.",
};

export default function HoursPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2">
            Home
          </Link>
          <span className="mx-2 text-ink/30">/</span>
          Hours
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Availability
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-ink/70">
          I fit Apex Assist around school and training. Regular hours are:
        </p>
        <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/80">
          <li className="flex gap-3 rounded-xl border border-ink/8 bg-primary/35 px-4 py-3">
            <Home className="mt-0.5 h-5 w-5 shrink-0 text-ink/50" aria-hidden />
            <span>
              <strong className="font-medium text-ink">Thursday</strong> — afternoons,
              finishing before 6:00&nbsp;pm
            </span>
          </li>
          <li className="flex gap-3 rounded-xl border border-ink/8 bg-primary/35 px-4 py-3">
            <CalendarDays
              className="mt-0.5 h-5 w-5 shrink-0 text-ink/50"
              aria-hidden
            />
            <span>
              <strong className="font-medium text-ink">Every second Saturday</strong>{" "}
              — from about 1:00&nbsp;pm (afternoons)
            </span>
          </li>
        </ul>
        <p className="mt-6 text-sm text-ink/55">
          Text me for the next Saturday I&apos;m on, or to discuss online tutoring
          times. When I&apos;m booked out, I may suggest a trusted friend for tutoring
          or hands-on help — only if you&apos;re comfortable with that.
        </p>
        <p className="mt-8">
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4"
          >
            Text or message me →
          </Link>
        </p>
      </div>
    </main>
  );
}
