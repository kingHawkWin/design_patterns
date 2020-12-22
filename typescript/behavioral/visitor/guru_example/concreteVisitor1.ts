import {Visitor} from "./visitor";
import {ConcreteComponentA} from "./concreteComponentA";
import {ConcreteComponentB} from "./concreteComponentB";

export class ConcreteVisitor1 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`ConcreteVisitor1: visitConcreteComponentA ${element.exclusiveMethodOfConcreteComponentA()}.`)
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`ConcreteVisitor2: visitConcreteComponentB ${element.specialMethodOfConcreteComponentB()}.`)
  }
}
