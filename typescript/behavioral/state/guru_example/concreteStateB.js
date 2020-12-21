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
exports.ConcreteStateB = void 0;
var state_1 = require("./state");
var concreteStateA_1 = require("./concreteStateA");
var ConcreteStateB = /** @class */ (function (_super) {
    __extends(ConcreteStateB, _super);
    function ConcreteStateB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateB.prototype.handle1 = function () {
        console.log('ConcreteStateB handle1, transition to ConcreteStateA');
        this.context.transitionTo(new concreteStateA_1.ConcreteStateA());
    };
    ConcreteStateB.prototype.handle2 = function () {
        console.log('ConcreteStateB handle2.');
    };
    return ConcreteStateB;
}(state_1.State));
exports.ConcreteStateB = ConcreteStateB;
//# sourceMappingURL=concreteStateB.js.map