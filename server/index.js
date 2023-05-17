// Importing modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/db');
const { signupController , loginController , otpController} = require('./controllers/userController');
const { registerCompany } = require('./controllers/companyController');
const { registerFreelancer, getFreelancerProfile, getFreelancerProfiles, getFreelancerProfessionProfiles, getUnFreelancerProfiles } = require('./controllers/freelancerController');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const verifyToken = require('./middlewares/verification');
const freelancerCollection = require('./models/freelancerModel');

// Creating the app
const app = express();

// Setting up the middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
const upload = require('./middlewares/storage');

// Setting up the routes
app.post('/signup', signupController);
app.post('/login', loginController);
app.post('/otp', otpController);
app.post('/register/freelancer', upload, registerFreelancer);
app.post('/register/company', registerCompany);
app.get('/profile/freelancer/:uid', getFreelancerProfile);
app.get('/profiles/verified/freelancer', getFreelancerProfiles);
app.get('/profiles/unverified/freelancer', getUnFreelancerProfiles);
app.get('/profiles/freelancer/:profession', getFreelancerProfessionProfiles);
app.get('/navbar', verifyToken, (req, res) => {
  jwt.verify(req.token, secret, (err, authData) => {
    if (err) {
      return;
    } else {
      res.json({
        message: 'Navbar',
        authData
      });
    }
  });
});
app.delete('/delete/freelancer/:id', (req, res) => {
  const id = req.params.id;
  freelancerCollection.deleteOne({ _id: id })
    .then(() => {
      res.json({ id: id });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.put('/verify/freelancer/:id', (req, res) => {
  const id = req.params.id;
  freelancerCollection.updateOne({ _id: id }, { $set: { verified: true } })
    .then(() => {
      res.json({ id: id });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));