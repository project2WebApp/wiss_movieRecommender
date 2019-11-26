
document.getElementById("movieForm").onclick = function(event) {
  event.preventDefault();
  
  axios
  .get(getValueForm())
  .then(responseFromAPI => {
    printMovieOrTv(randomMovieOrTv(responseFromAPI.data))
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });
};
