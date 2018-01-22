'use strict';

var _Init = require('../database/Init');

var _Init2 = _interopRequireDefault(_Init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

(0, _Init2.default)().then(function (res) {
    app.listen(3000, function () {
        console.log('App is running at port 3000');
    });
}).catch(function (err) {
    console.log(err);
});