//packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index.js");
const routes = require("./routes");
const passport =  require("./config/passport");
const session = require("express-session");

//starting express app
const app = express();

//setting up view engine
app.set("view engine", "ejs");

