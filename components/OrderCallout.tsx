import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import BasketChat from "@/components/BasketChat";
import { site } from "@/lib/site";

type Props = {
  title?: string;
  body?: string;
};

export default function OrderCallout({
  title = "Ready to fill your basket?",
  body = site.preorderNotice,
}: Props) {
  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-bark-900 p-8 text-cream-50 sm:p-12">
        <div className="grain absolute inset-0 opacity-50" />
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-crust-500/25 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="section-eyebrow text-crust-300">Pre-order</span>
            <h2 className="h-display text-4xl text-cream-50 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-cream-100/80">
              {body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.whatsappOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-cream-50 text-bark-900 hover:bg-cream-200"
              >
                WhatsApp an order <MessageCircle className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="btn-ghost border-cream-50/30 bg-transparent text-cream-50 hover:bg-cream-50/10"
              >
                Contact info <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <BasketChat />
        </div>
      </div>
    </section>
  );
}
