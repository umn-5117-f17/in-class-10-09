var express = require('express');
var router = express.Router();

// var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('max_todo').find().toArray(function(err, results) {
    if (err) {
      next(err);
    }

    res.render('index', {
      title: 'Express Demos',
      scripts: ['file-upload.js'],
      todos: results
    });
  });

});

/* GET home page. */
router.get('/delete-one', function(req, res, next) {
  console.log("TODO");
  res.redirect('/');
});

module.exports = router;
