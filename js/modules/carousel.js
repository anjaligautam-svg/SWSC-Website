// Image carousel — vanilla port of the shadcn/embla "Gallery4" pattern.
// One slide per view: draggable + snap, arrows, dot pagination, gentle autoplay.
// Autoplay pauses on hover, focus, drag, or when the tab is hidden.

const AUTOPLAY_MS = 5500;
const DRAG_THRESHOLD = 0.16; // fraction of viewport width to trigger a slide change

export function initCarousel() {
  const roots = document.querySelectorAll('[data-carousel]');
  roots.forEach(setupCarousel);
}

function setupCarousel(root) {
  const viewport = root.querySelector('[data-carousel-viewport]');
  const track = root.querySelector('[data-carousel-track]');
  const dotsRoot = root.querySelector('[data-carousel-dots]');
  const prevBtn = root.querySelector('[data-carousel-prev]');
  const nextBtn = root.querySelector('[data-carousel-next]');
  if (!viewport || !track) return;

  const slides = Array.from(track.children);
  const count = slides.length;
  if (count === 0) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer = null;

  // ---- Dots ----
  const dots = [];
  if (dotsRoot) {
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'ibfc-dot';
      dot.setAttribute('aria-label', `Go to image ${i + 1} of ${count}`);
      dot.addEventListener('click', () => { goTo(i); restartAutoplay(); });
      dotsRoot.appendChild(dot);
      dots.push(dot);
    }
  }

  const TRANSITION = 'transform 620ms cubic-bezier(0.22, 1, 0.36, 1)';

  const render = () => {
    track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === count - 1;
  };

  const goTo = (i) => {
    index = Math.max(0, Math.min(count - 1, i));
    track.style.transition = prefersReduced ? 'none' : TRANSITION;
    render();
  };

  // ---- Autoplay ----
  const advance = () => goTo(index >= count - 1 ? 0 : index + 1);
  const startAutoplay = () => {
    if (timer || prefersReduced) return;
    timer = setInterval(advance, AUTOPLAY_MS);
  };
  const stopAutoplay = () => {
    if (timer) { clearInterval(timer); timer = null; }
  };
  const restartAutoplay = () => { stopAutoplay(); startAutoplay(); };

  // ---- Arrows ----
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(index - 1); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(index + 1); restartAutoplay(); });

  // ---- Keyboard ----
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(index - 1); restartAutoplay(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); restartAutoplay(); }
  });

  // ---- Pointer drag ----
  let dragging = false;
  let startX = 0;
  let delta = 0;
  let width = 0;

  const onDown = (e) => {
    dragging = true;
    startX = e.clientX;
    delta = 0;
    width = viewport.offsetWidth;
    track.style.transition = 'none';
    viewport.classList.add('is-dragging');
    stopAutoplay();
    viewport.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e) => {
    if (!dragging) return;
    delta = e.clientX - startX;
    const pct = (delta / width) * 100;
    // light resistance at the ends
    let offset = -index * 100 + pct;
    if ((index === 0 && delta > 0) || (index === count - 1 && delta < 0)) {
      offset = -index * 100 + pct * 0.35;
    }
    track.style.transform = `translate3d(${offset}%, 0, 0)`;
  };

  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove('is-dragging');
    const moved = delta;
    if (moved <= -width * DRAG_THRESHOLD) goTo(index + 1);
    else if (moved >= width * DRAG_THRESHOLD) goTo(index - 1);
    else goTo(index);
    restartAutoplay();
  };

  viewport.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);

  // Block the click that follows a real drag (so slide links/children don't fire)
  viewport.addEventListener('click', (e) => {
    if (Math.abs(delta) > 6) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  // ---- Pause autoplay on hover / focus / hidden tab ----
  viewport.addEventListener('pointerenter', stopAutoplay);
  viewport.addEventListener('pointerleave', startAutoplay);
  viewport.addEventListener('focusin', stopAutoplay);
  viewport.addEventListener('focusout', startAutoplay);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay(); else startAutoplay();
  });

  // Keep alignment correct on resize
  window.addEventListener('resize', () => {
    track.style.transition = 'none';
    render();
  });

  render();
  startAutoplay();
}
