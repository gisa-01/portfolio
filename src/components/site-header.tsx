"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";

const links = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#resume" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggleTheme() {
    const next = !dark;
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-paper/90 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-night/90">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-xl font-extrabold tracking-tight"
          aria-label="Natia home">
          <span className="grid size-8 place-items-center rounded-xl bg-brand-sand text-sm text-white shadow-sm">
            GAS
          </span>
          <span>
            Gisa Aime Savio
            <span className="text-brand-sand-dark dark:text-brand-sand">.</span>
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600 transition-colors hover:text-brand-sand-dark dark:text-stone-300 dark:hover:text-brand-sand">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            className="grid size-10 place-items-center rounded-full bg-stone-200/80 text-stone-700 transition hover:scale-105 dark:bg-white/10 dark:text-brand-sand"
          >
            <Icon name={dark ? "sun" : "moon"} className="size-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="grid size-10 place-items-center rounded-full text-ink transition hover:bg-stone-200/70 dark:text-white dark:hover:bg-white/10 lg:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-stone-200 bg-paper px-5 py-3 dark:border-white/10 dark:bg-night lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-stone-700 transition hover:bg-brand-sand/10 hover:text-brand-sand-dark dark:text-stone-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}


