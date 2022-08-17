const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    name:{
        type:String,
        require:true
    },
    author_id:{
        type:Number,
        required:true
    },
    price:Number,
    rating:Number
},{ timestamps: true });
module.exports = mongoose.model('boks', bookSchema)
// String, Number
// Boolean, Object/json, array