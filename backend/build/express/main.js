'use strict';

var _Init = require('../database/Init');

var _Init2 = _interopRequireDefault(_Init);

var _CategoryController = require('../express/controller/CategoryController');

var _FoodController = require('./controller/FoodController');

var _IngredientController = require('./controller/IngredientController');

var _UserController = require('./controller/UserController');

var _UserGateway = require('../database/gateway/UserGateway');

var _CategoryGateway = require('../database/gateway/CategoryGateway');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(0, _Init2.default)().then(function (msg) {
    console.log(msg);

    app.listen(4444, function () {
        console.log('Server running at 4444');
    });

    //category
    app.post('/api/categories', _CategoryController.CategoryController.create);
    app.put('/api/categories/:categoryId', _CategoryController.CategoryController.updateById);
    app.delete('/api/categories/:categoryId', _CategoryController.CategoryController.deleleById);

    //food
    app.post('/api/foods', _FoodController.FoodController.create);
    app.put('/api/foods/:foodId', _FoodController.FoodController.updateById);
    app.delete('/api/foods/:foodId', _FoodController.FoodController.deleteById);

    //ingredient
    app.post('/api/ingredients', _IngredientController.IngredientController.create);
    app.put('/api/ingredients/:ingredientId', _IngredientController.IngredientController.updateById);
    app.delete('/api/ingredients/: ingredientId', _IngredientController.IngredientController.deleteById);

    //user
    app.post('/api/user', _UserController.UserController.create);
    app.put('/api/user/:userId', _UserController.UserController.updateById);
    app.delete('/api/user/:userId', _UserController.UserController.deleteById);
});