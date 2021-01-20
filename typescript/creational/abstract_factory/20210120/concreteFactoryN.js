"use strict";
exports.__esModule = true;
exports.ConcreteFactoryN = void 0;
var concreteProductAn_1 = require("./concreteProductAn");
var concreteProductZn_1 = require("./concreteProductZn");
var ConcreteFactoryN = /** @class */ (function () {
    function ConcreteFactoryN() {
    }
    ConcreteFactoryN.prototype.createFamilyA = function () {
        return new concreteProductAn_1.ConcreteProductAn();
    };
    ConcreteFactoryN.prototype.createFamilyZ = function () {
        return new concreteProductZn_1.ConcreteProductZn();
    };
    return ConcreteFactoryN;
}());
exports.ConcreteFactoryN = ConcreteFactoryN;
//# sourceMappingURL=concreteFactoryN.js.map