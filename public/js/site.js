/* =========================================================
   MSA GNIT — shared page behaviors
   (header scroll shadow, mobile nav, scroll reveal)
========================================================= */
(function () {
  // header scroll shadow
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
  }

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobilePanel = document.querySelector('.mobile-panel');
  const scrim = document.querySelector('.scrim');
  if (navToggle && mobilePanel && scrim) {
    function closeMenu() {
      mobilePanel.classList.remove('open');
      scrim.classList.remove('open');
      navToggle.textContent = '☰';
    }
    navToggle.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      scrim.classList.toggle('open', isOpen);
      navToggle.textContent = isOpen ? '✕' : '☰';
    });
    scrim.addEventListener('click', closeMenu);
    mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  // scroll reveal with staggered delay per sibling group
  const revealGroups = new Map();
  document.querySelectorAll('.reveal').forEach(el => {
    const parent = el.parentElement;
    const idx = revealGroups.get(parent) || 0;
    el.style.setProperty('--delay', `${Math.min(idx, 5) * 0.09}s`);
    revealGroups.set(parent, idx + 1);
  });
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
})();
