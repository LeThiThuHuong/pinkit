'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
				id: String,
				name: String,
				season: String,
				imageDemo: Array,
				decripstion: String,
				stories: String
});

var Category = mongoose.model('Category', CategorySchema);

exports.default = Category;