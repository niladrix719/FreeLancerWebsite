const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true
  },
  companyphone: {
    type: Number,
    required: true
  },
  companytype: {
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
  position: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
);

const companyCollection = new mongoose.model('companycollection', companySchema);

module.exports = companyCollection;