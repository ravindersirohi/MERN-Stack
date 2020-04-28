const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//Route GET api/item
router.get('/', (req, resp) => {
    Item.find()
        .sort({ createdOn: -1 })
        .then(result => resp.json(result))
});

//Route POST api/item
router.post('/', (req, resp) => {
    const item = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
    });
    item.save()
        .then(result => resp.json(result))
        .catch(err => resp.send(err));
});

module.exports = router;