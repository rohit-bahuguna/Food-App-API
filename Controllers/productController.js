
const productModel = require("../Model/productSchema");
const mongoose = require('mongoose');


const addFood = async (req, res) => {


try {
     const food = new productModel({
      name:  req.body.name,
     food_type: req.body.food_type,
     category: req.body.category,
     price: req.body.price ,
     description: req.body.description,
     image: req.body.image
    
     })
    
    const response = await food.save()
    //console.log(response);
    res.status(200).json(response);
    
    
} catch (error) {
    console.log(error);
    res.status(400).json({massage : error.massage})
}


}



const getFood = async (req , res) => {

    
    try {
        const response = await productModel.find();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}

const getAFood = async (req , res) => {
    
    try {
        const id = req.params.id;
        // console.log(id)
        const response = await productModel.findById(id)
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}


const deleteFood = async (req , res) => {
  try {
      const id = req.params.id;
      const response = await  productModel.findByIdAndDelete({ _id: id })
      res.status(200).json(response)
      
  } catch (error) {
      console.log(error);
      res.status(400).json({massage : error.massage})
      
  }
}
const updateFood = async (req, res) => {
    
    try {
        const id = req.body._id;
    
        const response = await productModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json(response);

            
        } catch (error) {
            console.log(error);
      res.status(400).json({massage : error.massage})
        }
}



module.exports = {addFood , getFood , deleteFood , updateFood , getAFood}

