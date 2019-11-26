document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

//Que pille los datos del form
// const movieGenre = document.querySelector("#movie-genre").value;
// const movieRating = document.querySelector("#movie-rating").value;
// const movieOrTv = document.querySelector("#movie-Tv");


document.getElementById("movieForm").onclick = function(event) {
  event.preventDefault();
  
  const movieGenre = document.querySelector("#movie-genre").value;
  const movieRating = document.querySelector("#movie-rating").value;
  console.log(movieGenre)

  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=80be352c5e3bd7b6c67144ebff351283&vote_average.gte=${movieRating}&with_genres=${movieGenre}`;
  
  axios
  .get(apiUrl)
  .then(responseFromAPI => {
    console.log(responseFromAPI.data);
    let oneMovie = responseFromAPI.data.results[0]
    console.log(oneMovie)
    printMovie(oneMovie)
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });

};

function printMovie(oneMovie){
  let movieName = oneMovie.title
  let movieRate = oneMovie.vote_average
  let movieGenre = oneMovie.genre_ids
  let divStart = document.querySelector("#printData").innerHTML= `<div>Nombre: ${movieName}</div><div>Rate: ${movieRate}</div><div>Genre: ${movieGenre}</div>`


}


