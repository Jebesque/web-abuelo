import { useState } from 'react';
import LanguageToggle from './LanguageToggle';

function Navbar({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['home', '#home'],
    ['about', '#about'],
    ['biography', '#biography'],
    ['works', '#works'],
    ['recent', '#recent'],
    ['watercolours', '#watercolours'],
    ['previous', '#previous'],
    ['exhibitions', '#exhibitions'],
    ['press', '#press'],
    ['videos', '#videos'],
    ['contact', '#contact'],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-gallery-50/90 backdrop-blur">
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-4">
        <a href="#home" className="font-serif text-2xl tracking-wide text-gallery-900">
          Enrique Delgado
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([key, href]) => (
            <a key={key} href={href} className="text-sm text-stone-700 transition hover:text-stone-900">
              {t.nav[key]}
            </a>
          ))}
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </nav>
        <button
          type="button"
          className="rounded border border-stone-300 px-3 py-1 text-sm lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          {t.nav.menu}
        </button>
      </div>
      {open && (
        <div className="border-t border-stone-200 bg-gallery-50 lg:hidden">
          <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-3 py-4">
            {links.map(([key, href]) => (
              <a key={key} href={href} className="text-stone-700" onClick={() => setOpen(false)}>
                {t.nav[key]}
              </a>
            ))}
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
