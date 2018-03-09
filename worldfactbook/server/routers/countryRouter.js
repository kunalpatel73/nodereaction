'use strict';

// EXPRESS
const express = require('express');
const request = require('request');
const router = express.Router();

// CONTROLLERS
const countryController = require('../controllers/countryController');

// ROUTES
router.get('/test/:countryCode',
  countryController.getCountry2,
  (req, res) => {
    res.send(res.locals.country);
  }
);

router.get('/:countryCode',
  countryController.getCountry,
  (req, res) => {
    res.send(res.locals.country);
  }
);

// DEFAULT ROUTES
router.all('*', (req, res, next) => {
    err = new Error('countryRouter.js - default catch all route - not found');
    err.status = 404;
    next(err);
});

module.exports = router;
