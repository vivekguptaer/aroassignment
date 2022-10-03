// import modules
const express = require('express')
//const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
const { request, response } = require('express')
require("dotenv").config()
//const cust = require('./db')
var mysql = require('mysql');
// app
const app = express()


// db
// const {createPool} = require('mysql')

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "1234",
// });

// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'booking'
})
// connect to database
dbConn.connect()




// middleware
app.use(morgan("dev"))
app.use(cors({ origin: true, credentials: true }))

// app.get('/hotels', (req, res) => {
//     let data = pool.query('select * from booking.hotel', (err, res) =>{
//     return res
// });
// console.log(data)
// })

// Retrieve all users 
app.get('/hotels', function (req, res) {
    dbConn.query('select * from booking.hotel_data', function (error, results, fields) {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'hotels list.' })
    })
})


// routes

app.get('/hotelsbyid', function (req, res) {
    dbConn.query('select * from booking.hotel_data where hotel_id ='+req.query.id, function (error, results, fields) {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'hotels list.' })
    })
})


//port
const port = process.env.PORT || 8080

//listner
const server = app.listen(port, () =>
    console.log(`server is running on port ${port}`)
)