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