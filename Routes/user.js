const express = require('express');
const routes = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// Get a Signup Form
routes.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

routes.post('/signup', wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect('/listing');
        })
    } catch (err) {
        console.log(err.message);
        req.flash("error", err.message);
        res.redirect('/signup');
    }
}));

// Get a Login Form
routes.get('/login', (req, res, next) => {
    res.render('users/login.ejs');
});

routes.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), wrapAsync(async (req, res, next) => {
    req.flash("success", "Welcome Back to Wanderlust!");
    res.redirect('/listing');
}));

// Logout User
routes.get('/logout', (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Logged Out Successfully!');
        res.redirect("/listing");
    })
});

module.exports = routes;