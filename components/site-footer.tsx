import Link from "next/link";
import { SERVICE_RADIUS_LINE } from "@/lib/location";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-deep/25 bg-primary px-5 py-10 transition-colors dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-medium text-ink dark:text-zinc-100">Apex Assist</p>
        <p className="mt-2 text-sm text-ink/55 dark:text-zinc-400">
          {SERVICE_RADIUS_LINE}
        </p>
        <nav
          className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-ink/60 dark:text-zinc-500"
          aria-label="Footer"
        >
          <Link href="/" className="hover:text-ink dark:hover:text-zinc-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-ink dark:hover:text-zinc-200">
            About
          </Link>
          <Link href="/services" className="hover:text-ink dark:hover:text-zinc-200">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-ink dark:hover:text-zinc-200">
            Pricing
          </Link>
          <Link href="/hours" className="hover:text-ink dark:hover:text-zinc-200">
            Hours
          </Link>
          <Link href="/contact" className="hover:text-ink dark:hover:text-zinc-200">
            Contact
          </Link>
        </nav>
        <p className="mt-6 text-xs text-ink/40 dark:text-zinc-600">
          © {new Date().getFullYear()} Apex Assist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
