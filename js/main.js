const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const form = document.querySelector('#enquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Concept build: no backend, so the form only shows a confirmation.
    const status = document.querySelector('#form-status');
    status.textContent = 'Thanks! This is a concept site, so nothing was actually sent.';
    form.reset();
  });
}

// Scroll reveal: elements start hidden only once JS is confirmed running.
document.documentElement.classList.add('js');
const reveals = document.querySelectorAll('.card, .service-row, .section-head, .split > *');
reveals.forEach((el) => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}
