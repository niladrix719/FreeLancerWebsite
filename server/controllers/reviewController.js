const reviewCollection = require('../models/reviewModel');
const jwt = require('jsonwebtoken');
const userCollection = require('../models/userModel');
const freelancerCollection = require('../models/freelancerModel');
const companyCollection = require('../models/companyModel');
const secret = process.env.JWT_SECRET;

async function addReview(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        res.status(403).send('Forbidden');
        return;
      }

      let user;
      if (authData.user.companyname)
        user = await companyCollection.findOne({ _id: authData.user._id });
      else
        user = await userCollection.findOne({ _id: authData.user._id });

      if (!user) {
        res.status(403).send('User not found');
        return;
      }

      if (!req.body.freelancer || !req.body.title || !req.body.review || !req.body.stars) {
        res.status(400).send('Bad request');
        return;
      }

      const existingReview = await reviewCollection.findOne({ freelancer: req.body.freelancer, user: authData.user._id });
      console.log(existingReview);
      if (existingReview) {
        res.status(400).send('Review already exists');
        return;
      }

      const reviewData = new reviewCollection({
        freelancer: req.body.freelancer,
        user: authData.user._id,
        userDetails: authData.user,
        title: req.body.title,
        review: req.body.review,
        stars: req.body.stars
      });

      const postData = await reviewData.save();

      const reviews = await reviewCollection.find({ freelancer: req.body.freelancer });
      let totalStars = 0;
      reviews.forEach(review => {
        totalStars += review.stars;
      });
      const avgStars = totalStars / reviews.length;
      const freelancer = await freelancerCollection.findOne({ _id: req.body.freelancer });
      freelancer.rating = avgStars;
      freelancer.reviewCount = reviews.length;
      await freelancer.save();

      res.send(postData);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}


async function getReviews(req, res) {
  try {
    const reviews = await reviewCollection.find({ freelancer: req.params.id });
    res.send(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  addReview,
  getReviews
};