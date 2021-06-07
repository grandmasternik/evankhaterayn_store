const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a new Schema
const productSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: {type: Number},
    qty: {type: Number, default: 13}
});

// Creating Product Model
const Product = mongoose.model("Prodcut", productSchema);

// export
module.exports = Product;