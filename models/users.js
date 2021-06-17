const bcrypt = require("bcryptjs");
// create a model for our tasks

//exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    // define columns of our table
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};