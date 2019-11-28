
let movieOrTv;
let genre;
let year;
let rate;

function getValueForm() {
  const selMovieOrTv = movieOrTv
  const selGenre = genre
  const selYear = year
  const selRate = rate

  let apiUrl = `https://api.themoviedb.org/3/discover/${selMovieOrTv}?api_key=80be352c5e3bd7b6c67144ebff351283&include_adult=false&release_date.${selYear}&vote_average.${selRate}&with_genres=${selGenre}`;
  return apiUrl
}

//FORM - 1
document.getElementById("movie-card").onclick = function(event) {
  event.preventDefault();
  movieOrTv = "movie"
  document.getElementById("1-card").className = "card-container hidden"
  document.getElementById("2-card").className = "card-container max"
}
document.getElementById("tv-card").onclick = function(event) {
  event.preventDefault();
  movieOrTv = "tv"
  document.getElementById("1-card").className = "card-container hidden"
  document.getElementById("2-card").className = "card-container max"
}

//FORM - 2
document.getElementById("reir-card").onclick = function(event) {
  event.preventDefault();
  genre = transformGenre("reir")
  document.getElementById("2-card").className = "card-container max hidden"
  document.getElementById("3-card").className = "card-container"
}

document.getElementById("pasarRato-card").onclick = function(event) {
  event.preventDefault();
  genre = transformGenre("pasarRato")
  document.getElementById("2-card").className = "card-container max hidden"
  document.getElementById("3-card").className = "card-container"
}

document.getElementById("indignarme-card").onclick = function(event) {
  event.preventDefault();
  genre = transformGenre("indignarme")
  document.getElementById("2-card").className = "card-container max hidden"
  document.getElementById("3-card").className = "card-container"
}

document.getElementById("emocion-card").onclick = function(event) {
  event.preventDefault();
  genre = transformGenre("emocion")
  document.getElementById("2-card").className = "card-container max hidden"
  document.getElementById("3-card").className = "card-container"
}

document.getElementById("historia-card").onclick = function(event) {
  event.preventDefault();
  genre = transformGenre("historia")
  document.getElementById("2-card").className = "card-container max hidden"
  document.getElementById("3-card").className = "card-container"
}
document.getElementById("inquietarme-card").onclick = function(event) {
  event.preventDefault();
  genre = transformGenre("inquietante")
  document.getElementById("2-card").className = "card-container max hidden"
  document.getElementById("3-card").className = "card-container"
}

//FORM - 3

document.getElementById("classic-card").onclick = function(event) {
  event.preventDefault();
  year = setYear("classic")
  document.getElementById("3-card").className = "card-container hidden"
  document.getElementById("4-card").className = "card-container"
}

document.getElementById("modern-card").onclick = function(event) {
  event.preventDefault();
  year = setYear("modern")
  document.getElementById("3-card").className = "card-container hidden"
  document.getElementById("4-card").className = "card-container"
}

document.getElementById("current-card").onclick = function(event) {
  event.preventDefault();
  year = setYear("current")
  document.getElementById("3-card").className = "card-container hidden"
  document.getElementById("4-card").className = "card-container"
}

//FORM - 4

document.getElementById("mala-card").onclick = function(event) {
  event.preventDefault();
  rate = setRate("mala")
  document.getElementById("4-card").className = "card-container hidden"
  document.getElementById("reveal-movie-container").className = ""
  go()
  console.log(movieOrTv)
  console.log(genre)
  console.log(year)
  console.log(rate)
}
document.getElementById("normal-card").onclick = function(event) {
  event.preventDefault();
  rate = setRate("normal")
  document.getElementById("4-card").className = "card-container hidden"
  document.getElementById("reveal-movie-container").className = ""
  go()
  console.log(movieOrTv)
  console.log(genre)
  console.log(year)
  console.log(rate)
}
document.getElementById("top-card").onclick = function(event) {
  event.preventDefault();
  rate = setRate("top")
  document.getElementById("4-card").className = "card-container hidden"
  document.getElementById("reveal-movie-container").className = ""
  go()
  console.log(movieOrTv)
  console.log(genre)
  console.log(year)
  console.log(rate)
}
  