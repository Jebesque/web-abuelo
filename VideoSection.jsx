import SectionTitle from './SectionTitle';

function PressSection({ items, language, t }) {
  return (
    <section id="press" className="section-padding border-y border-stone-200 bg-white">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={t.press.eyebrow} title={t.press.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="rounded-sm border border-stone-200 p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">{item.source}</p>
              <h3 className="mt-2 font-serif text-2xl text-gallery-900">{language === 'es' ? item.title_es : item.title_en}</h3>
              <p className="mt-4 italic text-stone-600">“{language === 'es' ? item.quote_es : item.quote_en}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressSection;
