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
        quantity: !req.body.quantity ? 1 : req.body.quantity,
    });
    item.save()
        .then(result => resp.json(result))
        .catch(err => resp.send(err));
});

//Route Delete api/item
router.delete('/:id', (req, resp) => {
    const id = req.params.id;
    Item.findById(id)
        .then(result => result.remove()
            .then(() => resp.status(201).json({ message: `${result.name} - removed successfully` })))
        .catch(err => resp.status(404).json({ message: `Item (${id}) - Not found.` }));

});

module.exports = router;