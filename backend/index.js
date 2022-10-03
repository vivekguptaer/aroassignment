const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

// parse application/json
app.use(bodyParser.json());


//Create Database Connection
const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "booking",
});

// connect to database
conn.connect((err) => {
	if (err) throw err;
	console.log("MySQL connected");
});

