const express = require("express");
const db = require("../models");
const routes = express.Router();
const passport = require("../config/passport");
const authenticate = require("../config/middleware/isAuthinticated");

//routes: tasks
//GET home
routes.get("/home", authenticate, function(req, res) {
  db.Tasks.findAll({
    where: { userID: req.user.id }
  }).then(function(results) {
    // console.log(results);
    res.render("home.ejs", { list: results, user: req.user });
  });
});

// POST /ninja
routes.post("/ninja", function(req, res) {
    // console.log(req.body.taskItem);
    db.Tasks.create({
      todo: req.body.taskItem,
      userID: req.user.id
    }).then(function(results) {
    // console.log(results);
      res.redirect("/home");
    });
});
  
routes.delete("/delete/:index", function(req, res) {
    console.log(req.params.index);
    db.Tasks.destroy({
      where: { id: req.params.index }
    }).then(function(results) {
      // consle.log(results);
      res.redirect("/home");
    });
});

// ROUTES: users
  
// GET login
routes.get("/user/login", function(req, res) {
    res.render("login.ejs");
});