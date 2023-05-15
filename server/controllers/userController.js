const userCollection = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

async function signupController (req, res) {
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

const loginController = async (req, res) => {
  try {
    const phone = req.body.phone;
    const user = await userCollection.findOne({ phone: phone });

    if (!user) {
      return res.sendStatus(403);
    }

    jwt.sign({ user }, secret, { expiresIn: '30d' }, (err, token) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  signupController,
  loginController
};