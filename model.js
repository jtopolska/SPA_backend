const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    tel: String,
    itemID: Number,
    serviceTitle: String,
    itemsQuantity: Number
})

module.exports = mongoose.model('OrderModel', orderSchema);