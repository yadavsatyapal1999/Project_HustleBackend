const mongoose = require("mongoose");
const Owner = require('./admin')

const post = new mongoose.Schema({
  admin:{type:mongoose.Schema.Types.ObjectId,ref:Owner},
  link: { type: String, required: true },
  heading: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});

const pst = mongoose.model("Post", post);

module.exports = pst;
