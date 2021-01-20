"use strict";
exports.__esModule = true;
exports.ConcreteFactory1 = void 0;
var concreteProductA1_1 = require("./concreteProductA1");
var concreteProductZ1_1 = require("./concreteProductZ1");
var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createFamilyA = function () {
        return new concreteProductA1_1.ConcreteProductA1();
    };
    ConcreteFactory1.prototype.createFamilyZ = function () {
        return new concreteProductZ1_1.ConcreteProductZ1();
    };
    return ConcreteFactory1;
}());
exports.ConcreteFactory1 = ConcreteFactory1;
//# sourceMappingURL=concreteFactory1.js.map