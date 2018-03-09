// Server dependencies
const EventEmitter = require('events');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require("uuid/v1");
const mongo = require("mongodb-core");
// const wrapper = require('./wrappers/wrapper');
// const mongoose = require('mongoose');

const Transaction = require('./classes/transaction');
const Trace = require('./classes/trace');

const shimmer = require("shimmer");
let http = require("http");
const fs = require('fs');
let currentReq;
let agent = {};

let _createServer= http.createServer;
http.createServer = function(onReq) {
  return _createServer.call(http, function(req, res) {
    currentReq = req;
    return onReq(req, res);
  })
}

shimmer.wrap(http.Server.prototype, "emit", function(orig) {
  return function(event, req, res) {
    console.log('Inside HTTP emit: ', event);
    if (event === 'request') {
      let transaction = new Transaction();
      transaction.startTransaction();
      req.transactionID = uuid();
      req.transaction = [];
      req.transaction.push(transaction);
      console.log('==================');
      if (agent.hasOwnProperty(req.url) === false) agent[req.url] = []
      agent[req.url].push(transaction);
      console.log('==================');      
      // agent[req.url].push(transaction);
      res.on('finish', function() {
        transaction.finishTransaction();
        console.log(`The duration is ${transaction.durationTime}ms`);
      });
    }
    return orig.apply(this, arguments);
  };
});

function wrapper(object, method) {
  let trace = new Trace();
  trace.startTrace();
  trace.method = method;
  let orig = object[method];
  return function() {
    let req = currentReq;
    var argsArr = [...arguments];
    let args = [];
    let j;
    let callback;
    console.log(argsArr);
    for (let i = 0; i < argsArr.length; i += 1) {
      if (typeof argsArr[i] === 'function') {
        j = i;
        callback = argsArr[i];
        args[i] = argsArr[i];
      } else args[i] = argsArr[i];
    }  
    args[j] = function() {
      trace.finishTrace();
      currentReq = req;
      if (currentReq !== undefined){
        currentReq.transaction[0].traces.push(trace);
      } 
      console.log('This is the agent in the callback: \n', agent);
      return callback.apply(this, arguments);
    }
    return orig.apply(object, args);
  }
}

// global.setTimeout = wrapper(global, 'setTimeout');
// mongo.Server.prototype.insert = wrapper(mongo.Server.prototype, 'insert');



// DB dependencies
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const movieController = require('./controllers/movieController');
const movie = require('./models/MovieModel');
movie.create = wrapper(movie, 'create');

movie.create({
  title: 'cheese man',
  rating: 10,
  category: 'drama',
  awarded: true,
  released: new Date()
}).then(movie => {
  // console.log('Movie successfully saved: ', movie);
  console.log('DB create finished in movieController.save');
  let length = currentReq.transaction[0].traces.length - 1;
  console.log('==================================================')
  console.log('This is the request ID: ', currentReq.transactionID);
  console.log('This is currentReq in movecontroller.save: \n', currentReq.transaction[0].traces);      
  console.log('This is currentReq in movecontroller.save: \n', currentReq.transaction[0].traces[length]);
  console.log('==================================================')
  next();
}).catch(err => {
  console.log('There was an error saving: ', err);
  // res.send('error - ', err);
})


// Connecting to DB
const uri = process.env.MONGO_URI || 'mongodb://localhost/movies';
mongoose.connect(uri);

// Parse req.body and cookie headers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handle GET requests to 'movies'
app.get('/movies', 
  movieController.async,
  movieController.async,
  movieController.retrieve,
  (req, res) => res.send(res.locals.movies)
);

app.get('/videos', 
  movieController.asyncLong,
  movieController.retrieve,
  (req, res) => res.send(res.locals.movies)
);

// Handle POST requests to 'movies
app.post('/movies', 
  movieController.save,
  (req, res) => res.send('Success')
);

// Connect to port 9494
app.listen(9494, console.log('Connected to port 9494'));

// shimmer.wrap(fs.ReadStream.prototype, "emit", function(orig) {
  //   return function(...args) {
  //     console.log(args);
  //     console.log('Inside FS emit');
  //     let start;
  //     let finish;
  //     let duration;
  //     return orig.apply(this, arguments);
  //   };
  // });
  
  // fs.readFile(path.join(__dirname, './text.html'), 'utf8', (err, data) => {
  //   if (err) return console.log(err);
  //   console.log('fs.readFile is a success: ', data);
  // })