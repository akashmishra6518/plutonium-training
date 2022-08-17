const UserModel= require("../models/authorModel")

const createauthor=async function(req,res){
    let authordata=req.body
    let Allauthordata=await UserModel.create(authordata)
    res.send({msg:Allauthordata})
}
const getAllauthorName=async function(req,res){
    
    let getAllauthorName=await UserModel.find();
    res.send({msg:getAllauthorName});
}

module.exports.getAllauthorName=getAllauthorName
module.exports.createauthor=createauthor