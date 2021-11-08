const models = require("../models");

const upload = (req, res) => {
  return res.json("Upload");
};

const recentUploads = (req, res) => {
  return res.json("Recent uploads");
};

const stats = (req, res) => {
  return res.json("Stats");
};

const mostPopular = (req, res) => {
  return res.json("Most popular");
};

const details = (req, res) => {
  return res.json("Details");
};

const remove = (req, res) => {
  return res.json("Remove");
};

const like = (req, res) => {
  return res.json("Like");
};

module.exports = {
  upload,
  recentUploads,
  stats,
  mostPopular,
  details,
  remove,
  like,
};
