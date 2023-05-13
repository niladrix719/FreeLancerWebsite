// Importing modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/db');
const signupController = require('./controllers/userController');
const {registerCompany} = require('./controllers/companyController');
const { registerFreelancer, getFreelancerProfile } = require('./controllers/freelancerController');
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
app.post('/register/freelancer', upload, registerFreelancer);
app.post('/register/company', registerCompany);
app.get('/profile/freelancer/:uid', getFreelancerProfile);
app.get('/profiles/freelancer', async (req, res) => {
  try {
    const freelancers = await freelancerCollection.find();
    console.log(freelancers);
    res.send(freelancers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));