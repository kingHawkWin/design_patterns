import {Observer} from "./observer";
import {Subject} from "./subject";
import {ConcreteSubject} from "./concreteSubject";

export class ConcreteObserverB implements Observer {
  public update(subject: Subject) {
    if (subject instanceof ConcreteSubject && (subject.state === 1 || subject.state === 3)) {
      console.log('ConcreteObserverB')
    }
  }
}
