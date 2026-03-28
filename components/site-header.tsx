import Link from "next/link";
import { SMS_E164 } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          Apex Assist
        </Link>
        <nav
          className="order-3 flex w-full basis-full flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink/75 sm:order-none sm:w-auto sm:basis-auto"
          aria-label="Main"
        >
          <Link href="/#about-lucas" className="transition hover:text-ink">
            About
          </Link>
          <Link href="/services" className="transition hover:text-ink">
            Services
          </Link>
          <Link href="/#pricing" className="transition hover:text-ink">
            Pricing
          </Link>
          <Link href="/#availability" className="transition hover:text-ink">
            Hours
          </Link>
          <Link href="/#contact" className="transition hover:text-ink">
            Contact
          </Link>
        </nav>
        <a
          href={`sms:${SMS_E164}`}
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-ink transition hover:bg-primary-deep/30"
        >
          Text me
        </a>
      </div>
    </header>
  );
}
