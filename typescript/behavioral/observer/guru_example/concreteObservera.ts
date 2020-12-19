import {Observer} from "./observer";
import {Subject} from "./subject";
import {ConcreteSubject} from "./concreteSubject";

export class ConcreteObserverA implements Observer {
  public update(subject: Subject) {
    if (subject instanceof ConcreteSubject && (subject.state < 3 || subject.state > 5)) {
      console.log('ConcreteObserverA')
    }
  }
}
