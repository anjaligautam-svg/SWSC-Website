// Hero gallery — autoplay rotates which image is .is-active.
// Hover pauses autoplay (CSS :hover takes over); pointer-leave resumes.
// Honors prefers-reduced-motion.

const INTERVAL_MS = 3600;

export function initHeroGallery() {
  const gallery = document.querySelector('[data-hero-gallery]');
  if (!gallery) return;

  const items = Array.from(gallery.querySelectorAll('.gallery-item'));
  if (items.length === 0) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIdx = 0;
  let timer = null;

  const setActive = (idx) => {
    items.forEach((el, i) => el.classList.toggle('is-active', i === idx));
    activeIdx = idx;
  };

  const tick = () => {
    setActive((activeIdx + 1) % items.length);
  };

  const start = () => {
    if (timer || prefersReduced) return;
    timer = setInterval(tick, INTERVAL_MS);
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  // Initial state — respect whichever item has .is-active in HTML; fall back to 0
  const initialIdx = items.findIndex(el => el.classList.contains('is-active'));
  setActive(initialIdx >= 0 ? initialIdx : 0);

  // Pause on hover anywhere over the gallery; resume on leave
  gallery.addEventListener('pointerenter', stop);
  gallery.addEventListener('pointerleave', start);

  // Click on a gallery item locks it active
  items.forEach((el, i) => {
    el.addEventListener('click', () => setActive(i));
  });

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  if (!prefersReduced) start();
}
