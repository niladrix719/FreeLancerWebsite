const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    min: 10,
    unique: true,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  equipments: {
    type: String,
    required: true
  },
  profilePicture: {
    data: Buffer,
    contentType: String
  }
});

const freelancerCollection = new mongoose.model('freelancercollection', freelancerSchema);

module.exports = freelancerCollection;