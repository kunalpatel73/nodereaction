const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  'name': String, 
  'countryCode': String,
  'countryUrl': String,
  'flagUrl': String, 
  'background': String,
  'location': String,
  'geographicCoordinates': String,
  'areaTotal': String,
  'areaLand': String,
  'areaWater': String,
  'areaNote': String,
  'population': String,
  'ethnicGroups': String,
  'languages': String,
  'religions': String,
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;