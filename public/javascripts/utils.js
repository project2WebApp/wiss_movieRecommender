
function setRate(data) {
  let setRate = "";
  switch (data) {
    case "mala":
      setRate = `lte=6`;
      break;
    case "normal":
      setRate = `gte=6&vote_average.lte=8`;
      break;
    case "top":
      setRate = `gte=8`;
      break;
  }
  return setRate;
  
}

function setYear(data) {
  let setYear = "";

  switch (data) {
    case "classic":
      setYear = `lte=1970`;
      break;
    case "modern":
      setYear = `gte=1971&release_date.lte=2000`;
      break;
    case "current":
      setYear = `gte=2001`;
      break;
  }
  return setYear;
}

function transformGenre(data) {
  switch (data) {
    case "reir":
      return 35;
    case "pasarRato":
      return 28;
    case "indignarme":
      return 99;
    case "emocion":
      return 18;
    case "historia":
      return 36;
    case "inquietante":
      return 27;
  }
}

function printMovieOrTv(oneMovie) {
  let movieName = oneMovie.title;
  let movieRate = oneMovie.vote_average;
  let movieGenre = convertGenre(oneMovie.genre_ids);
  let movieYear = oneMovie.release_date
  let movieImg = `https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`


  if (movieName === undefined) movieName = oneMovie.name;
  if (movieYear === undefined) movieYear = oneMovie.first_air_date

  document.querySelector("#title-form").value = movieName
  document.querySelector("#genre-form").value = movieGenre
  document.querySelector("#year-form").value = movieYear
  document.querySelector("#rate-form").value = movieRate
  document.querySelector("#img-form").value = movieImg


}

function convertGenre(genreID) {
  let arr = [];
  genreID.forEach(id => {
    switch (id) {
      case 28:
        arr.push("Accion");
        break;
      case 12:
        arr.push("Aventura");
        break;
      case 16:
        arr.push("Animacion");
        break;
      case 35:
        arr.push("Comedia");
        break;
      case 80:
        arr.push("Crimen");
        break;
      case 99:
        arr.push("Documental");
      case 18:
        arr.push("Drama");
        break;
      case 10751:
        arr.push("Familiar");
        break;
      case 14:
        arr.push("Fantasia");
        break;
      case 36:
        arr.push("Historia");
        break;
      case 27:
        arr.push("Horror");
        break;
      case 10402:
        arr.push("Musica");
        break;
      case 9648:
        arr.push("Misterio");
        break;
      case 10749:
        arr.push("Romance");
        break;
      case 878:
        arr.push("Ciencia-Ficcion");
        break;
      case 10770:
        arr.push("Pelicula de TV");
        break;
      case 53:
        arr.push("Thriller");
        break;
      case 10752:
        arr.push("Guerra");
        break;
      case 37:
        arr.push("Del Oeste");
        break;
      case 10759:
        arr.push("Accion y Aventura");
        break;
      case 10762:
        arr.push("Niños");
        break;
      case 10764:
        arr.push("Noticias");
        break;
      case 10766:
        arr.push("Culebron");
        break;
      case 10767:
        arr.push("Charla");
        break;
      case 10768:
        arr.push("Guerra & Politica");
        break;
    }
  });
  return arr;
}

function randomMovieOrTv(stockData) {
  let page = getRandomInt(stockData.page, stockData.total_pages);
  stockData.page = page;
  let result = getRandomInt(0, 19);

  return stockData.results[result];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
