const express = require('express');
const cartRouter = express.Router();
const auth = require('../middleware/auth')
const {
  deleteFromCart,
  getAllCart,
  addToCart,
  UpdateCart,
} = require('../Controllers/cartController')

cartRouter.post('/addtocart' , auth , addToCart ) //Create --> POST
cartRouter.get('/getallcart' , auth , getAllCart) // Read all --> GET
cartRouter.delete('/deletefromcart/:id' , auth ,  deleteFromCart)  // Delete ---> POST
cartRouter.put('/updatecart/:id' , auth , UpdateCart)  // Delete ---> POST


module.exports = cartRouter;