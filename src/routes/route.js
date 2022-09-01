const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const Memes=require("../controllers/memesController")
const Weather=require("../controllers/weatherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/findbydistrict_id",CowinController.getbydistrictid)
router.get("/wheather",Weather.getwheatherReport)
router.get("/getwheatherReport1",Weather.getwheatherReport1)
router.get("/memes",Memes.memes)
router.post("/memes/byId",Memes.memesbyid)

module.exports = router;