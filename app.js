const express=require('express');
require('./db/conn');
const dotenv=require("dotenv");
const mongoose=require('mongoose');
const cors = require('cors');

const User=require('./model/userSchema');
const Router=require('./router/auth');

const app=express();
// Enable CORS for all origins
app.use(cors({
    origin: ['https://grievance360.vercel.app','http://localhost:3000'], // Replace with the actual origin of your frontend application
    credentials: true // Enable sending cookies with the request
  }));
const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(Router);
dotenv.config({path:'./config.env'});

require('./middleware/authenticate');

const port=8000;
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log(`Connection setup at ${port}`)
})
