// Shuffles the photo order in a page's own gallery-grid on every load
// (Landscapes / People / Wildlife & Macro). Does NOT pull photos from
// other pages — only reorders what's already on this page. Must run
// before lightbox.js so its prev/next order matches what's shown.
(function () {
  const grid = document.querySelector('.gallery-grid:not(.home-gallery)');
  if (!grid) return;

  const items = Array.from(grid.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  items.forEach(el => grid.appendChild(el));
})();
