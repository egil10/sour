import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {glutenFrees.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
