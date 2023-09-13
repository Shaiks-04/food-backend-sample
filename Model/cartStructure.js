const mongoose = require('mongoose');

const cartStructure = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    products: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            },
            productData: {  
                type: mongoose.Schema.Types.Mixed
            }
        }
    ]
});

const Cart = mongoose.model('Bookmark', cartStructure);

module.exports = Cart;
