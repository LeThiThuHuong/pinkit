'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');
var bccrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    id: String,
    username: {
        type: String,
        unique: true
    },
    age: Number,
    name: {
        firstname: String,
        lastname: String
    },
    gender: String,
    email: String,
    password: {
        type: String,
        unique: true
    }
});

var User = mongoose.model('User', UserSchema);

exports.default = User;