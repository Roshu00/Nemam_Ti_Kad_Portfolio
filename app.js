const burger = document.querySelector(".burger");
const menu = document.querySelector("ul");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const imageSlider = document.querySelector(".image-slider");

var currentImage = 0;

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

arrowLeft.addEventListener("click", () => {
  console.log("left");
  if (currentImage > 0) {
    currentImage--;
    imageSlider.style.transform = "translateX(" + currentImage * -100 + "%)";
  }
});

arrowRight.addEventListener("click", () => {
  console.log("right");
  if (currentImage < 5) {
    currentImage++;
    imageSlider.style.transform = "translateX(" + currentImage * -100 + "%)";
  }
});
