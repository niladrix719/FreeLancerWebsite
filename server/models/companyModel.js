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
  companyaddress: {
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
  },
  profilePicture: {
    type: String,
    required: true
  },
  coverPicture: {
    type: String,
    required: true
  },
  panCard: {
    type: String,
    required: true
  },
  incorporationCertificate: {
    type: String,
    required: true
  },
  links: {
    type: Object,
    required: true
  },
  termsAndConditions: {
    type: Boolean,
    required: true
  },
  verified: {
    type: Boolean,
    required: true
  }
},
  {
    timestamps: true
  }
);

const companyCollection = new mongoose.model('companycollection', companySchema);

module.exports = companyCollection;