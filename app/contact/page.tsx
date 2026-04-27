import { Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We love to talk about bread."
        description="Want to know more about us, or have an order in mind? Send a message — we'll get right back to you. Pre-orders, two days in advance please, so each loaf is freshly handcrafted."
        image="/images/home/sourdough-cover.jpg"
        imageAlt="Sourdough bread"
      />

      <section className="container-x grid gap-10 pb-20 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-bark-900/10 bg-cream-50 p-8">
          <h2 className="h-display text-3xl">Reach us</h2>
          <ul className="mt-6 flex flex-col gap-5">
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-moss-600 text-cream-50">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-crust-600">
                    WhatsApp · preferred
                  </p>
                  <p className="mt-1 font-display text-xl text-bark-900 group-hover:underline">
                    {site.phone}
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-bark-900 text-cream-50">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-crust-600">
                    Phone & SMS
                  </p>
                  <p className="mt-1 font-display text-xl text-bark-900 group-hover:underline">
                    {site.phone}
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-crust-600 text-cream-50">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-crust-600">
                    Email
                  </p>
                  <p className="mt-1 font-display text-xl text-bark-900 group-hover:underline">
                    {site.email}
                  </p>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-bark-700 text-cream-50">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-crust-600">
                  Where we bake
                </p>
                <p className="mt-1 font-display text-xl text-bark-900">
                  Foxdale Forest, Lusaka
                </p>
              </span>
            </li>
          </ul>

          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8 w-full"
          >
            <Star className="h-4 w-4 fill-crust-500 text-crust-500" /> See our Google reviews
          </a>

          <p className="mt-8 rounded-2xl bg-cream-200/60 p-4 text-sm text-bark-700">
            {site.preorderNotice} You can also find our breads at trusted outlets
            around Lusaka.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-bark-900/10 bg-cream-50">
          <div className="aspect-[4/3] w-full">
            <iframe
              title="Stef's Sourdough Basket — Lusaka outlets"
              src={site.mapsEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-crust-600">
              Find us on the map
            </p>
            <p className="mt-2 text-bark-700/85">
              Pre-order direct, or pick up at one of our stockists across town.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
