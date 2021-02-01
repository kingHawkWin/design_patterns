"use strict";
exports.__esModule = true;
var publisher_1 = require("./publisher");
var concreteSubscriber_1 = require("./concreteSubscriber");
var publisher = new publisher_1.Publisher();
var s1 = new concreteSubscriber_1.ConcreteSubscriber();
var s2 = new concreteSubscriber_1.ConcreteSubscriber();
var s3 = new concreteSubscriber_1.ConcreteSubscriber();
var s4 = new concreteSubscriber_1.ConcreteSubscriber();
publisher.subscribe(s1);
publisher.subscribe(s2);
publisher.subscribe(s3);
publisher.subscribe(s4);
publisher.notify();
publisher.unsubscribe(s2);
publisher.unsubscribe(s4);
publisher.notify();
//# sourceMappingURL=main.js.map