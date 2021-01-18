"use strict";
exports.__esModule = true;
var client_1 = require("./client");
var concreteCreatorA_1 = require("./concreteCreatorA");
var concreteCreatorB_1 = require("./concreteCreatorB");
client_1.client(new concreteCreatorA_1.ConcreteCreatorA());
client_1.client(new concreteCreatorB_1.ConcreteCreatorB());
//# sourceMappingURL=main.js.map