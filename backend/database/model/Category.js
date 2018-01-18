const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id: String,
	name: String,
	season: String,
	imageDemo: Array,
	decripstion: String,
	stories: String
})

const Category = mongoose.model('Category', CategorySchema);

export default Category;