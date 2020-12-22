import {Component} from "./component";
import {Visitor} from "./visitor";

export class ConcreteComponentB implements Component {
  public accept(visitor: Visitor) {
    visitor.visitConcreteComponentB(this)
  }

  public specialMethodOfConcreteComponentB(): string {
    return 'ConcreteComponentB: specialMethodOfConcreteComponentB.'
  }
}
