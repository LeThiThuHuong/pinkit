import connect from '../database/Init';
import {CreateCategory, CategoryController} from '../express/controller/CategoryController';
import { FoodController } from './controller/FoodController';
import { IngredientController } from './controller/IngredientController';
import { UserController } from './controller/UserController';
import { UserGateway } from '../database/gateway/UserGateway';
import { CategoryGateway } from '../database/gateway/CategoryGateway';
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect().then((msg) => {
    console.log(msg);

    app.listen(4444, () => {
        console.log('Server running at 4444');
    });

        //category
    app.post('/api/categories', CategoryController.create);
    app.put('/api/categories/:categoryId', CategoryController.updateById);
    app.delete('/api/categories/:categoryId', CategoryController.deleleById);

        //food
    app.post('/api/foods', FoodController.create);
    app.put('/api/foods/:foodId', FoodController.updateById);
    app.delete('/api/foods/:foodId', FoodController.deleteById);

        //ingredient
    app.post('/api/ingredients', IngredientController.create);
    app.put('/api/ingredients/:ingredientId', IngredientController.updateById);
    app.delete('/api/ingredients/: ingredientId', IngredientController.deleteById);

        //user
    app.post('/api/user', UserController.create);
    app.put('/api/user/:userId', UserController.updateById);
    app.delete('/api/user/:userId', UserController.deleteById);
    
})
