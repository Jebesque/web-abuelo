function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-500">{eyebrow}</p>}
      <h2 className="font-serif text-4xl text-gallery-900 md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-stone-600">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
