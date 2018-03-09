const NRA = require('../../agent/NodeReaction');

const express = require("express");
const app = express();
const dogController = require("./controllers/dataController");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/./client/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/dogs", dogController.getDogs, function(req, res) {
  res.send("shouldnt hit");
});

app.post("/dogs", dogController.addDog, function(req, res) {
  res.send("shouldnt hit");
});

app.post("/serverdata", (req, res) => {
    console.log("PACKET INCOMING");
    console.log(req.body.packet);
    res.send("thank ya kindly");
   });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`***DOGGIE*** PORT ${PORT} is listening`);
});
