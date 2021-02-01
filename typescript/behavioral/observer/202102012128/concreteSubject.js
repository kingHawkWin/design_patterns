"use strict";
exports.__esModule = true;
exports.ConcreteSubject = void 0;
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (o) {
        console.log('attach');
        this.observers.push(o);
    };
    ConcreteSubject.prototype.detach = function (o) {
        console.log('detach');
        var INDEX = this.observers.indexOf(o);
        this.observers.splice(INDEX, 1);
    };
    ConcreteSubject.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (v) {
            v.update(_this);
        });
    };
    return ConcreteSubject;
}());
exports.ConcreteSubject = ConcreteSubject;
//# sourceMappingURL=concreteSubject.js.map