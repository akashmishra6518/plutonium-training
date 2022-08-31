const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",UserController.createUser)
router.post("/login",UserController.loginUser)
router.get("/users/:userId",UserController.getdetail)
router.post("/users/:userId",UserController.updateUser)
router.delete("/users/:userId",UserController.deleteUser)

// All the API with the help of middleware

router.get("/users/:userId",commonMW.mid1, UserController.getdetail1)
router.post("/users/:userId",commonMW.mid1, UserController.updateUser1)
router.delete("/users/:userId",commonMW.mid1, UserController.deleteUser1)
module.exports = router;