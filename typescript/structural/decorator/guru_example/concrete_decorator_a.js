"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteDecoratorA = void 0;
const decorator_1 = require("./decorator");
class ConcreteDecoratorA extends decorator_1.Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}
exports.ConcreteDecoratorA = ConcreteDecoratorA;
