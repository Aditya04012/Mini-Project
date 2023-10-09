const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const _ = require('lodash');
const https=require("https");
const mongoose=require("mongoose");

const app=express();
mongoose.connect("mongodb://localhost:27017/testDB");



app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
res.render("index");
});

app.listen(3000,()=>{
console.log("server is live at port 3000");
});