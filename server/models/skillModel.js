const mongoose = require('mongoose');

const skillModel = new mongoose.Schema({
   
    title: String,
    image: String
});
module.exports = mongoose.model('Skills', skillModel)