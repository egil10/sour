"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Wheat } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHero = pathname === "/" && !scrolled && !open;

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
          <span
            className={`grid h-10 w-10 place-items-center rounded-full transition group-hover:rotate-6 ${
              onHero ? "bg-cream-50 text-bark-900" : "bg-bark-900 text-cream-100"
            }`}
          >
            <Wheat className="h-5 w-5" />
          </span>
          <span
            className={`font-display text-lg leading-tight transition ${
              onHero ? "text-cream-50" : "text-bark-900"
            }`}
          >
            Stef's
            <span
              className={`block text-[10px] font-sans font-extrabold uppercase tracking-[0.28em] ${
                onHero ? "text-cream-200" : "text-crust-600"
              }`}
            >
              Sourdough Basket
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm font-bold transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:transition-all ${
                pathname === l.href
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              } ${
                onHero
                  ? "text-cream-100/85 hover:text-cream-50 after:bg-cream-50"
                  : "text-bark-800/80 hover:text-bark-900 after:bg-crust-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.whatsappOrder}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:inline-flex ${
            onHero
              ? "btn-primary bg-cream-50 text-bark-900 hover:bg-cream-200"
              : "btn-primary"
          }`}
        >
          Order on WhatsApp
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
            onHero
              ? "border-cream-50/30 text-cream-50"
              : "border-bark-900/15 text-bark-900"
          }`}
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
                href={site.whatsappOrder}
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
