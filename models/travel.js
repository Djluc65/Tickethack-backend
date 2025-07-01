const mongoose = require('mongoose');


const travelSchema = mongoose.Schema({
  "departure": String,
  "arrival": String,
  "date": date,
});

const Travel = mongoose.Model('travels', travelSchema);
module.exports = Travel;