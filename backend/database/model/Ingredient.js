const mongoose = require('mongoose');
const IngredientSchema = new mongoose.Schema({
    id: String,
	name: String,
	amount: Number,
	shop: String,
})

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

export default Ingredient;