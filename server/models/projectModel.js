const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
   
    title: String,
    image: String,
    link: String,
});
module.exports = mongoose.model('Projects', projectModel)