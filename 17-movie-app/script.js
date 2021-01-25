const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d858834a0c15f1d728159f406af49b2&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=1d858834a0c15f1d728159f406af49b2c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(url);

async function getMovies(url) {
  const res = await fetch(url)
    .then((data) => {
      console.log("data: ", data);
      return data.json();
    })
    .then((data) => {
      console.log("data1: ", data);
      showMovies(data.results);
    })
    .catch((error) => console.log(error));
}

function showMovies(movies) {
  console.log("movies: ", movies);

  main.innerHTML = "";

  movies.forEach((movie, index) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
      <img src="${IMG_PATH + poster_path} " alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="rating ${getClassByRate(vote_average)}">
          ${vote_average}
        </span>
      </div>

      <div class="overview">
        <h3> Overview</h3>
        ${overview}
      </div>  
    `;
    main.appendChild(movieElement);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
