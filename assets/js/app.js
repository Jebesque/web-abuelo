const artworks = [
  {
    id: 'desesperacion',
    title: 'Desesperación',
    category: 'recent',
    technique: 'Técnica mixta · díptico',
    size: '50×100',
    price: '750,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_858e55c901184c31bcdbcde6d51053d3~mv2.jpg/v1/fill/w_3302%2Ch_1669%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_858e55c901184c31bcdbcde6d51053d3~mv2.jpg',
    description: 'Refleja el dolor de un padre con su hijo herido en brazos, sin poder salvarlo de la muerte.'
  },
  {
    id: 'inocencia-perdida',
    title: 'Inocencia perdida',
    category: 'recent',
    technique: 'Técnica mixta · díptico',
    size: '50×100',
    price: '750,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_82e579fb50a24e10b45033a3ce953eec~mv2.jpg/v1/fill/w_3085%2Ch_1495%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_82e579fb50a24e10b45033a3ce953eec~mv2.jpg',
    description: 'La mirada inocente de los niños perdida en el horizonte destruido de su ciudad.'
  },
  {
    id: 'grito-infancia',
    title: 'El grito de la infancia',
    category: 'recent',
    technique: 'Técnica mixta',
    size: '50×100',
    price: '750,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_09e57c6e04a144a28ed50630598c5ba3~mv2.jpg/v1/fill/w_3247%2Ch_1640%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_09e57c6e04a144a28ed50630598c5ba3~mv2.jpg',
    description: 'El grito del niño al encontrarse solo ante el horror y la destrucción.'
  },
  {
    id: 'sin-hogar',
    title: 'Sin hogar',
    category: 'recent',
    technique: 'Técnica mixta · díptico',
    size: '50×100',
    price: '750,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_e1401a221a4d4befb658c5e5d5ba7640~mv2.jpg/v1/fill/w_3085%2Ch_1530%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_e1401a221a4d4befb658c5e5d5ba7640~mv2.jpg',
    description: 'Niños caminando sobre escombros, buscando a sus parientes y algo que comer.'
  },
  {
    id: 'cronica-horror',
    title: 'Crónica del horror',
    category: 'recent',
    technique: 'Acrílico · técnica mixta',
    size: '100×100',
    price: '1.000,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_eafab39b459d43699310745fc926b85a~mv2.jpg/v1/fill/w_1831%2Ch_1801%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_eafab39b459d43699310745fc926b85a~mv2.jpg',
    description: 'Representa la destrucción material y personal que producen las guerras.'
  },
  {
    id: 'sequia-incendio',
    title: 'Sequía e incendio',
    category: 'recent',
    technique: 'Acrílico · técnica mixta',
    size: '80×80',
    price: '500,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_8504b9bd04c74bd9b9ea3edf7248d511~mv2.jpg/v1/fill/w_1860%2Ch_1787%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_8504b9bd04c74bd9b9ea3edf7248d511~mv2.jpg',
    description: 'Terreno agrietado por la sequía con una sierra incendiada al fondo.'
  },
  {
    id: 'rios-lava',
    title: 'Ríos de lava',
    category: 'recent',
    technique: 'Acrílico · técnica mixta',
    size: '100×100',
    price: '1.000,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_3dd39be422b6427085c9eb7381fca053~mv2.jpg/v1/fill/w_1719%2Ch_1725%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_3dd39be422b6427085c9eb7381fca053~mv2.jpg',
    description: 'Ríos de lava desplazándose por un túnel volcánico y creando fumarolas.'
  },
  {
    id: 'galaxias-agujero-negro',
    title: 'Galaxias y agujero negro',
    category: 'recent',
    technique: 'Acrílico · técnica mixta',
    size: '120×100',
    price: '1.200,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_531c21e2b1ca43a0906239d86517f15b~mv2.jpg/v1/fill/w_1321%2Ch_1602%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_531c21e2b1ca43a0906239d86517f15b~mv2.jpg',
    description: 'Galaxias en el espacio moviéndose alrededor de un agujero negro.'
  },
  {
    id: 'nebulosa-90',
    title: 'Nebulosa',
    category: 'recent',
    technique: 'Acrílico sobre lienzo con texturas terrosas',
    size: '90×90',
    price: '500,00 €',
    status: 'Agotado',
    sold: true,
    image: 'https://static.wixstatic.com/media/3512bd_a2bdc796e22c4efea8ee24ac8625750e~mv2.jpg/v1/fill/w_1702%2Ch_1658%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_a2bdc796e22c4efea8ee24ac8625750e~mv2.jpg',
    description: 'Acrílico con texturas terrosas de mármol y mica.'
  },
  {
    id: 'kaleidoscopio',
    title: 'Kaleidoscopio',
    category: 'recent',
    technique: 'Acrílico sobre lienzo · técnica mixta',
    size: '100×100',
    price: '1.200,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_ff9f95950c28458a83857a199de00ebd~mv2.jpg/v1/fill/w_2472%2Ch_2408%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_ff9f95950c28458a83857a199de00ebd~mv2.jpg',
    description: 'Acrílico sobre lienzo con texturas y collage textil.'
  },
  {
    id: 'vias-estelares',
    title: 'Vías estelares',
    category: 'recent',
    technique: 'Acrílico sobre lienzo',
    size: '100×100',
    price: '1.000,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_bf5e7aeafdda46c5b58faaad7f4ddd4b~mv2.jpg/v1/fill/w_1616%2Ch_1626%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_bf5e7aeafdda46c5b58faaad7f4ddd4b~mv2.jpg',
    description: 'Texturas terrosas y collage textil sobre lienzo.'
  },
  {
    id: 'hecate',
    title: 'Hécate',
    category: 'recent',
    technique: 'Acrílico sobre lienzo',
    size: '100×100',
    price: '1.000,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_b8c788cc983740e1b477f2e7b7ab1c7d~mv2.jpg/v1/fill/w_2692%2Ch_2645%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_b8c788cc983740e1b477f2e7b7ab1c7d~mv2.jpg',
    description: 'Diosa griega de las encrucijadas, con polvo de mármol y collage textil.'
  },
  {
    id: 'playa-nebulosa',
    title: 'Playa nebulosa',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '50,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_57783ddc8ce44c36a57dc437852c82ba~mv2.jpg/v1/fill/w_1539%2Ch_1098%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/3512bd_57783ddc8ce44c36a57dc437852c82ba~mv2.jpg',
    description: 'Acuarela de atmósfera suave y horizonte difuminado.'
  },
  {
    id: 'serrania',
    title: 'Serranía',
    category: 'watercolour',
    technique: 'Tinta sobre papel',
    size: 'Formato pequeño',
    price: '50,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_e99c8e575f4d4eccab8949b4b72f68ef~mv2.jpg/v1/fill/w_1522%2Ch_997%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/3512bd_e99c8e575f4d4eccab8949b4b72f68ef~mv2.jpg',
    description: 'Paisaje de serranía resuelto con manchas y contraste cromático.'
  },
  {
    id: 'a-traves-cielo',
    title: 'A través del cielo',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '75,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_4dec840e37d44a04a4afec59c67c6c94~mv2.jpg/v1/fill/w_1433%2Ch_2127%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_4dec840e37d44a04a4afec59c67c6c94~mv2.jpg',
    description: 'Acuarela con veladuras de cielo, agua y tierra.'
  },
  {
    id: 'montana-abstracta',
    title: 'Montaña abstracta',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '75,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_86599146548e47b5a63cd0bd7b2cf64f~mv2.jpg/v1/fill/w_1749%2Ch_2478%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_86599146548e47b5a63cd0bd7b2cf64f~mv2.jpg',
    description: 'Lectura abstracta de montaña con tonos cálidos y cielo abierto.'
  },
  {
    id: 'nebulosa-acuarela',
    title: 'Nebulosa · acuarela',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '50,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_c0517999698c4c33aa46dde48cc26671~mv2.jpg/v1/fill/w_1921%2Ch_2611%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_c0517999698c4c33aa46dde48cc26671~mv2.jpg',
    description: 'Acuarela ligera con nieblas y transición de color.'
  },
  {
    id: 'marina-cielo-naranja',
    title: 'Marina con cielo naranja',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '75,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_7d68f07ab1b94c2888f0949a44c52138~mv2.jpg/v1/fill/w_1958%2Ch_2672%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_7d68f07ab1b94c2888f0949a44c52138~mv2.jpg',
    description: 'Marina de luz cálida con cielo naranja y horizonte sereno.'
  },
  {
    id: 'marina',
    title: 'Marina',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '75,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_3a580913f41041bd8361b773cd359e51~mv2.jpg/v1/fill/w_1281%2Ch_1825%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_3a580913f41041bd8361b773cd359e51~mv2.jpg',
    description: 'Paisaje marino con amplitud de cielo y línea de costa.'
  },
  {
    id: 'niebla-montana',
    title: 'La niebla y la montaña',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '75,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_f686a46f815f41c29b5fddd179480d23~mv2.jpg/v1/fill/w_1432%2Ch_2021%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_f686a46f815f41c29b5fddd179480d23~mv2.jpg',
    description: 'Montaña envuelta en niebla, con una paleta sobria y atmosférica.'
  },
  {
    id: 'horizonte-infinito',
    title: 'Horizonte infinito',
    category: 'watercolour',
    technique: 'Acuarela',
    size: 'Formato pequeño',
    price: '75,00 €',
    status: 'Disponible',
    sold: false,
    image: 'https://static.wixstatic.com/media/3512bd_01fcc08ff1f84014bf395dbba1464029~mv2.jpg/v1/fill/w_1791%2Ch_2617%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/3512bd_01fcc08ff1f84014bf395dbba1464029~mv2.jpg',
    description: 'Horizonte amplio y silencioso tratado con aguadas suaves.'
  }
];

