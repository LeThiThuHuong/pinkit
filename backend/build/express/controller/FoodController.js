"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FoodController = undefined;

var _FoodGateway = require("../../database/gateway/FoodGateway");

var FoodController = exports.FoodController = {
    create: function create(req, res) {
        _FoodGateway.FoodGateway.create(req.body).then(function (food) {
            res.json(food);
        });
    },

    updateById: function updateById(req, res) {
        var _req$body = req.body,
            name = _req$body.name,
            steps = _req$body.steps,
            category = _req$body.category,
            tags = _req$body.tags,
            media = _req$body.media,
            note = _req$body.note,
            ingredient = _req$body.ingredient;

        _FoodGateway.FoodGateway.updateById(req.params.foodId, { name: name, steps: steps, category: category, tags: tags, media: media, note: note, ingredient: ingredient }).then(function (food) {
            res.json(food);
        });
    },

    deleteById: function deleteById(req, res) {
        _FoodGateway.FoodGateway.deleteById(req.params.foodId).then(function (result) {
            res.status(200).send('deleted successfully!');
        });
    },

    findById: function findById(req, res) {
        _FoodGateway.FoodGateway.findById(req.params.foodId).then(function (food) {
            res.json(food);
        });
    }
};