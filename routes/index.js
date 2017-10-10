var express = require('express');
var router = express.Router();

var ObjectID = require('mongodb').ObjectID;

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

  var c = req.db.collection('max_todo');
  c.findOne(function(err, result) {
    if (err) {
      next(err);
    }

    // result._id;
    var s = "" + result._id;

    c.deleteOne({"_id": ObjectID(s)}, function(err, result) {
      if (err) {
        next(err);
      }

      res.redirect('/');
    });

  });

});

module.exports = router;
