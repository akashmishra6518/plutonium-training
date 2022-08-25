const productModel=require('../models/productModel')
const createProduct=async function(req,res){

    let p=req.body
    let product=await productModel.create(p);
    res.send({msg:product})
}

const showProductList=async function(req,res){
    let list=await productModel.find()
    res.send({msg:list})
}

module.exports.createProduct=createProduct
module.exports.showProductList=showProductList