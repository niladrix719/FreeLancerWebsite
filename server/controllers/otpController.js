const userCollection = require('../models/userModel');
const freelancerCollection = require('../models/freelancerModel');
const companyCollection = require('../models/companyModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const otpCollection = require('../models/otpModel');

const otpController = async (req, res) => {
  try {
    const otp = req.body.otp;
    const otpData = await otpCollection.findOne({ otp: otp, phone: req.body.phone, type: req.body.type });
    let user
    if (req.body.type === 'user')
      user = await userCollection.findOne({ phone: req.body.phone })
    else if (req.body.type === 'freelancer')
      user = await freelancerCollection.findOne({ phone: req.body.phone })
    else if (req.body.type === 'company')
      user = await companyCollection.findOne({ phone: req.body.phone })

    if (!user || !otpData) {
      return res.sendStatus(403);
    }

    const otpCode = otpData.otp;

    if (otpCode === parseInt(otp)) {
      jwt.sign({ user }, secret, { expiresIn: '30d' }, (err, token) => {
        if (err) {
          console.log(err);
          return res.sendStatus(403);
        }
        res.json({ token });
      });
    }
    else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  otpController
};