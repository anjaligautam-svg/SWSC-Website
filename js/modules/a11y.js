// Accessibility bar — text resize + high-contrast toggle.

const SIZES = [90, 100, 112, 125]; // root font-size, %
const DEFAULT_IDX = 1;             // 100%

export function initA11y() {
  const bar = document.querySelector('[data-a11y-bar]');
  if (!bar) return;

  const root = document.documentElement;
  let sizeIdx = DEFAULT_IDX;

  const applySize = () => {
    root.style.fontSize = SIZES[sizeIdx] + '%';
  };

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-a11y]');
    if (!btn) return;

    switch (btn.dataset.a11y) {
      case 'text-inc':
        sizeIdx = Math.min(sizeIdx + 1, SIZES.length - 1);
        applySize();
        break;
      case 'text-dec':
        sizeIdx = Math.max(sizeIdx - 1, 0);
        applySize();
        break;
      case 'text-reset':
        sizeIdx = DEFAULT_IDX;
        applySize();
        break;
      case 'contrast': {
        const on = root.classList.toggle('a11y-contrast');
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        break;
      }
      default:
        break;
    }
  });
}
