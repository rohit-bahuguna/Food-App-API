const express = require('express');
const ProductRouter = express.Router();
const { addFood, getFood, deleteFood, updateFood , getAFood} = require('../Controllers/productController')

ProductRouter.post('/addfood', addFood)
ProductRouter.get('/getfood', getFood)
ProductRouter.delete('/deletefood/:id', deleteFood)
ProductRouter.put('/updatefood', updateFood)
ProductRouter.get('/getafood/:id', getAFood);


module.exports = ProductRouter;