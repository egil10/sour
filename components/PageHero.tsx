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
    <section className="relative overflow-hidden bg-cream-100">
      <div className="container-x grid gap-10 pb-16 pt-10 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16 md:pt-16">
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
        <div className="relative h-[340px] overflow-hidden rounded-[2.5rem] md:h-[460px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="grain absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
