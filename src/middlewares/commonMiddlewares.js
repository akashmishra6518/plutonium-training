
const mid1= function ( req, res, next) {
    let data=req.headers.isfreeappuser
     if(req.headers.isfreeappuser){
         
        req.akash=data;
        next()
     }
     else
       res.send({msg:"require header is missing"})
 }
    

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
