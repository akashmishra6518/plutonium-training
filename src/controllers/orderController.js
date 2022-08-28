const { count } = require("console")
const OrderModel= require("../models/orderModel")
const UserModel=require("../models/userModel")
const ProductModel=require("../models/productModel")
const {objectId}=require('mongodb')

const createOrder= async function (req, res) {
    if(req.headers.isfreeappuser){
        if(req.body.userId){
            req.u_id=req.body.userId;
            let data1=await UserModel.findById({_id:req.u_id})
            if(data1){
                if(req.body.productId){
                    req.p_id=req.body.productId
                    let data2=await ProductModel.findById({_id:req.p_id})
                    if(data2){
                        req.result=req.headers.isfreeappuser
                        if(req.result=="true"){
                            let order=req.body
                            order.amount=0
                            order.isFreeAppUser=req.result
                            let mainOrder=await OrderModel.create(order)
                            res.send({msg:mainOrder})
                        }else{
                            let productprice=await ProductModel.findById({_id:req.p_id}).select({price:1,_id:0})
                            let balance=await UserModel.findById({_id:req.u_id}).select({balance:1,_id:0})
                            if(balance.balance<productprice.price)
                                 res.send({msg:"User does not have enough balance"})
                             else{
                                 let order=req.body
                                 order.amount=productprice.price
                                 let update=await UserModel.findById({_id:req.u_id}).updateOne({ $inc: { balance: - productprice.price} })
                                 order.isFreeAppUser=req.result
                                 let mainOrder=await OrderModel.create(order)
                                 res.send({msg:mainOrder})
                             }
                        }
                        

                    }else
                        res.send({msg:"productId is not valid"}) 
                }else
                    res.send({msg:"ProductId is must"})
            }else
                res.send({msg:"user is not valid"})

        }else
            res.send({msg:"userId is must"})
    }else
        res.send({msg:"require header is missing"})
}

// use of Middleware

const createOrder1=async function (req,res){

    if(req.akash=="false")
    {
        let u=req.body.userId;
        let update=await UserModel.findById(u).updateOne({ $set: { balance: req.total} })
    }
    let order=req.body
    order.amount=req.update
    order.isFreeAppUser=Boolean(req.akash)
    let createOrder=await OrderModel.create(order)
    res.send({msg:order})
}
module.exports.createOrder= createOrder
module.exports.createOrder1=createOrder1