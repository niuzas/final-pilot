const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defined Animal Schema
const AnimalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  birthDate: {
    type: Date,
    required: false
  },
  
  }, { timestamps: true });


module.exports = mongoose.model('animal', AnimalSchema);