"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concrete_component_1 = require("./concrete_component");
var concrete_decorator_a_1 = require("./concrete_decorator_a");
var concrete_decorator_b_1 = require("./concrete_decorator_b");
var client_1 = require("./client");
var simple = new concrete_component_1.ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
client_1.client(simple);
console.log();
var decorator1 = new concrete_decorator_a_1.ConcreteDecoratorA(simple);
var decorator2 = new concrete_decorator_b_1.ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
client_1.client(decorator2);