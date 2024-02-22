const express = require("express");

const postrouter = express.Router();
const postSchema = require("../Schema/post");
const auth = require('../Auth/auth');



postrouter.post("/new/post",auth, (req, res) => {
  console.log("new post creation")

  const post = new postSchema({
    link: req.body.imglink,
    heading: req.body.heading,
    content: req.body.content,
    date: new Date(),
  });
  
  post
    .save()
    .then((response) => {
      console.log("new post created")
      console.log(response)
      res.status(200).json({
        message: "Post Saved Sucessfully",
      });
    })
    .catch((response) => {
      console.log("new post creation failed")
      res.status(400).json({
        message: "Unable to Save Post",
      });
    });
});

postrouter.get("/", (req, res) => {
  console.log("get property")
  postSchema
    .find()
    .skip()
    .limit(10)
    .then((result) => {
      console.log("success get")
      res.status(200).json({
        message: "Fecthed Sucessfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log("found err in get")
      res.status(500).json({
        message: "Post not found",
      });
    });
});

module.exports = postrouter;
