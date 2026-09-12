// Shared site navigation behavior (mobile menu toggle, accordion-style
// submenus, header scroll shadow). Used by every page — this used to be
// pasted inline into each HTML file separately, which is why a fix could
// land on some pages and get missed on others.
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

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
      if (window.innerWidth <= 1024 && a.getAttribute('href') === '#') {
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
