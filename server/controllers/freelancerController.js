const freelancerCollection = require('../models/freelancerModel');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

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
      aadhaarCard: req.files['aadhaarCard'][0].filename,
      panCard: req.files['panCard'][0].filename,
      works: req.files['works[]'].map(file => file.filename),
      links: req.body.links,
      reviews: [],
      termsAndConditions: req.body.termsAndConditions,
      featured : false,
      verified: false
    });

    const postData = await freelancerData.save();
    res.send(postData);
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

//profiles Data

async function getFreelancerProfiles(req, res) {
  try {
    const freelancers = await freelancerCollection.find({verified: true});
    res.send(freelancers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

// featured profiles

async function getFeaturedFreelancerProfiles(req, res) {
  try {
    const freelancers = await freelancerCollection.find({featured: true , verified: true});
    res.send(freelancers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

async function getUnFreelancerProfiles(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        return;
      } else {
        if (authData.user.phone === parseInt(process.env.ADMIN_PHONE)) {
          const freelancers = await freelancerCollection.find({ verified: false });
          res.send(freelancers);
        } else {
          res.sendStatus(403);
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

// delete profile

async function deleteFreelancerProfile (req, res) {
  try {
    const id = req.params.id;
    const user = await freelancerCollection.findOne({ _id: id });

    if (!user || user.verified === true) {
      return res.sendStatus(403);
    }

    user.works.forEach((filename) => {
      const filePath = `uploads/${filename}`;
      fs.unlinkSync(filePath);
    });

    fs.unlinkSync(`uploads/${user.profilePicture}`);
    fs.unlinkSync(`uploads/${user.coverPicture}`);
    fs.unlinkSync(`uploads/${user.panCard}`);
    fs.unlinkSync(`uploads/${user.aadhaarCard}`);

    await freelancerCollection.deleteOne({ _id: id });
    res.json({ id: id });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

// verifying profile

async function verifyFreelancerProfile(req, res) {
  const id = req.params.id;
  freelancerCollection.updateOne({ _id: id }, { $set: { verified: true } })
    .then(() => {
      res.json({ id: id });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
}

module.exports = {
  registerFreelancer,
  getFreelancerProfile,
  getFreelancerProfiles,
  getUnFreelancerProfiles,
  deleteFreelancerProfile,
  verifyFreelancerProfile,
  getFeaturedFreelancerProfiles
};