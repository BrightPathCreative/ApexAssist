import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SMS_E164, SMS_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Apex Assist — text Lucas for local help in Brighton Central, or send a message.",
};

export default function ContactPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-lg">
        <p className="text-sm font-medium text-ink/50 dark:text-zinc-500">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2 dark:decoration-zinc-600">
            Home
          </Link>
          <span className="mx-2 text-ink/30 dark:text-zinc-600">/</span>
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-zinc-100 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70 dark:text-zinc-400">
          The fastest way to reach me is a text. You can also use the form — it lines
          up your details, then you tap once to open your texting app and send.
        </p>
        <div className="mt-8 rounded-2xl bg-primary/50 p-6 dark:bg-emerald-800/35 sm:p-8">
          <p className="mb-6 text-center">
            <a
              href={`sms:${SMS_E164}`}
              className="text-lg font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink/50 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {SMS_LABEL}
            </a>
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
