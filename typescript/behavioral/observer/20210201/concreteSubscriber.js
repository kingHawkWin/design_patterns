"use strict";
exports.__esModule = true;
exports.ConcreteSubscriber = void 0;
var ConcreteSubscriber = /** @class */ (function () {
    function ConcreteSubscriber() {
        this.n = Math.random();
    }
    ConcreteSubscriber.prototype.update = function (p) {
        console.log(this.n);
    };
    return ConcreteSubscriber;
}());
exports.ConcreteSubscriber = ConcreteSubscriber;
//# sourceMappingURL=concreteSubscriber.js.map