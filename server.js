//Dependencies
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body");
var path = require("path");


//creates or sets up port of our application process.env.PORT lets the port be set by heroku
var app = express();
var PORT = process.env.PORT || 8080;

//sets the up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes