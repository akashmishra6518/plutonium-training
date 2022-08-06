const express = require('express');
const abc = require('../introduction/intro')
const a=require('../util/helper')
const router = express.Router();
const ab=require('../logger/logger.js')
const abcd=require('../validator/formatter')


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    ab.p()
    a.D()
    a.M()
    a.GBI()
    console.log("Real String :- ")
    console.log(abcd.S)
    console.log("After Trimming :-")
    abcd.T()
    console.log("after converting into lower-case :-")
    abcd.L()
    console.log("after converting into upper-case:-")
    abcd.U()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason