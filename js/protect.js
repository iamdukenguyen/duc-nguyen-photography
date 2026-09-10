// Basic deterrent against casual photo saving.
// Note: this does NOT stop screenshots, browser dev tools, or view-source —
// no client-side script can. It only removes the easy right-click-save path.
(function () {
  // Disable right-click context menu on images
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  // Disable dragging images out of the page (drag-to-desktop save)
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
})();
