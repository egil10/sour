import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
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
        <div className="grid gap-6 lg:grid-cols-3">
          {christmasTreats.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
