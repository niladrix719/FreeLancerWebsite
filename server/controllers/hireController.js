const hireCollection = require('../models/hireModel');
const jwt = require('jsonwebtoken');
const userCollection = require('../models/userModel');
const freelancerCollection = require('../models/freelancerModel');
const secret = process.env.JWT_SECRET;

async function addHire(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
        return;
      }
      
      if (!req.body.freelancer || !req.body.title || !req.body.description || !req.body.location || !req.body.date || !req.body.time || !req.body.duration || !req.body.budget) {
        res.status(400).send('Bad request');
        return;
      }

      const hireData = new hireCollection({
        freelancer: req.body.freelancer,
        user: authData.user._id,
        userDetails: authData.user,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        duration: req.body.duration,
        budget: req.body.budget
      });

      const postData = await hireData.save();

      res.send(postData);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  addHire
};