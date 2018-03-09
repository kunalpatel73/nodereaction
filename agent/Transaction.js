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
    this.method = this.request.method
  }

  createTrace(type) {
    let trace = new Trace(this, type);
    this.traces.push(trace);
    return trace;
  }

  //restore ourselves in singleton state. Called by Trace so state is changed before user cb
  becomeGlobalTransaction() {
    this.singleton.restoreCurrentTransaction(this);
  }

  //set flag so singleton can flush us out and get GC'd
  endTransaction() {
    //    console.log(`${this.url} Traces:`, this.traces);
    this.finished = true;
  }
}

module.exports = Transaction;
