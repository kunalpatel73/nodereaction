class Transaction {
  constructor() {
    this.startTime;
    this.finishTime;
    this.durationTime;
    this.traces = [];
  }
  startTransaction() {
    this.startTime = process.hrtime()[1]/1000000
  }
  finishTransaction() {
    this.finishTime = process.hrtime()[1]/1000000
    this.durationTransaction();
  }
  durationTransaction() {
    this.durationTime = this.finishTime - this.startTime;
  }
}

module.exports = Transaction;