// Shared site navigation behavior (mobile menu toggle, accordion-style
// submenus, header scroll shadow). Used by every page — this used to be
// pasted inline into each HTML file separately, which is why a fix could
// land on some pages and get missed on others.
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('mainNav');

  // On a tablet-sized drawer, the page should stay scrollable behind the
  // open panel (only a tap outside it should close it) — the panel is
  // position:fixed regardless, so it stays put on screen either way; this
  // just decides whether the page underneath is allowed to move. Phones
  // keep the scroll-lock, since their panel covers the full screen and
  // there's nothing usable to scroll behind it anyway.
  function isDrawerMode() {
    return window.matchMedia('(hover: none) and (pointer: coarse) and (min-width: 641px)').matches;
  }

  // Whether the mobile/tablet stacked menu (vs. the desktop horizontal
  // bar) is active — mirrors the CSS trigger exactly, so behavior stays
  // in sync with it. A plain width check here would miss touch tablets
  // like this iPad Pro (1032px, just over the old 1024px line), which is
  // what made tapping the "My Works" label itself do nothing there even
  // though its chevron button (a separate, width-independent handler)
  // worked fine.
  function isMobileNavActive() {
    return window.matchMedia('(max-width: 1024px), (hover: none) and (pointer: coarse)').matches;
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      if (!isDrawerMode()) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    });
  }

  // Feeds the header's real, current rendered height into a CSS variable
  // so the slide-in nav panel can start exactly where the header ends —
  // rather than guessing a fixed pixel value, which drifted out of sync
  // at breakpoints where the header renders a different height (that
  // mismatch was the small gap/notch visible at the top of the tablet
  // drawer, since it's no longer full-width and the gap became visible
  // at its edge instead of being an invisible sliver across a full-bleed
  // panel).
  function setHeaderHeightVar() {
    const header = document.getElementById('siteHeader');
    if (header) {
      document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
  }
  setHeaderHeightVar();
  window.addEventListener('load', setHeaderHeightVar);
  window.addEventListener('resize', setHeaderHeightVar);

  function closeNav() {
    mainNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Tapping/clicking outside the open panel closes it. Most noticeable on
  // tablets, where the panel is a right-anchored drawer with real page
  // content visible beside it to tap — on phones the panel already
  // covers the full screen, so there's little "outside" area for this to
  // matter, but the same listener is harmless there too.
  document.addEventListener('click', (e) => {
    if (!mainNav || !mainNav.classList.contains('open')) return;
    const clickedInsideNav = mainNav.contains(e.target);
    const clickedToggle = navToggle && navToggle.contains(e.target);
    if (!clickedInsideNav && !clickedToggle) closeNav();
  });

  // Closes every other open submenu so only one is ever expanded at a
  // time (accordion behavior) before the clicked one gets opened.
  function closeOtherSubmenus(exceptLi) {
    document.querySelectorAll('.has-sub.open').forEach(openLi => {
      if (openLi !== exceptLi) {
        openLi.classList.remove('open');
        const otherToggle = openLi.querySelector('.submenu-toggle');
        if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const li = btn.closest('.has-sub');
      const willOpen = !li.classList.contains('open');
      if (willOpen) closeOtherSubmenus(li);
      li.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  // "My Works" has no real destination (href="#"), so tapping the label
  // itself (not just the arrow) also opens its submenu on mobile.
  document.querySelectorAll('.has-sub-row > a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (isMobileNavActive() && a.getAttribute('href') === '#') {
        e.preventDefault();
        const li = a.closest('.has-sub');
        const willOpen = !li.classList.contains('open');
        if (willOpen) closeOtherSubmenus(li);
        li.classList.toggle('open', willOpen);
        const toggle = li.querySelector('.submenu-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      }
    });
  });

  window.addEventListener('scroll', () => {
    const h = document.getElementById('siteHeader');
    if (h) h.classList.toggle('scrolled', window.scrollY > 10);
  });
})();
