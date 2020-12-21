"use strict";
exports.__esModule = true;
var context_1 = require("./context");
var concreteStateA_1 = require("./concreteStateA");
var concreteStateB_1 = require("./concreteStateB");
var context = new context_1.Context(new concreteStateA_1.ConcreteStateA());
context.require1();
console.log();
context.transitionTo(new concreteStateB_1.ConcreteStateB());
context.require2();
//# sourceMappingURL=main.js.map