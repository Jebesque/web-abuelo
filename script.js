const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const year = document.querySelector('#year');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}
