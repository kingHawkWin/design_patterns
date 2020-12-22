"use strict";
exports.__esModule = true;
exports.ConcreteVisitor2 = void 0;
var ConcreteVisitor2 = /** @class */ (function () {
    function ConcreteVisitor2() {
    }
    ConcreteVisitor2.prototype.visitConcreteComponentA = function (element) {
        console.log("ConcreteVisitor1: visitConcreteComponentA " + element.exclusiveMethodOfConcreteComponentA() + ".");
    };
    ConcreteVisitor2.prototype.visitConcreteComponentB = function (element) {
        console.log("ConcreteVisitor2: visitConcreteComponentB " + element.specialMethodOfConcreteComponentB() + ".");
    };
    return ConcreteVisitor2;
}());
exports.ConcreteVisitor2 = ConcreteVisitor2;
//# sourceMappingURL=concreteVisitor2.js.map