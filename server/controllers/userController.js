const userCollection = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const otpCollection = require('../models/otpModel');

// signup

async function signupController(req, res) {
  try {
    const userData = new userCollection({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone
    });

    const user = await userData.save();
    jwt.sign({ user }, secret, { expiresIn: '30d' }, (err, token) => {
      if (err) {
        console.log(err)
        return res.sendStatus(403);
      }
      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

//OTP

function sendTextMessage(phoneNumber, message) {
  // phoneNumber = "+91" + phoneNumber.toString();
  // twilio.messages.create({
  //   body: message,
  //   from: process.env.TWILIO_PHONE_NUMBER,
  //   to: phoneNumber
  // }).then((message) => console.log(message.sid));
}

// login

const loginController = async (req, res) => {
  try {
    const phone = req.body.phone;
    const user = await userCollection.findOne({ phone: phone });

    if (!user) {
      return res.sendStatus(403);
    }

    // const existingOtpData = await otpCollection.findOne({ phone: phone });

    // if (existingOtpData && !isExpired(existingOtpData.expiry)) {
    //   await otpCollection.deleteOne({ phone: phone });
    // }

    const code = Math.floor(100000 + Math.random() * 900000);

    const otpData = new otpCollection({
      phone: phone,
      otp: code
    });

    await otpData.save();

    sendTextMessage(phone, `Hi ${code} is your one time password to login on Fipezo. Do not share this with anyone. -Team Fipezo`);

    setTimeout(async () => {
      try {
        await otpCollection.deleteOne({ phone: phone });
      } catch (error) {
        console.error('Error deleting OTP:', error);
      }
    }, 300000);

    res.status(200).json({ phone: phone });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

const otpController = async (req, res) => {
  try {
    const otp = req.body.otp;
    const otpData = await otpCollection.findOne({ otp: otp, phone: req.body.phone });
    const user = await userCollection.findOne({ phone: req.body.phone })

    if (!user || !otpData) {
      return res.sendStatus(403);
    }

    if (otpData.otp !== otp) {
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
  signupController,
  loginController,
  otpController
};