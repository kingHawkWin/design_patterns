"use strict";
exports.__esModule = true;
var component1_1 = require("./component1");
var component2_1 = require("./component2");
var concreteMediator_1 = require("./concreteMediator");
var component1 = new component1_1.Component1();
var component2 = new component2_1.Component2();
new concreteMediator_1.ConcreteMediator(component1, component2);
component1.doA();
component2.doD();
//# sourceMappingURL=main.js.map