const timelineItems = [
  {
    year: '1965–1966',
    title: 'Primeros trabajos y Bellas Artes',
    text: 'Inicio de una pintura informalista abstracta con mucha materia y participación en la Exposición Nacional de Bellas Artes.'
  },
  {
    year: '1967',
    title: 'Pintura cibernética',
    text: 'Trabajos con Eusebio Sempere y Abel Martín; colaboración en el Centro de Cálculo de la Universidad de Madrid.'
  },
  {
    year: '1970',
    title: 'Ingeniería y formas computables',
    text: 'Finaliza Ingeniería Industrial y publica con Abel Martín un libro de serigrafías de formas computables.'
  },
  {
    year: '2014',
    title: 'Sumi-e y acuarela',
    text: 'Estudia pintura china Sumi-e y acuarela con talleres y asociaciones especializadas.'
  },
  {
    year: '2017–2024',
    title: 'Retorno expositivo',
    text: 'Exposiciones en Madrid, Málaga y galerías internacionales; premios, menciones y presencia en colecciones particulares.'
  }
];

const grid = document.querySelector('[data-artwork-grid]');
const search = document.querySelector('[data-search]');
const filterButtons = document.querySelectorAll('[data-filter]');
const dialog = document.querySelector('[data-dialog]');
const dialogContent = document.querySelector('[data-dialog-content]');
let currentFilter = 'all';

