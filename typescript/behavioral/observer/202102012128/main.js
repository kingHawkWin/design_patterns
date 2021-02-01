"use strict";
exports.__esModule = true;
var concreteSubject_1 = require("./concreteSubject");
var concreteObserver1_1 = require("./concreteObserver1");
var concreteObserver2_1 = require("./concreteObserver2");
var subject = new concreteSubject_1.ConcreteSubject();
var o1 = new concreteObserver1_1.ConcreteObserver1();
var o2 = new concreteObserver2_1.ConcreteObserver2();
subject.attach(o1);
subject.attach(o2);
subject.notify();
subject.detach(o2);
subject.notify();
//# sourceMappingURL=main.js.map