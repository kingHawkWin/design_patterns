"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSubject = void 0;
class ConcreteSubject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (!this.observers.includes(observer)) {
            console.log('ConcreteSubject: new observer attached.');
            this.observers.push(observer);
        }
        else {
            console.log('ConcreteSubject: already attached.');
        }
    }
    detach(observer) {
        if (this.observers.includes(observer)) {
            this.observers.splice(this.observers.indexOf(observer), 1);
            console.log('ConcreteSubject: observer detached.');
        }
        else {
            console.log('ConcreteSubject: observer does not exist, so can not detach.');
        }
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    bloc() {
        this.state = Math.round(Math.random() * 12);
        console.log(`ConcreteSubject: state is ${this.state}`);
        this.notify();
    }
}
exports.ConcreteSubject = ConcreteSubject;
