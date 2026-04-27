import Link from "next/link";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-bark-900/10 bg-bark-900 text-cream-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-cream-200/70">
            {site.tagline}. Hand-crafted, slow-fermented sourdough from {" "}
            {site.location}.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-crust-400">
            Visit
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-cream-100/80 transition hover:text-cream-50"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-crust-400">
            Get in touch
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                className="inline-flex items-center gap-2 text-cream-100/85 hover:text-cream-50"
                href={site.phoneHref}
              >
                <Phone className="h-4 w-4 text-crust-400" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-cream-100/85 hover:text-cream-50"
                href={site.emailHref}
              >
                <Mail className="h-4 w-4 text-crust-400" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-cream-100/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crust-400" />
              {site.location}
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-cream-100/85 hover:text-cream-50"
                href={site.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="h-4 w-4 text-crust-400" />
                See our Google reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Baked with love in Lusaka.
          </p>
          <p>
            Site rebuilt with Next.js · deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
