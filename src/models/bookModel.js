const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

const bookSchema = new mongoose.Schema( {

    bookname:{
        type:String,
        unique:true,
        require:true
    },
    authorName:{
        type:String,
        require:true
    },
    price:{
        Indian:String,
        european:String
    },
    year:{
        type:String  , default:2021
    },
    totalPages:Number,
    stockAvailable:Boolean
},{ timestamps: true });
module.exports = mongoose.model('books', bookSchema)
// String, Number
// Boolean, Object/json, array