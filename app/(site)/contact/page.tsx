import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Apex Assist: text Lucas for local help in Brighton Central, or send a message.",
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
          Use the form below and I&apos;ll get back to you as soon as I can.
        </p>
        <div className="mt-8 h-[1220px] w-full overflow-hidden rounded-[20px]">
          <iframe
            src="https://links.brightpathcreative.com.au/widget/form/qDmhkmNeuoJjlzyftHRU"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "20px" }}
            id="inline-qDmhkmNeuoJjlzyftHRU"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 7"
            data-height="871"
            data-layout-iframe-id="inline-qDmhkmNeuoJjlzyftHRU"
            data-form-id="qDmhkmNeuoJjlzyftHRU"
            title="Form 7"
          />
        </div>
      </div>
    </main>
  );
}
