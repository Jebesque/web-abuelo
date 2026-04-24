import SectionTitle from './SectionTitle';

function ExhibitionTimeline({ exhibitions, language, t }) {
  return (
    <section id="exhibitions" className="section-padding">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={t.exhibitions.eyebrow} title={t.exhibitions.title} />
        <div className="space-y-6 border-l border-stone-300 pl-6">
          {exhibitions.map((ex) => (
            <article key={ex.id} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-stone-500" />
              <p className="text-sm text-stone-500">{ex.year} · {ex.location}</p>
              <h3 className="font-serif text-2xl text-gallery-900">{language === 'es' ? ex.title_es : ex.title_en}</h3>
              <p className="text-stone-600">{language === 'es' ? ex.description_es : ex.description_en}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionTimeline;
