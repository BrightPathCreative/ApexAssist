import Image from "next/image";
import Link from "next/link";
import { ServicesNavDropdown } from "@/components/services-nav-dropdown";
import { ThemeToggle } from "@/components/theme-toggle";

const LOGO_SRC = "/logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-emerald-800/45 bg-white/90 backdrop-blur-md transition-colors dark:border-primary/45 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link
          href="/"
          className="flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2.5 sm:max-w-xs"
        >
          <Image
            src={LOGO_SRC}
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain dark:brightness-0 dark:invert"
            priority
            unoptimized
          />
          <span className="block text-lg font-semibold leading-tight tracking-tight text-ink dark:text-zinc-100">
            Apex Assist
          </span>
        </Link>
        <nav
          className="order-3 flex w-full basis-full flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink/75 dark:text-zinc-400 sm:order-none sm:w-auto sm:basis-auto"
          aria-label="Main"
        >
          <Link href="/about" className="transition hover:text-ink dark:hover:text-zinc-100">
            About
          </Link>
          <ServicesNavDropdown />
          <Link href="/pricing" className="transition hover:text-ink dark:hover:text-zinc-100">
            Pricing
          </Link>
          <Link href="/hours" className="transition hover:text-ink dark:hover:text-zinc-100">
            Hours
          </Link>
        </nav>
        <div className="relative z-10 flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full border-2 border-emerald-800 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition hover:border-emerald-950 hover:bg-primary/40 dark:border-primary dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-primary-muted dark:hover:bg-emerald-800/45"
          >
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
}
