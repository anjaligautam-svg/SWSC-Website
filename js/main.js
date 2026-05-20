import { initNav } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';
import { initFab } from './modules/fab.js';
import { initHeroGallery } from './modules/hero-gallery.js';
import { initCarousel } from './modules/carousel.js';
import { initCardGlow } from './modules/card-glow.js';

const ready = (fn) =>
  document.readyState !== 'loading'
    ? fn()
    : document.addEventListener('DOMContentLoaded', fn);

ready(() => {
  initNav();
  initReveal();
  initFab();
  initHeroGallery();
  initCarousel();
  initCardGlow();
});
