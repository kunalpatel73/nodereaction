const uuidv4 = require("uuid/v4");
const Trace = require("./Trace");

export default class Transaction {
  constructor(singleton, request) {
    this.singleton = singleton;
    this.request = request;
    this.uuid = uuidv4();
    this.finshed = false;
    this.traces = [];
  }

  createTrace(type) {
    this.traces.push(new Trace(type));
  }

  endTransaction() {
    console.log("ended");
    console.log(this.traces);
  }
}
