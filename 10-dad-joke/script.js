const joke = document.getElementById('joke');
const btnJoke = document.getElementById('btnJoke');
const url = "https://icanhazdadjoke.com";

btnJoke.addEventListener("click", getJoke);

getJoke();

function getJoke() {
  const config = {
    headers: {
      Accept:'application/json'
    }
  }
  fetch(url, config)
    .then((res) => res.json())
		.then((data) => {
      joke.innerHTML = data.joke;
    })
    .catch((error) => {
      console.log('error: ', error);
    })
}