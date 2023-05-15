// Importing modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/db');
const signupController = require('./controllers/userController');
const { registerCompany } = require('./controllers/companyController');
const { registerFreelancer, getFreelancerProfile, getFreelancerProfiles, getFreelancerProfessionProfiles } = require('./controllers/freelancerController');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

// Creating the app
const app = express();

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

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
app.post('/register/freelancer', upload, registerFreelancer);
app.post('/register/company', registerCompany);
app.get('/profile/freelancer/:uid', getFreelancerProfile);
app.get('/profiles/freelancer', getFreelancerProfiles);
app.get('/profiles/freelancer/:profession', getFreelancerProfessionProfiles);
app.get('/navbar', verifyToken, (req, res) => {
  jwt.verify(req.token, secret, (err, authData) => {
    if (err) {
      console.log('not a logged in user');
      return;
    } else {
      res.json({
        message: 'Home',
        authData
      });
    }
  });
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));