"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { SERVICE_ORDER, servicesBySlug } from "@/lib/services";

export function ServicesNavDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-0.5 rounded-md text-sm font-medium text-ink/75 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 shrink-0 opacity-80 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          className="absolute left-0 top-full z-30 mt-2 min-w-[min(100vw-2.5rem,16rem)] max-w-[calc(100vw-2.5rem)] rounded-xl border-2 border-emerald-800 bg-white py-2 shadow-lg dark:border-primary dark:bg-zinc-900 sm:min-w-[15rem]"
        >
          <Link
            href="/services"
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-ink/75 transition hover:bg-primary/50 hover:text-ink dark:text-zinc-400 dark:hover:bg-emerald-800/45 dark:hover:text-zinc-100"
            onClick={() => setOpen(false)}
          >
            All services
          </Link>
          <div className="my-1 border-t-2 border-emerald-800/40 dark:border-primary/50" aria-hidden />
          {SERVICE_ORDER.map((slug) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-ink/75 transition hover:bg-primary/50 hover:text-ink dark:text-zinc-400 dark:hover:bg-emerald-800/45 dark:hover:text-zinc-100"
              onClick={() => setOpen(false)}
            >
              {servicesBySlug[slug].title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
