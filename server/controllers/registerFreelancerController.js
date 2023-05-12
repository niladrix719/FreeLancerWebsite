const freelancerCollection = require('../models/freelancerModel');

module.exports = async function (req, res) {
  console.log(req.file);
  try {
    const freelancerData = new freelancerCollection({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      location: req.body.location,
      profession: req.body.profession,
      rate: req.body.rate,
      bio: req.body.bio,
      equipments: req.body.equipments,
      profilePicture: req.file.filename,
      coverPicture: req.file.filename,
      addharCard: req.file.filename,
      panCard: req.file.filename,
      works: req.files.works.map(file => file.filename),
      links: req.body.links,
      termsAndConditions: req.body.termsAndConditions
    });

    const postData = await freelancerData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};