const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  course: String,
  university: String,
  year: String,
});

module.exports = mongoose.model('Education', educationSchema);
