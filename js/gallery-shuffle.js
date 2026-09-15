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

  function getColumnCount() {
    const w = window.innerWidth;
    if (w <= 760) return 2;
    if (w <= 1100) return 3;
    return 4;
  }

  // Photos are placed directly into their own column's container — never
  // into one shared container the browser auto-balances into columns
  // (that's what CSS column-count does, and it recalculates every
  // column's contents from scratch each time a photo is added, which is
  // what caused photos to visibly jump between columns and flicker as
  // more of them loaded in). Assigning each photo to a specific column
  // ourselves means adding a new one never touches photos already
  // sitting in any column.
  let columnCount = getColumnCount();
  const columns = [];
  function buildColumns() {
    columns.length = 0;
    grid.innerHTML = '';
    for (let c = 0; c < columnCount; c++) {
      const col = document.createElement('div');
      col.className = 'gallery-col';
      grid.appendChild(col);
      columns.push(col);
    }
  }
  buildColumns();

  function whenLoaded(img) {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    });
  }

  // Reveal one full row at a time — whichever photos land in row 1 (one
  // per column, in the shuffled left-to-right order) appear together,
  // and row 2 doesn't start appearing until row 1 is fully placed.
  (async () => {
    for (let i = 0; i < items.length; i += columnCount) {
      const row = items.slice(i, i + columnCount);
      await Promise.all(row.map((el, colIndex) => {
        el.classList.add('reveal');
        columns[colIndex].appendChild(el);
        const img = el.querySelector('img');
        const loaded = img ? whenLoaded(img) : Promise.resolve();
        return loaded.then(() => {
          requestAnimationFrame(() => el.classList.add('in-view'));
        });
      }));
      await new Promise(r => setTimeout(r, 60));
    }
  })();

  // Rebuild the column structure if the responsive column count changes
  // (window resized, tablet rotated) — existing photos just move to
  // their new column, no reload or re-reveal needed.
  window.addEventListener('resize', () => {
    const newCount = getColumnCount();
    if (newCount === columnCount) return;
    columnCount = newCount;
    buildColumns();
    items.forEach((el, idx) => columns[idx % columnCount].appendChild(el));
  });
})();
