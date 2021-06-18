const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// telling passport what Strategy to use
// and using email/password

// Strategy for checking user login against current user in db
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // when a user attempts to login run this code
      db.Users.findOne({ where: { email: email } }).then(function(dbUser) {
        //   if there is no user tell them no by that email register
        if (!dbUser) {
          return done(null, false, { message: "Incorrect email" });
        }
        // if there is a user but passwords dont match tell them wrong password
        else if (!dbUser.verifyPassword(password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        // if none of the above retun user
        return done(null, dbUser);
      });
    }
  )
);

