'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');
var FoodSchema = new mongoose.Schema({
    id: String,
    name: String,
    steps: Array,
    category: Object,
    tags: Array,
    media: Object,
    note: String,
    ingredient: Object
});

var Food = mongoose.model('Food', FoodSchema);

exports.default = Food;