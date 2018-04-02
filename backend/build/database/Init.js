'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');

function connect() {
    return new Promise(function (resolve, reject) {
        var interval = setInterval(function () {
            mongoose.connect(process.env.LOCAL_HOST, function (error) {
                console.log(error);
                if (!error) {
                    clearInterval(interval);
                    resolve('Connected to db');
                } else {
                    console.log('Ping database');
                }
            });
        }, 1000);
    });
}

exports.default = connect;