"use strict";
exports.__esModule = true;
exports.ConcreteVisitor1 = void 0;
var ConcreteVisitor1 = /** @class */ (function () {
    function ConcreteVisitor1() {
    }
    ConcreteVisitor1.prototype.visitConcreteComponentA = function (element) {
        console.log("ConcreteVisitor1: visitConcreteComponentA " + element.exclusiveMethodOfConcreteComponentA() + ".");
    };
    ConcreteVisitor1.prototype.visitConcreteComponentB = function (element) {
        console.log("ConcreteVisitor2: visitConcreteComponentB " + element.specialMethodOfConcreteComponentB() + ".");
    };
    return ConcreteVisitor1;
}());
exports.ConcreteVisitor1 = ConcreteVisitor1;
//# sourceMappingURL=concreteVisitor1.js.map