const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String
	},
	image: {
		type: String
	},
	price: {
		type: Number
	}
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;