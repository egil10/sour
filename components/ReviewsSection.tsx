import { ExternalLink, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Stef's rye bread is absolutely delicious and addictive.",
    source: "iOverlander check-in",
    detail: "Traveler note from Lusaka",
    href: "https://www.ioverlander.com/places/122011-stef-s-sourdough-basket",
  },
  {
    quote: "All her breads are delicious.",
    source: "iOverlander check-in",
    detail: "Advance-order tip from a visitor",
    href: "https://www.ioverlander.com/places/122011-stef-s-sourdough-basket",
  },
  {
    quote: "Delicious, homely and moreish.",
    source: "Bizbwana bakery profile",
    detail: "Independent bakery listing",
    href: "https://bizbwana.com/orgs/stefs-sourdough-basket",
  },
];

export default function ReviewsSection() {
  return (
    <section className="container-x py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <span className="section-eyebrow">What people say</span>
          <h2 className="h-display text-4xl sm:text-5xl">
            The bread has been finding fans around Lusaka for years.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bark-700/85">
            A few public notes from travelers and local listings. For the fuller
            picture, the Google reviews link is on the contact page.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <a
              key={`${review.source}-${review.quote}`}
              href={review.href}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-panel group flex min-h-72 flex-col p-6 transition hover:-translate-y-1"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-crust-500 text-cream-50">
                  <Quote className="h-4 w-4" />
                </span>
                <span className="rounded-full bg-cream-200/70 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-bark-700">
                  Public note
                </span>
              </div>

              <blockquote className="mt-8 font-display text-3xl leading-tight text-bark-900">
                &quot;{review.quote}&quot;
              </blockquote>

              <div className="mt-auto pt-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-crust-600">
                  {review.source}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-bark-700/80">
                  {review.detail}
                  <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
