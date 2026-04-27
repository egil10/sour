import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { sourdoughs } from "@/lib/products";

export const metadata = { title: "Our Sourdough" };

export default function SourdoughPage() {
  return (
    <>
      <PageHero
        eyebrow="Our sourdough"
        title="30-year-old cultures. 8 distinct loaves."
        description="As our name suggests, sourdough is central to what we do — our cultures have now reached the ripe age of 30 years. Natural fermentation gives our breads their characteristic taste while making them more nutritious and easier to digest."
        image="/images/sourdough/farmhouse.jpg"
        imageAlt="A row of freshly baked sourdough loaves"
      />

      <section className="container-x py-16">
        <div className="grid gap-3 rounded-3xl border border-bark-900/10 bg-cream-50 p-8 sm:grid-cols-3">
          {[
            ["Naturally leavened", "No commercial yeast — only wild starter."],
            ["Higher in nutrients", "More vitamins, minerals & antioxidants."],
            ["Easier to digest", "More probiotics, lower gluten levels."],
          ].map(([t, b]) => (
            <div key={t}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-crust-600">
                {t}
              </p>
              <p className="mt-2 text-bark-800">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sourdoughs.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
