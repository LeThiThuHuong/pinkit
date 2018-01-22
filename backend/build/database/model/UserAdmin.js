'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');

var UserAdminSchema = new mongoose.Schema({
    id: String,
    userName: String,
    age: Number,
    name: {
        firstname: String,
        lastname: String
    },
    gender: String,
    email: String,
    password: String
});

var UserAdmin = mongoose.model('UserAdmin', UserAdminSchema);

exports.default = UserAdmin;