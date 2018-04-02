"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exception = function (_Error) {
    _inherits(Exception, _Error);

    function Exception(code, msg) {
        _classCallCheck(this, Exception);

        var _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this, msg));

        _this.code = code;
        _this.message = msg;
        return _this;
    }

    _createClass(Exception, [{
        key: "getStatusCode",
        value: function getStatusCode() {
            return this.code;
        }
    }]);

    return Exception;
}(Error);

var Unauthorization = exports.Unauthorization = function (_Exception) {
    _inherits(Unauthorization, _Exception);

    function Unauthorization(msg) {
        _classCallCheck(this, Unauthorization);

        return _possibleConstructorReturn(this, (Unauthorization.__proto__ || Object.getPrototypeOf(Unauthorization)).call(this, 401, msg));
    }

    return Unauthorization;
}(Exception);

var InvalidParams = exports.InvalidParams = function (_Exception2) {
    _inherits(InvalidParams, _Exception2);

    function InvalidParams(msg) {
        _classCallCheck(this, InvalidParams);

        return _possibleConstructorReturn(this, (InvalidParams.__proto__ || Object.getPrototypeOf(InvalidParams)).call(this, 400, msg));
    }

    return InvalidParams;
}(Exception);

var NotFound = exports.NotFound = function (_Exception3) {
    _inherits(NotFound, _Exception3);

    function NotFound(msg) {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, 404, msg));
    }

    return NotFound;
}(Exception);