function normalize(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getFilteredArtworks() {
  const query = normalize(search.value.trim());
  return artworks.filter((artwork) => {
    const matchesFilter =
      currentFilter === 'all' ||
      artwork.category === currentFilter ||
      (currentFilter === 'sold' && artwork.sold);
    const searchable = normalize(`${artwork.title} ${artwork.technique} ${artwork.size} ${artwork.price} ${artwork.description}`);
    return matchesFilter && (!query || searchable.includes(query));
  });
}

function renderArtworks() {
  const items = getFilteredArtworks();
  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">No hay obras que coincidan con ese filtro.</div>';
    return;
  }

  grid.innerHTML = items
    .map(
      (artwork) => `
      <article class="artwork-card reveal is-visible">
        <div class="artwork-media">
          <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" onerror="this.style.display='none'" />
          <span class="status ${artwork.sold ? 'sold' : ''}">${artwork.status}</span>
        </div>
        <div class="artwork-body">
          <h3>${artwork.title}</h3>
          <p class="meta"><span>${artwork.technique}</span><span>${artwork.size}</span></p>
          <p class="description">${artwork.description}</p>
          <div class="card-footer">
            <span class="price">${artwork.price}</span>
            <button class="details-button" type="button" data-open-artwork="${artwork.id}">Ver detalle</button>
          </div>
        </div>
      </article>`
    )
    .join('');
}

function openArtwork(id) {
  const artwork = artworks.find((item) => item.id === id);
  if (!artwork) return;

  dialogContent.innerHTML = `
    <div class="dialog-inner">
      <img src="${artwork.image}" alt="${artwork.title}" />
      <div class="dialog-copy">
        <p class="eyebrow">${artwork.category === 'watercolour' ? 'Acuarela' : 'Obra reciente'}</p>
        <h2>${artwork.title}</h2>
        <p>${artwork.description}</p>
        <p class="meta"><span>${artwork.technique}</span><span>${artwork.size}</span><span>${artwork.status}</span></p>
        <strong class="price">${artwork.price}</strong>
        <div class="dialog-actions">
          <a class="button button-primary" href="mailto:edelgadocont@gmail.com?subject=Consulta%20sobre%20${encodeURIComponent(artwork.title)}&body=Hola%20Enrique%2C%20estoy%20interesado%2Fa%20en%20la%20obra%20${encodeURIComponent(artwork.title)}.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">Consultar obra</a>
          <button class="button button-ghost" type="button" data-close-dialog>Cerrar</button>
        </div>
      </div>
    </div>`;

  dialog.showModal();
}

function renderTimeline() {
  const timeline = document.querySelector('[data-timeline]');
  timeline.innerHTML = timelineItems
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-year">${item.year}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>`
    )
    .join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    renderArtworks();
  });
});

search.addEventListener('input', renderArtworks);

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-open-artwork]');
  if (button) openArtwork(button.dataset.openArtwork);
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog || event.target.closest('[data-close-dialog]')) {
    dialog.close();
  }
});

document.querySelector('[data-contact-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const body = encodeURIComponent(`${message}\n\nNombre: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:edelgadocont@gmail.com?subject=Consulta%20web%20Enrique%20Delgado&body=${body}`;
});

const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

renderArtworks();
renderTimeline();
