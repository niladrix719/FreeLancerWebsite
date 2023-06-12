const userCollection = require('../models/userModel');
const freelancerCollection = require('../models/freelancerModel');
const companyCollection = require('../models/companyModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const otpCollection = require('../models/otpModel');
let otpTimer;

// signup

async function signupController(req, res) {
  try {
    const phone = req.body.phone;
    const user = await userCollection.findOne({ phone: phone });

    if (user) {
      return res.sendStatus(403);
    }

    const existingOtpData = await otpCollection.findOne({ phone: phone });

    if (existingOtpData) {
      clearImmediate(otpTimer);
      await otpCollection.deleteOne({ phone: phone });
    }

    const code = Math.floor(100000 + Math.random() * 900000);

    const otpData = new otpCollection({
      phone: phone,
      otp: code,
      type: req.body.type
    });

    await otpData.save();

    sendTextMessage(phone, `Hi ${code} is your one time password to Signup on Fipezo. Do not share this with anyone. -Team Fipezo`);

    otpTimer = setTimeout(async () => {
      try {
        await otpCollection.deleteOne({ phone: phone });
      } catch (error) {
        console.error('Error deleting OTP:', error);
      }
    }, 30000);

    res.status(200).json({ phone: phone });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

// login

const loginController = async (req, res) => {
  try {
    const phone = req.body.phone;
    const type = req.body.type;
    let user;
    if (type === 'user')
      user = await userCollection.findOne({ phone: phone });
    else if (type === 'freelancer')
      user = await freelancerCollection.findOne({ phone: phone });
    else if (type === 'company')
      user = await companyCollection.findOne({ phone: phone });

    if (!user) {
      return res.sendStatus(403);
    }

    const existingOtpData = await otpCollection.findOne({ phone: phone });

    if (existingOtpData) {
      clearTimeout(otpTimer);
      await otpCollection.deleteOne({ phone: phone });
    }

    const code = Math.floor(100000 + Math.random() * 900000);

    const otpData = new otpCollection({
      phone: phone,
      otp: code,
      type: type
    });

    await otpData.save();

    sendTextMessage(phone, `Hi ${code} is your one time password to login on Fipezo. Do not share this with anyone. -Team Fipezo`);

    otpTimer = setTimeout(async () => {
      try {
        await otpCollection.deleteOne({ phone: phone });
      } catch (error) {
        console.error('Error deleting OTP:', error);
      }
    }, 30000);

    res.status(200).json({ phone: phone, type: type });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

//profile Data

async function getUserProfile(req, res) {
  try {
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
      if (err) {
        return;
      } else {
        res.send(authData);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

//edit user profile

async function editUserProfile(req, res) {
  try {
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
      if (err) {
        return;
      } else {
        const user = await userCollection.findOne({ _id: authData.user._id });
        if (user) {
          await userCollection.updateOne({ _id: authData.user._id }, {
            $set: {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              profilePicture: req.file.filename
            }
          });

          const updatedAuthData = { ...authData, user: { ...authData.user, firstname: req.body.firstname, lastname: req.body.lastname , profilePicture: req.file.filename } };
          const updatedToken = jwt.sign(updatedAuthData, secret);

          res.send({ user: updatedAuthData, token: updatedToken });
        } else {
          res.sendStatus(403);
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

//OTP

function sendTextMessage(phoneNumber, message) {
  // phoneNumber = "+91" + phoneNumber.toString();
  // twilio.messages.create({
  //   body: message,
  //   from: process.env.TWILIO_PHONE_NUMBER,
  //   to: phoneNumber
  // });
}

module.exports = {
  signupController,
  loginController,
  getUserProfile,
  editUserProfile
};