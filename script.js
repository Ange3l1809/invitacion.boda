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
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.fade, .slide').forEach(el => observer.observe(el));