"use strict";
exports.__esModule = true;
exports.ConcreteSubject = void 0;
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        if (!this.observers.includes(observer)) {
            console.log('ConcreteSubject: new observer attached.');
            this.observers.push(observer);
        }
        else {
            console.log('ConcreteSubject: already attached.');
        }
    };
    ConcreteSubject.prototype.detach = function (observer) {
        if (this.observers.includes(observer)) {
            this.observers.splice(this.observers.indexOf(observer), 1);
            console.log('ConcreteSubject: observer detached.');
        }
        else {
            console.log('ConcreteSubject: observer does not exist, so can not detach.');
        }
    };
    ConcreteSubject.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.bloc = function () {
        this.state = Math.round(Math.random() * 12);
        console.log("ConcreteSubject: state is " + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
exports.ConcreteSubject = ConcreteSubject;
//# sourceMappingURL=concreteSubject.js.map