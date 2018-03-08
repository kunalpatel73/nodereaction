const NRA = require("../NodeReactionAgent");
const mongo = require("mongodb-core");

let original = mongo.Server.prototype.insert;

mongo.Server.prototype.insert = function() {
  if (arguments.length > 0) {
    let trace = NRA.createTrace("Mongodb");

    var index = arguments.length - 1;
    var cb = arguments[index];

    if (typeof cb === "function") {
      arguments[index] = function() {
        trace.end();
        return cb.apply(this, arguments);
      };
    }
  }

  return original.apply(this, arguments);
};
