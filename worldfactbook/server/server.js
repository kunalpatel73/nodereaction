"use strict";

// NodeReaction
const NRA = require("../../agent/NodeReaction");
// const httpLib = require("../../agent/libraries/http.js");
// const mongoLib = require("../../agent/libraries/mongo.js");

// NodeReaction - eric version
// const Agent = require("./classes/agent");
// const agent = new Agent();

// EXPRESS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Body Parsing
const bodyParser = require("body-parser");

// ROUTERS
const countryRouter = require("./routers/countryRouter");
const countriesRouter = require("./routers/countriesRouter");

// DATABASE
const DBNAME = "worldfactbook";
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${DBNAME}`);
mongoose.connection.once("open", () => {
  console.log(`Connected to Database - ${DBNAME} from index.js`);
});

// Body parser Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER ROUTES
app.use("/country", countryRouter);
app.use("/countries", countriesRouter);
app.use(express.static("./"));

// DEFAULT ROUTES
app.get("/", (req, res, next) => {
  err = new Error("we didn't find what you are looking for - not found");
  err.functionName = "server.js";
  err.status = 404;
  next(err);
});

app.all("*", (req, res, next) => {
  console.log("catch all on the root");
  err = new Error("index.js - default catch all route - not found");
  err.functionName = "server.js";
  err.status = 404;
  next(err);
});

// ERROR HANDLING
app.use((err, req, res, next) => {
  const error = err.functionName ? `${err.functionName} ${err}` : err;
  const errorStatus = err.status ? err.status : 500;
  res.status(errorStatus).end(`Server.js - ${error}`);
});


// LISTEN
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT} from server.js`));
