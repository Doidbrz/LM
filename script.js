// Contador de tempo
const startDate = new Date('2019-02-28T00:00:00'); // Data inicial
const timeDisplay = document.getElementById('time-display');

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = new Date(diff).getUTCHours();
    const minutes = new Date(diff).getUTCMinutes();
    const seconds = new Date(diff).getUTCSeconds();

    timeDisplay.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours}:${minutes}:${seconds}`;
}

setInterval(updateCounter, 1000);

// Carousel functionality
const images = [
    "imagem-1.jpeg",
    "imagem-2.jpeg",
    "imagem-3.jpeg",
    "imagem-8.jpeg",
    "imagem-5.jpeg",
    "imagem-6.jpeg",
    "imagem-7.jpeg",
];

let currentIndex = 0;

const carousel = document.querySelector(".photo-gallery");
const leftArrow = document.createElement("div");
const rightArrow = document.createElement("div");

leftArrow.textContent = "❮";
rightArrow.textContent = "❯";

leftArrow.classList.add("carousel-arrow", "left-arrow");
rightArrow.classList.add("carousel-arrow", "right-arrow");

carousel.appendChild(leftArrow);
carousel.appendChild(rightArrow);

function renderImage(index) {
    carousel.style.backgroundImage = `url(${images[index]})`;
}

function handleArrowClick(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    renderImage(currentIndex);
}

// Event Listeners for Arrows
leftArrow.addEventListener("click", () => handleArrowClick(-1));
rightArrow.addEventListener("click", () => handleArrowClick(1));

// Initial Render
renderImage(currentIndex);
