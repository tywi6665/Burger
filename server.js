//Require node dependencies
var express = require("express");
var expressHandlebars = require ("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//Pull in static content
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:false }));

//Parse application
app.use(bodyParser.json());

//Set up handlebars
app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes to server
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//Start server and start listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});