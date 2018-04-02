'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FoodController = undefined;

var _FoodGateway = require('../../database/gateway/FoodGateway');

var FoodController = exports.FoodController = {
    create: function create(req, res) {
        _FoodGateway.FoodGateway.create(req.body).then(function (food) {
            res.json({ food: food, status: 200, msg: 'successfully' });
        }).catch(function (err) {
            return next(err);
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
            res.json({ food: food, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    deleteById: function deleteById(req, res) {
        _FoodGateway.FoodGateway.deleteById(req.params.foodId).then(function (result) {
            res.status(200).send('deleted successfully!');
        }).catch(function (err) {
            return next(err);
        });
    },

    findById: function findById(req, res) {
        _FoodGateway.FoodGateway.findById(req.params.foodId).then(function (food) {
            res.json({ food: food, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    findAllWithKeyword: function findAllWithKeyword(req, res) {
        var filter = req.query.filter;
        var offset = Number(req.query.offset || 0);
        var limit = Number(req.query.limit || 10);
        var order = { date_added: -1 };
        _FoodGateway.FoodGateway.findAllWithKeyword(filter, offset, limit, order).then(function (food) {
            res.json({ food: food, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    getFood: function getFood(req, res) {
        _FoodGateway.FoodGateway.getFood(req.params.food).then(function (food) {
            res.json({ food: food, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    },

    getFoodById: function getFoodById(req, res) {
        _FoodGateway.FoodGateway.getFoodById(req.params.foodId).then(function (food) {
            res.json({ food: food, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    }
};