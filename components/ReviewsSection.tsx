import { ExternalLink, Quote, Star } from "lucide-react";
import { site } from "@/lib/site";

const reviews = [
  {
    quote: "The best sourdough breads in Lusaka. Freshly baked and delicious.",
    source: "Salmaan Saleem",
    detail: "Google review",
  },
  {
    quote: "Stef's sourdough bread is outstanding. I have never been disappointed.",
    source: "Gabriele Seiler",
    detail: "Google review",
  },
  {
    quote: "Quality European-style bread, made with whole-grain flour, here in Lusaka.",
    source: "Patrick Slavin",
    detail: "Google review",
  },
  {
    quote: "The gluten-free seeded loaf beats every other gluten-free bread I have tried.",
    source: "Dawn Bridget Close",
    detail: "Google review",
  },
  {
    quote: "Found their multigrain sourdough at The Pantry and love it. So delicious. 10/10.",
    source: "Atika Haveliwala",
    detail: "Google review",
  },
  {
    quote: "These people know how to make proper bread.",
    source: "Tim",
    detail: "Google review",
  },
];

export default function ReviewsSection() {
  return (
    <section className="container-x py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <span className="section-eyebrow">What people say</span>
          <h2 className="h-display text-4xl sm:text-5xl">
            Loved by sourdough people across Lusaka.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bark-700/85">
            Customers call out the real sourdough flavour, European-style loaves,
            gluten-free breads and the simple pleasure of bread baked properly.
          </p>

          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-5 rounded-[2rem] border border-bark-900/10 bg-bark-900 p-5 text-cream-50 shadow-[0_24px_80px_-58px_rgba(38,23,11,0.75)] transition hover:-translate-y-1"
          >
            <span className="font-display text-6xl leading-none">4.9</span>
            <span>
              <span className="flex text-crust-300" aria-label="4.9 star rating">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="mt-2 block text-sm font-extrabold uppercase tracking-[0.18em] text-cream-100/75">
                21 Google ratings
              </span>
            </span>
            <ExternalLink className="h-4 w-4 text-crust-300" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <a
              key={`${review.source}-${review.quote}`}
              href={site.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-panel group flex min-h-64 flex-col p-6 transition hover:-translate-y-1"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-crust-500 text-cream-50">
                  <Quote className="h-4 w-4" />
                </span>
                <span className="flex text-crust-500" aria-label="Five star review">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
              </div>

              <blockquote className="mt-8 font-display text-2xl leading-tight text-bark-900">
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
