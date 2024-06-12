import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: String,
	price: Number,
	inStock: Boolean
});

const Product = mongoose.model('Product', productSchema);

export default Product;