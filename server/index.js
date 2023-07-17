// Importing modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/db');
const { signupController, loginController, getUserProfile, editUserProfile, getProfile , getNavbar , deleteUserProfile } = require('./controllers/userController');
const { otpController, otpSignupController, VerifyFreelancerPhone, VerifyCompanyPhone } = require('./controllers/otpController');
const { registerCompany , editCompanyProfile , deleteCompanyProfile , getUnCompanyProfiles , deleteCompanyProfileV , verifyCompanyProfile} = require('./controllers/companyController');
const { registerFreelancer,
  getFreelancerProfile,
  getFreelancerProfiles,
  getUnFreelancerProfiles,
  deleteFreelancerProfile,
  verifyFreelancerProfile,
  getFeaturedFreelancerProfiles } = require('./controllers/freelancerController');
const { contactUs, fetchContactUs } = require('./controllers/contactController');
const { addHire, getHires, getRequests , cancelRequest , deleteRequest , acceptRequest } = require('./controllers/hireController');
const jwt = require('jsonwebtoken');
const { addReview, getReviews } = require('./controllers/reviewController');
const secret = process.env.JWT_SECRET;
const verifyToken = require('./middlewares/verification');

// Creating the app
const app = express();

// Setting up the middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3001', 'https://www.google.com', 'https://fipezo.vercel.app']
}));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
const upload = require('./middlewares/storage');
const userProfilePic = require('./middlewares/userProfilePic');
const companyUpload = require('./middlewares/companyUpload');
const companyEditUpload = require('./middlewares/companyEditUpload');
const { get } = require('mongoose');
const userCollection = require('./models/userModel');
const { getFileStream } = require('./middlewares/s3');

// Setting up the routes
app.post('/signup', signupController);
app.post('/login', loginController);
app.post('/otp', otpController);
app.post('/otp/signup', otpSignupController);
app.post('/register/freelancer', verifyToken, registerFreelancer);
app.post('/register/company', companyUpload, verifyToken, registerCompany);
app.post('/verify/freelancer/phone', VerifyFreelancerPhone);
app.post('/verify/company/phone', VerifyCompanyPhone);
app.get('/profile/freelancer/:uid', getFreelancerProfile);
app.get('/profiles/verified/freelancer', getFreelancerProfiles);
app.get('/profiles/featured/freelancer', getFeaturedFreelancerProfiles);
app.get('/profiles/unverified/freelancer', verifyToken, getUnFreelancerProfiles);
app.get('/profiles/unverified/company', verifyToken, getUnCompanyProfiles);
app.get('/contact/messages', verifyToken, fetchContactUs);
app.delete('/delete/freelancer/:id', deleteFreelancerProfile);
app.delete('/delete/company/:id', deleteCompanyProfileV);
app.delete('/profile/user/delete', verifyToken, deleteUserProfile);
app.delete('/profile/company/delete', verifyToken, deleteCompanyProfile);
app.delete('/delete/request/:id', verifyToken, deleteRequest);
app.put('/accept/request/:id', verifyToken, acceptRequest);
app.put('/cancel/request/:id', verifyToken, cancelRequest);
app.put('/verify/freelancer/:id', verifyFreelancerProfile);
app.put('/verify/company/:id' , verifyCompanyProfile);
app.post('/contact', contactUs);
app.get('/profile/user', verifyToken, getUserProfile);
app.get('/navbar', verifyToken, getNavbar);
app.post('/add/review', verifyToken, addReview);
app.get('/reviews/:id', getReviews);
app.post('/add/hire', verifyToken, addHire);
app.put('/profile/user/edit', userProfilePic, verifyToken, editUserProfile);
app.put('/profile/company/edit', companyEditUpload, verifyToken, editCompanyProfile);
app.get('/profile', verifyToken, getProfile);
app.get('/hires', verifyToken, getHires);
app.get('/requests', verifyToken, getRequests);

app.get('/images/:key', async (req, res) => {
  const key = req.params.key;
  try {
    const readStream = await getFileStream(key);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.send('Hello From Fipezo Server');
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));