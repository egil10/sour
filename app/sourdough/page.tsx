import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import OrderCallout from "@/components/OrderCallout";
import { sourdoughs } from "@/lib/products";

export const metadata = { title: "Our Sourdough" };

export default function SourdoughPage() {
  return (
    <>
      <PageHero
        eyebrow="Our sourdough"
        title="30-year-old cultures. 8 distinct loaves."
        description="As our name suggests, sourdough is central to what we do — our sourdoughs have now reached the ripe age of 30 years."
        image="/images/sourdough/farmhouse.jpg"
        imageAlt="A row of freshly baked sourdough loaves"
      />

      <section className="container-x py-16">
        <div className="rounded-[2.25rem] border border-bark-900/10 bg-cream-50/80 p-6 shadow-[0_18px_70px_-54px_rgba(38,23,11,0.75)] backdrop-blur sm:p-8">
          <p className="max-w-4xl text-lg leading-relaxed text-bark-800/90">
            Rather than use commercial yeast, sourdough bread relies on a
            natural fermentation process for leavening. While this makes baking
            more arduous, it gives our breads their characteristic taste while
            also making them more nutritious and easier to digest.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            ["Naturally fermented", "Built around mature cultures and patient dough."],
            ["Higher in nutrients", "More vitamins, minerals & antioxidants."],
            ["Easier to digest", "More probiotics, lower gluten levels."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-3xl bg-cream-200/55 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-crust-600">
                {t}
              </p>
              <p className="mt-2 text-bark-800">{b}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sourdoughs.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <OrderCallout
        title="Choose your sourdough, then give it time."
        body="Most loaves need at least two days' notice so the culture can ferment properly and the bread can leave the oven fresh."
      />
    </>
  );
}
