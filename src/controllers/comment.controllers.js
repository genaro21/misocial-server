const models = require("../models");

const lastestComments = (req, res) => {
  return res.json("Lastest comments");
};

const create = (req, res) => {
  return res.json("create comment");
};

module.exports = {
  lastestComments,
  create,
};
