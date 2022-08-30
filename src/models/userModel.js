const mongoose = require('mongoose');
const { createUser } = require('../controllers/userController');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('Http_User', userSchema)

