const shimmer = require("shimmer");
let http = require("http");
const TransactionClass = require("./transaction");
const TransactionModel = require('../models/TransactionModel');
class Agent {

  constructor() {
    this.transactions = [];
    this.initializeOverride();
  }

  initializeOverride() {
    const that = this;
    shimmer.wrap(http.Server.prototype, "emit", function(orig) {
      return function(event, req, res) {
        if (event === "request") {
          let transaction = new TransactionClass();
          transaction.transactionStart(req);
          res.on("finish", function() {
            transaction.transactionEnd();
            transaction.transactionLog();
            that.saveTransaction (transaction.transactionReturnObj());
          });
        }
        return orig.apply(this, arguments);
      };
    });
  }

  saveTransaction (transaction) {

    TransactionModel.create(transaction)
    .then(transaction => {
      console.log("transaction - saved: ", transaction);
    })
    .catch(err => {
      console.log("transaction - not saved: " + err);
    });
  }
}

module.exports = Agent;
