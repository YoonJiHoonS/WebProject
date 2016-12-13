var express = require('express');
var User = require('../models/User');
var Post = require('../models/Post');
var Find = require('../routes/Find');
var Task = require('../models/Task');
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
router.get('/find',function(req,res,next){
  res.render('find');
});
router.get('/todos',function(req,res,next){
  res.render('todos');
});
module.exports = router;
