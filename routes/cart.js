var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Cart = require('../models/cart');

router.post('/create', (req, res) => {
    const newUser = new Cart({
        da: req.body.da,
        date: req.body.date,
        price: req.body.price
    });

    newUser.save()
           res.json({ cart: true })
})

router.get('/all', (req, res) => {
    Cart.find().then(data => {
        res.json({ cart: data })
    });
})

router.delete('/delete/:id', (req, res) => {
    Cart.deleteOne({ _id: req.params.id }).then(deletedDoc => {
        if (deletedDoc.deletedCount > 0) {
            res.json({ result: true });
        } else {
            res.json({ result: false, error: 'Item not found' });
        }
    }).catch(err => {
        res.status(500).json({ result: false, error: err });
    });
});
module.exports = router;











// router.get('/',(req,res) => {
// res.json ({allTravel: travel});
// });



module.exports = router;