var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Travel = require('../models/travel');

router.post('/search',(req,res) => {
    Travel.find({departure : req.body.departure, arrival: req.body.arrival}).then (data => {
       
        for (let index = 0; index < data.length; index++) {

           let date = new Date ();
       let day = date.getDate();
    if(day<10){
        day = `0${day}`;
        console.log(`0${day}`);
    }
let month = date.getMonth()+1;
  if(month<10){
        month = `0${month}`;
        console.log(`0${month}`);
    }
let year = date.getFullYear();

         const searchDate = `${year}-${month}-${day}`;
           if(req.body.date === searchDate){
                 res.json ({travel : data})
        return
        }}
    });
})
    











// router.get('/',(req,res) => {
// res.json ({allTravel: travel});
// });



module.exports = router;