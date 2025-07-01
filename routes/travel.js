var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Travel = require('../models/travel');


router.get('/',(req,res) => {
    Travel.find(departure === req.body.departure, arrival === req.body.arrival,  date === req.body.date, price === req.body.price)
    .then (data => {
             res.json({result : true, travel : newTravel});
    })
})




// router.get('/',(req,res) => {
//     Travel.find().then (data => {
//         res.json ({travel: data})
//     })
// });






module.exports = router;