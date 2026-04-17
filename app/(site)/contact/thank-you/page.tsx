import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thanks for contacting Apex Assist. Lucas will reply soon.",
};

export default function ContactThankYouPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-lg">
        <p className="text-sm font-medium text-ink/50 dark:text-zinc-500">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600">
            Home
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          <Link
            href="/contact"
            className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600"
          >
            Contact
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          Thank you
        </p>

        <div className="mt-6 rounded-[20px] border-2 border-emerald-800 bg-primary/50 p-8 text-center dark:border-primary dark:bg-emerald-800/35 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-4xl">
            Thank you
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/70 dark:text-zinc-300">
            Your message has been sent. I&apos;ll get back to you as soon as I can.
          </p>
          <p className="mt-6">
            <Link
              href="/"
              className="font-medium text-ink underline decoration-ink/30 underline-offset-4 dark:text-zinc-200 dark:decoration-zinc-600"
            >
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
