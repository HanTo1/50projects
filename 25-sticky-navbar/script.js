const nav = document.querySelector(".nav");
console.log("nav: ", nav);

window.addEventListener("scroll", fixNav);

function fixNav() {
  console.log("nav.offsetHeight: ", nav.offsetHeight);
  console.log("window.scrollY: ", window.scrollY);
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
