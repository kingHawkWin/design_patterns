"use strict";
exports.__esModule = true;
var context_1 = require("./context");
var strategyAdd_1 = require("./strategyAdd");
var strategySub_1 = require("./strategySub");
var strategyMul_1 = require("./strategyMul");
var strategyDiv_1 = require("./strategyDiv");
var context = new context_1.Context(new strategyAdd_1.StrategyAdd());
context.operation(3, 4);
context.setStrategy(new strategySub_1.StrategySub());
context.operation(3, 4);
context.setStrategy(new strategyMul_1.StrategyMul());
context.operation(3, 4);
context.setStrategy(new strategyDiv_1.StrategyDiv());
context.operation(3, 4);
//# sourceMappingURL=main.js.map