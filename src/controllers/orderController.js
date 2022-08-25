const { count } = require("console")
const OrderModel= require("../models/orderModel")
const UserModel=require("../models/userModel")
const ProductModel=require("../models/productModel")




const createOrder= async function (req, res) {


    if(req.headers.isfreeappuser){

        if(req.body.userId){

            let u_id=req.body.userId;
            let data1=await UserModel.findById(u_id)
            if(data1){

                if(req.body.productId){

                    let p_id=req.body.productId
                    let data2=await ProductModel.findById(p_id)
                    if(data2){

                        

                    }else
                        res.send({msg:"productId is must"}) 
                }else
                    res.send({msg:"ProductId is must"})
            }else
                res.send({msg:"user is not valid"})

        }else
            res.send({msg:"userId is must"})
    }else
        res.send({msg:"require header is missing"})
}

module.exports.createOrder= createOrder
