'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
var mongoose = require('mongoose');
var IngredientSchema = new mongoose.Schema({
				id: String,
				name: String,
				amount: Number,
				shop: String
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

exports.default = Ingredient;