const express = require("express");

const postrouter = express.Router();
const postSchema = require("../Schema/post");

postrouter.post("/new/post", (req, res) => {
  const post = new postSchema({
    link: req.body.inmglink,
    heading: req.body.heading,
    content: req.body.content,
    date: new Date(),
  });
  post
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Post Saved Sucessfully",
      });
    })
    .catch((response) => {
      res.status(400).json({
        message: "Unable to Save Post",
      });
    });
});

postrouter.get("/get/post", (req, res) => {
  postSchema
    .find()
    .skip()
    .limit(10)
    .then((result) => {
      res.status(200).json({
        message: "Fecthed Sucessfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Post not found",
      });
    });
});

module.exports = postrouter;
