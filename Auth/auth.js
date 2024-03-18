
let jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req,res,next)=>{
   
try{
    const token = req.headers.authorization;
 console.log(token)
//console.log("try")

jwt.verify(token,process.env.Secretkey);

next();

console.log("auth sucessful")
}
catch{
    res.status(400).json({
        message:"Authentication Failed try login again"
    })
    console.log("auth failed")
}
}

module.exports = auth;
