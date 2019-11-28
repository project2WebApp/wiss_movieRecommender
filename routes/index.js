const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index2',{user:req.user});
});
router.get('/index', (req, res, next) => {
  res.render('main',{user:req.user});
});

module.exports = router;
