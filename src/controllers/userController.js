const UserModel= require("../models/userModel")
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
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const loginUser= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const updateUser= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const deleteUser= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
module.exports.createUser= createUser
module.exports.getdetail= getdetail
module.exports.loginUser= loginUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser