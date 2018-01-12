const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    id: String,
    name: String,
    steps: Array,
    category: Object,
    tags: Array,
    media: Object,
    note: String,
    ingredient: Object
})

const food = mongoose.model('food', foodSchema);

export default food;