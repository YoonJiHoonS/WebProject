var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('todos', {
    tasks: [
    
    ],
    categories: [
    
    ]
  });
});

router.post('/', function(req, res, next) {
  req.flash('success', '새로운 할 일이 저장되었습니다.');
  res.redirect('/todos');
});

router.put('/:id', function(req, res, next) {
  req.flash('success', '할 일이 변경되었습니다.');
  res.redirect('/todos');
});

router.delete('/:id', function(req, res, next) {
  req.flash('success', '할 일이 삭제되었습니다.');
  res.redirect('/todos');
});

module.exports = router;
