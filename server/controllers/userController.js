const userCollection = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = async function (req, res) {
  try {
    const userData = new userCollection({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone
    });

    const postData = await userData.save();
    jwt.sign({ postData }, secret, { expiresIn: '30d' }, (err, token) => {
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