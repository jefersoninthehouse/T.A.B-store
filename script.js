// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form submission (Formspree — no page reload)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'در حال ارسال...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      status.textContent = 'پیام شما ارسال شد. ممنون از تماست!';
      form.reset();
    } else {
      status.textContent = 'مشکلی پیش اومد. لطفاً دوباره تلاش کن یا تماس بگیر.';
    }
  } catch (err) {
    status.textContent = 'مشکلی پیش اومد. لطفاً دوباره تلاش کن یا تماس بگیر.';
  }
});
