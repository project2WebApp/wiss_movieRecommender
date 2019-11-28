let watchBtn = document.querySelector("#btn-1")
let favBtn =  document.querySelector("#btn-2")
let discBtn =  document.querySelector("#btn-3")

watchBtn.onclick = function(){
  document.querySelector("#printMovie").action = "/movie/create-movie-watch-list"
}
favBtn.onclick = function(){
  document.querySelector("#printMovie").action = "/movie/create-movie-fav-list"
}
discBtn.onclick = function(){
  document.querySelector("#printMovie").action = "/movie/create-movie-disc-list"
}