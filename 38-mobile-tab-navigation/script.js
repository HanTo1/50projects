const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideActive();
    hideShow();

    item.classList.add("active");
    contents[index].classList.add("show")
  })
});

function hideActive() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideShow() {
  listItems.forEach(item => item.classList.remove('active'))
}
