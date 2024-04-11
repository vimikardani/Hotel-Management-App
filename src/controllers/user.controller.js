
const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const Hotel = require("../models/hotel.model");
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const loginpage=async(req,res)=>{
    res.render('login')
}

const registerUser = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        });
        User.register(newUser, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                return res.render('index');
            }
            passport.authenticate('local')(req, res, () => {
                res.redirect('/user/login');
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}

const loginUser = (req, res) => {

}

const authenticate=passport.authenticate('local', {
    successRedirect: '/hotels',
    failureRedirect: '/user/login',
  })

const logout=function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
    }

module.exports = {loginpage, registerUser, loginUser,authenticate,logout}