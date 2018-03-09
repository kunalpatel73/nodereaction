class Trace {
  constructor() {
    console.log('Trace has been created');
    this.method;
    this.startTime;
    this.finishTime;
    this.durationTime;
  }
  startTrace() {
    this.startTime = process.hrtime()[1]/1000000;
  }
  finishTrace() {
    this.finishTime = process.hrtime()[1]/1000000;
    this.durationTrace();
  }
  durationTrace() {
    this.durationTime = this.finishTime - this.startTime;
  }
}

module.exports = Trace;