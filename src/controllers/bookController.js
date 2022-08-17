const UserModel= require("../models/bookModel")

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

const createBook=async function(req,res){
    let bookdata=req.body
    let Allbookdata=await UserModel.create(bookdata)
    res.send({msg:Allbookdata})
}
const bookList=async function(req,res){
    let Allbookdata=await UserModel.find().select({bookname:1,authorName:1,_id:0})
    res.send({msg:Allbookdata})
}

const getAllbooks=async function(req,res){
    
    let getAllbook=await UserModel.find();
    res.send({msg:getAllbook});
}
const getBooksInYea=async function(req,res){

    let d=req.body.year
    let getAllbook=await UserModel.find({year : { $eq :d}})
    res.send({msg:getAllbook})

}
const getRandomBooks =async function(req,res){

    let getAllbook=await UserModel.find({stockAvailable:true , totalPages:{$gte:"350"}})
    res.send({msg:getAllbook})
}
const getParticularBooks=async function(req,res){
    
    let book=req.body.bookname
    let body=req.body.year
    let getAllbook=await UserModel.find({$or:[{bookname:{$eq:book}},{year:{$eq:body}}]})
    res.send({msg:getAllbook})
}

// request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXINRBooks=async function(req,res){

    let getAllbook=await UserModel.find({$or: [{"price.Indian": {$in:["500rs","300rs","200rs"]}}]})
    res.send({msg:getAllbook})

}
    
module.exports.getParticularBooks=getParticularBooks
module.exports.createBook=createBook
module.exports.getAllbooks=getAllbooks
module.exports.bookList=bookList
module.exports.getRandomBooks=getRandomBooks
module.exports.getBooksInYea=getBooksInYea
module.exports.getXINRBooks=getXINRBooks