const companyCollection = require('../models/companyModel');

module.exports = async function (req, res) {
  try {
    const companyData = new companyCollection({
      companyname: req.body.companyname,
      companyphone: req.body.companyphone,
      companytype: req.body.companytype,
      bio: req.body.bio,
    });

    const postData = await companyData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};