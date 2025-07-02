var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Travel = require('../models/travel');

function dateFormat(params) {
    let date = new Date(params);
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
        console.log(`0${day}`);
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
        console.log(`0${month}`);
    }
    let year = date.getFullYear();

    const searchDate = `${year}-${month}-${day}`;
    return searchDate
}


router.get('/search/:departure/:arrival/:date', (req, res) => {
    Travel.find({
        departure: new RegExp(req.params.departure, "i"),
        arrival: new RegExp(req.params.arrival, "i")
    }).then(data => {
        console.log(data)
        if (data.length != 0) {
            for (let index = 0; index < data.length; index++) {

                const result = data.filter((travel) => dateFormat(travel.date) === req.params.date);
                if (result.length != 0) {
                    res.json({ result: true, travel: result })
                    return
                } else {
                    res.json({ result: false })
                    return
                }
            }
        } else {
            console.log('result false')
            res.json({ result: false })
            return
        }
    });
})

router.get('/all', (req, res) => {
    Travel.find().then(data => {
        res.json({ travel: data })
    });
})












// router.get('/',(req,res) => {
// res.json ({allTravel: travel});
// });



module.exports = router;