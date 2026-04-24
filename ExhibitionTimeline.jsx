import SectionTitle from './SectionTitle';

function BiographySection({ t }) {
  return (
    <section id="biography" className="section-padding border-y border-stone-200 bg-white">
      <div className="mx-auto w-[92%] max-w-5xl">
        <SectionTitle eyebrow={t.biography.eyebrow} title={t.biography.title} />
        <p className="text-lg leading-relaxed text-stone-700">{t.biography.text1}</p>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{t.biography.text2}</p>
      </div>
    </section>
  );
}

export default BiographySection;
