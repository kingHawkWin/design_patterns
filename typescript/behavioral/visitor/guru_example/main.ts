import {ConcreteComponentA} from "./concreteComponentA";
import {ConcreteComponentB} from "./concreteComponentB";
import {ConcreteVisitor1} from "./concreteVisitor1";
import {client} from "./client";
import {ConcreteVisitor2} from "./concreteVisitor2";

const components = [
  new ConcreteComponentA(),
  new ConcreteComponentB(),
]

const visitor1 = new ConcreteVisitor1()
client(components, visitor1)

console.log()

const visitor2 = new ConcreteVisitor2()
client(components, visitor2)
