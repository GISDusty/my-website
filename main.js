// ── Scroll reveal ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ── Nav scroll state ──
const nav = document.querySelector('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile menu ──
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    })
  );
}
