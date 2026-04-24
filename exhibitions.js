import SectionTitle from './SectionTitle';

function VideoSection({ items, language, t }) {
  return (
    <section id="videos" className="section-padding">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle eyebrow={t.videos.eyebrow} title={t.videos.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((video) => (
            <article key={video.id} className="space-y-3">
              <div className="aspect-video overflow-hidden rounded-sm border border-stone-200">
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title={language === 'es' ? video.title_es : video.title_en}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="font-serif text-2xl text-gallery-900">{language === 'es' ? video.title_es : video.title_en}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
