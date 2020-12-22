"use strict";
exports.__esModule = true;
exports.ConcreteComponentA = void 0;
var ConcreteComponentA = /** @class */ (function () {
    function ConcreteComponentA() {
    }
    ConcreteComponentA.prototype.accept = function (visitor) {
        visitor.visitConcreteComponentA(this);
    };
    ConcreteComponentA.prototype.exclusiveMethodOfConcreteComponentA = function () {
        return 'ConcreteComponentA: exclusiveMethodOfConcreteComponentA.';
    };
    return ConcreteComponentA;
}());
exports.ConcreteComponentA = ConcreteComponentA;
//# sourceMappingURL=concreteComponentA.js.map