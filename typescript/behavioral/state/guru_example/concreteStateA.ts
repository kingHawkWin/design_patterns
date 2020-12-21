import {State} from "./state";
import {ConcreteStateB} from "./concreteStateB";

export class ConcreteStateA extends State {
  public handle1(): void {
    console.log('ConcreteStateA handle1, transition to ConcreteStateB')
    this.context.transitionTo(new ConcreteStateB())
  }

  public handle2(): void {
    console.log('ConcreteStateA handle2.')
  }
}
