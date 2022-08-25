const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    
        userId:{
            type:objectId
        },
        productId:{
            type:objectId
        },
        amount: Number,
        isFreeAppUser:Boolean,
        date:String
    

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
