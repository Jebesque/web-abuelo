import SectionTitle from './SectionTitle';

function ContactSection({ t }) {
  return (
    <section id="contact" className="section-padding border-t border-stone-200 bg-white">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
          <p className="text-stone-700">edelgadocont@gmail.com</p>
          <p className="text-stone-700">edelgadocont@endelcon.com</p>
          <p className="mt-6 text-sm text-stone-600">{t.contact.note}</p>
        </div>
        <form className="space-y-4 rounded-sm border border-stone-200 p-6">
          <input className="w-full border-b border-stone-300 bg-transparent p-2 outline-none" placeholder={t.contact.formName} />
          <input className="w-full border-b border-stone-300 bg-transparent p-2 outline-none" placeholder={t.contact.formEmail} />
          <textarea
            className="h-32 w-full border-b border-stone-300 bg-transparent p-2 outline-none"
            placeholder={t.contact.formMessage}
          />
          <button
            type="button"
            className="rounded-full border border-gallery-900 px-6 py-2 text-sm text-gallery-900 transition hover:bg-gallery-900 hover:text-white"
          >
            {t.contact.formButton}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
