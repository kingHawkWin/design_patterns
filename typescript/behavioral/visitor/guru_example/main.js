"use strict";
exports.__esModule = true;
var concreteComponentA_1 = require("./concreteComponentA");
var concreteComponentB_1 = require("./concreteComponentB");
var concreteVisitor1_1 = require("./concreteVisitor1");
var client_1 = require("./client");
var concreteVisitor2_1 = require("./concreteVisitor2");
var components = [
    new concreteComponentA_1.ConcreteComponentA(),
    new concreteComponentB_1.ConcreteComponentB(),
];
var visitor1 = new concreteVisitor1_1.ConcreteVisitor1();
client_1.client(components, visitor1);
console.log();
var visitor2 = new concreteVisitor2_1.ConcreteVisitor2();
client_1.client(components, visitor2);
//# sourceMappingURL=main.js.map