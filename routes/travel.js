var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Travel = require('../models/travels');


router.post('/',(req,res) => {
    Travel.find().then (response => response.json())
    .then (data => {
        const newTravel = new Travral ({
            departure : req.body.departure,
            arrival : req.body.arrival,
            date : req.body.date
        })
        newTravel.save();
        res.json({result : true, travel : newTravel});
    })
})




router.get('/',(req,res) => {
    Travel.find().then (response => response.json())
    .then (data => {
        res.json ({data})
    })
})






module.exports = router;