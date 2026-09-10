// Lightbox for gallery pages (Landscapes & Landmarks / People & Lifestyle / Wildlife & Macro)
// Expects markup: .gallery-grid a > img, and a .lightbox overlay with a
// .lightbox-frame wrapper around #lightboxImg in the page.
(function () {
  const galleryLinks = Array.from(document.querySelectorAll('.gallery-grid a'));
  if (!galleryLinks.length) return;

  const lightbox = document.getElementById('lightbox');
  const frame = document.getElementById('lightboxFrame');
  const lbImg = document.getElementById('lightboxImg');
  const lbCap = document.getElementById('lightboxCap');
  const lbCounter = document.getElementById('lightboxCounter');
  const btnClose = document.getElementById('lightboxClose');
  const btnPrev = document.getElementById('lightboxPrev');
  const btnNext = document.getElementById('lightboxNext');

  const items = galleryLinks.map(a => {
    const img = a.querySelector('img');
    const cap = a.querySelector('.cap');
    return {
      src: img ? img.src : '',
      alt: img ? img.alt : '',
      caption: cap ? cap.textContent.trim() : '',
      imgEl: img
    };
  });

  let current = 0;

  // Fit a photo's natural size into the available viewport (minus room for
  // the border, caption, and counter), preserving its aspect ratio.
  function computeFrameSize(naturalW, naturalH) {
    const maxW = window.innerWidth * 0.88;
    const maxH = window.innerHeight * 0.74;
    const w = naturalW || 1600;
    const h = naturalH || 1000;
    const scale = Math.min(maxW / w, maxH / h);
    return { w: Math.round(w * scale), h: Math.round(h * scale) };
  }

  function setFrameSize(w, h, animate) {
    if (!animate) frame.style.transition = 'none';
    frame.style.width = w + 'px';
    frame.style.height = h + 'px';
    if (!animate) {
      void frame.offsetWidth; // force reflow
      frame.style.transition = '';
    }
  }

  function show(index, animate) {
    current = (index + items.length) % items.length;
    const item = items[current];
    const natW = (item.imgEl && item.imgEl.naturalWidth) || 1600;
    const natH = (item.imgEl && item.imgEl.naturalHeight) || 1000;
    const { w, h } = computeFrameSize(natW, natH);

    lbCap.textContent = item.caption;
    lbCounter.textContent = (current + 1) + ' / ' + items.length;

    if (animate) {
      // Fade the current photo out, morph the frame to the new photo's
      // shape, then swap the image in and fade it back in.
      lbImg.style.opacity = 0;
      setFrameSize(w, h, true);
      window.setTimeout(() => {
        lbImg.src = item.src;
        lbImg.alt = item.alt;
        requestAnimationFrame(() => { lbImg.style.opacity = 1; });
      }, 220);
    } else {
      setFrameSize(w, h, false);
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      lbImg.style.opacity = 1;
    }
  }

  function open(index) {
    show(index, false);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryLinks.forEach((a, i) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      open(i);
    });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', () => show(current - 1, true));
  btnNext.addEventListener('click', () => show(current + 1, true));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1, true);
    if (e.key === 'ArrowRight') show(current + 1, true);
  });

  // basic touch swipe support
  let touchStartX = null;
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; });
  lightbox.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { dx > 0 ? show(current - 1, true) : show(current + 1, true); }
    touchStartX = null;
  });

  // Recompute the frame size if the viewport is resized while open
  window.addEventListener('resize', () => {
    if (!lightbox.classList.contains('open')) return;
    const item = items[current];
    const natW = (item.imgEl && item.imgEl.naturalWidth) || 1600;
    const natH = (item.imgEl && item.imgEl.naturalHeight) || 1000;
    const { w, h } = computeFrameSize(natW, natH);
    setFrameSize(w, h, false);
  });
})();
