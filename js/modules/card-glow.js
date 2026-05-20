// Cursor-following card glow — vanilla port of the bento-monochrome
// hover effect. Any [data-glow] element gets a radial spotlight that
// tracks the pointer via the --tx / --ty custom properties.

export function initCardGlow() {
  const cards = document.querySelectorAll('[data-glow]');
  if (!cards.length) return;

  cards.forEach((card) => {
    let raf = null;

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        card.style.setProperty('--tx', `${x}px`);
        card.style.setProperty('--ty', `${y}px`);
        raf = null;
      });
    });
  });
}
