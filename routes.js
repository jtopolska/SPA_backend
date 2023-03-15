const Router = require('express');
const router = Router();
const { sendData, showOrder } = require('./controller');


// router.get('/booking', showOrder);

router.post('/booking', sendData);

module.exports = router;