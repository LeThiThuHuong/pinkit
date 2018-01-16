const mongoose = require('mongoose');
const FoodSchema = new mongoose.Schema({
    id: String,
    name: String,
    steps: Array,
    category: Object,
    tags: Array,
    media: Object,
    note: String,
    ingredient: Object
})

const Food = mongoose.model('Food', FoodSchema);

export default Food;