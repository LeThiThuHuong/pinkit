'use strict';

var _Init = require('../database/Init');

var _Init2 = _interopRequireDefault(_Init);

var _CategoryController = require('../express/controller/CategoryController');

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

    app.post('/Category', _CategoryController.CategoryController.create);
    app.put('/Category/:CategoryId', _CategoryController.CategoryController.updateById);
});