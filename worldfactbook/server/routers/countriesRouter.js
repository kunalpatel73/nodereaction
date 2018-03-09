'use strict';

// EXPRESS
const express = require('express');
const request = require('request');
const router = express.Router();

// CONTROLLERS
const countriesController = require('../controllers/countriesController');

// ROUTES
router.get('/',
  countriesController.listCountries,
  (req, res) => {
    res.send(res.locals.countriesList);
  }
);

// DEFAULT ROUTES
router.all('*', (req, res, next) => {
  err = new Error('countriesRouter.js - default catch all route - not found');
  err.status = 404;
  next(err);
});

module.exports = router;
