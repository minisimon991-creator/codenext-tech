/* CODENEXT TECH — accessible interactions for the static website foundation. */
(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const themeButton = document.querySelector('.theme-toggle');
  const splash = document.getElementById('splash-screen');
  const contactForm = document.getElementById('contact-form');
  const year = document.getElementById('year');

  // Keep the branded opening screen visible for five seconds.
  if (splash) {
    window.setTimeout(() => {
      splash.classList.add('is-hidden');
      window.setTimeout(() => splash.remove(), 450);
    }, 5000);
  }

  // Mobile navigation: close after choosing a section and keep ARIA state current.
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menuButton.textContent = isOpen ? '×' : '☰';
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        menuButton.textContent = '☰';
      });
    });
  }

  // Light/dark preference is stored locally on the visitor's device only.
  const savedTheme = localStorage.getItem('codenext-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.dataset.theme = savedTheme;
  }
  const updateThemeButton = () => {
    if (!themeButton) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.textContent = dark ? '☀' : '◐';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  };
  updateThemeButton();
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('codenext-theme', next);
      updateThemeButton();
    });
  }

  // The current enquiry form prepares an email; it does not submit to a server.
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const subject = `CODENEXT TECH project enquiry — ${data.get('service') || 'General enquiry'}`;
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Service: ${data.get('service') || 'Not specified'}`,
        '',
        'Project details:',
        data.get('message')
      ].join('\n');
      window.location.href = `mailto:minisimon992@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  if (year) year.textContent = String(new Date().getFullYear());
})();
