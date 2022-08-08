const express = require('express');
const f=require('lodash');
const u=require('underscore')
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
    let array=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
    let updated=f.chunk(array,3);
    console.log(updated);
    let odd=[1,3,5,7,9,11,13,15,17,19];
    console.log(f.tail(odd))
    let arr1=[1,2,2,1,3];
    let arr2=[3,3,4,5,5];
    let uni=f.union(arr1,arr2);
    console.log(f.uniq(uni));
    console.log(f.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason