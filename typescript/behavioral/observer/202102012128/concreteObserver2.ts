import {Observer} from "./observer";
import {Subject} from "./subject";

export class ConcreteObserver2 implements Observer {
  update(s: Subject) {
    console.log('ConcreteObserver2')
  }
}
