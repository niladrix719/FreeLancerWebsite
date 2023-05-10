// Importing modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/db');
const multer = require('multer');
const signupController = require('./controllers/signupController');
const registerFreelancerController = require('./controllers/registerFreelancerController');
const registerCompanyController = require('./controllers/registerCompanyController');
const freelancerCollection = require('./models/freelancerModel');

// Creating the app
const app = express();

// Setting up the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads')
  },
  filename: function(req, file, cb){
    cb(null, file.filename + '-' + Date.now() + '.jpg')
  }
});

const upload = multer({ storage: storage }).array('photos', 2);

// Setting up the routes
app.post('/signup', signupController);
app.post('/register/freelancer', upload, async function (req, res) {
  console.log('hi');
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
    }
    else {
      try {
        console.log(req)
        const freelancerData = new freelancerCollection({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone,
          profession: req.body.profession,
          bio: req.body.bio,
          equipments: req.body.equipments,
          // profilePicture: {
          //   data: req.files[0].filename,
          //   contentType: 'image/png'
          // },
          // coverPicture: {
          //   data: req.files[1].filename,
          //   contentType: 'image/png'
          // }
          profilePicture: req.body.profilePicture,
        });

        const postData = await freelancerData.save();
        res.send(postData);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
    }
  });
});
app.post('/register/company', registerCompanyController);

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));