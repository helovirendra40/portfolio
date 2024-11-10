const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  designation: String,
  company: String,
  year: String,
});

module.exports = mongoose.model('Experience', experienceSchema);
