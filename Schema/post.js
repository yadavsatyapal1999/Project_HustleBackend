const mongoose = require("mongoose");

const post = new mongoose.Schema({
  link: { type: String, required: true },
  heading: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});

const pst = mongoose.model("Post", post);

module.exports = pst;
