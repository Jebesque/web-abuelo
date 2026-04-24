import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import ArtworkGrid from './components/ArtworkGrid';
import BiographySection from './components/BiographySection';
import ExhibitionTimeline from './components/ExhibitionTimeline';
import PressSection from './components/PressSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { artworks } from './data/artworks';
import { exhibitions } from './data/exhibitions';
import { pressReviews } from './data/press';
import { videos } from './data/videos';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Perfil',
      biography: 'Biografía',
      works: 'Obras',
      recent: 'Obras recientes',
      watercolours: 'Acuarelas',
      previous: 'Obras anteriores',
      exhibitions: 'Exposiciones',
      press: 'Artículos de prensa',
      videos: 'Videos',
      contact: 'Contacto',
      menu: 'Menú',
    },
    hero: {
      subtitle: 'Pintura abstracta, paisajes y acuarelas del artista español Enrique Delgado.',
      cta: 'Ver obras',
    },
    about: {
      eyebrow: 'Perfil',
      title: 'Un lenguaje pictórico entre abstracción, paisaje y materia',
      subtitle:
        'El trabajo de Enrique Delgado explora la memoria del paisaje y la emoción del color con un enfoque contemporáneo y elegante.',
    },
    biography: {
      eyebrow: 'Biografía',
      title: 'Trayectoria',
      text1:
        'Enrique Delgado desarrolla su obra entre estudio, naturaleza y experimentación técnica. Su práctica combina capas gestuales, atmósferas cromáticas y estructuras compositivas de gran equilibrio.',
      text2:
        'A lo largo de su carrera ha participado en exposiciones individuales y colectivas, consolidando una voz propia en la pintura abstracta contemporánea.',
    },
    works: {
      eyebrow: 'Obras',
      title: 'Selección general',
      subtitle: 'Piezas disponibles y obras destacadas de diferentes series.',
      available: 'Disponible',
      sold: 'No disponible',
      contact: 'Contactar disponibilidad',
    },
    exhibitions: { eyebrow: 'Exposiciones', title: 'Exhibiciones y muestras' },
    press: { eyebrow: 'Prensa', title: 'Artículos y reseñas' },
    videos: { eyebrow: 'Video', title: 'Registro audiovisual' },
    contact: {
      eyebrow: 'Contacto',
      title: 'Solicitudes y encargos',
      subtitle: 'Contacta para disponibilidad de obra, precios y comisiones.',
      note: 'Formulario de contacto en frontend (sin integración backend por ahora).',
      formName: 'Nombre',
      formEmail: 'Correo electrónico',
      formMessage: 'Mensaje',
      formButton: 'Enviar consulta',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      biography: 'Biography',
      works: 'Works',
      recent: 'Recent Works',
      watercolours: 'Watercolours',
      previous: 'Previous Works',
      exhibitions: 'Exhibitions',
      press: 'Press Reviews',
      videos: 'Videos',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      subtitle: 'Abstract painting, landscapes and watercolours by Spanish artist Enrique Delgado.',
      cta: 'View works',
    },
    about: {
      eyebrow: 'About',
      title: 'A visual language between abstraction, landscape and materiality',
      subtitle:
        'Enrique Delgado explores landscape memory and emotional color through a contemporary and refined approach.',
    },
    biography: {
      eyebrow: 'Biography',
      title: 'Artistic Path',
      text1:
        'Enrique Delgado develops his work between studio practice, nature and technical experimentation. His process combines gestural layers, chromatic atmospheres and balanced composition.',
      text2:
        'Throughout his career he has participated in solo and group exhibitions, consolidating a unique voice in contemporary abstract painting.',
    },
    works: {
      eyebrow: 'Works',
      title: 'General Selection',
      subtitle: 'Available artworks and highlighted pieces from multiple series.',
      available: 'Available',
      sold: 'Not available',
      contact: 'Contact for availability',
    },
    exhibitions: { eyebrow: 'Exhibitions', title: 'Shows and exhibitions' },
    press: { eyebrow: 'Press', title: 'Articles and reviews' },
    videos: { eyebrow: 'Videos', title: 'Audiovisual archive' },
    contact: {
      eyebrow: 'Contact',
      title: 'Inquiries and Commissions',
      subtitle: 'Contact the artist for availability, prices and commissions.',
      note: 'Contact form is frontend-only for now (no backend integration yet).',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formButton: 'Send inquiry',
    },
  },
};

const filterByCategory = (category) => artworks.filter((item) => item.category === category);

function App() {
  const [language, setLanguage] = useState('es');
  const t = useMemo(() => translations[language], [language]);

  return (
    <div className="bg-gallery-50 text-gallery-900">
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />

      <section id="about" className="section-padding border-y border-stone-200 bg-white">
        <div className="mx-auto w-[92%] max-w-5xl">
          <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle} />
        </div>
      </section>

      <BiographySection t={t} />

      <section id="works" className="section-padding">
        <div className="mx-auto w-[92%] max-w-7xl">
          <SectionTitle eyebrow={t.works.eyebrow} title={t.works.title} subtitle={t.works.subtitle} />
          <ArtworkGrid items={artworks} language={language} t={t} />
        </div>
      </section>

      <section id="recent" className="section-padding border-y border-stone-200 bg-white">
        <div className="mx-auto w-[92%] max-w-7xl">
          <SectionTitle title={t.nav.recent} />
          <ArtworkGrid items={filterByCategory('recent')} language={language} t={t} />
        </div>
      </section>

      <section id="watercolours" className="section-padding">
        <div className="mx-auto w-[92%] max-w-7xl">
          <SectionTitle title={t.nav.watercolours} />
          <ArtworkGrid items={filterByCategory('watercolour')} language={language} t={t} />
        </div>
      </section>

      <section id="previous" className="section-padding border-y border-stone-200 bg-white">
        <div className="mx-auto w-[92%] max-w-7xl">
          <SectionTitle title={t.nav.previous} />
          <ArtworkGrid items={filterByCategory('previous')} language={language} t={t} />
        </div>
      </section>

      <ExhibitionTimeline exhibitions={exhibitions} language={language} t={t} />
      <PressSection items={pressReviews} language={language} t={t} />
      <VideoSection items={videos} language={language} t={t} />
      <ContactSection t={t} />
      <Footer language={language} />
    </div>
  );
}

export default App;
