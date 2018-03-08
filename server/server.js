const NRA = require("../agent/NodeReactionAgent");

//importing here will override for later invocation
const httpLib = require("../agent/libraries/http.js");
const mongoLib = require("../agent/libraries/mongo.js");

const express = require("express");
const app = express();
const dogController = require("./db/dataController");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "./../"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/routeList", (req, res, next) => {
  res.json(["/GET", "/POST", "/DELETE", "/PUT"]);
});

app.get("/doggos", dogController.getDogs, function(req, res) {
  res.send("shouldnt hit");
});

app.post("/doggos", dogController.addDog, function(req, res) {
  res.send("shouldnt hit");
});

app.listen(3000, () => {
  console.log("PORT 3000 is listening");
}); //listens on port 3000 -> http://localhost:3000/
