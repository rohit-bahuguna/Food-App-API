const cartModal = require("../Model/cartSchema");


const addToCart = async (req, res) => {
  try {
     console.log(req.body.name);

      const tempProduct = new cartModal({
        user_name : req.userName,
      user_id: req.userId,
      order: {
        id: req.body.id,
        name:  req.body.name,
        food_type: req.body.food_type,
        category: req.body.category,
        price: req.body.price ,
        description: req.body.description,
        image: req.body.image,
        quantity: req.body.quantity
      },
     
    });
    console.log(tempProduct , " temp product");
    const response = await tempProduct.save();
     
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};
const getAllCart = async (req, res) => {
  try {
    // console.log(req.userId)
    const id = req.userId;
    const cartItems = await cartModal.find({ userid: id });
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};



const deleteFromCart = async (req, res) => {
  const id = req.params.id;
  // console.log(id);

  try {
    const item = await cartModal.findByIdAndRemove(id);
   // console.log(item)
    res.status(200).json(item);
  } catch (error) {
    //console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const UpdateCart = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedItem = await cartModal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

module.exports = {
  deleteFromCart,
  
  getAllCart,
  addToCart,
  UpdateCart,
};