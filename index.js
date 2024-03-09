
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors')
const post = require('./Routes/newpost');
const admin = require('./Routes/newAdmin');


const app = express();


app.use(cors())
app.use(bodyParser.json())



mongoose.connect(process.env.mongoose).then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log("connection to DB failed")
})

app.use('/admin',admin);
app.use('/',post)


app.listen(8080 , ()=>{
    console.log("listening at port 8080")
})
