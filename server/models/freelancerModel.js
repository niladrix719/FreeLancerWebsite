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
    uqique: true,
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
  equipment: {
    type: String,
  }
});

const freelancerCollection = new mongoose.model('freelancercollection', freelancerSchema);

module.exports = freelancerCollection;