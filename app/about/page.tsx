import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import OrderCallout from "@/components/OrderCallout";

export const metadata = { title: "Who's the Baker" };

const team = [
  {
    name: "Christine",
    role: "Master baker · 10+ years",
    blurb: "A passionate baker with a great gift for dough.",
  },
  {
    name: "Mefa",
    role: "Operations · 5 years",
    blurb: "Our master of organisation — keeps things running smoothly.",
  },
  {
    name: "Dorica",
    role: "All-rounder · 8 years",
    blurb: "A shining all-rounder behind the scenes — always ready and smiling.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who's the baker"
        title="A typical German with a deep love for bread."
        description="Stef set up the bakery in late 2014, dissatisfied with the local bread on offer. A decade on, the team has grown into a tight-knit four, baking by hand for Lusaka — and never running out of ideas."
        image="/images/about/stef-portrait.jpg"
        imageAlt="Stef, founder of the bakery"
      />

      <section className="container-x grid gap-12 py-20 md:grid-cols-[1.05fr_1fr] md:items-start">
        <div className="soft-panel p-8 sm:p-10">
          <span className="section-eyebrow">The bakery rhythm</span>
          <h2 className="h-display text-4xl sm:text-5xl">
            A small team, a stubborn standard, and dough that refuses to be rushed.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bark-800/90">
            What started as a one-woman operation in a German-style home kitchen
            has grown into a small artisan bakery with over a decade of
            professional experience — and an unwavering commitment to baking
            the most savoury and most authentic sourdough in Zambia.
          </p>
          <p className="mt-5 leading-relaxed text-bark-700/90">
            On any given day you'll find us delivering bread, selling at the
            market, experimenting with new recipes, updating the website,
            chatting with customers, doing the books — and troubleshooting
            whatever the day throws at us.
          </p>
          <Link href="/sourdough" className="btn-primary mt-8">
            Explore the bread <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="/images/about/team-bakery.jpg" alt="In the bakery" fill className="object-cover" sizes="(min-width:768px) 25vw, 50vw" />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="/images/about/team-1.jpg" alt="Team at work" fill className="object-cover" sizes="(min-width:768px) 25vw, 50vw" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="/images/about/alice-bake.jpg" alt="Shaping a loaf" fill className="object-cover" sizes="(min-width:768px) 25vw, 50vw" />
          </div>
          <div className="relative -mt-6 aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="/images/about/team-2.jpg" alt="Team portrait" fill className="object-cover" sizes="(min-width:768px) 25vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="bg-cream-200/60">
        <div className="container-x py-20">
          <h2 className="h-display text-4xl sm:text-5xl">Your bakers</h2>
          <p className="mt-3 max-w-2xl text-bark-700/85">
            Decades of combined experience and a daily love for the craft.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="card p-8">
                <p className="font-display text-3xl text-bark-900">{m.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-crust-600">
                  {m.role}
                </p>
                <p className="mt-4 text-bark-700/85">{m.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/about/early-days.png"
              alt="The early days of Stef's Sourdough Basket"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="section-eyebrow">Late 2014</span>
            <h3 className="h-display text-4xl">
              From a home oven to a bakery loved across Lusaka.
            </h3>
            <p className="mt-5 text-bark-700/90">
              The bakery began with a single oven and a few sourdough starters
              collected from around the world. Today those same cultures are
              30 years old — and still doing the heavy lifting in every loaf
              that leaves the basket.
            </p>
          </div>
        </div>
      </section>

      <OrderCallout
        title="Want bread from this week's bake?"
        body="The bakery is small by design. Message ahead and we will confirm what can be baked fresh for your preferred day."
      />
    </>
  );
}
