const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        min: 10,
        uqique: true,
        required: true
    }
});

const userCollection = new mongoose.model('usercollection', userSchema);

module.exports = userCollection;