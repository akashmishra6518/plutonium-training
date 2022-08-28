const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
        firstName : String,
        lastName : String,
        mobile : String,
        emailId : String,
        password : String,
        gender : {
            type:String,
            enum:["male","female","others"]
        },
        isDeleted:{
            type:Boolean,
            default:true
        }, 
        age : Number
    
}, { timestamps: true });

module.exports = mongoose.model('AuthUser', userSchema)
