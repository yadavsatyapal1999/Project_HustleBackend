const mongoose = require("mongoose");

const post = new mongoose.Schema({
  imglink: { type: String, required: true },
  heading: { type: String, required: true },
  content: { type: String, required: true },
});

const pst = mongoose.model("Post", post);

module.exports = pst;
