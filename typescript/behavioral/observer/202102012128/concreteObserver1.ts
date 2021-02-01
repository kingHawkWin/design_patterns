import {Observer} from "./observer";
import {Subject} from "./subject";

export class ConcreteObserver1 implements Observer {
  update(s: Subject) {
    console.log('ConcreteObserver1')
  }
}
