const express = require('express');
const router  = express.Router();

router.post('/getchorizopeliculas', (req, res, next) => {
  res.render('index');
  const {Genre, Rating, MovieTVshow} = req.body;

  


});







module.exports = router;

