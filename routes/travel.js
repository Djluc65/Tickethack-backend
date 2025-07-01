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

router.post('/search', (req, res) => {
    Travel.find({ departure: req.body.departure, arrival: req.body.arrival }).then(data => {

        for (let index = 0; index < data.length; index++) {

            const result = data.filter((travel) => dateFormat(travel.date) === req.body.date);

            
            console.log(result)
            if (result) {
                res.json({ travel: result })
                return
            } else {
                res.json({ travel: 'error' })
                return
            }
        }
    });
})












// router.get('/',(req,res) => {
// res.json ({allTravel: travel});
// });



module.exports = router;