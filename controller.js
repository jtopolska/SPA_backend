const OrderModel = require('./model');

module.exports.sendData = (req, res) => {
    let dataAndOrder = new OrderModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        itemID: req.body.itemID,
        serviceTitle: req.body.serviceTitle,
        itemsQuantity: req.body.itemsQuantity
    })
    // message.save();
    OrderModel.create(dataAndOrder)
    .then((data) => {console.log('created', data)
    res.send('<h2>Your data has been sent</h2>');
    })
    .catch((err) => console.log(err))
}
 