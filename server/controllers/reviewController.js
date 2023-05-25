const reviewCollection = require('../models/reviewModel');

async function addReview(req, res) {
  try {
    const reviewData = new reviewCollection({
      freelancer: req.body.freelancer,
      user: req.body.user,
      title: req.body.title,
      review: req.body.review,
      stars: req.body.stars
    });

    const postData = await reviewData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  addReview
};