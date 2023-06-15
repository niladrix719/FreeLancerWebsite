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

      await companyData.save();

      const user = await companyCollection.findOne({ companyphone: req.body.companyphone })

      jwt.sign({ user }, secret, { expiresIn: '30d' }, (err, token) => {
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

async function editCompanyProfile(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      const user = await companyCollection.findOne({ _id: authData.user._id });
      if (err && !user) {
        console.log(err);
        res.sendStatus(403);
        return;
      }

      await companyCollection.updateOne({ _id: authData.user._id }, {
        $set: {
          companyname: req.body.companyname,
          companyaddress: req.body.companyaddress,
          profilePicture: req.file.filename,
          coverPicture: req.file.filename,
          bio: req.body.bio
        }
      });

      const updatedAuthData = { ...authData, user: { ...authData.user, companyname: req.body.companyname, companyaddress: req.body.companyaddress, profilePicture: req.file.filename, coverPicture: req.file.filename, bio: req.body.bio } };
      const updatedToken = jwt.sign(updatedAuthData, secret, { expiresIn: '30d' }, (err, token) => {
        if (err) {
          console.log(err);
          return res.sendStatus(403);
        }
      });

      res.send({ user: updatedAuthData, token: updatedToken });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  registerCompany,
  editCompanyProfile
}