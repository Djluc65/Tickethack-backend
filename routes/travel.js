var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Travel = require('../models/travel');


// router.get('/',(req,res) => {
//     Travel.find()
//     .then (data => {
//         const Travel = ({
//             departure : req.body.departure,
//             arrival : req.body.arrival,
//             date : req.body.date,
//             price : req.body.price
//         })
//         res.json({result : true, travel : data});
//     })
// })





router.post('/',(req,res) => {
    Travel.find().then (data => {
        res.json ({travel : data})
    })
});


// router.get('/',(req,res) => {
// res.json ({allTravel: travel});
// });



module.exports = router;