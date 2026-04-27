import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { buns } from "@/lib/products";

export const metadata = { title: "Buns" };

export default function BunsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our buns"
        title="Brötchen — the German way."
        description="Our buns are the product of mixing traditional German recipes with locally available ingredients. Available for orders of 20 or more — the average German eats one Brötchen a day, after all."
        image="/images/buns/whole-wheat.jpg"
        imageAlt="A basket of freshly baked buns"
      />

      <section className="container-x pb-24 pt-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {buns.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="mt-10 rounded-3xl bg-cream-200/60 px-6 py-4 text-center text-sm text-bark-700">
          Minimum order · 20 buns. Pre-order at least two days in advance.
        </p>
      </section>
    </>
  );
}
