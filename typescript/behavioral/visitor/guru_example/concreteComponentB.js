"use strict";
exports.__esModule = true;
exports.ConcreteComponentB = void 0;
var ConcreteComponentB = /** @class */ (function () {
    function ConcreteComponentB() {
    }
    ConcreteComponentB.prototype.accept = function (visitor) {
        visitor.visitConcreteComponentB(this);
    };
    ConcreteComponentB.prototype.specialMethodOfConcreteComponentB = function () {
        return 'ConcreteComponentB: specialMethodOfConcreteComponentB.';
    };
    return ConcreteComponentB;
}());
exports.ConcreteComponentB = ConcreteComponentB;
//# sourceMappingURL=concreteComponentB.js.map