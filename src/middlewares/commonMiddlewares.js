const UserModel=require("../models/userModel")
const ProductModel=require("../models/productModel")
    
const mid1=function ( req, res, next) {
    let data=req.headers.isfreeappuser
     if(req.headers.isfreeappuser){
        req.akash=data;
        next()
     }
     else
       res.send({msg:"require header is missing"})
 }

const mid2= async function ( req, res, next) {
    if(req.body.userId){
        req.u_id=req.body.userId;
        let data1=await UserModel.findById({_id:req.u_id})
        if(data1){
            if(req.body.productId){
                req.p_id=req.body.productId
                let data2=await ProductModel.findById({_id:req.p_id})
                if(data2){
                    if(req.akash=="true"){
                        req.update=0
                        next()
                    }else{
                        let productprice=await ProductModel.findById({_id:req.p_id}).select({price:1,_id:0})
                        let balance=await UserModel.findById({_id:req.u_id}).select({balance:1,_id:0})
                        if(balance.balance<productprice.price)
                            res.send({msg:"User does not have enough balance"})
                        else{
                            req.update=productprice.price
                            req.total=balance.balance-productprice.price
                            next()
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
}

module.exports.mid2= mid2
module.exports.mid1=mid1