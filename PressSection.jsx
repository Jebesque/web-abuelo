function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="inline-flex rounded-full border border-stone-300 p-1 text-sm">
      <button
        type="button"
        className={`rounded-full px-3 py-1 transition ${language === 'es' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
      <button
        type="button"
        className={`rounded-full px-3 py-1 transition ${language === 'en' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageToggle;
