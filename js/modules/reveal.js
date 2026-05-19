// Settle reveal — one-shot fade + 20px up via IntersectionObserver.

export function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    }
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12
  });

  els.forEach(el => io.observe(el));
}
