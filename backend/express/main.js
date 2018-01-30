import connect from '../database/Init';
import {CreateCategory, CategoryController} from '../express/controller/CategoryController';
import { FoodController } from './controller/FoodController';
import { IngredientController } from './controller/IngredientController';
import { UserAdminController } from './controller/UserAdminController';
import { UserAdminGateway } from '../database/gateway/UserAdminGateway';
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

    app.post('/Category', CategoryController.create);
    app.post('/Food', FoodController.create);
    app.post('/Ingredient', IngredientController.create);
    app.post('/UserAdmin', UserAdminController.create);
    app.put('/Category/:categoryId', CategoryController.updateById);
    app.put('/Food/:foodId', FoodController.updateById);
    app.put('/Ingredient/:ingredientId', IngredientController.updateById);
    app.put('/UserAdmin/:userAdminId', UserAdminController.updateById);
    app.delete('/Category/:categoryId', CategoryController.deleleById);
    app.delete('/Food/:foodId', FoodController.deleteById);
    app.delete('/Ingredient/: ingredientId', IngredientController.deleteById);
    app.delete('/UserAdmin/:userAdminId', UserAdminController.deleteById);
    app.delete('/userAdmin/:userAdminId', UserAdminGateway.deleteById);
})
