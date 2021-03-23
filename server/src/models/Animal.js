const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defined Animal Schema
const AnimalSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  }, { timestamps: true });


module.exports = mongoose.model('animal', AnimalSchema);