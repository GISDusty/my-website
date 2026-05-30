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

function setMenuOpen(open) {
  if (!toggle || !links) return;
  toggle.classList.toggle('open', open);
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
}

if (toggle && links) {
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(!links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuOpen(false);
  });
}
