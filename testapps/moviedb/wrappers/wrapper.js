const Transaction = require('../classes/transaction');
const Trace = require('../classes/trace');

function wrapper(object, method) {
  let trace = new Trace();
  trace.startTrace();
  trace.method = method;
  let orig = object[method];
  return function() {
    console.log('Mutha fuckka!')
    let req = currentReq;
    let args = [];
    let j;
    var argsArr = [...arguments];
    let callback;
    console.log(argsArr);
    for (let i = 0; i < argsArr.length; i += 1) {
      console.log('This is the i: ', i);
      if (typeof argsArr[i] === 'function') {
        console.log('This is the index of the function: ', i);
        j = i;
        callback = argsArr[i];
        args[i] = argsArr[i];
      } else args[i] = argsArr[i];
    }  
    args[j] = function() {
      console.log('INSIDE THE MONGO CALLBACK')
      console.log(trace);
      trace.finishTrace();
      currentReq = req;
      console.log('THIS IS CURRENTREQ FROM MONGO: '. currentReq);
      if (currentReq !== undefined){
        console.log('Inside callback from Mongo')
        currentReq.transaction[0].traces.push(trace);
      } 
      console.log('This is the agent in the callback: \n', agent);
      return callback.apply(this, arguments);
    }
    console.log('This is the index of the callback: ', j);
    return orig.apply(object, args);
  }
}

module.exports = wrapper;