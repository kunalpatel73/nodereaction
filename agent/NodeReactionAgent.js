const Transaction = require("./Transaction");

class NodeReactionSingleton {
  //possibly add app name? some other customizable input/config?
  constructor() {
    this.data = {
      "GET/dogs": {},
      "GET/cats": {}
    };
    this.currentTransaction = null;
  }

  //need to check if this get GC'd after reassignment of this.currentTransaction.
  // We don't want that
  createTransaction(req) {
    this.currentTransaction = new Transaction(this, req);
    return this.currentTransaction;
  }

  //have our current Transaction return a new internal trace reference
  createTrace(type) {
    return this.currentTransaction.createTrace();
  }

  //will receive transaction from end of trace and restore
  restoreCurrentTransaction(transaction) {}
}

let singleton = new NodeReactionSingleton();

module.exports = singleton;
