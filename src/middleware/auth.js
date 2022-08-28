const UserModel=require("../models/userModel")
const mid1=async function(req,res,next){

    let token=req.headers["x-Auth-token"]
    if(!token)
        token=req.headers["x-auth-token"]
    if(!token)
        return res.send({msg:"token is must"})
    let valid=jwt.verify(token,"akashmishraisveryimpperson")
    if(!valid)
        return res.send({msg:"token is not valid"})
    req.userid=req.params.userId
    let data=await UserModel.findById(req.userid)
    if(!data.length>0)
        return res.send({msg:"such user is not exist"})
    next();

}
module.exports.mid1=mid1