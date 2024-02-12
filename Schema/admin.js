const mongoose = require("mongoose");

const admin = new mongoose.Schema({
  email: { type: String, required: true, unique: true },  // for mail
  password: { type: String, required: true },  // for password
});

const admn = mongoose.model("Admin", admin);

module.exports = admn;
