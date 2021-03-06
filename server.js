//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



//creates or sets up port of our application process.env.PORT lets the port be set by heroku
var app = express();
var PORT = process.env.PORT || 8080;

//sets the up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static("app/public"));

//router the below points our server to a series of "route" files
//these routes gives the server a map of how to respond when users visit or request data from various URLs
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//starts our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


