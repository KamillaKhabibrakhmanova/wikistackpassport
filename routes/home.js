var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
//we want this protected so you have to be logged in to visit
//we'll use route middleware to verify this ()
function isLoggedIn(req, res, next){ 
  // Note that this is a function declaration, NOT an expression. 
  // It loads before any code is called--compare this with a function expression.
  // Why did we write this as a declaration? 
  // Read more: http://stackoverflow.com/q/1013385/66355
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect('/') //if not authenticated, redirect to main page
}

router.get('/', isLoggedIn, function(req, res) {
  var is_deleted = req.query.deleted;
  var deleted;
  
  if (is_deleted === "true") {
    deleted = true;
  } else {
    deleted = false;
  }
  
  var docs = models.Page.find(function(err, docs) {
    console.log(req.user);
    res.render('home', { docs: docs, deleted: deleted, user: req.user});
  });
});

module.exports = router;
