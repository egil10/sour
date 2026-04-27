import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import OrderCallout from "@/components/OrderCallout";
import { buns } from "@/lib/products";

export const metadata = { title: "Buns" };

export default function BunsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our buns"
        title="Brötchen — the German way."
        description="Our buns are the product of mixing traditional German recipes with locally available ingredients and are available for orders of 20 or more."
        image="/images/buns/whole-wheat.jpg"
        imageAlt="A basket of freshly baked buns"
      />

      <section className="container-x pb-24 pt-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {buns.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10 grid gap-4 rounded-[2.25rem] bg-cream-200/70 p-6 text-bark-800 sm:grid-cols-3">
          <p className="font-display text-3xl leading-tight text-bark-900">
            Best for generous tables.
          </p>
          <p className="sm:col-span-2">
            Brötchen have a rich history and are popular in Europe and
            overseas. The average German eats one Brötchen a day. Pre-order at
            least two days in advance, especially when you need a specific mix
            for an event, office lunch or family gathering.
          </p>
        </div>
      </section>

      <OrderCallout
        title="Planning buns for a crowd?"
        body="Send the bun type, quantity and date you need them. We will confirm the batch and timing on WhatsApp."
      />
    </>
  );
}
