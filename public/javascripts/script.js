function go() {
  
  axios
  .get(getValueForm())
  .then(responseFromAPI => {
    printMovieOrTvForm(randomMovieOrTv(responseFromAPI.data))
    console.log(responseFromAPI)
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });
};
let swtc = false;
document.getElementById("navBar-username").onclick = function(event) {
  event.preventDefault();
  if(swtc != true){
    document.getElementById("pop-up-container").className = "pop-container"
    swtc = true
    console.log("entrando")
  }else{
    document.getElementById("pop-up-container").className = "pop-container hidden"
    swtc = false
   
    console.log("saliendo")
  }
}
  
 
