import {Context} from "./context";
import {ConcreteStrategyA} from "./concreteStrategyA";
import {ConcreteStrategyB} from "./concreteStrategyB";

const context = new Context(new ConcreteStrategyA())
console.log(context.bloc())

console.log()

context.setStrategy(new ConcreteStrategyB())
console.log(context.bloc())
