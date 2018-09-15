//Declare node modules
var mysql = require("mysql");

//Create connection with mySQL database
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection
module.exports = connection;