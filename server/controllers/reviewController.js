const reviewCollection = require('../models/reviewModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

async function addReview(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      const reviewData = new reviewCollection({
        freelancer: req.body.freelancer,
        user: authData.user._id,
        userDetails: authData.user,
        title: req.body.title,
        review: req.body.review,
        stars: req.body.stars
      });

      const postData = await reviewData.save();
      res.send(postData); 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

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