const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId", userController.getUserData)
router.put("/users/:userId", userController.updateUser)
router.delete("/users/:userId",userController.deleteuser)

// All Api with middleware
router.get("/users/:userId",middleware.mid1, userController.getUserData1)
router.put("/users/:userId",middleware.mid1, userController.updateUser1)
router.delete("/users/:userId",middleware.mid1, userController.deleteuser1)

module.exports = router;