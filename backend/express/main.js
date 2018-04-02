var dotenv = require('dotenv').config();

import connect from '../database/Init';
import { CreateCategory, CategoryController } from '../express/controller/CategoryController';
import { FoodController } from './controller/FoodController';
import { IngredientController } from './controller/IngredientController';
import { UserController } from './controller/UserController';
import { UserGateway } from '../database/gateway/UserGateway';
import { CategoryGateway } from '../database/gateway/CategoryGateway';
import { Unauthorization } from './Exception';
import { InvalidParams } from './Exception';
import { AuthenticateService } from '../express/services/AuthenticateService';

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var jwt = require('jsonwebtoken');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res, next) => {
    if (req.session.count) {
        req.session.count++;
        console.log(req.session);
        res.send('you visited this page ' + req.session.count + ' times');
    } else {
        req.session.count = 1;
        res.send('Welcome to this page for the first time');
    }
});


app.get('/api/private', (req, res, next) => {
    if (req.session.username) {  
        res.send('You visited this page');
    } else {
        res.send('you have to register your account');
    }
})



connect().then((msg) => {
    console.log(msg);

    app.listen(4444, () => {
        console.log('Server running at 4444');
    });

    //category
    app.post('/api/categories', CategoryController.create);
    app.put('/api/categories/:categoryId', CategoryController.updateById);
    app.delete('/api/categories/:categoryId', CategoryController.deleleById);
    app.get('/api/categories/getCategory', CategoryController.getCategory);
    app.get('/api/categories/:categoryId', CategoryController.getCategoryById);
    app.get('/api/categories', CategoryController.findAllWithKeyword);

    //food
    app.post('/api/foods', FoodController.create);
    app.put('/api/foods/:foodId', FoodController.updateById);
    app.delete('/api/foods/:foodId', FoodController.deleteById);
    app.get('/api/foods/getFood', FoodController.getFood);
    app.get('/api/foods/:foodId', FoodController.getFoodById);
    app.get('/api/foods', FoodController.findAllWithKeyword);

    //ingredient
    app.post('/api/ingredients', IngredientController.create);
    app.put('/api/ingredients/:ingredientId', IngredientController.updateById);
    app.delete('/api/ingredients/: ingredientId', IngredientController.deleteById);
    app.get('/api/ingredients/getIngredient', IngredientController.getIngredient);
    app.get('/api/ingredients/:ingredientId', IngredientController.getIngredientById);
    app.get('/api/ingredients', IngredientController.findAllWithKeyword);

    //user
    app.post('/api/users', UserController.create);
    app.put('/api/users/:userId', UserController.updateById);
    app.delete('/api/users/:userId', UserController.deleteById);
    app.get('/api/users/getUser', UserController.getUser);
    app.get('/api/users/:userId', UserController.getUserById);
    app.get('/api/users', UserController.findAllWithKeyword);
    app.post('/api/authentication', UserController.authenticate);
    
    
    app.post('/api/ping', (req, res, next) => {
        const token = AuthenticateService.generateToken(req.body);
        res.json(token);
        console.log(token);
    })

    

    app.use((err, req, res, next) => {
        console.log(err.code, err.message);
        res.status(err.code || 500).send(err.message);
    });
})