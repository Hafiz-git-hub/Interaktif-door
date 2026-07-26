document.addEventListener("DOMContentLoaded", function () {
  const portalContainer = document.getElementById("portalContainer");
  const logoWrapper = document.getElementById("logoWrapper");
  let isOpening = false;

  if (portalContainer) {
    portalContainer.addEventListener("click", function () {
      if (isOpening) return; // Cegah double click
      isOpening = true;

      // 1. Memicu animasi daun dan ikan terpisah
      logoWrapper.classList.add("terpisah");

      // 2. Tunggu animasi gerakan selesai (1.2 detik)
      setTimeout(() => {
        // 3. Effect Fade Out layar
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "0";

        // 4. Pindah ke halaman form.html
        setTimeout(() => {
          window.location.href = "form.html";
        }, 500);
      }, 1200);
    });
  }
});