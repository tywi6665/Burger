//Declare node modules
var mysql = require("mysql");

//Create connection with mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection
module.exports = connection;