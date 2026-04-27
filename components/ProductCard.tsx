import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-bark-800 backdrop-blur">
          {product.weight}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-bark-900">{product.name}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {product.ingredients.map((ing) => (
            <li
              key={ing}
              className="rounded-full bg-cream-200/70 px-2.5 py-1 text-[11px] text-bark-700"
            >
              {ing}
            </li>
          ))}
        </ul>
        {product.note && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-crust-700">
            <span className="h-1.5 w-1.5 rounded-full bg-crust-500" />
            {product.note}
          </p>
        )}
      </div>
    </article>
  );
}
