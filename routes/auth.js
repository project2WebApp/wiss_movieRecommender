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
  User.findById(req.user._id)
  .populate("listWatchLater")
  .then((foundUser) => {
    res.render("auth/profile", {user: foundUser})

  })
  .catch(err=>console.log(err))

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





