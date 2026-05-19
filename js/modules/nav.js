// Sticky nav — adds .is-scrolled past a small threshold.

export function initNav() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;

  const threshold = 12;
  let ticking = false;

  const update = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > threshold);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}
