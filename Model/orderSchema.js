const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    order: {
        type: Object,
        require : true 
    }

} ,{timestamps : true})

module.exports = mongoose.model('Order', orderSchema);
