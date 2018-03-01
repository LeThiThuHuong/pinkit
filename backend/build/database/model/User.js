'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    age: Number,
    name: {
        firstname: String,
        lastname: String
    },
    gender: String,
    email: String,
    password: String
});

var User = mongoose.model('User', UserSchema);

exports.default = User;