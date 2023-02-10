const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const ejs = require("ejs");
const app = express();
const port = 1500;

const db = require("./database/db");

const student = require("./model/student");
const { insertMany } = require("./model/student");
const { dir } = require("console");

app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
 
 const staticPath = path.join(__dirname, "./views");
//  console.log(staticPath);

   app.use(express.static(staticPath))

app.get("/", (req, res) => {
    console.log("aa gaya bhai :) ");
    res.render("index");
});

app.post("/", (req, res) => {

  new student({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userpassword,
  }).save().then(res.send("data submitted")).catch(e => res.send(JSON.stringify(e)))

     console.log(req.body);

});


db().then( res => { app.listen(port, () => console.log("server called 1500")); }).catch(er => JSON.stringify(er));

