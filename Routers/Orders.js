const express = require('express');
const orderRouter = express.Router();
const auth = require("../middleware/auth")
const { createOrder, getAllOrder } = require('../Controllers/orderController')



orderRouter.post('/createorder', auth , createOrder);
orderRouter.get('/' , auth , getAllOrder ,)


module.exports = orderRouter;