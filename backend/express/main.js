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

    app.post('/api/Categories', CategoryController.create);
    app.post('/api/Foods', FoodController.create);
    app.post('/api/Ingredients', IngredientController.create);
    app.post('/api/UserAdmins', UserAdminController.create);
    app.put('/api/Categories/:categoryId', CategoryController.updateById);
    app.put('/api/Foods/:foodId', FoodController.updateById);
    app.put('/api/Ingredients/:ingredientId', IngredientController.updateById);
    app.put('/api/UserAdmins/:userAdminId', UserAdminController.updateById);
    app.delete('/api/Categories/:categoryId', CategoryController.deleleById);
    app.delete('/api/Foods/:foodId', FoodController.deleteById);
    app.delete('/api/Ingredients/: ingredientId', IngredientController.deleteById);
    app.delete('/api/UserAdmins/:userAdminId', UserAdminController.deleteById);
    app.delete('/api/UserAdmins/:userAdminId', UserAdminGateway.deleteById);
})
