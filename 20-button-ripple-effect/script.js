const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  const x = event.clientX;
  console.log("x: ", x);
  const y = event.clientY;
  console.log("Y: ", y);

  const btnTop = event.target.offsetTop;
  console.log("btnTop: ", btnTop);
  const btnLeft = event.target.offsetLeft;
  console.log("btnLeft: ", btnLeft);

  const xInside = x - btnLeft;
  console.log('xInside: ', xInside);
  const yInside = y - btnTop;
  console.log('yInside: ', yInside);

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px"
  circle.style.left = xInside + "px"

  btn.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  },500)
});
