const reviewCollection = require('../models/reviewModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

async function addReview(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
        return;
      }
      if(!req.body.freelancer || !req.body.title || !req.body.review || !req.body.stars) {
        res.status(400).send('Bad request');
        return;
      }
      const reviewData = new reviewCollection({
        freelancer: req.body.freelancer,
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