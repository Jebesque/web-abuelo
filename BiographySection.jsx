function ArtworkCard({ artwork, language, t }) {
  return (
    <article className="group overflow-hidden rounded-sm border border-stone-200 bg-white shadow-soft">
      <div className="overflow-hidden">
        <img src={artwork.image} alt={language === 'es' ? artwork.title_es : artwork.title_en} className="artwork-image" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-serif text-2xl text-gallery-900">{language === 'es' ? artwork.title_es : artwork.title_en}</h3>
        <p className="text-sm text-stone-600">{artwork.year} · {language === 'es' ? artwork.technique_es : artwork.technique_en}</p>
        <p className="text-sm text-stone-500">{artwork.dimensions}</p>
        <p className="text-sm text-stone-600">{language === 'es' ? artwork.description_es : artwork.description_en}</p>
        <div className="flex items-center justify-between pt-2">
          <span className={`text-xs uppercase tracking-[0.15em] ${artwork.available ? 'text-emerald-700' : 'text-stone-400'}`}>
            {artwork.available ? t.works.available : t.works.sold}
          </span>
          <button className="rounded-full border border-gallery-900 px-4 py-2 text-xs uppercase tracking-[0.12em] text-gallery-900 transition hover:bg-gallery-900 hover:text-white">
            {t.works.contact}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ArtworkCard;
