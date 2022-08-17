const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createAuthor",AuthorController.createauthor)
router.get("/getAuthorlist",AuthorController.getAllauthorName)
router.post("/createBook",BookController.createBook)
router.get("/getAllbooks",BookController.getAllbooks)
router.get("/Allbooks",BookController.Allbooks)
router.get("/Authore",BookController.Authore)
router.get("/FindPrice",BookController.FindPrice)
module.exports = router;