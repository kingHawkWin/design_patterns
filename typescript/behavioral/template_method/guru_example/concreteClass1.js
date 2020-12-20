"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ConcreteClass1 = void 0;
var abstractClass_1 = require("./abstractClass");
var ConcreteClass1 = /** @class */ (function (_super) {
    __extends(ConcreteClass1, _super);
    function ConcreteClass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass1.prototype.requiredOperation1 = function () {
        console.log('ConcreteClass1: requiredOperation.');
    };
    ConcreteClass1.prototype.requiredOperation2 = function () {
        console.log('ConcreteClass2: requiredOperation.');
    };
    return ConcreteClass1;
}(abstractClass_1.AbstractClass));
exports.ConcreteClass1 = ConcreteClass1;
//# sourceMappingURL=concreteClass1.js.map