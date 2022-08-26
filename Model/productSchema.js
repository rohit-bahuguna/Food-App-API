const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        require: true ,
    },
    food_type: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    }

})

module.exports = mongoose.model('Menu', MenuSchema);
