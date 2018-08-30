//we need to inluce the path package to get the correct file path from the html
var path = require("path");


//routing


module.exports = function(app) {
//html gets requests

app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "/../public/survey.html"));
});

//if no matching route, default to home
app.get("/home", function(req, res) {
    res.sendFile(path.join(_dirname, "/../public/home.html"));
});
}