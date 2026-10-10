// Mebel Laminat — small, editable interactions.
const languageToggle = document.getElementById('languageToggle');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('mainNav');
let currentLanguage = 'mk';

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-mk][data-en]').forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.innerHTML = value;
  });
  languageToggle.textContent = language === 'mk' ? 'EN' : 'MK';
  document.querySelectorAll('option[data-mk][data-en]').forEach((option) => {
    option.textContent = option.dataset[language];
  });
}
languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'mk' ? 'en' : 'mk'));

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// This simple contact form creates an email in the visitor's email app.
// Replace this address with the business's real email before publishing.
const BUSINESS_EMAIL = 'info@mebellaminat.mk';
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `Website inquiry — ${form.get('project')}`;
  const body = [
    `Name: ${form.get('name')}`,
    `Email: ${form.get('email')}`,
    `Project: ${form.get('project')}`,
    '',
    'Message:',
    form.get('message')
  ].join('\n');
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
