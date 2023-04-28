const freelancerCollection = require('../models/freelancerModel');

module.exports = async function (req, res) {
  try {
    const freelancerData = new freelancerCollection({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      profession: req.body.profession,
      bio: req.body.bio,
      equipments: req.body.equipment,
    });

    const postData = await freelancerData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};