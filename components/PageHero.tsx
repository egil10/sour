import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-cream-100">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-crust-300/25 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-moss-400/20 blur-3xl" />
      <div className="container-x grid gap-10 pb-16 pt-28 md:grid-cols-[1.05fr_1fr] md:items-end md:gap-16 md:pt-36">
        <div className="animate-fade-up">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="h-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark-700/85">
              {description}
            </p>
          )}
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-[2.5rem] border border-bark-900/10 shadow-[0_28px_90px_-58px_rgba(38,23,11,0.9)] md:h-[460px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark-900/28 via-transparent to-cream-50/10" />
          <div className="grain absolute inset-0" />
          <div className="absolute bottom-5 left-5 rounded-2xl border border-cream-50/25 bg-bark-900/55 px-4 py-3 text-cream-50 shadow-xl backdrop-blur-md">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-crust-300">
              Baked in Lusaka
            </p>
            <p className="mt-1 font-display text-xl">German tradition, local hands</p>
          </div>
        </div>
      </div>
    </section>
  );
}
