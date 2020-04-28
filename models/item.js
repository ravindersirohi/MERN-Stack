const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});
module.exports = Item = mongoose.model('Item', ItemSchema);