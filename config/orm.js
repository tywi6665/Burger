//Import the mySQL coonection from connection.js
var connection = require("./connection.js");

//Helper function for SQL syntax
function pushQuestionMarks (num) {
    var arr = [];

    //Loop through to add the correct number of question marks
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

//Helper function to convert object key/value pairs to SQL syntax
function keyValue (ob) {
    var arr = [];

    //Loop through the keys and push corresponding value as string
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
};

//Create the orm object to perform mySQL queries
var orm = {
    //Grab all the data entries
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        
        //Perform the mySQL query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //Create a new data entry
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += pushQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        //Perform the mySQL query
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    //Update existing data entry
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += keyValue(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        //Perform the mySQL query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //Delete existing data entry
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

//Export orm object
module.exports = orm;