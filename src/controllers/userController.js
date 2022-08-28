const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await UserModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let username=req.body.emailId 
  let password=req.body.password
  let data=await UserModel.find({emailId:username,password:password})
  if(!data.length>0)
    return res.send({msg:"username or password not correct"})
  let token=await jwt.sign({userId:"data._id"},"akashisveryimpperson")
  res.send({msg:true,token:token})
  
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) 
    token = req.headers["x-auth-token"];
  if (!token) 
    return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "akashisveryimpperson");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await UserModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) 
    token = req.headers["x-auth-token"];
  if (!token) 
    return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "akashisveryimpperson");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let user = await UserModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let updateData = req.body;
  let updatedUser = await UserModel.findOneAndUpdate({ _id: userId },updateData);
  res.send({ status: "updated" , data: updatedUser });
};

const deleteuser=async function(req,res){
  let token=req.headers["x-Auth-token"]
  if(!token)
    token=req.headers["x-auth-token"]
  if(!token)
    return res.send({msg:"token is must"})
  let decodedToken=await jwt.verify(token,"akashisveryimpperson")
  if(!decodedToken)
    return res.send({msg:"token is invalid"})
  let user=req.params.userId
  let data=await UserModel.findById(user)
  if(!data.length>0)
    res.send({msg:"such user are not prasent"})
  let deleteuser=await UserModel.findOneAndUpdate({_id:user},{isDeleted:false})
  res.send({status:"deleted",data:deleteuser})
}


const getUserData1=async function(req,res){
  let data=await UserModel.findById(req.userid)
  res.send({msg:data})
}
const updateUser1=async function(req,res){
  let update=req.body
  let data=await UserModel.findByIdAndUpdate({_id:req.userid},update,{new:true})
  res.send({msg:data})
}
const deleteuser1=async function(req,res){

  let data=await UserModel.findByIdAndUpdate({_id:req.userid},{isDeleted:true})
  res.send({msg:data})
}

module.exports.createUser = createUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.loginUser = loginUser
module.exports.deleteuser=deleteuser
module.exports.getUserData1=getUserData1
module.exports.deleteuser1=deleteuser1
module.exports.updateUser1=updateUser1