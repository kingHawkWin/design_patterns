import {ConcreteSubject} from "./concreteSubject";
import {ConcreteObserverA} from "./concreteObservera";
import {ConcreteObserverB} from "./concreteObserverb";

const subject = new ConcreteSubject()
const observerA = new ConcreteObserverA()
const observerB = new ConcreteObserverB()

subject.attach(observerA)
subject.attach(observerB)
subject.detach(observerA)
subject.attach(observerA)

subject.bloc()
subject.bloc()
subject.bloc()
