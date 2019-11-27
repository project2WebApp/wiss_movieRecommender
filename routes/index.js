const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index2');
});
router.get('/index', (req, res, next) => {
  res.render('main');
});

module.exports = router;
