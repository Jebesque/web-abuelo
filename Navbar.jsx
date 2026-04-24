function Hero({ t }) {
  return (
    <section id="home" className="section-padding">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-10 md:grid-cols-2 md:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-stone-500">ENDELCON</p>
          <h1 className="font-serif text-5xl leading-tight text-gallery-900 md:text-7xl">Enrique Delgado</h1>
          <p className="mt-6 max-w-xl text-lg text-stone-600">{t.hero.subtitle}</p>
          <a
            href="#works"
            className="mt-8 inline-block rounded-full border border-gallery-900 px-8 py-3 text-sm text-gallery-900 transition hover:bg-gallery-900 hover:text-white"
          >
            {t.hero.cta}
          </a>
        </div>
        <img
          src="https://picsum.photos/seed/enrique-hero/1200/1400"
          alt="Enrique Delgado artwork"
          className="h-[580px] w-full rounded-sm object-cover shadow-soft"
        />
      </div>
    </section>
  );
}

export default Hero;
