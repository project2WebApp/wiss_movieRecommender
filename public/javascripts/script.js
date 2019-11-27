function go() {
  
  axios
  .get(getValueForm())
  .then(responseFromAPI => {
    printMovieOrTv(randomMovieOrTv(responseFromAPI.data))
    console.log(responseFromAPI)
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });
};
