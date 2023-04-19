require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VA46ce15954bcd0cc594a2d48fc96f12ad";
const client = require("twilio")(accountSid, authToken);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');
}
connectDB();

const userSchema = new mongoose.Schema({
    users: Number,
});

const OTP = mongoose.model('OTP', userSchema);

app.post('/verifyOTP', function (req, res) {
    const code = req.body.code;

    OTP.findOne({ users: code }, function (err, foundUser) {
        if (err) {
            console.log(err);
            return;
        } else if (foundUser) {
            res.render('/');
            OTP.findOneAndDelete({ users: code }, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            res.send('Invalid OTP');
        }
    });
});

app.post('/login', function (req, res) {
    const number = req.body.number;
    let randomNum = Math.floor(10000 + Math.random() * 90000);
    console.log('wow' + randomNum)

    client.messages
        .create({ body: randomNum, from: '+16282664196', to: number })
        .then(saveUser)
        .catch(function (err) {
            console.log(err);
        });

    function saveUser() {
        const newUser = new OTP({
            users: randomNum
        });
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render('verifyOTP')
            }
        });
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`));