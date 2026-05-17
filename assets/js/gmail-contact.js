const CONTACT_EMAIL = 'edelgadocont@gmail.com';
const DEFAULT_SUBJECT = 'Consulta desde endelcon.com';
const DEFAULT_BODY = 'Hola Enrique, me gustaría recibir más información.';

function buildGmailComposeUrl({
  to = CONTACT_EMAIL,
  subject = DEFAULT_SUBJECT,
  body = DEFAULT_BODY
} = {}) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

function openGmailCompose(url) {
  const gmailWindow = window.open(url, '_blank', 'noopener,noreferrer');

  if (!gmailWindow) {
    window.location.href = url;
  }
}

function addHeroGmailButton() {
  const heroActions = document.querySelector('.hero-actions');
  if (!heroActions || heroActions.querySelector('[data-gmail-contact]')) return;

  const gmailButton = document.createElement('a');
  gmailButton.className = 'button button-ghost';
  gmailButton.href = buildGmailComposeUrl();
  gmailButton.target = '_blank';
  gmailButton.rel = 'noopener noreferrer';
  gmailButton.dataset.gmailContact = 'true';
  gmailButton.textContent = 'Abrir Gmail';

  heroActions.appendChild(gmailButton);
}

function addContactGmailLink() {
  const mailList = document.querySelector('.mail-list');
  if (!mailList || mailList.querySelector('[data-gmail-contact]')) return;

  const gmailLink = document.createElement('a');
  gmailLink.href = buildGmailComposeUrl();
  gmailLink.target = '_blank';
  gmailLink.rel = 'noopener noreferrer';
  gmailLink.dataset.gmailContact = 'true';
  gmailLink.textContent = 'Abrir Gmail con mensaje preparado';

  mailList.appendChild(gmailLink);
}

function makeContactFormOpenGmail() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  form.addEventListener(
    'submit',
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const body = `${message}\n\nNombre: ${name}\nEmail: ${email}`;
      const url = buildGmailComposeUrl({
        subject: 'Consulta web Enrique Delgado',
        body
      });

      openGmailCompose(url);
    },
    true
  );
}

function addArtworkGmailButton() {
  const dialogContent = document.querySelector('[data-dialog-content]');
  if (!dialogContent || dialogContent.querySelector('[data-gmail-artwork]')) return;

  const actions = dialogContent.querySelector('.dialog-actions');
  const title = dialogContent.querySelector('h2')?.textContent?.trim();
  if (!actions || !title) return;

  const gmailButton = document.createElement('a');
  gmailButton.className = 'button button-ghost';
  gmailButton.href = buildGmailComposeUrl({
    subject: `Consulta sobre ${title}`,
    body: `Hola Enrique, estoy interesado/a en la obra ${title}. Me gustaría recibir más información.`
  });
  gmailButton.target = '_blank';
  gmailButton.rel = 'noopener noreferrer';
  gmailButton.dataset.gmailArtwork = 'true';
  gmailButton.textContent = 'Abrir Gmail';

  actions.insertBefore(gmailButton, actions.children[1] || null);
}

function watchArtworkDialog() {
  const dialogContent = document.querySelector('[data-dialog-content]');
  if (!dialogContent) return;

  const observer = new MutationObserver(addArtworkGmailButton);
  observer.observe(dialogContent, { childList: true, subtree: true });
}

addHeroGmailButton();
addContactGmailLink();
makeContactFormOpenGmail();
watchArtworkDialog();
