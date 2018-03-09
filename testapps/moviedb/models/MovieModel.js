// Dependencies for DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Mongoose product schema
const MovieSchema = new Schema({
  title: String,
  rating: Number,
  category: String,
  awarded: Boolean,
  released: Date
});

// Export model
module.exports = mongoose.model('Movies', MovieSchema);