import Link from "next/link";
import { ServicesNavDropdown } from "@/components/services-nav-dropdown";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link
          href="/"
          className="min-w-0 max-w-[min(100%,16rem)] sm:max-w-xs"
        >
          <span className="block text-lg font-semibold leading-tight tracking-tight text-ink">
            Apex Assist
          </span>
        </Link>
        <nav
          className="order-3 flex w-full basis-full flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink/75 sm:order-none sm:w-auto sm:basis-auto"
          aria-label="Main"
        >
          <Link href="/about" className="transition hover:text-ink">
            About
          </Link>
          <ServicesNavDropdown />
          <Link href="/pricing" className="transition hover:text-ink">
            Pricing
          </Link>
          <Link href="/hours" className="transition hover:text-ink">
            Hours
          </Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-primary-deep/50 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition hover:border-primary-deep hover:bg-primary/40"
        >
          Text me
        </Link>
      </div>
    </header>
  );
}
