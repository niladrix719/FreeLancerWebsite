const contactCollection = require('../models/contactModel');
const axios = require('axios');

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
};

module.exports = {
  contactUs
};