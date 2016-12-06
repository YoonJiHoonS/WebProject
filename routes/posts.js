var express = require('express'),
    Post = require('../models/Post');
var router = express.Router();

router.get('/', function(req, res, next) {
  Post.find({}, function(err, posts) {
    if (err) {
      return next(err);
    }
    res.render('posts/index',{posts : posts});
  });
});

router.get('/new', function(req, res, next) {
  Post.find({}, function(err, post) {
    if (err) {
      return next(err);
    } 
    res.render('posts/edit', {post : post});   
  });
});

router.get('/:id',function(req,res,next){
  Post.findById({_id: req.params.id},function(err,post){
    if(err){
      return next(err);
    }
    post.read++;
    res.render('posts/show', {post : post});
    post.save(function(err){
      if (err) {
        return next(err);
      }
    });
  });
});

router.post('/', function(req, res, next) {
  Post.find({}, function(err, post) {
    if (err) {
      return next(err);
    }
    var newPost = new Post({
      name: req.body.name,
      city: req.body.city,
      address: req.body.address,
      fee: req.body.fee,
      facility: req.body.facility,
      content: req.body.content,
      rule: req.body.rule
    });

    newPost.save(function(err) {
      if (err) {
        return next(err);
      } else {
        res.redirect('posts/');
      }
    });
  });
});

router.get('/:id/edit', function(req, res, next) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      return next(err);
    }
    res.render('posts/edit', {post: post});
  });
});
router.put('/:id', function(req, res, next) {
  Post.findById(req.params.id, function(err, post) {
      post.name = req.body.name;
      post.city = req.body.city;
      post.address = req.body.address;
      post.fee = req.body.fee;
      post.facility = req.body.facility;
      post.content = req.body.content;
      post.rule = req.body.rule;
      post.save(function(err) {
      if (err) {
        return next(err);
      }
    res.redirect('/posts');
  });
    });
});



router.delete('/:id', function(req, res, next) {
  Post.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/posts');
  });
});



module.exports = router;

