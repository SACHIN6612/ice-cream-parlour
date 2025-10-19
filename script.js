const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
  index = (i + slide.length) % slide.length;   // loop continue
  slides.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

// Auto Slide every 4 seconds
setInterval(() => showSlide(index + 1), 4000);
