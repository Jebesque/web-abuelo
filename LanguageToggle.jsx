function Footer({ language }) {
  return (
    <footer className="border-t border-stone-200 py-8">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col justify-between gap-2 text-sm text-stone-500 md:flex-row">
        <p>© {new Date().getFullYear()} Enrique Delgado · ENDELCON</p>
        <p>{language === 'es' ? 'Portfolio de artista contemporáneo' : 'Contemporary artist portfolio'}</p>
      </div>
    </footer>
  );
}

export default Footer;
