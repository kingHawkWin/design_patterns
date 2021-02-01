import {ConcreteSubject} from "./concreteSubject";
import {ConcreteObserver1} from "./concreteObserver1";
import {ConcreteObserver2} from "./concreteObserver2";

const subject = new ConcreteSubject()
const o1 = new ConcreteObserver1()
const o2 = new ConcreteObserver2()
subject.attach(o1)
subject.attach(o2)
subject.notify()
subject.detach(o2)
subject.notify()
