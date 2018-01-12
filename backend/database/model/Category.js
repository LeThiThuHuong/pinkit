const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: String,
	name: String,
	session: String,
	imageDemo: Array,
	decripstion: String,
	Stories: String
})

const category = mongoose.model('category', categorySchema);

export default category;