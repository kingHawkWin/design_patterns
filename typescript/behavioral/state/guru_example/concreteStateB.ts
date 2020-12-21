import {State} from "./state";
import {ConcreteStateA} from "./concreteStateA";

export class ConcreteStateB extends State {
  public handle1(): void {
    console.log('ConcreteStateB handle1, transition to ConcreteStateA')
    this.context.transitionTo(new ConcreteStateA())
  }

  public handle2(): void {
    console.log('ConcreteStateB handle2.')
  }
}
