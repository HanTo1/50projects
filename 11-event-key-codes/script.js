const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
      ${checkSpace(event.key)}
      <p>Event.Key</p>
    </div>
    <div class="key">
    ${event.keyCode}

    <p>Event.keyCode</p>
    </div>
    <div class="key">
    ${event.code}

    <p>Event.Code</p>
    </div>
  `;
});

function checkSpace(nameEvent) {
  if (nameEvent === " ") {
    return "space";
  } else {
    return nameEvent;
  }
}
