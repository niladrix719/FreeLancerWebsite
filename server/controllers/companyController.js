const companyCollection = require('../models/companyModel');
const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

async function registerCompany(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        console.log(err);
        res.sendStatus(403);
        return;
      }

      const companyData = new companyCollection({
        companyname: req.body.companyname,
        companyphone: req.body.companyphone,
        companytype: req.body.companytype,
        companyaddress: req.body.companyaddress,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position: req.body.position,
        bio: req.body.bio,
        profilePicture: req.files['profilePicture'][0].filename,
        coverPicture: req.files['coverPicture'][0].filename,
        panCard: req.files['panCard'][0].filename,
        incorporationCertificate: req.files['incorporationCertificate'][0].filename,
        links: req.body.links,
        termsAndConditions: req.body.termsAndConditions,
        verified: false
      });

      const postData = await companyData.save();

      jwt.sign({ postData }, secret, { expiresIn: '30d' }, (err, token) => {
        if (err) {
          console.log(err);
          return res.sendStatus(403);
        }
        res.json({ token });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  registerCompany
};