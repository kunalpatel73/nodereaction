const NRA = require("../Agent");
const mongo = require("mongodb-core");

let original = mongo.Server.prototype.insert;

mongo.Server.prototype.insert = function() {
  if (arguments.length > 0) {
    let trace = NRA.createTrace("Mongodb Insert");

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

let findOriginal = mongo.Cursor.prototype._find;

mongo.Cursor.prototype._find = function() {
  console.log('nra agent mongo');
  if (arguments.length > 0) {
    let trace = NRA.createTrace("Mongodb Find");

    var orig_cb = arguments[0];

    if (typeof orig_cb === "function") {
      arguments[0] = function() {
        trace.end();
        console.log("trace ended");
        return orig_cb.apply(this, arguments);
      };
    }
  }

  return findOriginal.apply(this, arguments);
};

