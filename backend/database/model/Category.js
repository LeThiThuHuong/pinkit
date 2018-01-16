const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id: String,
	name: String,
	session: String,
	imageDemo: Array,
	decripstion: String,
	Stories: String
})

const Category = mongoose.model('Category', CategorySchema);

export default Category;