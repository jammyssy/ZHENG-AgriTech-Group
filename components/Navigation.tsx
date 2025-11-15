"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/vision-mission", label: "愿景使命" },
  { href: "/technology", label: "AI × Agriculture" },
  { href: "/genetics", label: "源种科技" },
  { href: "/smart-os", label: "Smart Farming OS" },
  { href: "/green-farm", label: "Green Farm" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled ? "border-accent/30 bg-white/95 shadow-subtle backdrop-blur-xl" : "border-transparent bg-white/85"
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-white shadow-subtle">
            <span className="h-6 w-6 rounded-[0.9rem] bg-gradient-to-br from-primary via-ai to-primary/80" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.4em] text-secondary/50">Zhengshi</span>
            <span className="text-base font-semibold text-secondary">AgriTech Group</span>
          </div>
        </Link>
        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-secondary/70 transition hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-white text-secondary lg:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={clsx(
              "absolute h-0.5 w-6 rounded-full bg-secondary transition-all",
              open ? "translate-y-0 rotate-45" : "-translate-y-2"
            )}
          />
          <span
            className={clsx(
              "absolute h-0.5 w-6 rounded-full bg-secondary transition-all",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={clsx(
              "absolute h-0.5 w-6 rounded-full bg-secondary transition-all",
              open ? "translate-y-0 -rotate-45" : "translate-y-2"
            )}
          />
        </button>
      </nav>
      <div className="lg:hidden">
        <div
          className={clsx(
            "origin-top transform px-6 transition-all duration-300",
            open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          )}
        >
          <div className="surface-card mb-6 space-y-4 rounded-3xl p-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-full border border-accent/40 px-5 py-3 text-center text-xs uppercase tracking-[0.3em] text-secondary/70 hover:border-primary/60 hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
