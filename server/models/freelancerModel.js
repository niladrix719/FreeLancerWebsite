const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
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
  location: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
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
    type: String,
    required: true
  },
  coverPicture: {
    type: String,
    required: true
  },
  addharCard: {
    type: String,
    required: true
  },
  panCard: {
    type: String,
    required: true
  },
  works: {
    type: [String],
    required: true
  },
  links: {
    type: Object,
    required: true
  },
  termsAndConditions: {
    type: Boolean,
    required: true
  }
});

const freelancerCollection = new mongoose.model('freelancercollection', freelancerSchema);

module.exports = freelancerCollection;