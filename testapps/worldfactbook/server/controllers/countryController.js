"use strict";

// MIDDLEWARE
const request = require("request");
const fs = require("fs");

// DATABASE SCHEMA
const Country = require("../models/CountryModel");

// CONTROLLER
const countryController = {};

// CONTROLLER METHODS
countryController.getCountry2 = (req, res, next) => {
  const countryCode = req.params.countryCode;
  Country.findOne({ countryCode })
    .then(country => {
      // console.log('found country ' + country);
      if (country !== null) {
        res.locals.country = country.name;
        ///
        Country.findOne({ countryCode })
          .then(country => {
            // console.log('found country ' + country);
            if (country !== null) {
              res.locals.country = country.name;
              next();
            } else {
              // console.log('country code not found ' + countryCode);
              err = new Error(
                `Database error country code: ${countryCode} not found.`
              );
              err.functionName =
                "countryController.getCountry - countryController.getCountry";
              err.status = 404;
              next(err);
            }
          })
          .catch(err => {
            err = new Error(
              `Database error attempting to load country code: ${countryCode}.`
            );
            err.functionName =
              "countryController.js - countryController.getCountry";
            err.status = 404;
            next(err);
          });
        //////////////////////
        //next();
      } else {
        // console.log('country code not found ' + countryCode);
        err = new Error(
          `Database error country code: ${countryCode} not found.`
        );
        err.functionName =
          "countryController.getCountry - countryController.getCountry";
        err.status = 404;
        next(err);
      }
    })
    .catch(err => {
      err = new Error(
        `Database error attempting to load country code: ${countryCode}.`
      );
      err.functionName = "countryController.js - countryController.getCountry";
      err.status = 404;
      next(err);
    });
};

countryController.getCountry11 = (req, res, next) => {
  const countryCode = req.params.countryCode;
  Country.find({ countryCode })
    .then(country => {
      // console.log('found country ' + country);
      if (country !== null) {
        res.locals.country = country.name;
        next();
      } else {
        // console.log('country code not found ' + countryCode);
        err = new Error(
          `Database error country code: ${countryCode} not found.`
        );
        err.functionName =
          "countryController.getCountry - countryController.getCountry";
        err.status = 404;
        next(err);
      }
    })
    .catch(err => {
      err = new Error(
        `Database error attempting to load country code: ${countryCode}.`
      );
      err.functionName = "countryController.js - countryController.getCountry";
      err.status = 404;
      next(err);
    });
};

countryController.getCountry = (req, res, next) => {
  const countryCode = req.params.countryCode;
  Country.find({countryCode}, function(err, country) {
    if (err || !country) {
      res.locals.country = country;
      next();
    }
    err = new Error(`Database error country code: ${countryCode} not found.`);
    err.functionName = "countryController.getCountry - countryController.getCountry";
    err.status = 404;
    next(err);
  });
};

// Dog.find({}, function(err, dogs) {
//     if (err || !dogs) {
//       return res.send("problem in db");
//     }
//     return res.send(dogs);
//   });

// countryController.writeFile = (req, res, next) => {
//     const fileName = "fileTest" + "0" + ".js";
//     const fileContents = JSON.stringify({ name: "eric" });
//     fs.writeFile(fileName,fileContents, err => {
//         console.log("write file: succeed");
//         next();
//     });
//     // console.log('countryController.writeFile');
//     // next();
// }

module.exports = countryController;
