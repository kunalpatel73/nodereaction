const NRA = require('../agent/NodeReaction');

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Transaction = require("./models/TransactionModel").Transaction;
const Trace = require("./models/TransactionModel").Trace;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dogs");

app.use(express.static(__dirname + "./../"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/routeList', (req, res, next) => {
    res.json([{
        "_id": "5aa094dccc8a70850fb4b19A",
        "requestUrl": "/country/ca",
        "requestMethod": "GET",
        "transactionId": "ddc8bfd0-2271-11e8-80ae-d7802bd01bcd",
        "rawHeaders": "Host,localhost:3000,User-Agent,insomnia/5.14.7,Cookie,ssid=13,Content-Type,application/x-www-form-urlencoded,Accept,*/*,Content-Length,0",
        "cookies": "ssid=13",
        "startTime": "906720370",
        "startTimestamp": "2018 - 03 - 08T01: 41: 48.237Z",
        "endTime": "909746223",
        "endTimestamp": "2018 - 03 - 08T01: 41: 48.240Z",
        "duration": "3.025853",
        "__v": "0"
    },
    {
        "_id": "5aa094dccc8a70850fb4b19B",
        "requestUrl": "/country/us",
        "requestMethod": "POST",
        "transactionId": "ddc8bfd0-2271-11e8-80ae-d7802bd01bcd",
        "rawHeaders": "Host,localhost:3000,User-Agent,insomnia/5.14.7,Cookie,ssid=13,Content-Type,application/x-www-form-urlencoded,Accept,*/*,Content-Length,0",
        "cookies": "ssid=13",
        "startTime": "906720370",
        "startTimestamp": "2018 - 03 - 08T01: 41: 48.237Z",
        "endTime": "909746223",
        "endTimestamp": "2018 - 03 - 08T01: 41: 48.240Z",
        "duration": "3.025853",
        "__v": "0"
    },
    {
        "_id": "5aa094dccc8a70850fb4b19C",
        "requestUrl": "/country/NZ",
        "requestMethod": "GET",
        "transactionId": "ddc8bfd0-2271-11e8-80ae-d7802bd01bcd",
        "rawHeaders": "Host,localhost:3000,User-Agent,insomnia/5.14.7,Cookie,ssid=13,Content-Type,application/x-www-form-urlencoded,Accept,*/*,Content-Length,0",
        "cookies": "ssid=13",
        "startTime": "906720370",
        "startTimestamp": "2018-03-08T01:41:48.237Z",
        "endTime": "909746223",
        "endTimestamp": "2018-03-08T01:41:48.240Z",
        "duration": "3.025853",
        "__v": "0"
    }
    ]);
});

// Mongoose schema
// Mongo local db
// Model for each transaction

// Data dump from agent
app.post("/serverdata", (req, res) => {
    console.log("PACKET INCOMING");
    console.log(req.body.packet);
    const transactions = req.body.packet;
    transactions.forEach(transaction => {
        console.log(JSON.stringify(transaction.traces));

        let trans = new Transaction({
            requestUrl: transaction.url,
            requestMethod: transaction.method,
            routeName: transaction.method + ' - ' + transaction.url,
            transactionId: transaction.uuid
        });

        transaction.traces.forEach(traces => {
            trans.traces.push({
                type: traces.type,
                uuid: traces.uuid,
                duration: traces.duration
            })
        })

        trans.save((err, data) => {
            if (err) return console.log(err);
            return console.log('Success: ', data);
        })
    });
    res.send("thank ya kindly");
});

// Data request from app
app.get('/getData', (req, res) => {
    console.log('Request recieved for data');
    Transaction.find({})
        .then(data => {
            console.log('Success');
            res.json(data);})
        .catch(err => {
            console.log('Error: ', err);
        })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`***NODE REACTION*** PORT ${PORT} is listening`);
});