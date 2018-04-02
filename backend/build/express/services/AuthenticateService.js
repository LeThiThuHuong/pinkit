'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var jwt = require('jsonwebtoken');
var AuthenticateService = exports.AuthenticateService = {
    generateToken: function generateToken(data) {
        var token;
        return token = jwt.sign(data, process.env.KEY_AUTHENTICATE);
    },

    verify: function verify(token) {
        return jwt.verify(token, process.env.KEY_AUTHENTICATE);
    },

    getPayload: function getPayload() {
        var payload;
        return payload = jwt.decode(token);
    }
};