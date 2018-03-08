const NRA = require("../Nodereactionsingleton");
const mongo = require("mongodb-core");

let original = mongo.Server.prototype.insert;

mongo.Server.prototype.insert = function() {
  if (arguments.length > 0) {
    let trace = NRA.createTrace("Mongodb");
    var index = arguments.length - 1;
    var cb = arguments[index];
    if (typeof cb === "function") {
      console.log("cb func", cb.toString());
      arguments[index] = function() {
        trace.end();
        return cb.apply(this, arguments);
      };
    } else {
      console.log("double hmmm");
    }
  } else {
    console.log("hmmmm");
  }
};
