import {ConcreteComponent} from "./concrete_component";
import {ConcreteDecoratorA} from "./concrete_decorator_a";
import {ConcreteDecoratorB} from "./concrete_decorator_b";
import {client} from "./client";

const simple = new ConcreteComponent()
console.log('Client: I\'ve got a simple component:');
client(simple)
console.log()

const decorator1 = new ConcreteDecoratorA(simple)
const decorator2 = new ConcreteDecoratorB(decorator1)
console.log('Client: Now I\'ve got a decorated component:');
client(decorator2)
