document.addEventListener("DOMContentLoaded", () => {
  const portalContainer = document.getElementById("portalContainer");
  const logoWrapper = document.getElementById("logoWrapper");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const titleContainer = document.getElementById("animatedTitle");
  let isOpening = false;

  // --- 1. Animasi Teks Judul Letter-by-Letter ---
  if (titleContainer) {
    const text = titleContainer.textContent.trim();
    titleContainer.textContent = "";

    const words = text.split(" ");
    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word-span";

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.className = "animate-letter";

        const globalCharIndex =
          titleContainer.querySelectorAll(".animate-letter").length;
        charSpan.style.animationDelay = `${globalCharIndex * 0.04}s`;

        wordSpan.appendChild(charSpan);
      });

      titleContainer.appendChild(wordSpan);
    });
  }

  // --- 2. Generate Partikel Melayang Otomatis ---
  const particleContainer = portalContainer || document.body;
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 20 + 8;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particleContainer.appendChild(particle);
  }

  // --- 2b. Generate Gelembung Air (Bubble) ---
  const bubbleCount = 18;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = Math.random() * 26 + 10; // 10px - 36px
    const left = Math.random() * 100;
    const riseDuration = Math.random() * 6 + 5; // 5s - 11s naik ke atas
    const riseDelay = Math.random() * 8; // delay biar tidak muncul bareng
    const wobbleDuration = Math.random() * 2 + 2; // 2s - 4s goyangan
    const wobbleDelay = Math.random() * 2;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${riseDuration}s, ${wobbleDuration}s`;
    bubble.style.animationDelay = `${riseDelay}s, ${wobbleDelay}s`;

    particleContainer.appendChild(bubble);
  }

  // --- 3. Handler Interaksi Klik & Navigasi ---
  if (portalContainer) {
    portalContainer.addEventListener("click", (e) => {
      if (isOpening) return; // Mencegah pemicuan ganda
      isOpening = true;

      // Ripple Effect Visual di Posisi Klik
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "100px";
      ripple.style.height = "100px";
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 700);

      // Pemicu Animasi Logo Terpisah
      if (logoWrapper) {
        logoWrapper.classList.add("terpisah");
      }

      // Transisi Masuk ke Loading Overlay dan Navigasi
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.classList.add("active");
        }

        setTimeout(() => {
          window.location.href = "form.html";
        }, 800);
      }, 600);
    });
  }
});