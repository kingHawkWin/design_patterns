"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverA = void 0;
const concreteSubject_1 = require("./concreteSubject");
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof concreteSubject_1.ConcreteSubject && (subject.state < 3 || subject.state > 5)) {
            console.log('ConcreteObserverA');
        }
    }
}
exports.ConcreteObserverA = ConcreteObserverA;
