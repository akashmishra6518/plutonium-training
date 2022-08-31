const UserModel= require("../models/userModel")
const jwt=require("jsonwebtoken")
const { request } = require("express")
const { use } = require("../routes/route")

const createUser= async function (req, res) {
    try{
        let data=req.body
        if(Object.keys(data).lenght!=0 && data.emailId && data.password){
            let userdata=await UserModel.create(data)
            res.status(201).send({msg:userdata})
        }else
            res.status(400).send({msg:"invalid request"})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}
const getdetail= async function (req, res) {
    try{
        let token=req.headers["x-auth-token"]
        if(!token)
            res.status(401).send({msg:"token is must"})
        let decodetoken=jwt.verify(token,"akashismasterofhimself")
        if(!decodetoken)
            res.status(401).send({msg:"token is invalid"})
        if(req.params.userId!=decodetoken.emailId)
            res.status(403).send({msg:"You are not Authorised for this work"})
        let user=await UserModel.findById(req.params.userId)
        res.status(200).send({msg:user})
    }catch(error){
        res.status(500).send({msg:error.message})
    }

}
const loginUser= async function (req, res) {
    try{
        let data=req.body
        if(Object.keys(data).length!=0 && data.emailId && data.password){
            let id=req.body.emailId
            let pass=req.body.password
            let user=await UserModel.findOne({emailId:id,password:pass})
            if(Object.keys(user).length!=0){
                let token=jwt.sign({emailId:user._id.toString()},"akashismasterofhimself")
                res.status(200).send({msg:token})
            }else
                res.status(404).send({msg:"Data not found"})
        }else
            res.status(400).send({msg:"invailid request"})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}
const updateUser= async function (req, res) {
    try{
        let token=req.headers["x-auth-token"]
        if(!token)
            res.status(401).send({msg:"token is must"})
        let decodetoken=jwt.verify(token,"akashismasterofhimself")
        if(!decodetoken)
            res.status(401).send({msg:"token is invalid"})
        if(req.params.userId!=decodetoken.emailId)
            res.status(403).send({msg:"You are not Authorised for this"})
        let data=req.body
        let user=await UserModel.find(req.params.userId)
        if(Object.keys(data).length!=0 && Object.keys(data) in user){
            user=await UserModel.findOneAndUpdate({_id:req.params.userId},data,{new:true})
            res.status(200).send({msg:user})
        }else
            res.status(400).send({msg:"invalid Request"})
        
    }catch(error){
        res.status(500).send({msg:error.message})
    }

}
const deleteUser= async function (req, res) {
    try{
        let token=req.headers["x-auth-token"]
        if(!token)
            res.status(401).send({msg:"token is must"})
        let decodetoken=jwt.verify(token,"akashismasterofhimself")
        if(!decodetoken)
            res.status(401).send({msg:"invalid token"})
        if(req.params.userId!=decodetoken.emailId)
            res.status(403).send({msg:"Yor are not Authorised"})
        let user=await UserModel.findOneAndUpdate({_id:req.params.userId},{$set:{isdeleted:false}},{new:true})
        res.status(200).send({msg:user})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}

// All the API with the help of Middleware

const getdetail1= async function (req, res) {
    try{
        let user=await UserModel.find({_id:req.userId})
        if(Object.keys(user).length==0)
            res.status(404).send({msg:"Data not found"})
        res.status(200).send({msg:user})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}
const updateUser1= async function (req, res) {
    try{
        let data=req.body
        let user=await UserModel.findById(req.userId)
        if(Object.keys(data).length!=0 && Object.keys(data) in user){
            user=await UserModel.findOneAndUpdate({_id:req.userId},data,{new:true})
            res.status(200).send({msg:user})
        }else
            res.status(400).send({msg:"Invalid request"})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}
const deleteUser1= async function (req, res) {
    try{
        let user=await UserModel.findOneAndUpdate({_id:req.userId},{$set:{isdeleted:false}},{new:true})
        res.status(200).send({msg:user})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}

module.exports.createUser= createUser
module.exports.getdetail= getdetail
module.exports.loginUser= loginUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser
module.exports.getdetail1= getdetail1
module.exports.updateUser1=updateUser1
module.exports.deleteUser1=deleteUser1