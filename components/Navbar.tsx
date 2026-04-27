"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Wheat } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/85 backdrop-blur-md shadow-[0_1px_0_rgba(38,23,11,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-bark-900 text-cream-100 transition group-hover:rotate-6">
            <Wheat className="h-5 w-5" />
          </span>
          <span className="font-display text-lg leading-tight text-bark-900">
            Stef's
            <span className="block text-[10px] font-sans uppercase tracking-[0.28em] text-crust-600">
              Sourdough Basket
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-bark-800/80 transition hover:text-bark-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary"
        >
          Order on WhatsApp
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-bark-900/15 text-bark-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-x pb-6">
            <div className="rounded-3xl border border-bark-900/10 bg-cream-50 p-4 shadow-xl">
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-bark-900 hover:bg-cream-200/70"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3 w-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
