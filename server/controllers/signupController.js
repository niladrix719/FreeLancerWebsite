const userCollection = require('../models/userModel');

module.exports = async function (req, res) {
  try {
    const userData = new userCollection({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone
    });

    const postData = await userData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};