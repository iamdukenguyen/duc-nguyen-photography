const HOME_GALLERY_SOURCE = [
  { src: 'images/landscapes/landscape-01.webp', alt: 'Panorama Photo of Tam Coc - Bich Dong in Ninh Binh' },
  { src: 'images/landscapes/landscape-02.webp', alt: 'Ham Ca Map (Shark Jaw) Building - Hanoi' },
  { src: 'images/landscapes/landscape-03.webp', alt: 'Cafe Apartment Building in District 1 - Ho Chi Minh City' },
  { src: 'images/landscapes/landscape-04.webp', alt: 'Bich Dong Pagoda\'s Gate - Ninh Binh' },
  { src: 'images/landscapes/landscape-05.webp', alt: 'Nho Que River in Ma Pi Leng Pass - Ha Giang' },
  { src: 'images/landscapes/landscape-06.webp', alt: 'Rainy Morning at Van Long Nature Reserve - Ninh Binh' },
  { src: 'images/landscapes/landscape-07.webp', alt: 'Ngo Mon (Meridian Gate) - Hue' },
  { src: 'images/landscapes/landscape-08.webp', alt: 'Early Morning at Train Street - Hanoi' },
  { src: 'images/landscapes/landscape-09.webp', alt: 'Nguyen Huu Hao Apartment Building in District 4 - Ho Chi Minh City' },
  { src: 'images/landscapes/landscape-10.webp', alt: 'Hao Si Phuong - Ho Chi Minh City' },
  { src: 'images/landscapes/landscape-11.webp', alt: 'Lim Mong Village - Mu Cang Chai' },
  { src: 'images/landscapes/landscape-12.webp', alt: 'Misty Morning at Van Long Nature Reserve - Ninh Binh' },
  { src: 'images/landscapes/landscape-13.webp', alt: 'Windy Day on Tan Thanh Beach - Hoi An' },
  { src: 'images/landscapes/landscape-14.webp', alt: 'Houses by the River - Long Xuyen' },
  { src: 'images/landscapes/landscape-15.webp', alt: 'Champa Tower at My Son Sanctuary - Da Nang' },
  { src: 'images/landscapes/landscape-16.webp', alt: 'Champa Tower at My Son Sanctuary - Da Nang' },
  { src: 'images/landscapes/landscape-17.webp', alt: 'Tran Phu Street in Hoi An' },
  { src: 'images/landscapes/landscape-18.webp', alt: 'Misty Morning over Long Coc Tea Hills - Phu Tho' },
  { src: 'images/landscapes/landscape-19.webp', alt: 'Rice Paddies at Lim Mong Village - Mu Cang Chai' },
  { src: 'images/landscapes/landscape-20.webp', alt: 'Rice Terraces - Mu Cang Chai' },
  { src: 'images/landscapes/landscape-21.webp', alt: 'Sand Dunes - Mui Ne' },
  { src: 'images/landscapes/landscape-22.webp', alt: 'Phu Loc Tower - Quy Nhon' },
  { src: 'images/landscapes/landscape-23.webp', alt: 'View from Mua Cave looking down to Tam Coc River - Ninh Binh' },
  { src: 'images/landscapes/landscape-24.webp', alt: 'Hau Thao Church in the morning - Sapa' },
  { src: 'images/landscapes/landscape-25.webp', alt: 'Hau Thao Church in the morning - Sapa' },
  { src: 'images/landscapes/landscape-26.webp', alt: 'Hon Chuong Champa Tower - Quy Nhon' },
  { src: 'images/landscapes/landscape-27.webp', alt: 'Binh Lam Champa Tower - Quy Nhon' },
  { src: 'images/landscapes/landscape-28.webp', alt: 'Nhat Tan Bridge - Hanoi' },
  { src: 'images/landscapes/landscape-29.webp', alt: 'Chu Va - Sapa' },
  { src: 'images/landscapes/landscape-30.webp', alt: 'Tran Quoc Pagoda - Hanoi' },
  { src: 'images/landscapes/landscape-32.webp', alt: 'Rod Fai Railway Market - Bangkok' },
  { src: 'images/landscapes/landscape-33.webp', alt: 'Reclining-Buddha at Wat Pho Temple - Bangkok' },
  { src: 'images/landscapes/landscape-34.webp', alt: 'Night at Sapa Town - Sapa' },
  { src: 'images/landscapes/landscape-35.webp', alt: 'Buddha Statue at Bai Dinh Pagoda - Ninh Binh' },
  { src: 'images/landscapes/landscape-36.webp', alt: 'Bao Thien Tower in Bai Dinh Pagoda - Ninh Binh' },
  { src: 'images/landscapes/landscape-37.webp', alt: 'Front view of Tam Chuc Pagoda - Ninh Binh' },
  { src: 'images/landscapes/landscape-38.webp', alt: 'Quy Minh Dai Vuong Temple in Tam Coc Bich Dong - Ninh Binh' },
  { src: 'images/landscapes/landscape-39.webp', alt: 'Night inside Tam Coc Bich Dong - Ninh Binh' },
  { src: 'images/landscapes/landscape-40.webp', alt: 'Thuy Dinh (Water Shrine) in Trang An - Ninh Binh' },
  { src: 'images/landscapes/landscape-41.webp', alt: 'Sunset over Tam Coc Bich Dong - Ninh Binh' },
  { src: 'images/landscapes/landscape-43.webp', alt: 'Dam Chuon (Chuon Lagoon) - Hue' },
  { src: 'images/landscapes/landscape-44.webp', alt: 'Sunset over Long Bien Bridge - Hanoi' },
  { src: 'images/landscapes/landscape-45.webp', alt: 'Ta Som Temple - Siem Riep - Cambodia' },
  { src: 'images/landscapes/landscape-46.webp', alt: 'Ancient Tree at Ta Prohm - Siem Reap - Cambodia' },
  { src: 'images/landscapes/landscape-47.webp', alt: 'Ancient tree taken over Stone Gate at Ta Prohm - Siem Reap - Cambodia' },
  { src: 'images/landscapes/landscape-48.webp', alt: 'Ancient tree taken over Stone Gate at Ta Prohm - Siem Reap - Cambodia' },
  { src: 'images/landscapes/landscape-49.webp', alt: 'Ancient tree taken over Stone Gate at Ta Prohm - Siem Reap - Cambodia' },
  { src: 'images/landscapes/landscape-50.webp', alt: 'Sand Dunes - Mui Ne' },
  { src: 'images/landscapes/landscape-51.webp', alt: 'Bee Farm in the Forest - Ba Be Lake' },
  { src: 'images/landscapes/landscape-52.webp', alt: 'Tham Ma Pass - Ha Giang' },
  { src: 'images/landscapes/landscape-53.webp', alt: 'Ma Pi Leng - Ha Giang' },
  { src: 'images/landscapes/landscape-54.webp', alt: 'Hoi An\'s Old Town - Da Nang' },
  { src: 'images/landscapes/landscape-55.webp', alt: 'Train Street - Hanoi' },
  { src: 'images/people/people-01.webp', alt: 'Portrait 01' },
  { src: 'images/people/people-02.webp', alt: 'Portrait 02' },
  { src: 'images/people/people-03.webp', alt: 'Portrait 03' },
  { src: 'images/people/people-04.webp', alt: 'Portrait 04' },
  { src: 'images/people/people-05.webp', alt: 'Portrait 05' },
  { src: 'images/people/people-06.webp', alt: 'Portrait 06' },
  { src: 'images/people/people-07.webp', alt: 'Portrait 07' },
  { src: 'images/people/people-08.webp', alt: 'Portrait 08' },
  { src: 'images/people/people-09.webp', alt: 'Portrait 09' },
  { src: 'images/people/people-10.webp', alt: 'Portrait 10' },
  { src: 'images/people/people-11.webp', alt: 'Portrait 11' },
  { src: 'images/people/people-12.webp', alt: 'Portrait 12' },
  { src: 'images/people/people-13.webp', alt: 'Portrait 13' },
  { src: 'images/people/people-14.webp', alt: 'Portrait 14' },
  { src: 'images/people/people-15.webp', alt: 'Portrait 15' },
  { src: 'images/people/people-16.webp', alt: 'Portrait 16' },
  { src: 'images/people/people-17.webp', alt: 'Portrait 17' },
  { src: 'images/people/people-18.webp', alt: 'Portrait 18' },
  { src: 'images/people/people-19.webp', alt: 'Portrait 19' },
  { src: 'images/people/people-20.webp', alt: 'Portrait 20' },
  { src: 'images/people/people-21.webp', alt: 'Portrait 21' },
  { src: 'images/people/people-22.webp', alt: 'Portrait 22' },
  { src: 'images/people/people-23.webp', alt: 'Portrait 23' },
  { src: 'images/people/people-24.webp', alt: 'Portrait 24' },
  { src: 'images/people/people-25.webp', alt: 'Portrait 25' },
  { src: 'images/people/people-26.webp', alt: 'Portrait 26' },
  { src: 'images/people/people-27.webp', alt: 'Portrait 27' },
  { src: 'images/people/people-28.webp', alt: 'Portrait 28' },
  { src: 'images/people/people-29.webp', alt: 'Portrait 29' },
  { src: 'images/people/people-30.webp', alt: 'Portrait 30' },
  { src: 'images/people/people-31.webp', alt: 'Portrait 31' },
  { src: 'images/people/people-32.webp', alt: 'Portrait 32' },
  { src: 'images/people/people-33.webp', alt: 'Portrait 33' },
  { src: 'images/people/people-34.webp', alt: 'Portrait 34' },
  { src: 'images/people/people-35.webp', alt: 'Portrait 35' },
  { src: 'images/people/people-36.webp', alt: 'Portrait 36' },
  { src: 'images/people/people-37.webp', alt: 'Portrait 37' },
  { src: 'images/people/people-38.webp', alt: 'Portrait 38' },
  { src: 'images/people/people-39.webp', alt: 'Portrait 39' },
  { src: 'images/people/people-40.webp', alt: 'Portrait 40' },
  { src: 'images/people/people-41.webp', alt: 'Portrait 41' },
  { src: 'images/people/people-42.webp', alt: 'Portrait 42' },
  { src: 'images/people/people-43.webp', alt: 'Portrait 43' },
  { src: 'images/people/people-44.webp', alt: 'Portrait 44' },
  { src: 'images/people/people-45.webp', alt: 'Portrait 45' },
  { src: 'images/people/people-46.webp', alt: 'Portrait 46' },
  { src: 'images/people/people-47.webp', alt: 'Portrait 47' },
  { src: 'images/people/people-48.webp', alt: 'Portrait 48' },
  { src: 'images/people/people-49.webp', alt: 'Portrait 49' },
  { src: 'images/people/people-50.webp', alt: 'Portrait 50' },
  { src: 'images/people/people-51.webp', alt: 'Portrait 51' },
  { src: 'images/people/people-52.webp', alt: 'Portrait 52' },
  { src: 'images/people/people-53.webp', alt: 'Portrait 53' },
  { src: 'images/people/people-54.webp', alt: 'Portrait 54' },
  { src: 'images/people/people-55.webp', alt: 'Portrait 55' },
  { src: 'images/people/people-56.webp', alt: 'Portrait 56' },
  { src: 'images/people/people-57.webp', alt: 'Portrait 57' },
  { src: 'images/people/people-58.webp', alt: 'Portrait 58' },
  { src: 'images/people/people-59.webp', alt: 'Portrait 59' },
  { src: 'images/people/people-60.webp', alt: 'Portrait 60' },
  { src: 'images/people/people-61.webp', alt: 'Portrait 61' }
];

// Homepage gallery: pulls photos directly from the Landscapes and People
// pages (Wildlife & Macro intentionally excluded from the homepage) — no
// separate copies stored for the homepage — and shows them in a random
// order on every page load.
(function () {
  const container = document.getElementById('homeGallery');
  if (!container) return;

  // Fisher-Yates shuffle
  const items = HOME_GALLERY_SOURCE.slice();
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  const frag = document.createDocumentFragment();
  items.forEach(item => {
    const a = document.createElement('a');
    a.href = '#';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    a.appendChild(img);
    frag.appendChild(a);
  });
  container.appendChild(frag);

  // Re-run scroll reveal on the freshly-injected items, since reveal.js
  // already ran (and found nothing) before this script populated the grid.
  const targets = container.querySelectorAll('a');
  targets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('in-view'));
  }
})();
