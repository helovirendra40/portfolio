const mongoose = require('mongoose');
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://helovirendra40:bGQTlejB8XsKNWNu@cluster0.fdtmq.mongodb.net/myDatabase?retryWrites=true&w=majority');
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
  }
};
module.exports = connectDb;
