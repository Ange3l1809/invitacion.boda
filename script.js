window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});


// Cuenta regresiva
const eventDate = new Date("March 14, 2026 17:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((diff/(1000*60*60))%24);
  document.getElementById("minutes").innerText = Math.floor((diff/(1000*60))%60);
  document.getElementById("seconds").innerText = Math.floor((diff/1000)%60);
}, 1000);

// Animaciones scroll

document.addEventListener("DOMContentLoaded", () => {

  /* ===== ANIMACIONES ===== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade, .slide').forEach(el => observer.observe(el));

/* ===== MUSICA AUTO-PLAY SAFARI ===== */
  const music = document.getElementById("music");
  const musicBtn = document.getElementById("musicBtn");
  let started = false;

  function startMusic() {
    if (!started) {
      music.volume = 0.6;
      music.play().catch(() => {});
      started = true;
      musicBtn.innerText = "⏸️";
    }
  }

  // Se activa con cualquier interacción
  document.addEventListener("touchstart", startMusic, { once: true });
  document.addEventListener("click", startMusic, { once: true });
  document.addEventListener("scroll", startMusic, { once: true });

  // Botón manual
  musicBtn.onclick = () => {
    if (music.paused) {
      music.play();
      musicBtn.innerText = "⏸️";
    } else {
      music.pause();
      musicBtn.innerText = "🎵";
    }
  };

});