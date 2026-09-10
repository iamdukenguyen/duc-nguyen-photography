// Homepage hero slideshow: auto-advances through a curated set of photos
// (images/hero/), with click arrows for manual navigation and dots to jump
// to a specific slide directly. Pauses the auto-advance timer briefly after
// manual navigation so it doesn't fight the visitor's click.
(function () {
  const hero = document.getElementById('homeHero');
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll('.home-hero-slide'));
  if (!slides.length) return;

  // Shuffle the slide order (Fisher-Yates) so it's different each load,
  // then re-append in that order and clear any pre-set "active" class.
  for (let i = slides.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slides[i], slides[j]] = [slides[j], slides[i]];
  }
  slides.forEach(s => { s.classList.remove('active'); hero.insertBefore(s, dotsWrapPlaceholder()); });
  slides[0].classList.add('active');

  function dotsWrapPlaceholder(){
    // Slides need to stay before the arrows/dots/scroll-cue controls in the DOM.
    return document.getElementById('homeHeroPrev');
  }

  const dotsWrap = document.getElementById('homeHeroDots');
  const btnPrev = document.getElementById('homeHeroPrev');
  const btnNext = document.getElementById('homeHeroNext');

  let current = 0;
  let timer = null;
  const AUTO_MS = 5500;

  slides.forEach((s, i) => {
    const dot = document.createElement('button');
    dot.className = 'home-hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(index, manual) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    if (manual) restartTimer();
  }

  function next() { goTo(current + 1, true); }
  function prev() { goTo(current - 1, true); }

  function restartTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => goTo(current + 1, false), AUTO_MS);
  }

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  restartTimer();
})();
