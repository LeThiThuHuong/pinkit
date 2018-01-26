import connect from '../database/Init';
import {CreateCategory, CategoryController} from '../express/controller/CategoryController';
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
    app.put('/Category/:CategoryId', CategoryController.updateById);
})
