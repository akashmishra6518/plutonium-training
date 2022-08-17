const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema( {

    author_name:{
        type:String,
        require:true
    },
    author_id:{
        type:Number,
        required:true,
        unique: true
    },
    age:Number,
    address:{
        type:String,
        require:true
    }
},{ timestamps: true });


module.exports = mongoose.model('authors',AuthorSchema)
