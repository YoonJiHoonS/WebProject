var express = require('express'),
    User = require('../models/User');
    posts = require('../models/Post');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/post',function(req,res,next){
  res.render('post');
});
router.get('/signin', function(req, res, next) {
  res.render('signin');
});


module.exports = router;
