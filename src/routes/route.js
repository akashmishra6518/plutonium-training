const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()

    res.send('My second ever api!')
});

router.get('/movies', function (req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})

router.get('/movies/:indexNumber', function(req, res){

    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let requestParams = req.params
    if(requestParams.indexNumber<movies.length)
        res.send(movies[requestParams.indexNumber])
    else
        res.send("plz input valid index")
})

router.get('/films', function(req, res){

   let a= [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
       res.send(a);
})

router.get('/films/:filmId', function(req, res){
    let flag=-1;
    let a= [ {
         'id': 1,
         'name': 'The Shining'
        }, {
         'id': 2,
         'name': 'Incendies'
        }, {
         'id': 3,
         'name': 'Rang de Basanti'
        }, {
         'id': 4,
         'name': 'Finding Nemo'
        }]
        for(let i=0;i<a.length;i++)
        {
            if(a[i].id==req.params.filmId)
            {
                flag=i;
                break;
            }else{
                flag=-1;
            }
        }
        if(flag!==-1)
            res.send(a[flag]);
        else
            res.send("no such are prasent")
        
 })
 

module.exports = router;