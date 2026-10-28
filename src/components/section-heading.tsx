type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <span className="inline-flex rounded-full bg-brand-sand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-sand-dark dark:text-brand-sand">
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink dark:text-white"}`}>
        {title}
      </h2>
      {description && <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600 dark:text-stone-400 sm:text-base">{description}</p>}
    </div>
  );
}

