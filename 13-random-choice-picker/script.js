const textarea = document.getElementById("textarea");
const tagsElement = document.getElementById("tags");

textarea.focus();

textarea.addEventListener("keyup", (event) => {
  createTags(event.target.value);

  if (event.key === "Enter") {
    event.target.value = "";

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;

    tagsElement.appendChild(tagElement);
  });
}

function randomSelect() {
  //trang tri
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, 3000);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  const random = Math.floor(Math.random() * tags.length);
  return tags[random];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
