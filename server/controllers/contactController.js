const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const contactCollection = require('../models/contactModel');
const axios = require('axios');
const userCollection = require('../models/userModel');

async function contactUs(req, res) {
  try {
    axios({
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${req.body.captcha}`,
      method: 'post',
    }).then(async response => {
      if (response.data.success === true) {
        const contactData = new contactCollection({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          email: req.body.email,
          issue: req.body.issue,
          message: req.body.message
        });
        const postData = await contactData.save();
      } else {
        res.status(500).send('CAPTCHA verification failed');
      }
    }).catch(error => {
      console.log(error);
      res.status(500).send('Internal server error');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

// fetch all contact us data

async function fetchContactUs(req, res) {
  try {
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
      if (err) {
        return;
      } else {
        const user = await userCollection.findOne({ _id: authData.user._id });
        if (user) {
          if (authData.user.phone === parseInt(process.env.ADMIN_PHONE)) {
            const contactData = await contactCollection.find();
            res.status(200).send(contactData);
          } else {
            res.status(401).send('Unauthorized');
          }
        }
        else {
          res.sendStatus(403);
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  contactUs,
  fetchContactUs
};