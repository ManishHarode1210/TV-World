const speeds = [0.4, 0.7, 0.8, 0.2];

for (let col = 1; col <= 4; col++) {
  const container = document.getElementById(`col${col}`);
  for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img");
    img.src = `images/${(col - 1) * 6 + i}.jpg`;
    img.alt = `Image ${(col - 1) * 6 + i}`;
    container.appendChild(img);
  }
}

const imageTracks = document.querySelectorAll(".image-track");
let currentScroll = 0;

function animate() {
  const scrollY = window.scrollY;
  currentScroll += (scrollY - currentScroll) * 0.05;

  imageTracks.forEach((track, index) => {
    track.style.transform = `translateY(-${currentScroll * speeds[index]}px)`;
  });

  requestAnimationFrame(animate);
}

animate();

const cursor = document.querySelector(".dot-cursor");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.05; 

// Mouse position track
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor dot 
function animateCursor() {
  const dx = mouseX - currentX;
  const dy = mouseY - currentY;

  currentX += dx * (speed * 2);
  currentY += dy * (speed * 2);

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();

const targets = document.querySelectorAll("a, button, .hover-target");

targets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(5)";
    cursor.style.backgroundColor = "white";
    cursor.style.mixBlendMode = "difference";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.backgroundColor = "black";
    cursor.style.mixBlendMode = "normal";
  });
});


  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

  });