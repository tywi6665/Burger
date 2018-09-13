//Import required node modules and files
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Create all the routes and associated logic for each
router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.put("/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: true
    }, condition, function(data) {
        res.redirect("/");
    });
});

router.post("/burgers", function(req,res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect("/");
    });
});

//Export routes to server.js
module.exports = router;