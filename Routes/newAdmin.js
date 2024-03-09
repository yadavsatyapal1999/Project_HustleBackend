const express = require("express");

const adminrouter = express.Router();

const Admin = require("../Schema/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

adminrouter.post("/new/admin", async (req, res) => {
  console.log("new admin creation")
  const { email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashpassword) => {
      const user = new Admin({
        email: email,
        password: hashpassword,
      });

      user
        .save()
        .then((result) => {
          console.log("new admin created")
          res.status(200).json({
            message: "Admin Created Sucessfully",
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "User already exist",
          });
        });
    })
    .catch(() => {
      res.status(500).json({
        message: "Can't Reach to Server",
      });
    });
});

adminrouter.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("admin login")

  Admin.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password).then((response) => {
          console.log("admin login sucessfull")
         let payload = {
              email: user.email,
              id: user._id,
            }
          const secret = "satyanews"
          const expiresIn = '1h';
          const jwttoken = jwt.sign(payload,secret,{expiresIn});

          console.log(jwttoken)
          res.status(200).json({
            message: "Login Sucessfully",
            token: jwttoken,
          });
        });
      } else {
        res.status(404).json({
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "User Not Found",
      });
    });
});

module.exports = adminrouter;
