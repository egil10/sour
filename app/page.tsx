import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Leaf, Star, Wheat } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

const categories = [
  {
    href: "/sourdough",
    title: "Sourdough Bread",
    blurb:
      "Made with our 30-year-old starters, traditional flours, water, salt, seeds — and a great deal of love.",
    image: "/images/home/sourdough-cover.jpg",
  },
  {
    href: "/gluten-free",
    title: "Gluten-Free Bread",
    blurb:
      "Sourdough combined with gluten-free flours, crafted with special care to avoid contamination.",
    image: "/images/home/glutenfree-cover.jpg",
  },
  {
    href: "/buns",
    title: "Buns & Pretzels",
    blurb:
      "Zambian ingredients meet century-old German recipes. Particularly great for snacking.",
    image: "/images/home/buns-cover.jpg",
  },
  {
    href: "/christmas-treats",
    title: "Christmas Treats",
    blurb:
      "The renowned Lebkuchen and Stollen — including gluten-free. Christmas carols baked in.",
    image: "/images/home/christmas-cover.jpg",
  },
];

const stockists = [
  { name: "Woolworths", logo: "/images/outlets/woolies.png" },
  { name: "Mocha", logo: "/images/outlets/mocha.jpg" },
  { name: "Protea Hotel", logo: "/images/outlets/protea.png" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/sourdough-cover.jpg"
            alt="Freshly baked sourdough loaves"
            fill
            priority
            className="object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bark-900/65 via-bark-900/55 to-bark-900/85" />
          <div className="grain absolute inset-0" />
        </div>

        <div className="container-x relative flex min-h-[88vh] flex-col justify-end pb-20 pt-32 text-cream-50">
          <div className="max-w-3xl animate-fade-up">
            <span className="pill bg-cream-50/15 text-cream-100">
              <Wheat className="h-3.5 w-3.5" /> Foxdale Forest · Lusaka
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-7xl md:text-[88px]">
              Hand-shaped sourdough,
              <span className="block italic text-crust-400">
                slow-fermented with love.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/90">
              We are a small artisan bakery rooted in the beautiful Foxdale
              Forest in northern Lusaka. With sourdough cultures we collect from
              all over the world, we create a range of naturally leavened breads
              — including gluten-free — grounded in German baking traditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-cream-50 text-bark-900 hover:bg-cream-200"
              >
                Pre-order on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/sourdough"
                className="btn-ghost border-cream-50/30 text-cream-50 hover:bg-cream-50/10"
              >
                Browse the basket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x grid gap-10 py-24 md:grid-cols-3">
        {[
          {
            icon: <Clock className="h-5 w-5" />,
            title: "Slow fermentation",
            body: "Cultures aged 30 years deliver depth of flavour, an open crumb and a crackling crust.",
          },
          {
            icon: <Leaf className="h-5 w-5" />,
            title: "Traditional ingredients only",
            body: "Flour, water, salt, seeds — and time. No commercial shortcuts.",
          },
          {
            icon: <Star className="h-5 w-5" />,
            title: "10+ years in Lusaka",
            body: "A close-knit team — Stef, Christine, Mefa & Dorica — baking by hand every week.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border border-bark-900/10 bg-cream-50 p-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-bark-900 text-cream-50">
              {c.icon}
            </span>
            <h3 className="mt-5 font-display text-2xl text-bark-900">{c.title}</h3>
            <p className="mt-2 text-bark-700/85">{c.body}</p>
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-12">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Our basket"
            title="What we bake, every week"
            description="Get to know us better on the following pages — each loaf made by hand with diligence and much love."
          />
          <Link href="/sourdough" className="hidden text-sm text-bark-800/80 hover:text-bark-900 md:inline-flex md:items-center md:gap-2">
            All bread <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="card group relative overflow-hidden">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/80 via-bark-900/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-cream-50">
                  <h3 className="font-display text-3xl">{cat.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-cream-100/85">
                    {cat.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY STRIP */}
      <section className="relative mt-16 overflow-hidden bg-bark-900 text-cream-100">
        <div className="container-x grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/home/team.png"
              alt="The bakery team"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="section-eyebrow text-crust-400">Since 2014</span>
            <h2 className="h-display text-4xl text-cream-50 sm:text-5xl">
              From sourdough culture… to sourdough loaf.
            </h2>
            <p className="mt-5 max-w-xl text-cream-100/80">
              Stef started the bakery in late 2014 — a typical German with a
              deep love for bread, dissatisfied with the local options. A
              decade later, we still bake every loaf by hand, in a sunlit
              kitchen at the edge of Foxdale Forest.
            </p>
            <Link
              href="/about"
              className="btn-ghost mt-8 border-cream-50/25 text-cream-50 hover:bg-cream-50/10"
            >
              Meet the bakers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STOCKISTS */}
      <section className="container-x py-24">
        <SectionHeader
          eyebrow="Find us around Lusaka"
          title="Available at trusted outlets"
          description="Pre-order direct, or pick up at one of our stockists across town."
          align="center"
        />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 opacity-90">
          {stockists.map((s) => (
            <div key={s.name} className="relative h-16 w-40 grayscale transition hover:grayscale-0">
              <Image src={s.logo} alt={s.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-crust-700 p-10 text-cream-50 sm:p-16">
          <div className="grain absolute inset-0 opacity-50" />
          <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
            <div>
              <span className="section-eyebrow text-crust-400">Pre-order</span>
              <h2 className="h-display text-4xl sm:text-5xl">
                Tell us what you'd like — we'll bake it fresh.
              </h2>
              <p className="mt-4 max-w-xl text-cream-100/85">
                {site.preorderNotice}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-cream-50 text-bark-900 hover:bg-cream-200"
              >
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="btn-ghost border-cream-50/40 text-cream-50 hover:bg-cream-50/10"
              >
                All contact info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
