const express = require('express');
const router = express.Router();
const Controller= require("../controllers/productController")
const UserController= require("../controllers/userController")
const ProController=require("../controllers/productController")
const OrderController=require("../controllers/orderController")
const Middleware=require("../middlewares/commonMiddlewares")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser", UserController. createUser)
router.get("/getUsersData", UserController.getUsersData)
router.post("/createProduct",ProController.createProduct)
router.get("/getProductList",ProController.showProductList)
router.post("/createOrder",OrderController.createOrder)

//Api call with the help of Middleware

router.post("/createUser1", Middleware.mid1,UserController.createUser1)
router.post("/createOrder1",Middleware.mid1, Middleware.mid2, OrderController.createOrder1)







module.exports = router;