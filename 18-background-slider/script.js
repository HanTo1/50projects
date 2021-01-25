const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let  current = 0;
setBodyImg();

rightBtn.addEventListener("click", () => {
  current++;
  console.log('current: ', current);
  
  if (current > slides.length - 1) {
    current = 0;
  }
  setBodyImg();
  setActive();
});

leftBtn.addEventListener("click", () => {
	current--;

	if (current < 0) {
		current = slides.length - 1 ;
	}

	setBodyImg();
  setActive();
});

function setBodyImg() {
  body.style.backgroundImage = slides[current].style.backgroundImage;
}

function setActive() {
	slides.forEach((slide, index) => slide.classList.remove("active"));

	slides[current].classList.add("active");
}