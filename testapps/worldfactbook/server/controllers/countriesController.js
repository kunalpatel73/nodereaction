'use strict';

// MIDDLEWARE
const request = require('request');

// DATABASE SCHEMA
const Country = require('../models/CountryModel');

// CONTROLLER
const countriesController = {};

// CONTROLLER METHODS
countriesController.listCountries = (req, res, next) => {
    console.log('countriesController listCounties');
    Country.find({})
        .then(countries => {
            console.log('retreived all countries');
            res.locals.countriesList = countries;
            next();
        })
        .catch(err => {
            console.log('failed to retrieve countries');
            err = new Error(`Database error failed to retrieve countries`);
            err.functionName = 'countriesController.listCountries';
            err.status = 404;
            next(err);
        });
}

module.exports = countriesController;
