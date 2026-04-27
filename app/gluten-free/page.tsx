import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import OrderCallout from "@/components/OrderCallout";
import { glutenFrees } from "@/lib/products";

export const metadata = { title: "Gluten-Free" };

export default function GFPage() {
  return (
    <>
      <PageHero
        eyebrow="Our gluten-frees"
        title="Gluten-free, with the same sourdough soul."
        description="While the fermentation in sourdough reduces gluten levels, the proteins occur naturally in all traditional bread flours. We bake several gluten-free sourdough options — mainly based on white rice and sorghum — crafted with special care to avoid contamination."
        image="/images/gluten-free/gf-farmhouse.jpg"
        imageAlt="A loaf of gluten-free sourdough bread"
      />

      <section className="container-x pb-24 pt-8">
        <div className="mb-10 rounded-[2.25rem] border border-moss-600/15 bg-moss-400/15 p-6 text-bark-800 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-moss-700">
            A careful note
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed">
            These breads are made for customers avoiding gluten and are handled
            with special care. If you have a severe allergy or medical
            intolerance, please message us directly before ordering so we can
            discuss the current bakery setup honestly.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {glutenFrees.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <OrderCallout
        title="Tell us which gluten-free loaf you need."
        body="Message ahead with dietary details, preferred pickup day and quantity. We will confirm what is possible before baking."
      />
    </>
  );
}
