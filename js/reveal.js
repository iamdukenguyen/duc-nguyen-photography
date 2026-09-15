// Scroll-reveal: fades + slides items down into place as they enter the
// viewport. Applies to Featured Works cards only — gallery photos (Home /
// Landscapes / People / Wildlife) have their own dedicated top-to-bottom,
// load-order-based reveal instead (see gallery-shuffle.js / home-gallery.js),
// since a plain scroll trigger doesn't address the actual problem there:
// photos popping into a masonry grid in whatever order their downloads
// happen to finish, shoving already-placed neighbors around. Falls back
// gracefully — if this script fails to run, items keep their default
// (fully visible) state since the "reveal" class is only added here, not
// in the HTML.
(function () {
  const targets = document.querySelectorAll('.press-card');
  if (!targets.length) return;

  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));
})();
