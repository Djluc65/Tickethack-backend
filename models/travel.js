const mongoose = require('mongoose');

const dependency = {"moment": Number,
                    "moment-random": Number}

const generate = {"generate": "node generateTrips.js"}

const travelSchema = mongoose.Schema({
  "name": String,
  "version": Number,
  "private": Boolean,
  "scripts": generate,
  "dependencies": dependency
});

const Travel = mongoose.Model('travels', travelSchema);
module.exports = Travel;