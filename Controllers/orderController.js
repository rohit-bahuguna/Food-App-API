const orderModel = require('../Model/orderSchema')

const createOrder = async (req , res) => {
    try {
        const items = req.body
        const newOrder = new orderModel({
                order: {
                name: req.userName,
                user_id: req.userId,
                items: [...items]
            }
        })
        const response = await newOrder.save()

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}

const getAllOrder = async (req , res) => {
    try {
        const id = req.userId;
        const response = await orderModel.find({user_id : id});
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}





module.exports =  { createOrder  , getAllOrder }