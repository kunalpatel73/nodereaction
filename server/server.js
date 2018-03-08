const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + './../')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/routeList', (req, res, next) => {
    res.json([{
        "_id": "5aa094dccc8a70850fb4b19c",
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
        "_id": "5aa094dccc8a70850fb4b19c",
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
        "_id": "5aa094dccc8a70850fb4b19c",
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


app.listen(3000, () => { console.log('PORT 3000 is listening') }); //listens on port 3000 -> http://localhost:3000/