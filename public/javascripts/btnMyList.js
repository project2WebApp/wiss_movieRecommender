let laterBtn = document.querySelector("#btn-later")
let favsBtn = document.querySelector("#btn-fav")

laterBtn.onclick = function(){
  console.log("hola")
  document.querySelector("#mylist-fav").className = "hidden"
  document.querySelector("#mylist-later").className = ""
  document.querySelector("#btn-later").className = "btn-mylist line-active"
  document.querySelector("#btn-fav").className = "btn-mylist"

}
favsBtn.onclick = function(){
  console.log("vamooos hijoooooo")
  document.querySelector("#mylist-later").className = "hidden"
  document.querySelector("#mylist-fav").className = ""
  document.querySelector("#btn-fav").className = "btn-mylist line-active"
  document.querySelector("#btn-later").className = "btn-mylist"

}