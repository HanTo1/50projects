const btnDown = document.querySelector(".down-button");
const btnUp = document.querySelector(".up-button");
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeIndex++;

    if (activeIndex > slidesLength - 1) {
      activeIndex = 0;
    }
  } else if (direction === "down") {
    activeIndex--;

    if (activeIndex < 0) {
      activeIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeIndex * sliderHeight
  }px)`;
};
