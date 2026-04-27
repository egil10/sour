import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wheat,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import BasketChat from "@/components/BasketChat";
import ReviewsSection from "@/components/ReviewsSection";
import { orderSteps, site } from "@/lib/site";
import greensAndGrainsLogo from "@/logos/greens-and-grains-logo.png";
import proteaLogo from "@/logos/protea-hotels-marriot-logo.png";
import mochaLogo from "@/logos/the-mocha-puddle-logo.jpg";
import woolworthsLogo from "@/logos/woolworths-logo.png";

const categories = [
  {
    href: "/sourdough",
    title: "Sourdough Bread",
    blurb:
      "30-year-old cultures, long fermentation and German technique in everyday Lusaka loaves.",
    image: "/images/home/sourdough-cover.jpg",
    label: "Signature",
  },
  {
    href: "/gluten-free",
    title: "Gluten-Free Bread",
    blurb:
      "Thoughtfully handled gluten-free sourdoughs built from rice, sorghum, millet and seeds.",
    image: "/images/home/glutenfree-cover.jpg",
    label: "Careful craft",
  },
  {
    href: "/buns",
    title: "Buns & Pretzels",
    blurb:
      "Brötchen, poppy seed buns, bread bowls and Laugenbrötchen for generous gatherings.",
    image: "/images/home/buns-cover.jpg",
    label: "Minimum 20",
  },
  {
    href: "/christmas-treats",
    title: "Christmas Treats",
    blurb:
      "Stollen and Lebkuchen with almonds, fruit, spice and a proper German festive spirit.",
    image: "/images/home/christmas-cover.jpg",
    label: "Seasonal",
  },
];

const proofStats = [
  { value: "30", label: "year-old cultures" },
  { value: "2014", label: "baking in Lusaka since" },
  { value: "2 days", label: "ideal pre-order time" },
];

const qualityNotes = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Slow fermentation",
    body: "Time develops flavour, texture and digestibility before each loaf reaches the oven.",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Recognisable ingredients",
    body: "Flour, water, salt, seeds, honey and spices. No anonymous bakery shortcuts.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Handled with care",
    body: "Gluten-free breads are prepared with special care to reduce contamination risk.",
  },
];

