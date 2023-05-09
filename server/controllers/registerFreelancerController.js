const freelancerCollection = require('../models/freelancerModel');

module.exports = async function (req, res) {
  console.log(req.body)
  try {
    const freelancerData = new freelancerCollection({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      profession: req.body.profession,
      bio: req.body.bio,
      equipments: req.body.equipments,
      profilePicture: req.body.profilePicture,
      coverPicture: req.body.coverPicture,
      addharCard: req.body.addharCard,
      panCard: req.body.panCard,
      links: req.body.links,
      works: req.body.works,
      termsAndConditions: req.body.termsAndConditions
    });

    const postData = await freelancerData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};