import Image from "next/image";
import { Product } from "@/lib/products";
import { site } from "@/lib/site";

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
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bark-900/42 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute right-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-bark-800 backdrop-blur">
          {product.weight}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight text-bark-900">
            {product.name}
          </h3>
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-crust-500 shadow-[0_0_0_6px_rgba(214,154,85,0.18)]" />
        </div>
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
        <a
          href={`${site.whatsappOrder}%20I%27m%20interested%20in%20the%20${encodeURIComponent(
            product.name,
          )}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex text-sm font-extrabold text-bark-900 underline decoration-crust-500/45 decoration-2 underline-offset-4 transition hover:text-crust-700"
        >
          Ask about this bake
        </a>
      </div>
    </article>
  );
}
