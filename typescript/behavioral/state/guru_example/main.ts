import {Context} from "./context";
import {ConcreteStateA} from "./concreteStateA";
import {ConcreteStateB} from "./concreteStateB";

const context = new Context(new ConcreteStateA())
context.require1()
console.log()
context.transitionTo(new ConcreteStateB())
context.require2()
