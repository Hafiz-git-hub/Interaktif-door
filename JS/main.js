document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Seleksi garis hamburger
  const line1 = hamburgerBtn ? hamburgerBtn.querySelector('.line-1') : null;
  const line2 = hamburgerBtn ? hamburgerBtn.querySelector('.line-2') : null;
  const line3 = hamburgerBtn ? hamburgerBtn.querySelector('.line-3') : null;

  let isOpen = false;

  // 1. Efek Shrink/Shadow saat Scroll
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('h-14', 'shadow-2xl');
        nav.classList.remove('h-16', 'shadow-lg');
      } else {
        nav.classList.add('h-16', 'shadow-lg');
        nav.classList.remove('h-14', 'shadow-2xl');
      }
    });
  }

  // 2. Fungsi Buka Menu
  function openMenu() {
    isOpen = true;
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';

    // Animasi garis berubah jadi "X"
    if (line1 && line2 && line3) {
      line1.classList.add('translate-y-[7px]', 'rotate-45');
      line2.classList.add('opacity-0');
      line3.classList.add('-translate-y-[7px]', '-rotate-45');
    }
  }

  // 3. Fungsi Tutup Menu
  function closeMenu() {
    isOpen = false;
    mobileMenu.style.maxHeight = '0px';

    // Reset garis ke bentuk awal
    if (line1 && line2 && line3) {
      line1.classList.remove('translate-y-[7px]', 'rotate-45');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-translate-y-[7px]', '-rotate-45');
    }
  }

  // 4. Event Listener Klik Hamburger
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Tutup otomatis jika link dalam menu diklik
    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Tutup jika pengguna mengklik area di luar navbar
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && isOpen) {
        closeMenu();
      }
    });
  }
});