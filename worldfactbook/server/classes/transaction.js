const uuid = require("uuid/v1");

class Transaction {
  constructor() {
    this.routeName;
    this.requestUrl;
    this.requestMethod;
    this.transactionId;

    this.rawHeaders;
    this.cookies
    this.userAgent;
    this.remoteAddress;

    this.startTime;
    this.startTimestamp;
    
    this.endTime;
    this.endTimestamp;

    this.duration;
  }

  transactionStart(request) {
    this.requestUrl = request.url;
    this.requestMethod = request.method;
    this.routeName = this.requestMethod + ' - ' + this.requestUrl;
    this.transactionId = uuid();

    this.rawHeaders = request.rawHeaders;
    this.cookies = request.headers.cookie;
    this.userAgent = request.userAgent;
    this.remoteAddress = request.remoteAddress;

    this.startTime = process.hrtime()[1];
    this.startTimestamp = Date.now();
  }

  transactionEnd() {
    this.endTime = process.hrtime()[1];
    this.endTimestamp = Date.now();
    this.duration = (this.endTime - this.startTime) / 1000000;
  }

  transactionLog() {
    // save to database
    console.log(
      `Request  ${this.transactionId} using the ${this.requestMethod} method to ${this.requestUrl} route took ${this.duration}ms to execute.`
    );
    console.log(this.transactionReturnObj());
  }

  transactionReturnObj () {
    const obj = {};
    obj.requestUrl = this.requestUrl;
    obj.requestMethod = this.requestMethod;
    obj.transactionId = this.transactionId;

    obj.rawHeaders = this.rawHeaders;
    obj.cookies = this.cookies;
    obj.userAgent = this.userAgent
    obj.remoteAddress = this.remoteAddress

    obj.startTime = this.startTime
    obj.startTimestamp = this.startTimestamp

    obj.endTime = this.endTime;
    obj.endTimestamp  = this.endTimestamp;
    obj.duration = this.duration;
    return obj;
  }
}

module.exports = Transaction;
