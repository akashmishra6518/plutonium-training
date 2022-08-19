const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisher = require("../models/publisher")
const publisherModel= require("../models/publisher")

const createBook= async function (req, res) {
    let book = req.body
    if(book.author)
    {
        let a=await authorModel.findOne({_id:{$eq:book.author}})
        if(a)
        {
            if(book.publisher)
            {
                let p= await publisherModel.findOne({_id:{$eq:book.publisher}})
                if(p)
                {
                    let bookCreated = await bookModel.create(book)
                    res.send({data: bookCreated})
                }else
                    res.send({msg:"publisher is not valid"})
            }else
                res.send({msg:"publisher deatils are required"})
        }else
            res.send({msg:"Author is not prasent"})
    }else
        res.send({msg:"author value is required"})
    
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
const updatedata=async function(req,res){
    let b=await bookModel.find({"publisher":["62ffa648fd240f3a1751a5e0","62ff9a9dcc57ad30c02b422f"]}).updateMany({$set:{isHardcover:true}})
    res.send({msg:b})
}

const updateprice=async function(req,res){
    let data=await authorModel.find({"rating":{$gt:3.5}}).select({_id:1})
    let b=await bookModel.find({"author":data}).update({$inc:{price:10}})
    res.send({msg:b})
}

const getBookWithAandP = async function (req, res) {
    let specificBook = await bookModel.find().populate(["author","publisher"])
    res.send({msg: specificBook})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBookWithAandP = getBookWithAandP
module.exports.updatedata=updatedata
module.exports.updateprice=updateprice