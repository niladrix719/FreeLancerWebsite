const hireCollection = require('../models/hireModel');
const jwt = require('jsonwebtoken');
const userCollection = require('../models/userModel');
const freelancerCollection = require('../models/freelancerModel');
const secret = process.env.JWT_SECRET;

async function addHire(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      const user = await userCollection.findOne({ _id: authData.user._id });
      if (err && !user) {
        res.sendStatus(403);
        return;
      }

      if (!req.body.freelancer || !req.body.fullname || !req.body.description || !req.body.phone || !req.body.startTime || !req.body.endTime || !req.body.date || !req.body.address || !req.body.budget) {
        res.status(400).send('Bad request');
        return;
      }

      const freelancerDetails = await freelancerCollection.findById(req.body.freelancer);

      const hireData = new hireCollection({
        freelancer: req.body.freelancer,
        user: authData.user._id,
        freelancerDetails: freelancerDetails,
        userDetails: authData.user,
        fullname: req.body.fullname,
        description: req.body.description,
        address: req.body.address,
        phone: req.body.phone,
        date: req.body.date,  
        startTime: req.body.startTime,
        endTime: req.body.endTime,
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

async function getHires(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
        return;
      }

      const user = await userCollection.findOne({ _id: authData.user._id });

      if (!user) {
        res.status(404).send('User not found');
        return;
      }

      const hireData = await hireCollection.find({ user: authData.user._id });

      res.send(hireData);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

async function getRequests(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        console.log(err);
        res.sendStatus(403);
        return;
      }

      const user = await freelancerCollection.findOne({ _id: authData.user._id });

      if (!user) {
        res.status(404).send('User not found');
        return;
      }

      const hireData = await hireCollection.find({ freelancer: authData.user._id });

      res.send(hireData);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  addHire,
  getHires,
  getRequests
};