//Import ORM so as to interact with mySQL database
var orm = require("../config/orm.js");

//Create the burger object
var burger = {
    //Retrieve all burger data entries
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    //Insert new burger into database
    create: function(col, vals, cb) {
        orm.create("burgers", col, vals, function(res) {
            cb(res);
        });
    },
    //Update existing burger entries
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;