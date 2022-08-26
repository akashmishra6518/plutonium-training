const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data=req.headers.isfreeappuser
    if(req.headers.isfreeappuser){
        let b=req.body
        b.isFreeAppUser=data
        let user=await UserModel.create(b)
        res.send({msg:user})
    }
    else
        res.send({msg:"require header is missing"})
}


// using Middleware
const createUser1=async function(req,res){

    let b=req.body
    b.isFreeAppUser=req.akash;
    let user=await UserModel.create(b)
    res.send({msg:user})
}



const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createUser1=createUser1