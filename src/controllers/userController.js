const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data)
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({status:false,msg:"such user is not exist"})
  let token = jwt.sign({emailId:user._id.toString()},"akashisveryimpperson")
  res.send({ status: true, data: token });
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
  let userLoggedInUser=decodedToken.emailId
  let userId = req.params.userId;
  if(userLoggedInUser!=userId)
    return res.send({status:false,msg:"You are not Authorised to access this data"})
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let token=req.headers["x-Auth-token"]
  if(!token)
    token=req.headers["x-auth-token"]
  if(!token)
    res.send({status:false,msg:"Token is must"})
  let decodedToken=await jwt.verify(token,"akashisveryimpperson")
  if(!decodedToken)
    res.send({status:false,msg:"token is invalid"})  
  let userLoggedInUser=decodedToken.emailId
  let userToBeModified=req.params.userId
  if(userLoggedInUser!=userToBeModified)
    res.send({status:false,msg:"You are not Authorised to Updated It"})
  let user = await userModel.findById(userToBeModified);
  if (!user) 
    return res.send("No such user exists");
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userToBeModified }, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};

const deleteUser=async function(req,res){
  let token=req.headers["x-Auth-token"]
  if(!token)
    token=req.headers["x-auth-token"]
  if(!token)
    res.send({status:false,msg:"token is must"})
  let decodedToken=await jwt.verify(token,"akashisveryimpperson")
  if(!decodedToken)
    res.send({status:false,msg:"token is invalid"})
  let userLoggedIn=decodedToken.userId
  let deleteduser=req.params.userId
  if(userLoggedIn!=deleteduser)
    res.send({status:false,msg:"You are not Authorised to delete It "})
  let user=await userModel.findByIdAndUpdate({_Id:deleteduser},{isdeleted:false},{new:true})
  res.send({status:true,msg:user})
}

// All API with the help of middleware

const getUserData1 = async function (req, res) {
  let userDetails = await userModel.findById(req.data);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

const updateUser1 = async function (req, res) {  
  let user = await userModel.findById(req.data);
  if (!user) 
    return res.send("No such user exists");
  let userData = req.body;
  let updatedUser = await userModel.findByIdAndUpdate({ _id:req.data}, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};

const deleteUser1=async function(req,res){
  let user1 = await userModel.findById(req.data)
  if (!user1) 
    return res.send("No such user exists");
  let user=await userModel.findByIdAndUpdate({_id:req.data},{isdeleted:false},{new:true})
  res.send({msg:user})
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser
module.exports.getUserData1 = getUserData1;
module.exports.updateUser1 = updateUser1;
module.exports.deleteUser1=deleteUser1