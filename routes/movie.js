const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Movie = require("../models/Movies");

router.post("/create-movie-watch-list", (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imgPath: req.body.imgPath,
    voteAverage: req.body.voteAverage,
  }

  Movie.create(movie)
    .then(createdMovie => User.findByIdAndUpdate((req.user._id), { $push: { listWatchLater: createdMovie._id } }))
    .then(() => {
      res.redirect("/auth/profile")
    })
    .catch(err => console.log(err))
});

router.post("/delete-movie-watch-list", (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imgPath: req.body.imgPath,
    voteAverage: req.body.voteAverage,
  }

  Movie.create(movie)
    .then(createdMovie => User.findByIdAndUpdate((req.user._id), { $pull: { listWatchLater: createdMovie._id } }))
    .then(() => {
      res.redirect("/auth/profile")
    })
    .catch(err => console.log(err))
});

router.post("/create-movie-fav-list", (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imgPath: req.body.imgPath,
    voteAverage: req.body.voteAverage,
  }

  Movie.create(movie)
    .then(createdMovie => User.findByIdAndUpdate((req.user._id), { $push: {listFavs: createdMovie._id } }))
    .then(() => {
      res.redirect("/auth/profile")
    })
    .catch(err => console.log(err))
});

router.post("/delete-movie-fav-list", (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imgPath: req.body.imgPath,
    voteAverage: req.body.voteAverage,
  }

  Movie.create(movie)
    .then(createdMovie => User.findByIdAndUpdate((req.user._id), { $pull: { listFavs: createdMovie._id } }))
    .then(() => {
      res.redirect("/auth/profile")
    })
    .catch(err => console.log(err))
});

router.post("/create-movie-disc-list", (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imgPath: req.body.imgPath,
    voteAverage: req.body.voteAverage,
  }

  Movie.create(movie)
    .then(createdMovie => User.findByIdAndUpdate((req.user._id), { $push: { listDiscard: createdMovie._id } }))
    .then(() => {
      res.redirect("/auth/profile")
    })
    .catch(err => console.log(err))
});
router.post("/delete-movie-disc-list", (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imgPath: req.body.imgPath,
    voteAverage: req.body.voteAverage,
  }

  Movie.create(movie)
    .then(createdMovie => User.findByIdAndUpdate((req.user._id), { $pull: { listDiscard: createdMovie._id } }))
    .then(() => {
      res.redirect("/auth/profile")
    })
    .catch(err => console.log(err))
});

module.exports = router;

