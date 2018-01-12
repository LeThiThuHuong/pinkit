const mongoose = require('mongoose');
const ingredientSchema = new mongoose.Schema({
    id: String,
	name: String,
	amount: Number,
	shop: String,
})

const ingredient = mongoose.model('ingredient', ingredientSchema);

export default ingredient;