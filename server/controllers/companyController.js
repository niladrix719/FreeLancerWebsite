const companyCollection = require('../models/companyModel');
const userCollection = require('../models/userModel');
const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile , deleteFile } = require('../middlewares/s3');

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

      const filePromises = [];
      filePromises.push(uploadFile(req.files['profilePicture'][0]));
      filePromises.push(uploadFile(req.files['coverPicture'][0]));
      filePromises.push(uploadFile(req.files['panCard'][0]));
      filePromises.push(uploadFile(req.files['incorporationCertificate'][0]));

      await Promise.all(filePromises);

      await unlinkFile('uploads/' + req.files['profilePicture'][0].filename);
      await unlinkFile('uploads/' + req.files['coverPicture'][0].filename);
      await unlinkFile('uploads/' + req.files['panCard'][0].filename);
      await unlinkFile('uploads/' + req.files['incorporationCertificate'][0].filename);

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
      if (err || !user) {
        console.log(err);
        res.sendStatus(403);
        return;
      }

      let updatedAuthData;

      if (!req.body.profilePicture && !req.body.coverPicture) {
        await companyCollection.updateOne({ _id: authData.user._id }, {
          $set: {
            companyname: req.body.companyname,
            companyaddress: req.body.companyaddress,
            profilePicture: req.files.profilePicture[0].filename,
            coverPicture: req.files.coverPicture[0].filename,
            bio: req.body.bio
          }
        });

        const filePromises = [];
        filePromises.push(uploadFile(req.files['profilePicture'][0]));
        filePromises.push(uploadFile(req.files['coverPicture'][0]));

        await Promise.all(filePromises);

        await unlinkFile('uploads/' + req.files['profilePicture'][0].filename);
        await unlinkFile('uploads/' + req.files['coverPicture'][0].filename);

        updatedAuthData = { ...authData, user: { ...authData.user, companyname: req.body.companyname, companyaddress: req.body.companyaddress, profilePicture: req.files.profilePicture[0].filename, coverPicture: req.files.coverPicture[0].filename, bio: req.body.bio } };
      }
      else if (!req.body.profilePicture) {
        await companyCollection.updateOne({ _id: authData.user._id }, {
          $set: {
            companyname: req.body.companyname,
            companyaddress: req.body.companyaddress,
            profilePicture: req.files.profilePicture[0].filename,
            bio: req.body.bio
          }
        });

        const filePromises = [];
        filePromises.push(uploadFile(req.files['profilePicture'][0]));

        await Promise.all(filePromises);

        await unlinkFile('uploads/' + req.files['profilePicture'][0].filename);

        updatedAuthData = { ...authData, user: { ...authData.user, companyname: req.body.companyname, companyaddress: req.body.companyaddress, profilePicture: req.files.profilePicture[0].filename, bio: req.body.bio } };
      }
      else if (!req.body.coverPicture) {
        await companyCollection.updateOne({ _id: authData.user._id }, {
          $set: {
            companyname: req.body.companyname,
            companyaddress: req.body.companyaddress,
            coverPicture: req.files.coverPicture[0].filename,
            bio: req.body.bio
          }
        });

        const filePromises = [];
        filePromises.push(uploadFile(req.files['coverPicture'][0]));

        await Promise.all(filePromises);

        await unlinkFile('uploads/' + req.files['coverPicture'][0].filename);

        updatedAuthData = { ...authData, user: { ...authData.user, companyname: req.body.companyname, companyaddress: req.body.companyaddress, coverPicture: req.files.coverPicture[0].filename, bio: req.body.bio } };
      }
      else {
        await companyCollection.updateOne({ _id: authData.user._id }, {
          $set: {
            companyname: req.body.companyname,
            companyaddress: req.body.companyaddress,
            bio: req.body.bio
          }
        });
        updatedAuthData = { ...authData, user: { ...authData.user, companyname: req.body.companyname, companyaddress: req.body.companyaddress, bio: req.body.bio } };
      }
      const updatedToken = jwt.sign(updatedAuthData, secret);

      res.send({ user: updatedAuthData, token: updatedToken });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

// delete company profile

async function deleteCompanyProfile(req, res) {
  try {
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
      const userData = await companyCollection.findOne({ _id: authData.user._id });
      if (err && !userData) {
        res.sendStatus(403);
        return;
      } else {
        await companyCollection.deleteOne({ _id: authData.user._id });
        res.send('Company Deleted');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

// get unverified company profiles

async function getUnCompanyProfiles(req, res) {
  try {
    jwt.verify(req.token, secret, async (err, authData) => {
      if (err) {
        return;
      } else {
        const user = await userCollection.findOne({ _id: authData.user._id });
        if (user) {
          if (authData.user.phone === parseInt(process.env.ADMIN_PHONE)) {
            const companies = await companyCollection.find({ verified: false });
            res.send(companies);
          } else {
            res.sendStatus(403);
          }
        }
        else {
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

async function deleteCompanyProfileV(req, res) {
  try {
    const id = req.params.id;
    const user = await companyCollection.findOne({ _id: id });

    if (!user || user.verified === true) {
      return res.sendStatus(403);
    }

    const filePromises = [];
    filePromises.push(deleteFile(user.profilePicture));
    filePromises.push(deleteFile(user.coverPicture));
    filePromises.push(deleteFile(user.panCard));
    filePromises.push(deleteFile(user.incorporationCertificate));

    await Promise.all(filePromises);

    await companyCollection.deleteOne({ _id: id });
    res.json({ id: id });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

// verifying profile

async function verifyCompanyProfile(req, res) {
  const id = req.params.id;
  companyCollection.updateOne({ _id: id }, { $set: { verified: true } })
    .then(() => {
      res.json({ id: id });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
}

module.exports = {
  registerCompany,
  editCompanyProfile,
  deleteCompanyProfile,
  getUnCompanyProfiles,
  deleteCompanyProfileV,
  verifyCompanyProfile
}