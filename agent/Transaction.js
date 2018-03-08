const uuidv4 = require("uuid/v4");
const Trace = require("./Trace");

class Transaction {
  constructor(singleton, request) {
    this.singleton = singleton;
    this.request = request;
    this.uuid = uuidv4();
    this.finshed = false;
    this.traces = [];
    this.url = this.request.url;
  }

  createTrace(type) {
    let trace = new Trace(this, type);
    this.traces.push(trace);
    return trace;
  }

  becomeGlobalTransaction() {
    this.singleton.restoreCurrentTransaction(this);
  }

  endTransaction() {
    console.log(`${this.url} Traces:`, this.traces);
  }
}

module.exports = Transaction;
