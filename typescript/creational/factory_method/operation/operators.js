"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mod = exports.Div = exports.Mul = exports.Sub = exports.Add = void 0;
var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.operate = function (a, b) {
        console.log(a + b);
        return a + b;
    };
    return Add;
}());
exports.Add = Add;
var Sub = /** @class */ (function () {
    function Sub() {
    }
    Sub.prototype.operate = function (a, b) {
        console.log(a - b);
        return a - b;
    };
    return Sub;
}());
exports.Sub = Sub;
var Mul = /** @class */ (function () {
    function Mul() {
    }
    Mul.prototype.operate = function (a, b) {
        console.log(a * b);
        return a * b;
    };
    return Mul;
}());
exports.Mul = Mul;
var Div = /** @class */ (function () {
    function Div() {
    }
    Div.prototype.operate = function (a, b) {
        console.log(a / b);
        return a / b;
    };
    return Div;
}());
exports.Div = Div;
var Mod = /** @class */ (function () {
    function Mod() {
    }
    Mod.prototype.operate = function (a, b) {
        console.log(a % b);
        return a % b;
    };
    return Mod;
}());
exports.Mod = Mod;
