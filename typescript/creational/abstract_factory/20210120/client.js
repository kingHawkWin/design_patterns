"use strict";
exports.__esModule = true;
exports.Client = void 0;
var concreteFactory1_1 = require("./concreteFactory1");
var concreteFactoryN_1 = require("./concreteFactoryN");
var concreteProductA1_1 = require("./concreteProductA1");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.productFamily1 = function () {
        var factory1 = new concreteFactory1_1.ConcreteFactory1();
        factory1.createFamilyA().gradeA();
        factory1.createFamilyZ().gradeZ();
    };
    Client.prototype.productFamilyN = function () {
        var factoryN = new concreteFactoryN_1.ConcreteFactoryN();
        factoryN.createFamilyA().gradeA();
        factoryN.createFamilyZ().gradeZ();
    };
    Client.prototype.productA = function () {
        this.productGradeA = new concreteProductA1_1.ConcreteProductA1();
        this.productGradeA.gradeA();
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map