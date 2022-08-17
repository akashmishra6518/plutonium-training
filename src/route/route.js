const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const UserController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook",UserController.createBook)
router.get("/getbooklist",UserController.getAllbooks)
router.get("/bookList",UserController.bookList)
router.get("/getRandomBooks",UserController.getRandomBooks)
router.get("/getParticularBooks",UserController.getParticularBooks)
router.get("/getBooksInYea",UserController.getBooksInYea)
router.get("/getXINRBooks",UserController.getXINRBooks)
module.exports = router;