const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

const createbooks=async function(req,res){
    let bookdata=req.body
    let Allbookdata=await UserModel.create(bookdata)
    res.send({msg:Allbookdata})
}
const getAllbooks=async function(req,res){
    let getAllbook=await UserModel.find()
    res.send({msg:getAllbook})
}
module.exports.createbooks=createbooks
module.exports.getAllbooks=getAllbooks
