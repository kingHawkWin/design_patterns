import {Mediator} from "./mediator";
import {Component1} from "./component1";
import {Component2} from "./component2";

export class ConcreteMediator implements Mediator {
  private component1: Component1
  private component2: Component2

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1
    this.component1.setMediator(this)
    this.component2 = c2
    this.component2.setMediator(this)
  }

  notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('ConcreteMediator: A')
      this.component1.doB()
    }

    if (event === 'D') {
      console.log('ConcreteMediator: B')
      this.component1.doA()
      this.component2.doC()
    }
  }
}
