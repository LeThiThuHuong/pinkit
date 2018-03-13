import connect from '../database/Init';
import {CreateCategory, CategoryController} from '../express/controller/CategoryController';
import { FoodController } from './controller/FoodController';
import { IngredientController } from './controller/IngredientController';
import { UserController } from './controller/UserController';
import { UserGateway } from '../database/gateway/UserGateway';
import { CategoryGateway } from '../database/gateway/CategoryGateway';
import { Unauthorization } from './Exception';

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
    app.get('api/categories', CategoryController.getCategory);
    app.get('api/categories/:categoryId', CategoryController.getCategoryById);

        //food
    app.post('/api/foods', FoodController.create);
    app.put('/api/foods/:foodId', FoodController.updateById);
    app.delete('/api/foods/:foodId', FoodController.deleteById);
    app.get('api/foods', FoodController.getFood);
    app.get('api/foods/:foodId', FoodController.getFoodById);

        //ingredient
    app.post('/api/ingredients', IngredientController.create);
    app.put('/api/ingredients/:ingredientId', IngredientController.updateById);
    app.delete('/api/ingredients/: ingredientId', IngredientController.deleteById);
    app.get('api/ingredients', IngredientController.getIngredient);
    app.get('api/ingredients/:ingredientId', IngredientController.getIngredientById);

        //user
    app.post('/api/users', UserController.create);
    app.put('/api/users/:userId', UserController.updateById);
    app.delete('/api/users/:userId', UserController.deleteById);
    app.get('api/users', UserController.getUser);
    app.get('api/users/:userId', UserGateway.getUserById);

    app.get('/getError', (req, res) => {
        throw new Unauthorization("Phai la admin moi duoc lam");
    });

    app.use((err, req, res, next) => {
        console.log(err.code, err.message);
        res.status(err.code).send(err.message);

    });
})