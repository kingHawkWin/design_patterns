"use strict";
exports.__esModule = true;
exports.Modern = exports.Victorian = exports.ArtDeco = void 0;
var product_1 = require("./product");
var ArtDeco = /** @class */ (function () {
    function ArtDeco() {
    }
    ArtDeco.prototype.createChair = function () {
        return new product_1.ArtDecoChair();
    };
    ArtDeco.prototype.createTable = function () {
        return new product_1.ArtDecoTable();
    };
    ArtDeco.prototype.createSofa = function () {
        return new product_1.ArtDecoSofa();
    };
    return ArtDeco;
}());
exports.ArtDeco = ArtDeco;
var Victorian = /** @class */ (function () {
    function Victorian() {
    }
    Victorian.prototype.createChair = function () {
        return new product_1.VictorianChair();
    };
    Victorian.prototype.createTable = function () {
        return new product_1.VictorianTable();
    };
    Victorian.prototype.createSofa = function () {
        return new product_1.VictorianSofa();
    };
    return Victorian;
}());
exports.Victorian = Victorian;
var Modern = /** @class */ (function () {
    function Modern() {
    }
    Modern.prototype.createChair = function () {
        return new product_1.ModernChair();
    };
    Modern.prototype.createTable = function () {
        return new product_1.ModernTable();
    };
    Modern.prototype.createSofa = function () {
        return new product_1.ModernSofa();
    };
    return Modern;
}());
exports.Modern = Modern;
//# sourceMappingURL=factory.js.map