const mongoose = require('mongoose');

const hireSchema = new mongoose.Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'freelancercollection'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usercollection'
  },
  userDetails: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  budget: {
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  }
);

const hireCollection = mongoose.model('hirecollection', hireSchema);

module.exports = hireCollection;