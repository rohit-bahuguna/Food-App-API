const express = require('express');
const ProductRouter = express.Router();
const { addFood, getFood, deleteFood, updateFood , getAFood} = require('../Controllers/productController')

ProductRouter.post('/addfood', addFood)
ProductRouter.get('/getfood', getFood)
ProductRouter.post('/deletefood', deleteFood)
ProductRouter.post('/updatefood', updateFood)
ProductRouter.get('/getafood/:id', getAFood);


module.exports = ProductRouter;