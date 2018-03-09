// Dependencies
const mongoose = require('mongoose');
const movie = require('./../models/MovieModel');

module.exports = {
  async: (req, res, next) => {
    setTimeout(() => {
      console.log('setTimeout finished in movieController.async');
      let length = req.transaction[0].traces.length - 1;
      console.log('==================================================')
      console.log('This is the ID of the request: ', req.transactionID);
      console.log('This is currentReq in movecontroller.async: \n', req.transaction[0].traces[length]);
      console.log('==================================================')
    }, 500);
    next();
  },
  asyncLong: (req, res, next) => {
    setTimeout(() => {
      console.log('setTimeout finished in movieController.async');
      let length = req.transaction[0].traces.length - 1;
      console.log('==================================================')
      console.log('This is the request ID: ', req.transactionID);
      console.log('This is currentReq in movecontroller.async: \n', req.transaction[0].traces[length]);
      console.log('==================================================')
    }, 5000);
    next();
  },
  // Save movie to DB
  save: (req, res, next) => {
    console.log(req.body);
    movie.create({
      title: req.body.title,
      rating: parseInt(req.body.rating),
      category: req.body.category,
      awarded: req.body.awarded,
      released: new Date(req.body.released)
    }).then(movie => {
      // console.log('Movie successfully saved: ', movie);
      console.log('DB create finished in movieController.save');
      let length = req.transaction[0].traces.length - 1;
      console.log('==================================================')
      console.log('This is the request ID: ', req.transactionID);
      console.log('This is currentReq in movecontroller.save: \n', req.transaction[0].traces);      
      console.log('This is currentReq in movecontroller.save: \n', req.transaction[0].traces[length]);
      console.log('==================================================')
      next();
    }).catch(err => {
      console.log('There was an error saving: ', err);
      res.send('error - ', err);
    })
  },
  // Retrieves all movies from DB
  retrieve: (req, res, next) => {
    console.log('Inside database retrieve');
    movie.find({})
      .then(movies => {
        // console.log('Here are your movies: ', movies);
        res.locals.movies = movies;
        next();
      }).catch(err => {
        console.log('There was an error: ', err);
        res.send('error - ', err);
      })
  }
}