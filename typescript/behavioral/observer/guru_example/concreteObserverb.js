"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverB = void 0;
const concreteSubject_1 = require("./concreteSubject");
class ConcreteObserverB {
    update(subject) {
        if (subject instanceof concreteSubject_1.ConcreteSubject && (subject.state === 1 || subject.state === 3)) {
            console.log('ConcreteObserverB');
        }
    }
}
exports.ConcreteObserverB = ConcreteObserverB;