const stockists = [
  { name: "Woolworths", logo: woolworthsLogo },
  { name: "Greens and Grains", logo: greensAndGrainsLogo },
  { name: "The Mocha Puddle", logo: mochaLogo },
  { name: "Protea Hotels by Marriott", logo: proteaLogo },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-bark-900 text-cream-50">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/sourdough-cover.jpg"
            alt="Freshly baked sourdough loaves"
            fill
            priority
            className="object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(214,154,85,0.34),transparent_24rem),linear-gradient(105deg,rgba(38,23,11,0.92),rgba(38,23,11,0.64)_48%,rgba(38,23,11,0.18))]" />
          <div className="grain absolute inset-0" />
        </div>

        <div className="container-x grid min-h-screen gap-12 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl animate-fade-up">
            <span className="pill border-cream-50/15 bg-cream-50/10 text-cream-100">
              <Wheat className="h-3.5 w-3.5" /> Foxdale Forest · Lusaka
            </span>
            <h1 className="mt-7 font-display text-5xl leading-[0.96] tracking-[-0.06em] sm:text-7xl md:text-[92px]">
              Bread with a memory.
              <span className="block text-crust-300">Baked slowly by hand.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/90 sm:text-xl">
              Stef's Sourdough Basket is a small Lusaka bakery shaped by German
              tradition, 30-year-old cultures and a team that still treats each
              loaf like a living thing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.whatsappOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-cream-50 text-bark-900 hover:bg-cream-200"
              >
                Pre-order on WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
              <Link
                href="/sourdough"
                className="btn-ghost border-cream-50/25 bg-cream-50/10 text-cream-50 hover:bg-cream-50/15"
              >
                Browse the basket <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="soft-panel relative ml-auto w-full max-w-md overflow-hidden bg-cream-50/90 p-5 text-bark-900 shadow-2xl lg:mb-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/home/team.png"
                alt="Stef's Sourdough Basket team"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/35 to-transparent" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-cream-200/70 p-3 text-center">
                  <p className="font-display text-3xl leading-none text-bark-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-bark-700/75">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-bark-700/90">
              Pre-order directly, or find selected loaves through trusted Lusaka
              outlets. Every order starts with enough time for the dough.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-bark-900/10 bg-cream-50/70 py-4">
        <div className="flex w-[200%] animate-slide-track gap-8 whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.28em] text-bark-700/70">
          {[...Array(2)].map((_, group) => (
            <div key={group} className="flex w-1/2 justify-around gap-8">
              <span>German sourdough</span>
              <span>Foxdale Forest</span>
              <span>Gluten-free options</span>
              <span>Hand-shaped loaves</span>
              <span>Order two days ahead</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-5 py-24 md:grid-cols-3">
        {qualityNotes.map((c, index) => (
          <div
            key={c.title}
            className="soft-panel stagger-card p-8"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-bark-900 text-cream-50">
              {c.icon}
            </span>
            <h3 className="mt-6 font-display text-3xl leading-tight text-bark-900">
              {c.title}
            </h3>
            <p className="mt-3 leading-relaxed text-bark-700/85">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="container-x py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Our basket"
            title="Choose the loaf that fits the table"
            description="A tight, honest range: everyday sourdoughs, careful gluten-free bakes, German buns and seasonal Christmas treats."
          />
          <Link href="/sourdough" className="btn-ghost md:mb-2">
            See all breads <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat, index) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card group relative overflow-hidden"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/90 via-bark-900/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-cream-50/25 bg-cream-50/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-cream-50 backdrop-blur">
                  {cat.label}
                </div>
                <div className="absolute inset-x-6 bottom-6 text-cream-50">
                  <h3 className="font-display text-4xl leading-none">{cat.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-100/85">
                    {cat.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em]">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-bark-900 text-cream-100">
          <div className="grain absolute inset-0 opacity-60" />
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-crust-500/20 blur-3xl" />
          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <div>
              <span className="section-eyebrow text-crust-300">How ordering works</span>
              <h2 className="h-display text-4xl text-cream-50 sm:text-5xl">
                Good bread needs a little notice.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-cream-100/80">
                The simplest path is WhatsApp. Tell us what you want, give the
                dough two days, then collect or coordinate delivery in Lusaka.
              </p>
              <a
                href={site.whatsappOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 bg-cream-50 text-bark-900 hover:bg-cream-200"
              >
                Start an order <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4">
              {orderSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-cream-50/10 bg-cream-50/10 p-5 backdrop-blur"
                >
                  <p className="font-display text-4xl text-crust-300">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-cream-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/75">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-200/70">
        <div className="container-x grid gap-12 py-24 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-bark-900/10 shadow-[0_24px_80px_-52px_rgba(38,23,11,0.8)]">
              <Image
                src="/images/about/team-bakery.jpg"
                alt="The bakery team working with dough"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-5 top-10 hidden max-w-[13rem] animate-float-soft rounded-3xl bg-cream-50 p-5 shadow-2xl md:block">
              <Sparkles className="h-5 w-5 text-crust-600" />
              <p className="mt-3 text-sm font-extrabold leading-snug text-bark-900">
                Still shaped, scored and watched by hand.
              </p>
            </div>
          </div>
          <div>
            <span className="section-eyebrow">Since 2014</span>
            <h2 className="h-display text-4xl sm:text-6xl">
              From sourdough culture to Lusaka ritual.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark-700/85">
              Stef began baking because the bread she wanted did not yet exist
              around her. Today Christine, Mefa and Dorica help keep that same
              curiosity alive through deliveries, markets, recipe tests and the
              steady rhythm of real bakery work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Meet the bakers <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Visit contact page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeader
          eyebrow="Find us around Lusaka"
          title="Pre-order direct, or look for us in town"
          description="Selected breads are available through trusted outlets. Direct WhatsApp ordering is still the best route when you want something specific."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stockists.map((s) => (
            <div key={s.name} className="soft-panel grid min-h-36 place-items-center p-8">
              <div className="relative h-16 w-44 grayscale transition hover:scale-105 hover:grayscale-0">
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-full bg-cream-50/80 px-5 py-3 text-center text-sm font-bold text-bark-700">
          <MapPin className="h-4 w-4 text-crust-600" />
          Baked in Foxdale Forest and shared across Lusaka.
        </div>
      </section>

      <ReviewsSection />

      <section className="container-x pb-12">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-berry-700 via-bark-900 to-crust-700 p-8 text-cream-50 sm:p-14">
          <div className="grain absolute inset-0 opacity-60" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="section-eyebrow text-crust-300">Pre-order</span>
              <h2 className="h-display text-4xl text-cream-50 sm:text-6xl">
                Tell us what should be in your basket.
              </h2>
              <p className="mt-5 max-w-xl text-cream-100/85">
                {site.preorderNotice}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.whatsappOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-cream-50 text-bark-900 hover:bg-cream-200"
                >
                  WhatsApp us
                </a>
                <Link
                  href="/contact"
                  className="btn-ghost border-cream-50/35 bg-transparent text-cream-50 hover:bg-cream-50/10"
                >
                  Contact details
                </Link>
              </div>
            </div>
            <BasketChat />
          </div>
        </div>
      </section>
    </>
  );
}
