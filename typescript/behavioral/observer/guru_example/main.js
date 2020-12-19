"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concreteSubject_1 = require("./concreteSubject");
const concreteObservera_1 = require("./concreteObservera");
const concreteObserverb_1 = require("./concreteObserverb");
const subject = new concreteSubject_1.ConcreteSubject();
const observerA = new concreteObservera_1.ConcreteObserverA();
const observerB = new concreteObserverb_1.ConcreteObserverB();
subject.attach(observerA);
subject.attach(observerB);
subject.detach(observerA);
subject.attach(observerA);
subject.bloc();
subject.bloc();
subject.bloc();
