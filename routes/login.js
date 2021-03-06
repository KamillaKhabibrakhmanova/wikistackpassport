var express = require('express');
var router = express.Router();
var passport = require('passport');


//show the login form
router.get('/', function(req, res) {
  //renders the page and passes in any flash message data (for potential errors) if it exists
  res.render('login', {message: req.flash('loginMessage')});
});
 
//process the login form 
router.post('/', passport.authenticate('local-login', {
  successRedirect: '/home', //redirect to the secure home section << changed 'profile'
  failureRedirect: '/login', //redirect back to the login page if there's an error
  failureFlash: true
}));

//FACEBOOK ROUTES
//facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

//handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect : '/home',
		failureRedirect: '/'
	}));

module.exports = router;
