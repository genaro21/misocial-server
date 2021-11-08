const models = require("../models");

const signUp = (req, res) => {
  return res.json("SignUp");
};

const signIn = (req, res) => {
  return res.json("SignIn");
};

module.exports = {
  signUp,
  signIn,
};
