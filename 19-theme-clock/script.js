const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleEl.addEventListener("click", (e) => {
	const html = document.querySelector("html");
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		e.target.innerHTML = "Dark mode";
	} else {
		html.classList.add("dark");
		e.target.innerHTML = "Light mode";
	}
});

const setTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hoursPerClock = hours > 12 ? hours % 12 : hours;
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `
    translate(-50%, -100%) 
    rotate(${scale(hoursPerClock, 0, 11, 0, 360)}deg)
  `;

  minuteEl.style.transform = `
    translate(-50%, -100%)
    rotate(${scale(minutes, 0, 59, 0, 360)}deg)
  `;

  secondEl.style.transform = `
    translate(-50%, -100%)
    rotate(${scale(seconds, 0, 59, 0, 360)}deg)
  `;

  timeEl.innerHTML = `
    ${hoursPerClock >= 10 ? hoursPerClock : `0${hoursPerClock}`} : ${minutes >= 10 ? minutes : `0${minutes}`} ${ampm}
  `;

  dateEl.innerHTML = `
    ${days[day]}, ${months[month]} <span class="circle">${date}</span>
  `;
};

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);