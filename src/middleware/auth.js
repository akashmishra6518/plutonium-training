const jwt=require('jsonwebtoken')

const TAAT = function(req, res, next) {
    let token=req.headers["x-auth-token"]
    if(!token)
        token=req.headers["x-Auth-token"]
    if(!token)
        return res.send({status:false,msg:"token is must"})
    let decodedToken=jwt.verify(token,"akashisveryimpperson")
    if(!decodedToken)
        return res.send({status:false,msg:"token is not valid"})
    let userLoggedIn=decodedToken.emailId
    req.data=req.params.userId
    if(userLoggedIn!=req.data)
        return res.send({status:false,msh:"You are not Authorised"})
    next()
}

module.exports.TAAT=TAAT