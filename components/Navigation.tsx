"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

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
  { href: "/contact", label: "Contact" }
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "bg-secondary/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 via-ai/80 to-secondary shadow-glow" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-[0.35em] text-accent">Zhengshi</span>
            <span className="text-lg font-semibold text-light">AgriTech Group</span>
          </div>
        </Link>
        <div className="hidden items-center space-x-6 text-sm uppercase tracking-[0.2em] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-accent/80 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative h-12 w-12 rounded-full border border-accent/40 text-accent/70"
            aria-label="Toggle menu"
          >
            <span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-2 bg-accent transition-all" />
            <span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-accent transition-all" />
            <span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 translate-y-2 bg-accent transition-all" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden">
          <div className="glass-panel mx-6 mb-6 space-y-4 rounded-3xl p-8 text-base tracking-[0.1em] uppercase transition-opacity duration-300 ease-out">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-secondary/50 px-6 py-3 text-center text-accent/80 transition hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-6 py-3 text-center font-semibold text-secondary"
            >
              联系我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
