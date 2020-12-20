"use strict";
exports.__esModule = true;
exports.ConcreteObserverB = void 0;
var concreteSubject_1 = require("./concreteSubject");
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject instanceof concreteSubject_1.ConcreteSubject && (subject.state === 1 || subject.state === 3)) {
            console.log('ConcreteObserverB');
        }
    };
    return ConcreteObserverB;
}());
exports.ConcreteObserverB = ConcreteObserverB;
//# sourceMappingURL=concreteObserverb.js.map