'use strict';

var _Init = require('../database/Init');

var _Init2 = _interopRequireDefault(_Init);

var _CategoryController = require('../express/controller/CategoryController');

var _FoodController = require('./controller/FoodController');

var _IngredientController = require('./controller/IngredientController');

var _UserController = require('./controller/UserController');

var _UserGateway = require('../database/gateway/UserGateway');

var _CategoryGateway = require('../database/gateway/CategoryGateway');

var _Exception = require('./Exception');

var _AuthenticateService = require('../express/services/AuthenticateService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotenv = require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    if (req.session.count) {
        req.session.count++;
        console.log(req.session);
        res.send('you visited this page ' + req.session.count + ' times');
    } else {
        req.session.count = 1;
        res.send('Welcome to this page for the first time');
    }
});

app.get('/api/private', function (req, res, next) {
    if (req.session.username) {
        res.send('You visited this page');
    } else {
        res.send('you have to register your account');
    }
});

(0, _Init2.default)().then(function (msg) {
    console.log(msg);

    app.listen(4444, function () {
        console.log('Server running at 4444');
    });

    //category
    app.post('/api/categories', _CategoryController.CategoryController.create);
    app.put('/api/categories/:categoryId', _CategoryController.CategoryController.updateById);
    app.delete('/api/categories/:categoryId', _CategoryController.CategoryController.deleleById);
    app.get('/api/categories/getCategory', _CategoryController.CategoryController.getCategory);
    app.get('/api/categories/:categoryId', _CategoryController.CategoryController.getCategoryById);
    app.get('/api/categories', _CategoryController.CategoryController.findAllWithKeyword);

    //food
    app.post('/api/foods', _FoodController.FoodController.create);
    app.put('/api/foods/:foodId', _FoodController.FoodController.updateById);
    app.delete('/api/foods/:foodId', _FoodController.FoodController.deleteById);
    app.get('/api/foods/getFood', _FoodController.FoodController.getFood);
    app.get('/api/foods/:foodId', _FoodController.FoodController.getFoodById);
    app.get('/api/foods', _FoodController.FoodController.findAllWithKeyword);

    //ingredient
    app.post('/api/ingredients', _IngredientController.IngredientController.create);
    app.put('/api/ingredients/:ingredientId', _IngredientController.IngredientController.updateById);
    app.delete('/api/ingredients/: ingredientId', _IngredientController.IngredientController.deleteById);
    app.get('/api/ingredients/getIngredient', _IngredientController.IngredientController.getIngredient);
    app.get('/api/ingredients/:ingredientId', _IngredientController.IngredientController.getIngredientById);
    app.get('/api/ingredients', _IngredientController.IngredientController.findAllWithKeyword);

    //user
    app.post('/api/users', _UserController.UserController.create);
    app.put('/api/users/:userId', _UserController.UserController.updateById);
    app.delete('/api/users/:userId', _UserController.UserController.deleteById);
    app.get('/api/users/getUser', _UserController.UserController.getUser);
    app.get('/api/users/:userId', _UserController.UserController.getUserById);
    app.get('/api/users', _UserController.UserController.findAllWithKeyword);
    app.post('/api/authentication', _UserController.UserController.authenticate);

    app.post('/api/ping', function (req, res, next) {
        var a = _AuthenticateService.AuthenticateService.generateToken(req.body);
        res.json(a);
        console.log(_AuthenticateService.AuthenticateService.generateToken(req.body));
    });

    app.use(function (err, req, res, next) {
        console.log(err.code, err.message);
        res.status(err.code || 500).send(err.message);
    });
});