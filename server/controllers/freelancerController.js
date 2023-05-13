const freelancerCollection = require('../models/freelancerModel');

//Registration

async function registerFreelancer(req, res) {
  try {
    const freelancerData = new freelancerCollection({
      uid: req.body.uid,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      location: req.body.location,
      profession: req.body.profession,
      rate: req.body.rate,
      bio: req.body.bio,
      equipments: req.body.equipments,
      profilePicture: req.files['profilePicture'][0].filename,
      coverPicture: req.files['coverPicture'][0].filename,
      addharCard: req.files['addharCard'][0].filename,
      panCard: req.files['panCard'][0].filename,
      works: req.files['works[]'].map(file => file.filename),
      links: req.body.links,
      termsAndConditions: req.body.termsAndConditions
    });

    const postData = await freelancerData.save();
    res.send(postData);
    window.location.href = "http://localhost:3001";
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

//profile Data

async function getFreelancerProfile(req, res) {
  try {
    const uid = req.params.uid;
    const freelancer = await freelancerCollection.findOne({ uid: uid });
    res.send(freelancer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  registerFreelancer,
  getFreelancerProfile
};