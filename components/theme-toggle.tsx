"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "apex-assist-theme";

function readDarkFromDom(): boolean {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    /* private mode / blocked storage */
  }
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    let isDark = readDarkFromDom();
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark") isDark = true;
      else if (stored === "light") isDark = false;
    } catch {
      /* keep DOM */
    }
    setDark(isDark);
    applyTheme(isDark);
  }, []);

  const toggle = useCallback(() => {
    const next = !readDarkFromDom();
    applyTheme(next);
    setDark(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="relative z-10 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-ink bg-white/80 text-ink transition hover:bg-primary/50 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 dark:border-white dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:border-white dark:hover:bg-zinc-700/80 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950"
    >
      {mounted ? (
        dark ? (
          <Sun
            className="pointer-events-none h-4 w-4"
            strokeWidth={1.75}
            aria-hidden
          />
        ) : (
          <Moon
            className="pointer-events-none h-4 w-4"
            strokeWidth={1.75}
            aria-hidden
          />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
