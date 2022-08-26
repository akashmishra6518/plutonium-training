const UserModel=require("../models/userModel")
const ProductModel=require("../models/productModel")
const mid1= function ( req, res, next) {
    let data=req.headers.isfreeappuser
     if(req.headers.isfreeappuser){
         
        req.akash=data;
        next()
     }
     else
       res.send({msg:"require header is missing"})
 }
    

const mid2= async function ( req, res, next) {
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
                            req.update=0
                            req.value=result
                            next()
                        }else{
                            req.value=result;
                            let u=req.body.userId;
                            let p=req.body.productId;
                            let productprice=await ProductModel.findById(p).select({price:1,_id:0})
                            let balance=await UserModel.findById(u).select({balance:1,_id:0})
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
    }else
        res.send({msg:"require header is missing"})
}

module.exports.mid1= mid1
module.exports.mid2= mid2
