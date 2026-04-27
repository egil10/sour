import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import OrderCallout from "@/components/OrderCallout";
import { christmasTreats } from "@/lib/products";

export const metadata = { title: "Christmas Treats" };

export default function ChristmasPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Christmas treats"
        title="Stollen, Lebkuchen & Christmas carols baked in."
        description="In the Christmas season we offer traditional German Stollen and Lebkuchen. More a sweet bread than a cake, Stollen contains nuts, dried fruits, spices and marzipan, topped with homemade vanilla sugar. Lebkuchen are honey cookies comparable to gingerbread."
        image="/images/christmas/stollen.jpg"
        imageAlt="A Christmas Stollen on a wooden board"
      />

      <section className="container-x pb-24 pt-8">
        <div className="mb-10 rounded-[2.25rem] border border-berry-600/15 bg-berry-600/10 p-6 text-bark-800 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-berry-700">
            Seasonal bakes
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed">
            These are richer, slower festive recipes with spice mixes, nuts,
            fruit and butter. Availability is seasonal, so early ordering is the
            safest way to avoid the Christmas rush.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {christmasTreats.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <OrderCallout
        title="Reserve Christmas treats early."
        body="Stollen and Lebkuchen batches fill quickly in season. Message us with quantities, marzipan or chocolate preferences, and your ideal pickup day."
      />
    </>
  );
}
