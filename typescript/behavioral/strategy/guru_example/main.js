"use strict";
exports.__esModule = true;
var context_1 = require("./context");
var concreteStrategyA_1 = require("./concreteStrategyA");
var concreteStrategyB_1 = require("./concreteStrategyB");
var context = new context_1.Context(new concreteStrategyA_1.ConcreteStrategyA());
console.log(context.bloc());
console.log();
context.setStrategy(new concreteStrategyB_1.ConcreteStrategyB());
console.log(context.bloc());
//# sourceMappingURL=main.js.map