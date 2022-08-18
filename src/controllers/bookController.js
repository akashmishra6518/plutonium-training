const UserModel= require("../models/bookModel")
const Author=require("../models/authorModel")
const _=require('underscore')
const { getAllauthorName } = require("./authorController")

const createBook=async function(req,res){
    let bookdata=req.body
    let Allbookdata=await UserModel.create(bookdata)
    res.send({msg:Allbookdata})
}

const getAllbooks=async function(req,res){
    
    let getAllbook=await UserModel.find();
    res.send({msg:getAllbook});
}

const Allbooks=async function(req,res){
    let id= await Author.findOne({ author_name:"Chetan Bhagat"}).select({ author_id:1,_id:0})
    let allbooks=await UserModel.find({author_id:{$eq:id.author_id}})
    res.send({msg:allbooks})
}
const Authore=async function(req,res){
    let id=await UserModel.findOne({ name:"Two states"}).select({ author_id:1,_id:0})
    let name=await Author.findOne({author_id:id.author_id}).select({author_name:1,_id:0})
    let list=await UserModel.findOneAndUpdate({author_name:name.author_name},{$set:{price:100}},{new:true})
    res.send({msg:list , name})
}
const FindPrice=async function(req,res){

    let list =await UserModel.find({price:{ $gte: 50, $lte: 100}}).select({author_id:1,_id:0})
    const unique = [...new Set(list.map(item => item.author_id))]
    let a=await Author.find({author_id:{$in:unique}}).select({author_name:1,_id:0})
    res.send({msg:a})
    
}
    
module.exports.createBook=createBook
module.exports.getAllbooks=getAllbooks
module.exports.Allbooks=Allbooks
module.exports.Authore=Authore
module.exports.FindPrice=FindPrice