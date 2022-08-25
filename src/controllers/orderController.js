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
                        let result=req.headers.isfreeappuser
                        if(result=="true"){
                            let order=req.body
                            order.amount=0
                            order.isFreeAppUser=result
                            let mainOrder=await OrderModel.create(order)
                            res.send({msg:mainOrder})
                        }else{
                            let u=req.body.userId;
                            let p=req.body.productId;
                            let productprice=await ProductModel.findById(p).select({price:1,_id:0})
                            let balance=await UserModel.findById(u).select({balance:1,_id:0})
                            if(balance.balance<productprice.price)
                                 res.send({msg:"User does not have enough balance"})
                             else{
                                 let order=req.body
                                 order.amount=productprice.price
                                 let u=req.body.userId;
                                 let update=await UserModel.findByIdAndUpdate(u).update({ $inc: { balance: - productprice.price} })
                                 order.isFreeAppUser=result
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

module.exports.createOrder= createOrder
