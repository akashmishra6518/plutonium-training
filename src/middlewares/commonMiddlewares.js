const jwt=require("jsonwebtoken")

const mid1= function ( req, res, next) {
    try{
        let token=req.headers["x-auth-token"]
        if(!token)
            res.status(401).send({msg:"token is must"})
        let decodetoken =jwt.verify(token,"akashismasterofhimself")
        if(!decodetoken)
            res.status(401).send({msg:"token is invalid"})
        req.userId=req.params.userId
        if(req.userId==decodetoken.emailId)
            next()
        else
            res.status(403).send({msg:"You are not Authorised"})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}


module.exports.mid1= mid1