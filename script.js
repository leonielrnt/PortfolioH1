const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slides = document.querySelectorAll(".slide");
console.log(slides);

let slideToShow = 0;

function changeSlide() {
  for (let currentSlide = 0; currentSlide < slides.length; currentSlide++) {
    // On check si la slide actuellement vérifiée est celle qu'on affiche
    if (currentSlide == slideToShow) {
      slides[currentSlide].style.left = "0";
      slides[currentSlide].style.zIndex = 10;
      // Si la slide est plus petite que celle qu'on veut afficher, on la place à gauche
    } else if (currentSlide < slideToShow) {
      slides[currentSlide].style.left = "-100%";
      slides[currentSlide].style.zIndex = 1;
      // Sinon à droite
    } else {
      slides[currentSlide].style.left = "100%";
      slides[currentSlide].style.zIndex = 1;
    }
  }
}

changeSlide();

// ()=>{} est une forme raccourcie pour appeller une fonction sans la nommer
nextButton.addEventListener("click", () => {
  if (slideToShow < slides.length - 1) {
    slideToShow++;
  } else {
    slideToShow = 0;
  }
  changeSlide();
});

previousButton.addEventListener("click", () => {
  if (slideToShow > 0) {
    slideToShow--;
  } else {
    slideToShow = slides.length - 1;
  }
  changeSlide();
});
