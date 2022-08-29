const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login",  userController.loginUser)
router.get("/users/:userId", userController.getUserData)
router.put("/users/:userId",userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)


// with the help of middleware

router.get("/users/:userId",middleware.TAAT, userController.getUserData1)
router.put("/users/:userId", middleware.TAAT, userController.updateUser1)
router.delete('/users/:userId',middleware.TAAT, userController.deleteUser1)

module.exports = router;