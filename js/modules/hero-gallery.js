// Hero photo slider — one landscape image at a time, crossfade,
// caption (text + subtext), and a segmented progress bar.
// Autoplay advances every INTERVAL; the active progress segment fills
// over the same duration (kept in sync with hero.css @keyframes heroProgress).

const INTERVAL = 5000;

export function initHeroGallery() {
  const slider = document.querySelector('[data-hero-slider]');
  const progress = document.querySelector('[data-hero-progress]');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.hero__slide'));
  const segs = progress ? Array.from(progress.querySelectorAll('.hero__progress-seg')) : [];
  if (slides.length === 0) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = Math.max(0, slides.findIndex((s) => s.classList.contains('is-active')));
  let timer = null;

  const show = (i) => {
    index = (i + slides.length) % slides.length;

    slides.forEach((s, n) => s.classList.toggle('is-active', n === index));

    segs.forEach((seg, n) => {
      seg.classList.remove('is-active', 'is-done');
      if (n < index) seg.classList.add('is-done');
    });
    const active = segs[index];
    if (active) {
      void active.offsetWidth; // reflow so the fill animation restarts
      active.classList.add('is-active');
    }
  };

  const start = () => {
    if (timer || prefersReduced) return;
    timer = setInterval(() => show(index + 1), INTERVAL);
  };
  const stop = () => {
    if (timer) { clearInterval(timer); timer = null; }
  };

  // initial state
  show(index);
  start();

  // hover pauses; leaving restarts the current slide cleanly so the
  // progress fill and autoplay stay in sync
  slider.addEventListener('pointerenter', () => {
    stop();
    slider.classList.add('is-paused');
  });
  slider.addEventListener('pointerleave', () => {
    slider.classList.remove('is-paused');
    show(index);
    start();
  });

  // click a progress segment to jump
  segs.forEach((seg, n) => {
    seg.addEventListener('click', () => {
      show(n);
      stop();
      start();
    });
  });

  // pause when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      show(index);
      start();
    }
  });
}
