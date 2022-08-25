const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "others"] //"falana" will give an error
    },
    age: Number,
    address:String,
    balance:{
        type:Number,
        default:100
    },
    isFreeAppUser:Boolean
}, { timestamps: true });

module.exports = mongoose.model('NewUser', userSchema)