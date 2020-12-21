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
exports.ConcreteStateA = void 0;
var state_1 = require("./state");
var concreteStateB_1 = require("./concreteStateB");
var ConcreteStateA = /** @class */ (function (_super) {
    __extends(ConcreteStateA, _super);
    function ConcreteStateA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateA.prototype.handle1 = function () {
        console.log('ConcreteStateA handle1, transition to ConcreteStateB');
        this.context.transitionTo(new concreteStateB_1.ConcreteStateB());
    };
    ConcreteStateA.prototype.handle2 = function () {
        console.log('ConcreteStateA handle2.');
    };
    return ConcreteStateA;
}(state_1.State));
exports.ConcreteStateA = ConcreteStateA;
//# sourceMappingURL=concreteStateA.js.map