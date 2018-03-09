var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var Schema = mongoose.Schema;

var dogSchema = new Schema({
  firstName: String,
  lastName: String
});

let Dog = mongoose.model("dogs", dogSchema);

function addDog(req, res) {
  let rand = Math.floor(Math.random() * 100);
  let tempDoggo = new Dog({ firstName: "Dog", lastName: rand });
  tempDoggo.save(err => {
    if (err) {
      return res.send(err);
    }
    console.log("good doggo");
    return res.json(JSON.stringify("doggoo saved"));
  });
}

function getDogs(req, res) {
  Dog.find({}, function(err, dogs) {
    if (err || !dogs) {
      return res.send("problem in db");
    }
    return res.json({"dogs": dogs});
  });
}

module.exports = {
  getDogs,
  addDog
};
