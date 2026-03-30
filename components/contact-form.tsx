"use client";

import { useState } from "react";
import { SMS_E164, SMS_LABEL } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [smsUrl, setSmsUrl] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      name && `Name: ${name}`,
      phone && `My number: ${phone}`,
      message && message,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `sms:${SMS_E164}${body ? `?body=${encodeURIComponent(body)}` : ""}`;
    setSmsUrl(url);
    setSent(true);
  }

  if (sent && smsUrl) {
    return (
      <div
        className="flex flex-col gap-4"
        role="status"
        aria-live="polite"
      >
        <p className="rounded-xl border border-primary-deep/25 bg-primary/80 px-5 py-4 text-center text-[15px] leading-relaxed text-ink dark:border-emerald-600/45 dark:bg-emerald-800/45 dark:text-zinc-200">
          <strong className="font-medium text-ink dark:text-zinc-100">Your message is ready.</strong> Tap{" "}
          <span className="whitespace-nowrap">“Open text message”</span> below to send
          it from your phone. If your device doesn&apos;t open Messages, text{" "}
          <strong className="font-medium text-ink dark:text-zinc-100">{SMS_LABEL}</strong> with the same
          details. I&apos;ll get back to you as soon as I can.
        </p>
        <a
          href={smsUrl}
          className="inline-flex w-full items-center justify-center rounded-xl bg-ink px-6 py-3.5 text-center text-[15px] font-medium text-white transition hover:bg-ink/90 active:scale-[0.99] dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
        >
          Open text message
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none ring-ink/20 transition focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-600"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-zinc-300">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none ring-ink/20 transition focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-600"
          placeholder="So I can text you back"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none ring-ink/20 transition focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-600"
          placeholder="What you need help with, and preferred times"
        />
      </div>
      <button
        type="submit"
        className="mt-1 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-ink/90 active:scale-[0.99] dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
      >
        Prepare text message
      </button>
    </form>
  );
}
