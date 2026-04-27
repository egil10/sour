type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="h-display text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-bark-700/85">
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-crust-500 to-moss-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
