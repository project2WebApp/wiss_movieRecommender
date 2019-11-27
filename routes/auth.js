const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Movie = require("../models/Movies");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//perfil-------
router.get("/profile", ensureLoggedIn('/auth/login'), (req, res)=>{

  res.render("auth/profile", {user:req.user})
})

router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body)
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email: req.body.email
    });

    newUser.save()
    .then(justCreatedUser => {
      const newList = {
        createdBy : justCreatedUser._id,
      
      }
      List.create(newList)
      .then(()=>{
        
      })
      res.redirect("/");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});


router.post("/create-movie", (req, res) => {
 const movie = {


  title : req.body.title,
  genre : req.body.genre,
  releaseDate : req.body.releaseDate,
  imgPath : req.body.imgPath,
  voteAverage : req.body.voteAverage,

}

  Movie.create(movie)
  .then(createdMovie=> User.findByIdAndUpdate((req.user._id),{$set:{listFavs : createdMovie._id}}))
  .catch(err=>console.log(err))

  
});



// Slack social login


router.get("/auth/slack", passport.authenticate("slack"));
router.get(
  "/auth/slack/callback",
  passport.authenticate("slack", {
    successRedirect: "/",
    failureRedirect: "/profile" // here you would navigate to the classic login page
  })
);


//Google social login

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/profile" // here you would redirect to the login page using traditional login approach
  })
);

module.exports = router;





