import {Component} from "./component";
import {Visitor} from "./visitor";

export class ConcreteComponentA implements Component {
  public accept(visitor: Visitor) {
    visitor.visitConcreteComponentA(this)
  }

  public exclusiveMethodOfConcreteComponentA(): String {
    return 'ConcreteComponentA: exclusiveMethodOfConcreteComponentA.'
  }
}
