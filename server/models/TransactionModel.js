const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traceSchema = new Schema({
  'type': String,
  'uuid': String,
  'duration': Number
})

const transactionSchema = new Schema({
  'requestUrl': String,
  'requestMethod': String, 
  'routeName': String,
  'transactionId': String,
  'timestamp': Number,
  'duration': Number,
  'date': Date,
  'traces': [traceSchema] 
});

const Transaction = mongoose.model('Transaction', transactionSchema);
const Trace = mongoose.model('Trace', traceSchema);
module.exports = { Transaction, Trace };