import {Component1} from "./component1";
import {Component2} from "./component2";
import {ConcreteMediator} from "./concreteMediator";

const component1 = new Component1()
const component2 = new Component2()
new ConcreteMediator(component1, component2)

component1.doA()
component2.doD()
